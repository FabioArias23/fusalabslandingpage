import { Layout } from "../../components/Layout";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import { LabCardGrid } from "../../components/lab";
import labData from "../../data/lab.json";
import Link from "next/link";

function PrototiposContent() {
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
          <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">02</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            {lang === "es" ? "Prototipos" : "Prototypes"}
          </h1>
        </div>
        <p className="text-white/40 leading-relaxed mb-12 max-w-2xl">
          {lang === "es"
            ? "Versiones funcionales o semiestructuradas de ideas que ya pasaron una primera etapa de exploracion."
            : "Functional or semi-structured versions of ideas that have already passed an initial exploration stage."}
        </p>
        <LabCardGrid entries={data.prototipos} type="prototipo" lang={lang} />
      </section>
    </div>
  );
}

export default function PrototiposPage() {
  return (
    <LanguageProvider>
      <Layout>
        <PrototiposContent />
      </Layout>
    </LanguageProvider>
  );
}
