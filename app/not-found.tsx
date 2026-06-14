"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useLocale } from "@/contexts/locale-context";
import "./not-found.css";

const TRANSLATIONS = {
  en: {
    title: "Page not found",
    description:
      "We're sorry, it seems the AI hallucinated this route or the link is broken. Return to base to keep exploring Fusa Labs.",
    button: "Return to base",
  },
  es: {
    title: "Página no encontrada",
    description:
      "Lo sentimos, parece que la IA alucinó esta ruta o el enlace está roto. Vuelve a la base para seguir explorando Fusa Labs.",
    button: "Volver a la base",
  },
};

export default function NotFound() {
  const { isEnglish } = useLocale();
  const t = isEnglish ? TRANSLATIONS.en : TRANSLATIONS.es;

  return (
    <div className="not-found-wrapper flex items-center justify-center relative">
      {/* Dust particles */}
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      {/* Lamp */}
      <div className="lamp__wrap">
        <div className="lamp">
          <div className="lamp-cable"></div>
          <div className="lamp-cover"></div>
          <div className="lamp-in-cover">
            <div className="lamp-bulb"></div>
          </div>
          <div className="lamp-light"></div>
        </div>
      </div>

      {/* Content */}
      <section className="relative z-10 text-center px-6 mt-32 sm:mt-48">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1
            className="font-heading text-5xl sm:text-7xl md:text-9xl tracking-tight drop-shadow-2xl scale-y-110 animate-float-404 !text-[#1C058E]"
          >
            404
          </h1>

          <div className="space-y-4 backdrop-blur-sm bg-background/20 p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl sm:text-3xl font-heading text-foreground">
              {t.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t.description}
            </p>
          </div>

          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full gap-2 px-8 py-6 text-base font-semibold shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 !text-white dark:!text-[#1C058E]"
            >
              <Link href="/">
                <ChevronLeft className="w-5 h-5 !text-white dark:!text-[#1C058E]" />
                <span className="!text-white dark:!text-[#1C058E]">
                  {t.button}
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
