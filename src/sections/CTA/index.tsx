interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export const CTA = ({ title, subtitle, buttonText, buttonLink }: CTAProps) => (
  <section className="relative py-20 md:py-32">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fusa-indigo/5 to-transparent pointer-events-none" />
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center relative z-10 animate-reveal">
      <h2 className="font-conthrax text-2xl md:text-4xl lg:text-5xl text-fusa-white tracking-wide mb-4">
        {title}
      </h2>
      <p className="text-sm md:text-base text-white/40 max-w-xl mx-auto mb-8">
        {subtitle}
      </p>
      <button
        onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
        className="bg-fusa-indigo text-fusa-white px-8 py-3 md:px-12 md:py-4 rounded-full shadow-[0_0_20px_rgba(28,5,142,0.5)] text-[11px] md:text-[13px] font-conthrax font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(28,5,142,0.8)] hover:scale-105 transition-all active:scale-95"
      >
        {buttonText}
      </button>
    </div>
  </section>
);
