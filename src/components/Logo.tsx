export const Logo = () => (
  <div className="flex items-center gap-4 group">
    <svg
      width="44"
      height="44"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-700 group-hover:scale-105 animate-pulse [animation-duration:4s]"
    >
      <defs>
        <linearGradient id="swooshGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1C058E" />
          <stop offset="100%" stopColor="#FDFDFD" />
        </linearGradient>
      </defs>
      {/* Contenedor Hexagonal */}
      <polygon points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" fill="rgba(28, 5, 142, 0.05)" stroke="#1C058E" strokeWidth="2" />
      
      {/* F & L Entrelazadas */}
      <path d="M 38 30 L 58 30 M 38 46 L 50 46 M 38 30 L 38 66" stroke="#FDFDFD" strokeWidth="4" strokeLinecap="square" />
      <path d="M 54 40 L 54 66 L 70 66" stroke="#FDFDFD" strokeWidth="4" strokeLinecap="square" opacity="0.9" />
      
      {/* Curva Dinámica (Escalabilidad) */}
      <path d="M 20 80 Q 50 30 85 20" stroke="url(#swooshGrad)" strokeWidth="3" strokeLinecap="round" fill="none" className="drop-shadow-[0_0_8px_rgba(28,5,142,0.8)]" />
    </svg>
    <div className="flex flex-col justify-center">
      <span className="font-conthrax text-xl leading-none tracking-widest text-fusa-white">FUSA</span>
      <span className="font-conthrax text-[10px] leading-tight tracking-[0.35em] text-fusa-indigo mt-1">
        LABS
      </span>
    </div>
  </div>
);