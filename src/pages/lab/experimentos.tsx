import { Layout } from "../../components/Layout";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import { LabCardGrid } from "../../components/lab";
import labData from "../../data/lab.json";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experimentos | Fusa Lab",
  description:
    "Pruebas tempranas para entender si una idea merece avanzar. Pruebas de concepto, hipótesis de interacción y ensayos sobre nuevas direcciones.",
  alternates: {
    canonical: "/lab/experimentos",
  },
  openGraph: {
    title: "Experimentos | Fusa Lab",
    description:
      "Pruebas tempranas para entender si una idea merece avanzar. Pruebas de concepto, hipótesis de interacción y ensayos sobre nuevas direcciones.",
    url: "/lab/experimentos",
    siteName: "Fusa Labs",
    locale: "es_AR",
    type: "website",
  },
};

function ExperimentosContent() {
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
          <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">01</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            {lang === "es" ? "Experimentos" : "Experiments"}
          </h1>
        </div>
        <p className="text-white/40 leading-relaxed mb-12 max-w-2xl">
          {lang === "es"
            ? "Pruebas tempranas para entender si una idea merece avanzar. Acá entran pruebas de concepto, hipotesis de interaccion y ensayos sobre nuevas direcciones."
            : "Early tests to understand if an idea deserves to move forward. Here go proof-of-concept tests, interaction hypotheses, and essays on new directions."}
        </p>
        <LabCardGrid entries={data.experimentos} type="experimento" lang={lang} />
      </section>
    </div>
  );
}

export default function ExperimentosPage() {
  return (
    <LanguageProvider>
      <Layout>
        <ExperimentosContent />
      </Layout>
    </LanguageProvider>
  );
}
