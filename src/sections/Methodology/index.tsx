import { Search, CheckCircle } from "lucide-react";
import { MethodStep } from "./MethodStep";
import type { MethodologyProps } from "./types";

export const Methodology = ({
  sectionLabel,
  title,
  description,
  steps,
}: MethodologyProps) => {
  return (
    <section className="py-28 px-6 md:px-12 bg-fusa-black relative z-10 border-y border-fusa-indigo/20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-8 block">
            {sectionLabel}
          </span>
          <h2 className="text-5xl md:text-7xl font-conthrax mb-12 leading-tight">
            {title.split(" ").slice(0, 2).join(" ")} <br />
            {title.split(" ").slice(2).join(" ")}
          </h2>
          <p className="text-white/40 text-xl leading-relaxed mb-10">
            {description}
          </p>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-sm bg-fusa-indigo/5 border border-fusa-indigo/30 flex items-center justify-center animate-pulse text-fusa-indigo shadow-[0_0_15px_rgba(28,5,142,0.15)]">
              <Search size={20} strokeWidth={1.5} />
            </div>
            <div className="w-12 h-12 rounded-sm bg-fusa-indigo/5 border border-fusa-indigo/30 flex items-center justify-center text-fusa-indigo shadow-[0_0_15px_rgba(28,5,142,0.15)]">
              <CheckCircle size={20} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-12">
          {steps.map((step, idx) => (
            <MethodStep
              key={step.num}
              num={step.num}
              title={step.title}
              desc={step.description}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
