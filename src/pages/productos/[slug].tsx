import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/Layout";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import { iconMap } from "../../components/IconMap";
import { ArrowRight, CheckCircle } from "lucide-react";
import productsConfig from "../../data/productsConfig.json";
import landingData from "../../data/landingData.json";

interface Product {
  name: string;
  slug: string;
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  icon: string;
  tags: string[];
  features: { es: string[]; en: string[] };
  pricing: {
    plans: { name: string; price: string; period: string; periodEn: string; highlight?: boolean }[];
  } | null;
  appUrl: string;
  demoUrl: string;
  docsUrl: string;
  active: boolean;
}

interface ProductPageProps {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.values(productsConfig.products).map((p) => ({
    params: { slug: p.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const product = (productsConfig.products as any)[slug];
  
  if (!product) return { notFound: true };
  return { props: { product: product as Product } };
};

function ProductContent({ product }: { product: Product }) {
  const { lang } = useLanguage();
  const Icon = (iconMap as any)[product.icon];
  
  const currentTagline = product.tagline[lang];
  const currentDescription = product.description[lang];
  const currentFeatures = product.features[lang];
  
  const labels = (landingData as any)[lang].productsSection;

  return (
    <section className="pt-20 pb-28 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-20 animate-reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-fusa-indigo/10 border border-fusa-indigo/20 flex items-center justify-center">
              {Icon && <Icon size={24} className="text-fusa-indigo" />}
            </div>
            <span className="text-[10px] font-conthrax tracking-[0.3em] text-white/30 uppercase">
              {lang === 'es' ? 'Producto Fusa Labs' : 'Fusa Labs Product'}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-conthrax text-fusa-white tracking-tight leading-[0.9] mb-6">
            {product.name}
          </h1>
          <p className="text-xl md:text-2xl text-fusa-indigo font-medium mb-8">
            {currentTagline}
          </p>
          <p className="text-white/40 text-sm md:text-base max-w-3xl leading-relaxed mb-10">
            {currentDescription}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-conthrax tracking-[0.15em] text-white/40 uppercase px-4 py-2 border border-white/10 rounded-sm bg-white/[0.02]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {product.active && product.demoUrl ? (
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fusa-indigo text-fusa-white px-10 py-4 rounded-full text-[11px] font-conthrax font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(28,5,142,0.6)] transition-all active:scale-95 flex items-center gap-3"
              >
                {lang === 'es' ? 'Probar demo' : 'Try demo'} <ArrowRight size={14} />
              </a>
            ) : null}
            
            {product.active && product.appUrl ? (
              <a
                href={product.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full text-[11px] font-conthrax font-bold uppercase tracking-widest border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all"
              >
                {lang === 'es' ? 'Ir a la app' : 'Go to app'}
              </a>
            ) : null}

            {!product.active && (
              <span className="px-10 py-4 rounded-full text-[11px] font-conthrax font-bold uppercase tracking-widest border border-white/10 text-white/20">
                {lang === 'es' ? 'Próximamente' : 'Coming Soon'}
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-24 animate-reveal delay-200">
          <h2 className="text-2xl md:text-3xl font-conthrax text-fusa-white tracking-tight mb-12 uppercase">
            {lang === 'es' ? 'Funcionalidades' : 'Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-8 rounded-sm border border-white/5 bg-white/[0.02] hover:border-fusa-indigo/20 transition-all duration-500"
              >
                <CheckCircle
                  size={18}
                  className="text-fusa-indigo mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-white/50 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        {product.pricing && (
          <div className="mb-24 animate-reveal delay-300">
            <h2 className="text-2xl md:text-3xl font-conthrax text-fusa-white tracking-tight mb-12 uppercase">
              {lang === 'es' ? 'Planes' : 'Pricing'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className={`p-10 rounded-sm border transition-all duration-500 ${
                    plan.highlight
                      ? "border-fusa-indigo/40 bg-fusa-indigo/5 shadow-[0_0_30px_rgba(28,5,142,0.1)]"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <h3 className="text-sm font-conthrax text-fusa-white tracking-widest uppercase mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-conthrax text-fusa-white">{plan.price}</span>
                    <span className="text-[10px] font-conthrax text-white/30 tracking-widest uppercase">
                      {lang === 'es' ? plan.period : plan.periodEn}
                    </span>
                  </div>
                  {plan.highlight && (
                    <span className="text-[9px] font-conthrax font-bold tracking-[0.2em] text-fusa-indigo uppercase py-1 px-2 border border-fusa-indigo/20 rounded-sm">
                      {lang === 'es' ? 'Recomendado' : 'Recommended'}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing CTA */}
        <div className="p-12 md:p-20 rounded-sm border border-white/5 bg-white/[0.02] text-center animate-reveal delay-400">
          <h2 className="text-2xl md:text-4xl font-conthrax text-fusa-white tracking-tight mb-6 uppercase">
            {lang === 'es' ? '¿Listo para escalar?' : 'Ready to scale?'}
          </h2>
          <p className="text-white/40 mb-10 max-w-xl mx-auto text-sm md:text-base">
            {lang === 'es' 
              ? 'Contactanos para una asesoría personalizada sobre cómo integrar esta solución en tu empresa.' 
              : 'Contact us for a personalized consultation on how to integrate this solution into your company.'}
          </p>
          <a
            href="/#contacto"
            className="bg-fusa-indigo text-fusa-white px-12 py-5 rounded-full text-[12px] font-conthrax font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(28,5,142,0.8)] transition-all active:scale-95 inline-block"
          >
            {lang === 'es' ? 'Contactar ahora' : 'Contact now'}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <LanguageProvider>
      <Layout>
        <ProductContent product={product} />
      </Layout>
    </LanguageProvider>
  );
}
