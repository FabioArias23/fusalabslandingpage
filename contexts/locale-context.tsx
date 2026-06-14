"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import landingData from "@/data/landingData.json";

interface LocaleContextValue {
  lang: "es" | "en";
  data: (typeof landingData)["es"];
  isEnglish: boolean;
  toggleLang: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: "es" | "en";
}) {
  const [lang, setLang] = useState<"es" | "en">(initialLang);
  const [hydrated, setHydrated] = useState(false);

  // Hidrata el idioma desde localStorage (o cookie como fallback) al montar.
  // Necesario con `output: 'export'`, donde el server no puede leer cookies.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem("lang");
    } catch {
      stored = null;
    }

    if (!stored && typeof document !== "undefined") {
      const match = document.cookie.match(/(?:^|;\s*)lang=(es|en)/);
      stored = match?.[1] ?? null;
    }

    if (stored === "en" || stored === "es") {
      setLang(stored);
    }
    setHydrated(true);
  }, []);

  // Persiste el idioma cada vez que cambia (después de la hidratación inicial).
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem("lang", lang);
    } catch {
      /* localStorage no disponible — ignorar */
    }
    document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = lang;
  }, [lang, hydrated]);

  const isEnglish = lang === "en";
  const data = useMemo(() => landingData[lang], [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }, []);

function SeoUpdater({ title, description }: { title: string; description: string }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}

  return (
    <LocaleContext.Provider value={{ lang, data, isEnglish, toggleLang }}>
      <SeoUpdater title={data.seo.title} description={data.seo.description} />
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
