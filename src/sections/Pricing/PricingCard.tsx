import { useEffect, useRef, useState } from "react";
import { ChevronDown, Mail, MessageCircle, Check } from "lucide-react";
import type { PricingMode } from "./types";

interface PricingCardProps {
  mode: PricingMode;
  type: "instalacion" | "suscripcion";
}

export const PricingCard = ({ mode, type }: PricingCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Card 1 - Description */}
      <div
        ref={cardRef}
        className={`bg-[#050505] rounded-sm p-8 md:p-10 flex flex-col justify-between border border-white/5 hover:border-fusa-indigo/40 transition-colors duration-500 opacity-0 ${
          isVisible ? "animate-reveal" : ""
        }`}
      >
        <div>
          <h3 className="text-xl md:text-2xl font-conthrax mb-5 text-white leading-tight">
            {mode.card1.title}
          </h3>
          {type === "suscripcion" ? (
            <>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                {mode.card1.description1}
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                {mode.card1.description2}
              </p>
            </>
          ) : (
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              {mode.card1.description}
            </p>
          )}
        </div>
      </div>

      {/* Card 2 - Pricing */}
      <div
        className={`bg-[#050505] rounded-sm p-8 md:p-10 lg:col-span-2 flex flex-col border border-fusa-indigo/30 shadow-[0_0_30px_rgba(28,5,142,0.05)] relative overflow-hidden opacity-0 ${
          isVisible ? "animate-reveal" : ""
        }`}
        style={{ animationDelay: "0.15s" }}
      >
        {type === "suscripcion" && (
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-conthrax mb-3 text-white">
              {mode.card2.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {mode.card2.subtitle}
            </p>
          </div>
        )}

        {/* Price */}
        <div className="mb-8">
          {type === "suscripcion" ? (
            <>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-conthrax text-white">
                  {mode.card2.priceFrom}
                </span>
                <span className="text-3xl md:text-4xl font-conthrax text-white/60">
                  {mode.card2.priceTo}
                </span>
              </div>
              <p className="text-white/60 text-base">{mode.card2.period}</p>
            </>
          ) : (
            <>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-conthrax text-white">
                  {mode.card2.price}
                </span>
              </div>
              <p className="text-white/60 text-base">{mode.card2.period}</p>
            </>
          )}
        </div>

        {/* Features */}
        <div className="space-y-4 mb-10 flex-1">
          {mode.card2.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 group/feature">
              <div className="mt-1 w-5 h-5 rounded-sm bg-fusa-indigo/10 flex items-center justify-center flex-shrink-0 border border-fusa-indigo/30 group-hover/feature:bg-fusa-indigo/20 group-hover/feature:border-fusa-indigo/50 transition-colors">
                <Check size={12} className="text-fusa-indigo" strokeWidth={3} />
              </div>
              <span className="text-white/80 group-hover/feature:text-white transition-colors text-sm md:text-base">{feature}</span>
            </div>
          ))}
        </div>

        {/* Delivery Time & Disclaimer */}
        <div className="border-t border-white/10 pt-6 mb-8 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-white/60 text-sm md:text-base">
              {mode.card2.deliveryLabel}
            </span>
            <span className="text-white text-sm md:text-base font-semibold">
              {mode.card2.deliveryTime}
            </span>
          </div>
          {/* @ts-ignore - Rendering disclaimer safely from JSON data */}
          {(mode.card2 as any).disclaimer && (
            <p className="text-[10px] text-white/40 font-inter leading-relaxed">
              * {(mode.card2 as any).disclaimer}
            </p>
          )}
        </div>

        {/* Interactive CTA Section */}
        <div className="relative z-10 w-full">
          <button 
            onClick={() => setShowContactInfo(!showContactInfo)}
            className="w-full bg-fusa-indigo text-fusa-white py-4 rounded-full font-conthrax text-base hover:bg-fusa-indigo/90 transition-all shadow-[0_0_15px_rgba(28,5,142,0.4)] flex items-center justify-center gap-2"
          >
            <span>{mode.card2.ctaButton}</span>
            <ChevronDown size={18} className={`transition-transform duration-500 ${showContactInfo ? "rotate-180" : ""}`} />
          </button>
          
          <div className={`grid transition-all duration-500 ease-in-out ${showContactInfo ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
            <div className="overflow-hidden">
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="mailto:labsfusa@gmail.com"
                  className={`flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group ${showContactInfo ? "opacity-100 translate-y-0 delay-150" : "opacity-0 -translate-y-2 delay-0"}`}
                >
                  <div className="w-12 h-12 rounded-full bg-fusa-indigo/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-fusa-indigo" />
                  </div>
                  <span className="font-inter text-sm md:text-base font-medium tracking-wide group-hover:translate-x-2 transition-transform duration-300">labsfusa@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/5493518799794?text=Hola%20Fusa%20Labs,%20estoy%20interesado%20en%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group ${showContactInfo ? "opacity-100 translate-y-0 delay-300" : "opacity-0 -translate-y-2 delay-0"}`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(37,211,102,0.2)] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow">
                    <MessageCircle size={20} className="text-[#25D366]" />
                  </div>
                  <span className="font-inter text-sm md:text-base font-medium tracking-wide group-hover:translate-x-2 transition-transform duration-300">+54 9 3518 79-9794</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-32 -bottom-32 w-[400px] h-[400px] bg-fusa-indigo/[0.1] blur-3xl rounded-full z-0 pointer-events-none" />
      </div>
    </>
  );
};
