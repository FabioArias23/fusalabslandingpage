"use client";

import { useLocale } from "@/contexts/locale-context";
import { ServicesPreviewSection } from "@/components/sections/services-preview";
import { ContactSection } from "@/components/sections/contact-section";

export default function ServiciosPage() {
  const { data, isEnglish } = useLocale();

  return (
    <main className="min-h-screen py-8 sm:py-12 md:py-16">
      <div className="max-w-[1800px] px-6 lg:pl-32 lg:pr-24 mb-8 sm:mb-12">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl tracking-tight mb-4">
          {data.services.title}
        </h1>
        <p className="text-base sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          {data.services.subtitle}
        </p>
      </div>

      {/* Renderizamos el componente modular que ya tiene el diseño de carruseles */}
      <ServicesPreviewSection data={data} />

      {/* Agregamos una llamada a la acción opcional */}
      <div className="mt-8 sm:mt-12">
        <ContactSection data={data} isEnglish={isEnglish} />
      </div>
    </main>
  );
}
