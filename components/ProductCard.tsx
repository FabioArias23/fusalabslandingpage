import Link from "next/link";
import { iconMap, IconName } from "./IconMap";

interface ProductCardProps {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  tags: string[];
  demoUrl?: string;
  appUrl?: string;
  active: boolean;
  lang: "es" | "en";
}

export const ProductCard = ({
  name,
  slug,
  tagline,
  description,
  icon,
  tags,
  demoUrl,
  appUrl,
  active,
  lang,
}: ProductCardProps) => {
  const IconComponent = iconMap[icon as IconName];

  return (
    <div className="group relative bg-foreground/[0.02] border border-foreground/[0.05] rounded-sm p-6 md:p-8 hover:border-primary/30 transition-all duration-500">
      <div className="flex items-start gap-4 mb-4">
        {IconComponent && (
          <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <IconComponent size={20} className="text-primary" />
          </div>
        )}
        <div>
          <h3 className="font-conthrax text-sm md:text-base text-foreground tracking-wide">
            {name}
          </h3>
          <p className="text-xs text-foreground/50 mt-1 leading-relaxed">{tagline}</p>
        </div>
      </div>

      <p className="text-xs text-foreground/40 mb-6 leading-relaxed line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] uppercase tracking-widest text-foreground/30 border border-foreground/10 px-2 py-1 rounded-sm font-conthrax"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-[10px] font-conthrax uppercase tracking-widest">
        {active ? (
          <>
            <Link
              href={`/productos/${slug}`}
              className="text-primary hover:text-foreground transition-colors"
            >
              {lang === "es" ? "Ver más →" : "Learn more →"}
            </Link>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/30 hover:text-foreground transition-colors"
              >
                Demo
              </a>
            )}
            {appUrl && (
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/30 hover:text-foreground transition-colors"
              >
                App
              </a>
            )}
          </>
        ) : (
          <span className="text-foreground/20">
            {lang === "es" ? "Próximamente" : "Coming soon"}
          </span>
        )}
      </div>
    </div>
  );
};
