import { useState } from "react";
import { useScrolled, useMousePosition, useAnimation } from "../hooks";
import { Spotlight } from "../components/Spotlight";
import { Navigation } from "../sections/Navigation";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { Methodology } from "../sections/Methodology";
import { Pricing } from "../sections/Pricing";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";
import { WhatsAppFAB } from "../components/WhatsAppFAB";

import landingData from "../data/landingData.json";

export default function Home() {
  const isScrolled = useScrolled();
  const mousePos = useMousePosition();
  const isVisible = useAnimation();
  
  // Multi-language State
  const [lang, setLang] = useState<"es" | "en">("es");
  const toggleLanguage = () => setLang((prev) => (prev === "es" ? "en" : "es"));
  const currentData = landingData[lang];

  return (
    <div className="relative min-h-screen bg-fusa-black text-fusa-white selection:bg-fusa-indigo selection:text-white font-inter antialiased overflow-x-hidden">
      {/* Atmospheric Neural Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 neural-pattern opacity-60" />
      <Spotlight mousePos={mousePos} />
      <Navigation
        isScrolled={isScrolled}
        branding={currentData.branding}
        menuItems={currentData.navigation.menuItems}
        ctaButton={currentData.navigation.ctaButton}
        languageLabel={currentData.navigation.languageLabel}
        toggleLanguage={toggleLanguage}
      />
      <Hero {...currentData.hero} isVisible={isVisible} />
      <Services
        {...currentData.services}
        items={currentData.services.items as any}
      />
      <Methodology {...currentData.methodology} />{" "}
      <Pricing {...currentData.pricing} />
      <div className="bg-fusa-black text-fusa-white">
        <Contact {...currentData.contact} />
      </div>
      <Footer {...currentData.footer} branding={currentData.branding} />
      <WhatsAppFAB />
    </div>
  );
}
