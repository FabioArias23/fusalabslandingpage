import { useState, MouseEvent } from "react";
import { Globe } from "lucide-react";
import { Logo } from "../../components/Logo";
import type { NavigationProps } from "./types";

export const Navigation = ({
  isScrolled,
  branding,
  menuItems,
  ctaButton,
  languageLabel,
  toggleLanguage,
}: any) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const playHoverSound = () => {
    try {
      const audio = new Audio("/sounds/terminal-hover.mp3");
      audio.volume = 0.15; // Volumen bajo para que sea sutil
      audio.play().catch(() => {}); // Evita errores si el navegador bloquea el autoplay
    } catch (error) {}
  };

  const sectionMap: Record<string, string> = {
    Inicio: "#inicio",
    Productos: "#productos",
    Proyectos: "#proyectos",
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[90] transition-all duration-700 ${
        isScrolled
          ? "py-3 bg-fusa-black/80 backdrop-blur-2xl border-b border-fusa-indigo/50 shadow-[0_5px_30px_rgba(28,5,142,0.35)]"
          : "py-8 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="cursor-pointer">
          <Logo />
        </div>

        <div
          className="hidden lg:flex items-center gap-14 text-[10px] font-bold tracking-[0.25em] text-fusa-white/40 uppercase font-conthrax relative px-8 py-4 rounded-sm"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(100px circle at ${mousePos.x}px ${mousePos.y}px, rgba(28, 5, 142, 0.2), transparent 100%)`,
            }}
          />
          {menuItems.map((item) => (
            <a
              key={item}
              href={sectionMap[item] || "#"}
              className="hover:text-fusa-white transition-colors relative group z-10"
              onMouseEnter={playHoverSound}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-fusa-indigo transition-all duration-300 delay-150 group-hover:w-full shadow-[0_0_10px_rgba(28,5,142,0.8)]" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold text-white/30 tracking-widest px-3 py-2 md:px-5 md:py-3 border border-white/10 rounded-full font-conthrax hover:bg-white/5 hover:text-white transition-all cursor-pointer active:scale-95"
          >
            <Globe size={12} className="hidden sm:block" />
            <span>{languageLabel}</span>
          </button>
          <button
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-fusa-indigo text-fusa-white px-5 py-2.5 md:px-8 md:py-3 rounded-full shadow-[0_0_15px_rgba(28,5,142,0.5)] text-[10px] md:text-[12px] font-conthrax font-bold uppercase tracking-widest hover:bg-fusa-indigo hover:shadow-[0_0_25px_rgba(28,5,142,0.8)] hover:scale-105 transition-all active:scale-95 whitespace-nowrap"
          >
            {ctaButton}
          </button>
        </div>
      </div>
    </nav>
  );
};
