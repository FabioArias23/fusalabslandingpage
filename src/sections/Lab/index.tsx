import { Lightbulb, ArrowRight } from "lucide-react";
import { Newsletter } from "./Newsletter";
import type { LabProps } from "./types";

export const Lab = ({
  badge,
  title,
  description,
  ctaButton,
  newsletter,
}: LabProps) => {
  return (
    <section
      id="lab"
      className="py-28 px-5 md:px-10 bg-white text-black relative z-10 rounded-t-[4rem]"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
                <Lightbulb size={20} />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] opacity-40">
                {badge}
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.85]">
              {title.split(" ").slice(0, 2).join(" ")} <br />{" "}
              {title.split(" ").slice(2).join(" ")}
            </h2>
            <p className="text-2xl font-medium leading-relaxed mb-12 opacity-70">
              {description}
            </p>
            <button className="flex items-center gap-6 group text-xl font-bold">
              <span>{ctaButton}</span>
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center group-hover:translate-x-3 transition-transform">
                <ArrowRight />
              </div>
            </button>
          </div>

          <Newsletter
            label={newsletter.label}
            placeholder={newsletter.placeholder}
          />
        </div>
      </div>
    </section>
  );
};
