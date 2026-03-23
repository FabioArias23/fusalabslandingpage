export const Logo = () => (
  <div className="flex items-center gap-4 group">
    <img
      src="/img/LOGOTIPO1.svg"
      alt="FUSA LABS Logo"
      className="h-11 md:h-12 w-auto transition-transform duration-700 group-hover:scale-105"
    />
    <div className="flex flex-col justify-center">
      <span className="font-conthrax text-xl leading-none tracking-widest text-fusa-white">FUSA</span>
      <span className="font-conthrax text-[10px] leading-tight tracking-[0.35em] text-fusa-indigo mt-1">
        LABS
      </span>
    </div>
  </div>
);