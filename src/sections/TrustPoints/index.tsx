import { iconMap, IconName } from "../../components/IconMap";

interface TrustPoint {
  icon: string;
  title: string;
  description: string;
}

interface TrustPointsProps {
  trustPoints: TrustPoint[];
}

export const TrustPoints = ({ trustPoints }: TrustPointsProps) => (
  <section className="relative py-16 md:py-24">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {trustPoints.map((point, i) => {
          const IconComponent = iconMap[point.icon as IconName];
          return (
            <div
              key={point.title}
              className={`animate-reveal delay-${(i % 3) + 1} bg-white/[0.02] border border-white/5 rounded-sm p-6 md:p-8 hover:border-fusa-indigo/20 transition-all duration-500`}
            >
              {IconComponent && (
                <div className="w-10 h-10 rounded-sm bg-fusa-indigo/10 border border-fusa-indigo/20 flex items-center justify-center mb-4">
                  <IconComponent size={20} className="text-fusa-indigo" />
                </div>
              )}
              <h3 className="font-conthrax text-xs md:text-sm text-fusa-white tracking-wide mb-2">
                {point.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed">
                {point.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
