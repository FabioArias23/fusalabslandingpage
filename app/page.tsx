"use client";

import { useLocale } from "@/contexts/locale-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview";
import { ContactSection } from "@/components/sections/contact-section";
import { TeamSection } from "@/components/sections/team-section";

export default function HomePage() {
  const { data, isEnglish } = useLocale();

  return (
    <TooltipProvider>
      <main className="flex flex-col">
        <HeroSection data={data} isEnglish={isEnglish} />
        <ServicesPreviewSection data={data} />
        <TeamSection data={data} />
        <ContactSection data={data} />
      </main>
    </TooltipProvider>
  );
}
