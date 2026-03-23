import { useState } from "react";
import { PricingToggle } from "./PricingToggle";
import { PricingCard } from "./PricingCard";
import type { PricingProps } from "./types";

export const Pricing = ({ badge, title, modes }: PricingProps) => {
  const [pricingMode, setPricingMode] = useState("instalacion");

  return (
    <section id="productos" className="py-28 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white px-4 py-1.5 rounded-full flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-sm flex items-center justify-center">
                <div className="w-[1px] h-2 bg-white"></div>
                <div className="w-2 h-[1px] bg-white absolute"></div>
              </div>
              <span className="text-black text-[9px] font-black tracking-[0.3em] uppercase">
                {badge}
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            {title}
          </h2>
        </div>

        {/* Pricing Toggle */}
        <PricingToggle
          pricingMode={pricingMode}
          onModeChange={setPricingMode}
          instalacionLabel={modes.instalacion.label}
          suscripcionLabel={modes.suscripcion.label}
        />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingMode === "suscripcion" ? (
            <PricingCard mode={modes.suscripcion} type="suscripcion" />
          ) : (
            <PricingCard mode={modes.instalacion} type="instalacion" />
          )}
        </div>
      </div>
    </section>
  );
};
