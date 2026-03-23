import { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

interface MatrixToasterProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export const MatrixToaster = ({ message, visible, onClose }: MatrixToasterProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!visible) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    let iteration = 0;
    const maxLen = message.length;
    const ticks = 15; // Velocidad de decodificación

    const interval = setInterval(() => {
      setDisplayText(
        message.split("").map((char, index) => {
          if (char === " " || char === "_") return char;
          if (index < iteration) return message[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iteration >= maxLen) {
        clearInterval(interval);
        setDisplayText(message);
      }
      iteration += maxLen / ticks;
    }, 40);

    const timeout = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [visible, message, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100] animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="bg-fusa-black/90 backdrop-blur-xl border border-fusa-indigo/50 shadow-[0_0_30px_rgba(28,5,142,0.4)] p-4 md:p-5 rounded-sm flex items-center gap-5 w-[320px]">
        <CheckCircle2 className="text-green-500 animate-pulse flex-shrink-0 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" size={24} />
        <div className="flex-1 overflow-hidden">
          <span className="text-[9px] font-inter font-bold uppercase tracking-[0.2em] text-fusa-white/40 block mb-1.5">
            SYSTEM_STATUS: OK
          </span>
          <p className="font-conthrax text-sm text-fusa-white truncate">
            {displayText}
          </p>
        </div>
        <button onClick={onClose} className="text-white/40 hover:text-fusa-indigo transition-colors flex-shrink-0">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};