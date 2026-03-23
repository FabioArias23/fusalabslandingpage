import { Zap, CheckCircle } from "lucide-react";
import type { ContactCard } from "./types";

interface InfoCardProps {
  card: ContactCard;
}

export const InfoCard = ({ card }: InfoCardProps) => {
  const IconComponent = card.icon === "Zap" ? Zap : CheckCircle;

  return (
    <div className="bg-fusa-indigo/[0.02] rounded-sm p-8 space-y-4 border border-fusa-indigo/10 hover:bg-fusa-indigo/[0.05] hover:border-fusa-indigo/30 transition-all duration-500">
      <div className="w-12 h-12 bg-fusa-indigo/10 rounded-sm flex items-center justify-center border border-fusa-indigo/20">
        <IconComponent size={20} strokeWidth={1.5} className="text-fusa-indigo" />
      </div>
      <h4 className="text-2xl font-conthrax tracking-wide">{card.title}</h4>
      <p className="text-white/60 leading-relaxed">{card.description}</p>
    </div>
  );
};
