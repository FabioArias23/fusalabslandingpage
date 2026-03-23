import { ReactNode, useEffect, useRef, useState } from "react";

interface ServiceCardProps {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  icon: ReactNode;
  index: number;
}

export const ServiceCard = ({
  num,
  title,
  desc,
  tags,
  icon,
  index,
}: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
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
    <div
      ref={cardRef}
      className={`group relative p-12 rounded-sm bg-[#080808] border border-white/5 transition-all duration-500 ease-in-out h-[500px] flex flex-col justify-between overflow-hidden hover:border-fusa-indigo hover:shadow-[0_0_40px_rgba(28,5,142,0.1)] hover:-translate-y-2 opacity-0 ${
        isVisible ? "animate-reveal" : ""
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
    
    {/* Glow optimizado con Radial Gradient (sin blur) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(28,5,142,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none z-0" />

    <div className="flex justify-between items-start relative z-10">
      <div className="flex flex-col">
        <span className="text-[10px] font-black text-white/20 group-hover:text-fusa-indigo transition-colors duration-500 uppercase tracking-widest mb-1">
          Service {num}
        </span>
      </div>
      <div className="w-14 h-14 rounded-sm bg-fusa-indigo/10 border border-fusa-indigo/20 flex items-center justify-center text-fusa-indigo group-hover:bg-fusa-indigo group-hover:text-white group-hover:shadow-[0_0_20px_rgba(28,5,142,0.5)] transition-all duration-500 backdrop-blur-md">
        {icon}
      </div>
    </div>

    <div className="relative z-10">
      <h3 className="text-4xl md:text-5xl font-bold mb-8 group-hover:translate-x-2 transition-transform duration-500 ease-in-out leading-tight font-conthrax text-fusa-white">
        {title}
      </h3>
      <p className="text-white/60 text-lg font-inter leading-relaxed max-w-sm transition-colors duration-500">
        {desc}
      </p>
      <div className="flex gap-3 mt-10">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[9px] font-black uppercase tracking-widest bg-[#111111] px-3 py-1 rounded-sm text-white/50 group-hover:text-white group-hover:bg-fusa-indigo/20 transition-all duration-500 border border-white/5 group-hover:border-fusa-indigo/30"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};
