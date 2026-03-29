import { useScrolled, useMousePosition, useAnimation } from "../hooks";
import { useLanguage } from "../context/LanguageContext";
import { Spotlight } from "../components/Spotlight";
import { Navigation } from "../sections/Navigation";
import { Hero } from "../sections/Hero";
import { Metrics } from "../sections/Metrics";
import { Lab } from "../sections/Lab";
import { Services } from "../sections/Services";
import { TrustPoints } from "../sections/TrustPoints";
import { Methodology } from "../sections/Methodology";
import { ProductsSection } from "../sections/Products";
import { Testimonials } from "../sections/Testimonials";
import { CTA } from "../sections/CTA";
import { Pricing } from "../sections/Pricing";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";
import { WhatsAppFAB } from "../components/WhatsAppFAB";

import landingData from "../data/landingData.json";

export default function Home() {
  const isScrolled = useScrolled();
  const mousePos = useMousePosition();
  const isVisible = useAnimation();

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
      <Hero {...currentData.hero} isVisible={isVisible} />
      <Metrics metrics={currentData.metrics} />
      <Services
        {...currentData.services}
        items={currentData.services.items as any}
      />
      <TrustPoints trustPoints={currentData.trustPoints} />
      <Methodology {...currentData.methodology} />
      <ProductsSection
        title={currentData.productsSection.title}
        subtitle={currentData.productsSection.subtitle}
        lang={lang}
      />
      <Testimonials testimonials={currentData.testimonials} />
      <Lab {...currentData.lab} />
      <CTA {...currentData.cta} />
      <Pricing {...currentData.pricing} />
      <div className="bg-fusa-black text-fusa-white">
        <Contact {...currentData.contact} />
      </div>
      <Footer {...currentData.footer} branding={currentData.branding} />
      <WhatsAppFAB />
    </div>
  );
}
