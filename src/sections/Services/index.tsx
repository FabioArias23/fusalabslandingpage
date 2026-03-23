import { ServiceCard } from "./ServiceCard";
import { iconMap } from "../../components/IconMap";
import type { ServicesProps } from "./types";

export const Services = ({
  sectionNumber,
  sectionLabel,
  title,
  subtitle,
  items,
}: ServicesProps) => {
  return (
    <section id="proyectos" className="py-28 px-6 md:px-12 relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-8 block">
              {sectionNumber} {sectionLabel}
            </span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
              {title.split(" ").slice(0, -1).join(" ")} <br />
              {title.split(" ").slice(-1).join(" ")}
            </h2>
          </div>
          <p className="text-white/40 text-xl font-light max-w-sm">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((service, idx) => {
            const IconComponent = iconMap[service.icon];
            return (
              <ServiceCard
                key={service.num}
                num={service.num}
                title={service.title}
                desc={service.description}
                tags={service.tags}
                icon={<IconComponent size={28} strokeWidth={1.5} />}
                index={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
