import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../../components/Layout";
import { LanguageProvider, useLanguage } from "../../../context/LanguageContext";
import labData from "../../../data/lab.json";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ExperimentoEntry } from "../../../components/lab/types";

interface ExperimentoPageProps {
  entry: {
    es: ExperimentoEntry;
    en: ExperimentoEntry;
  };
}

const CATEGORY_LABELS_ES: Record<string, string> = {
  "ia-aplicada": "IA aplicada",
  automatizacion: "Automatización",
  interfaces: "Interfaces",
  sistemas: "Sistemas",
  producto: "Producto",
  operaciones: "Operaciones",
  research: "Research",
};

const CATEGORY_LABELS_EN: Record<string, string> = {
  "ia-aplicada": "Applied AI",
  automatizacion: "Automation",
  interfaces: "Interfaces",
  sistemas: "Systems",
  producto: "Product",
  operaciones: "Operations",
  research: "Research",
};

const STATUS_LABELS_ES: Record<string, string> = {
  exploracion: "En exploración",
  validacion: "En validación",
  pausa: "Pausado",
};

const STATUS_LABELS_EN: Record<string, string> = {
  exploracion: "Exploring",
  validacion: "Validating",
  pausa: "Paused",
};

function formatDate(dateStr: string, lang: "es" | "en"): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", options);
}

function ExperimentoEntryContent({ entry }: ExperimentoPageProps) {
  const { lang } = useLanguage();
  const e = lang === "es" ? entry.es : entry.en;
  const categoryLabels = lang === "es" ? CATEGORY_LABELS_ES : CATEGORY_LABELS_EN;
  const statusLabels = lang === "es" ? STATUS_LABELS_ES : STATUS_LABELS_EN;

  return (
    <div className="min-h-screen pb-20 md:pb-32 pt-8">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        {/* Back link */}
        <Link
          href="/lab/experimentos"
          className="inline-flex items-center gap-2 text-fusa-indigo/60 hover:text-fusa-indigo transition-colors font-conthrax text-[10px] tracking-widest uppercase mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {lang === "es" ? "Volver a Experimentos" : "Back to Experiments"}
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="text-[10px] font-conthrax tracking-widest uppercase text-fusa-indigo border border-fusa-indigo/20 px-3 py-1 bg-fusa-indigo/5">
              {lang === "es" ? "Experimento" : "Experiment"}
            </span>
            <span className="text-[10px] font-conthrax tracking-widest text-white/40 border border-white/10 px-3 py-1">
              {categoryLabels[e.category]}
            </span>
            <span className="text-[10px] font-conthrax tracking-widest uppercase px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400">
              {statusLabels[e.status] || e.status}
            </span>
          </div>

          <h1 className="font-conthrax text-3xl md:text-4xl lg:text-5xl text-fusa-white tracking-tight uppercase mb-6">
            {e.title}
          </h1>

          <p className="text-white/40 leading-relaxed mb-6">
            {e.description}
          </p>

          <div className="flex items-center gap-4 text-[10px] font-conthrax tracking-widest text-white/20 uppercase">
            <span>{formatDate(e.date, lang)}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{lang === "es" ? "Experimento" : "Experiment"}</span>
          </div>
        </header>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {e.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[9px] uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer navigation */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/lab/experimentos"
            className="inline-flex items-center gap-2 text-fusa-indigo/60 hover:text-fusa-indigo transition-colors font-conthrax text-[10px] tracking-widest uppercase"
          >
            <ArrowLeft size={14} />
            {lang === "es" ? "Ver todos los experimentos" : "View all experiments"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ExperimentoEntryPage({ entry }: ExperimentoPageProps) {
  return (
    <LanguageProvider>
      <Layout>
        <ExperimentoEntryContent entry={entry} />
      </Layout>
    </LanguageProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const experimentosEs = labData.es.experimentos;
  const paths = experimentosEs.map((entry) => ({
    params: { slug: entry.id.replace("exp-", "") },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const id = `exp-${slug}`;

  const entryEs = labData.es.experimentos.find((e) => e.id === id);
  const entryEn = labData.en.experimentos.find((e) => e.id === id);

  if (!entryEs || !entryEn) {
    return { notFound: true };
  }

  return {
    props: {
      entry: {
        es: entryEs,
        en: entryEn,
      },
    },
  };
};