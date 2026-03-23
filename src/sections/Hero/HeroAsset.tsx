import { useState, useEffect, useRef } from "react";
import { ArrowRight, Activity } from "lucide-react";

interface HeroAssetProps {
  videoUrl: string;
  isVisible: boolean;
}

const DecodingMonitor = () => {
  const phrases = [
    "AGENT_NEURAL_CORE",
    "NEURAL_BRIDGE_ACTIVE",
    "SCALING_NET"
  ];
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState(phrases[0]);

  // Rotación de frases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
    }, 4500); // Mantiene la frase unos segundos antes de rotar
    return () => clearInterval(interval);
  }, []);

  // Efecto de decodificación (Matrix Glitch)
  useEffect(() => {
    const targetPhrase = phrases[currentPhraseIdx];
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iteration = 0;
    const maxLen = targetPhrase.length;

    const interval = setInterval(() => {
      setDisplayText(
        targetPhrase.split("").map((char, index) => {
          if (char === " " || char === "_") return char;
          if (index < iteration) return targetPhrase[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iteration >= maxLen) {
        clearInterval(interval);
        setDisplayText(targetPhrase);
      }
      iteration += 1 / 2;
    }, 40);

    return () => clearInterval(interval);
  }, [currentPhraseIdx]);

  return (
    <div className="bg-fusa-white text-fusa-black p-4 md:p-5 rounded-full flex items-center gap-4 md:gap-6 w-full max-w-[360px] md:max-w-[440px] shadow-[0_15px_40px_rgba(28,5,142,0.15)] animate-float border border-fusa-indigo/10">
      {/* Left Icon */}
      <div className="w-12 h-12 md:w-14 md:h-14 bg-fusa-indigo/10 rounded-full flex items-center justify-center flex-shrink-0 relative">
        <div className="absolute inset-0 border border-fusa-indigo/30 rounded-full animate-ping opacity-50 [animation-duration:2s]" />
        <Activity size={24} className="text-fusa-indigo animate-pulse" strokeWidth={1.5} />
      </div>
      
      {/* Texts */}
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
          <span className="text-[9px] font-inter font-bold uppercase tracking-[0.2em] text-fusa-black/40">
            SYSTEM_STATUS: ACTIVE
          </span>
        </div>
        <div className="text-xs md:text-[15px] font-conthrax text-fusa-black tracking-tight truncate">
          {displayText}
        </div>
      </div>
      
      {/* Right Button */}
      <div
        onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
        className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-fusa-black rounded-full flex items-center justify-center group transition-all duration-300 hover:bg-fusa-indigo hover:scale-105 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(28,5,142,0.4)]"
      >
        <ArrowRight size={20} className="text-fusa-white group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};

const MatrixRain = ({ mode }: { mode: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef(mode);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/\\|{};:";

    const initParticles = (w: number, h: number) => {
      // Hidden Buffer Canvas para mapear el logo
      const hCanvas = document.createElement("canvas");
      hCanvas.width = w;
      hCanvas.height = h;
      const hCtx = hCanvas.getContext("2d");
      if (!hCtx) return [];

      const scale = Math.min(w, h) / 160;
      const offsetX = w / 2 - 50 * scale;
      const offsetY = h / 2 - 50 * scale;

      hCtx.save();
      hCtx.translate(offsetX, offsetY);
      hCtx.scale(scale, scale);

      hCtx.lineWidth = 4;
      hCtx.strokeStyle = "#fff";
      hCtx.lineCap = "square";
      hCtx.lineJoin = "miter";

      // Dibujo Vectorial Exacto del Logo Hexagonal FUSA
      hCtx.beginPath();
      hCtx.moveTo(50, 5); hCtx.lineTo(89, 27.5); hCtx.lineTo(89, 72.5);
      hCtx.lineTo(50, 95); hCtx.lineTo(11, 72.5); hCtx.lineTo(11, 27.5); hCtx.closePath();
      hCtx.stroke();

      // Letras F & L Entrelazadas
      hCtx.beginPath();
      hCtx.moveTo(38, 30); hCtx.lineTo(58, 30);
      hCtx.moveTo(38, 46); hCtx.lineTo(50, 46);
      hCtx.moveTo(38, 30); hCtx.lineTo(38, 66);
      hCtx.stroke();

      hCtx.beginPath();
      hCtx.moveTo(54, 40); hCtx.lineTo(54, 66); hCtx.lineTo(70, 66);
      hCtx.stroke();

      // Curva Dinámica (Swoosh)
      hCtx.lineWidth = 3;
      hCtx.lineCap = "round";
      hCtx.beginPath();
      hCtx.moveTo(20, 80);
      hCtx.quadraticCurveTo(50, 30, 85, 20);
      hCtx.stroke();
      hCtx.restore();

      // Extracción de datos de pixeles (Hitbox de coordenadas)
      const imgData = hCtx.getImageData(0, 0, w, h).data;
      const points = [];
      for (let y = 0; y < h; y += 3) {
        for (let x = 0; x < w; x += 3) {
          const alpha = imgData[(y * w + x) * 4 + 3];
          if (alpha > 128) {
            points.push({ x, y });
          }
        }
      }

      // Creación del pool de partículas interactivo
      return points.map((pt) => ({
        x: Math.random() * w,
        y: Math.random() * h - h, // Empiezan arriba
        vx: 0,
        vy: Math.random() * 2 + 1,
        targetX: pt.x,
        targetY: pt.y,
        speed: Math.random() * 2.5 + 1.5,
        char: letters[Math.floor(Math.random() * letters.length)],
        color: Math.random() > 0.90 ? "#4B28F8" : "#1C058E", // Indigo vibrante vs oscuro
      }));
    };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = initParticles(canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      const currentMode = modeRef.current;

      // Estela de movimiento fluida
      ctx.fillStyle = currentMode === 2 ? "rgba(5, 5, 5, 0.25)" : "rgba(5, 5, 5, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold 10px monospace";
      
      const friction = 0.85;
      const spring = 0.06;

      particles.forEach((p) => {
        if (currentMode === 1 || currentMode === 0) {
          // Lluvia / Desintegración
          p.vx *= 0.95;
          p.vy += 0.5; // Gravedad hacia abajo
          if (p.vy > p.speed) p.vy = p.speed;

          p.x += p.vx;
          p.y += p.vy;

          if (p.y > canvas.height) {
            p.y = Math.random() * -100;
            p.x = Math.random() * canvas.width;
            p.vx = 0;
            p.vy = p.speed;
          }
        } else if (currentMode === 2) {
          // Formación del Isotipo (Atracción)
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.vx += dx * spring;
          p.vy += dy * spring;
          p.vx *= friction;
          p.vy *= friction;
          p.x += p.vx;
          p.y += p.vy;
        }

        // Glitch aleatorio de caracteres
        if (Math.random() > 0.96) {
          p.char = letters[Math.floor(Math.random() * letters.length)];
        }

        ctx.fillStyle = p.color;
        ctx.fillText(p.char, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
};

export const HeroAsset = ({ videoUrl, isVisible }: HeroAssetProps) => {
  const [displayMode, setDisplayMode] = useState<0 | 1 | 2>(0); // 0: Video, 1: Rain, 2: Logo Genesis

  return (
    <div className={`opacity-0 ${isVisible ? "animate-reveal delay-3" : ""}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="w-full md:w-auto">
          <DecodingMonitor />
        </div>

        <div className="relative group w-full max-w-[500px] lg:max-w-none lg:w-[500px] mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-fusa-indigo/20 blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
          <div className={`relative aspect-video bg-fusa-black rounded-sm border overflow-hidden transition-all duration-700 hover:scale-[1.01] animate-float [animation-delay:1.5s] ${
            displayMode === 2 
              ? "border-fusa-indigo shadow-[0_0_60px_rgba(75,40,248,0.3)]" 
              : "border-fusa-indigo/20 shadow-[0_0_40px_rgba(28,5,142,0.2)]"
          }`}>
            
            {/* Base Video */}
            <video
              className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 z-0 ${
                displayMode > 0 ? "opacity-0 scale-110" : "opacity-50 group-hover:grayscale-0 group-hover:opacity-100 scale-100"
              }`}
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
            />
            
            {/* Matrix & Particle Genesis */}
            <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              displayMode > 0 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}>
              <MatrixRain mode={displayMode} />
            </div>

            {/* Overlay de Pantalla de Monitoreo (CRT & Scan-line) */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 overflow-hidden">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.4)_2px,rgba(0,0,0,0.4)_4px)] mix-blend-overlay" />
              <div className="absolute left-0 right-0 h-[2px] bg-fusa-indigo shadow-[0_0_20px_rgba(28,5,142,0.8)] animate-[scan-vertical_3s_linear_infinite]" />
            </div>

            {/* Matrix Toggle Button */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
              <button
                onClick={() => setDisplayMode((prev) => (prev + 1) % 3 as 0 | 1 | 2)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-xl flex items-center justify-center border transition-all duration-500 hover:scale-105 cursor-pointer ${
                  displayMode === 2
                    ? "bg-white text-fusa-black border-white shadow-[0_0_30px_rgba(253,253,253,0.8)]"
                    : displayMode === 1
                    ? "bg-fusa-indigo border-fusa-indigo shadow-[0_0_20px_rgba(28,5,142,0.8)] text-white"
                    : "bg-white/10 border-white/20 hover:bg-white/20 text-white"
                }`}
                title="Toggle Matrix Mode"
              >
                <ArrowRight 
                  size={18} 
                  strokeWidth={displayMode > 0 ? 3 : 2} 
                  className={`transition-transform duration-500 ${
                    displayMode === 1 ? "rotate-90" : 
                    displayMode === 2 ? "rotate-180" : ""
                  }`} 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
