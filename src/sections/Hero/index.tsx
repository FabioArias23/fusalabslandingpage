import { HeroAsset } from "./HeroAsset";
import type { HeroProps } from "./types";

export const Hero = ({
  tags,
  title,
  subtitle,
  description,
  highlightedText,
  videoUrl,
  isVisible,
}: HeroProps) => {

  return (
    <section id="inicio" className="relative pt-36 lg:pt-48 px-6 md:px-12 z-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div
              className={`flex flex-wrap gap-x-5 gap-y-2 mb-8 opacity-0 ${
                isVisible ? "animate-reveal" : ""
              }`}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 border-l border-white/10 pl-3"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className={`font-conthrax text-[clamp(2.5rem,10vw,8rem)] leading-[1.1] mb-10 opacity-0 ${
                isVisible ? "animate-reveal delay-1" : ""
              }`}
            >
            {title} <br />
            <span className="bg-gradient-to-r from-fusa-indigo to-blue-500 text-transparent bg-clip-text not-italic">{subtitle}</span>
            </h1>
          </div>

          <div
            className={`lg:col-span-4 pb-10 opacity-0 ${
              isVisible ? "animate-reveal delay-2" : ""
            }`}
          >
            <div className="flex flex-col gap-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/60 border-l-2 border-fusa-indigo pl-6">
                {description.split(highlightedText)[0]}
                <span className="text-white font-medium">
                  {highlightedText}
                </span>
                {description.split(highlightedText)[1]}
              </p>
              <div className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">
                © 2026 FUSA LABS SYSTEMS
              </div>
            </div>
          </div>
        </div>

        <HeroAsset videoUrl={videoUrl} isVisible={isVisible} />
      </div>
    </section>
  );
};
