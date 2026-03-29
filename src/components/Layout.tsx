import { ReactNode } from "react";
import { useScrolled, useMousePosition } from "../hooks";
import { Spotlight } from "./Spotlight";
import { Navigation } from "../sections/Navigation";
import { Footer } from "../sections/Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";
import { useLanguage } from "../context/LanguageContext";
import landingData from "../data/landingData.json";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const isScrolled = useScrolled();
  const mousePos = useMousePosition();
  const { lang, toggleLanguage } = useLanguage();
  const currentData = (landingData as any)[lang];

  return (
    <div className="relative min-h-screen bg-fusa-black text-fusa-white selection:bg-fusa-indigo selection:text-white font-inter antialiased overflow-x-hidden">
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
      <main className="pt-32">{children}</main>
      <Footer {...currentData.footer} branding={currentData.branding} />
      <WhatsAppFAB />
    </div>
  );
};
