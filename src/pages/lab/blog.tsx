import { Layout } from "../../components/Layout";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import { LabCardGrid } from "../../components/lab";
import labData from "../../data/lab.json";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Fusa Lab",
  description:
    "Artículos y reflexiones del equipo de Fusa Labs sobre tecnología, producto, crecimiento y el futuro del trabajo.",
  alternates: {
    canonical: "/lab/blog",
  },
  openGraph: {
    title: "Blog | Fusa Lab",
    description:
      "Artículos y reflexiones del equipo de Fusa Labs sobre tecnología, producto, crecimiento y el futuro del trabajo.",
    url: "/lab/blog",
    siteName: "Fusa Labs",
    locale: "es_AR",
    type: "website",
  },
};

function BlogContent() {
  const { lang } = useLanguage();
  const data = lang === "es" ? labData.es : labData.en;

  return (
    <div className="pb-20 md:pb-32">
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/lab" className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 hover:text-white transition-colors">
            &larr; {lang === "es" ? "Volver al Lab" : "Back to Lab"}
          </Link>
        </div>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">05</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Blog</h1>
        </div>
        <p className="text-white/40 leading-relaxed mb-12 max-w-2xl">
          {lang === "es"
            ? "Artículos, reflexiones y aprendizajes del equipo. Cada artículo está escrito por un miembro de Fusa Labs y refleja su perspectiva única sobre tecnología, producto y negocio."
            : "Articles, reflections and learnings from the team. Each article is written by a Fusa Labs member and reflects their unique perspective on technology, product and business."}
        </p>
        <LabCardGrid entries={data.blog} type="blog" lang={lang} />
      </section>
    </div>
  );
}

export default function BlogPage() {
  return (
    <LanguageProvider>
      <Layout>
        <BlogContent />
      </Layout>
    </LanguageProvider>
  );
}