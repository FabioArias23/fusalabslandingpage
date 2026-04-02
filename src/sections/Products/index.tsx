import { ProductCard } from "../../components/ProductCard";
import productsConfig from "../../data/productsConfig.json";

interface ProductsSectionProps {
  title: string;
  subtitle: string;
  lang: "es" | "en";
}

export const ProductsSection = ({ title, subtitle, lang }: ProductsSectionProps) => {
  const products = Object.values(productsConfig.products);

  return (
    <section id="productos" className="relative py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-12 animate-reveal">
          <p className="text-[10px] uppercase tracking-[0.3em] text-fusa-indigo font-conthrax mb-4">
            (03)
          </p>
          <h2 className="font-conthrax text-2xl md:text-3xl lg:text-4xl text-fusa-white tracking-wide">
            {title}
          </h2>
          <p className="text-sm text-white/40 mt-3 max-w-xl">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, i) => (
            <div key={product.slug} className={`animate-reveal delay-${(i % 3) + 1}`}>
              <ProductCard
                name={product.name}
                slug={product.slug}
                tagline={(product.tagline as any)[lang]}
                description={(product.description as any)[lang]}
                icon={product.icon}
                tags={product.tags}
                demoUrl={product.demoUrl || undefined}
                appUrl={product.appUrl || undefined}
                active={product.active}
                lang={lang}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
