"use client";

import { useLocale } from "@/contexts/locale-context";

interface LocalePageProps {
  children: (data: ReturnType<typeof useLocale>["data"], lang: "es" | "en", isEnglish: boolean) => React.ReactNode;
}

export function LocalePage({ children }: LocalePageProps) {
  const { data, lang, isEnglish } = useLocale();
  return <>{children(data, lang, isEnglish)}</>;
}
