import { Layout } from "../../components/Layout";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import { LabCardGrid } from "../../components/lab";
import labData from "../../data/lab.json";
import Link from "next/link";

function JournalContent() {
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
          <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">04</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Journal</h1>
        </div>
        <p className="text-white/40 leading-relaxed mb-12 max-w-2xl">
          {lang === "es"
            ? "El Journal documenta avances, experimentos y lineas de pensamiento que nacen dentro del Lab. No muestra solo resultados finales: muestra procesos, iteraciones y criterios de exploracion."
            : "The Journal documents advances, experiments and lines of thought born within the Lab. It does not just show final results: it shows processes, iterations and exploration criteria."}
        </p>
        <LabCardGrid entries={data.journal} type="journal" lang={lang} />
      </section>
    </div>
  );
}

export default function JournalPage() {
  return (
    <LanguageProvider>
      <Layout>
        <JournalContent />
      </Layout>
    </LanguageProvider>
  );
}
