"use client";

import { useLocale } from "@/contexts/locale-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview";
import { ContactSection } from "@/components/sections/contact-section";
import { TeamSection } from "@/components/sections/team-section";

const revealAnimation = {
  initial: { opacity: 0, scale: 0.98, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.6, ease: "easeOut" }
} as const;

export default function HomePage() {
  const { data, isEnglish } = useLocale();

  return (
    <TooltipProvider>
      <main className="flex flex-col">
        <HeroSection data={data} isEnglish={isEnglish} />
        <ServicesPreviewSection data={data} />
        <TeamSection data={data} />
        <ContactSection data={data} isEnglish={isEnglish} />
      </main>
    </TooltipProvider>
  );
}
