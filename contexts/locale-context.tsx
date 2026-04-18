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

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = lang;
  }, [lang]);

  const isEnglish = lang === "en";
  const data = useMemo(() => landingData[lang], [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  return (
    <LocaleContext.Provider value={{ lang, data, isEnglish, toggleLang }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
