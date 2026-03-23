interface PricingToggleProps {
  pricingMode: string;
  onModeChange: (mode: string) => void;
  instalacionLabel: string;
  suscripcionLabel: string;
}

export const PricingToggle = ({
  pricingMode,
  onModeChange,
  instalacionLabel,
  suscripcionLabel,
}: PricingToggleProps) => (
  <div className="flex justify-start mb-10">
    <div className="inline-flex bg-white/[0.04] rounded-full p-1.5">
      <button
        onClick={() => onModeChange("instalacion")}
        className={`px-8 py-3 rounded-full font-semibold text-sm transition-all flex-1 whitespace-nowrap ${
          pricingMode === "instalacion"
            ? "bg-white text-black"
            : "text-white hover:bg-white/5"
        }`}
      >
        {instalacionLabel}
      </button>
      <button
        onClick={() => onModeChange("suscripcion")}
        className={`px-8 py-3 rounded-full font-semibold text-sm transition-all flex-1 whitespace-nowrap ${
          pricingMode === "suscripcion"
            ? "bg-white text-black"
            : "text-white hover:bg-white/5"
        }`}
      >
        {suscripcionLabel}
      </button>
    </div>
  </div>
);
