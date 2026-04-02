import { Layout } from "../../components/Layout";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import { LabCardGrid } from "../../components/lab";
import labData from "../../data/lab.json";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notas | Fusa Lab",
  description:
    "Textos cortos, observaciones, decisiones de diseño, aprendizajes técnicos y apuntes de investigación.",
  alternates: {
    canonical: "/lab/notas",
  },
  openGraph: {
    title: "Notas | Fusa Lab",
    description:
      "Textos cortos, observaciones, decisiones de diseño, aprendizajes técnicos y apuntes de investigación.",
    url: "/lab/notas",
    siteName: "Fusa Labs",
    locale: "es_AR",
    type: "website",
  },
};

function NotasContent() {
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
          <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">03</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            {lang === "es" ? "Notas" : "Notes"}
          </h1>
        </div>
        <p className="text-white/40 leading-relaxed mb-12 max-w-2xl">
          {lang === "es"
            ? "Textos cortos, observaciones, decisiones de diseno, aprendizajes tecnicos o apuntes de investigacion."
            : "Short texts, observations, design decisions, technical learnings or research notes."}
        </p>
        <LabCardGrid entries={data.notas} type="nota" lang={lang} />
      </section>
    </div>
  );
}

export default function NotasPage() {
  return (
    <LanguageProvider>
      <Layout>
        <NotasContent />
      </Layout>
    </LanguageProvider>
  );
}
