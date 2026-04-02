import Link from "next/link";
import type { ExperimentoEntry } from "./types";

const STATUS_LABELS: Record<ExperimentoEntry["status"], string> = {
  exploracion: "ExploraciÃ³n",
  validacion: "ValidaciÃ³n",
  pausa: "Pausado",
};

const CATEGORY_LABELS_ES: Record<string, string> = {
  "ia-aplicada": "IA aplicada",
  automatizacion: "AutomatizaciÃ³n",
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

interface Props {
  entry: ExperimentoEntry;
  lang: "es" | "en";
}

export function ExperimentCard({ entry, lang }: Props) {
  const categoryLabels = lang === "es" ? CATEGORY_LABELS_ES : CATEGORY_LABELS_EN;
  const truncatedDesc =
    entry.description.length > 120
      ? entry.description.slice(0, 120) + "â€¦"
      : entry.description;

  return (
    <Link
      href="/lab/experimentos"
      className="group block bg-white/[0.02] border border-white/5 rounded-sm p-8 hover:border-fusa-indigo/20 transition-all duration-500"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <span className="text-[10px] font-conthrax tracking-widest uppercase text-fusa-indigo border border-fusa-indigo/20 px-3 py-1 bg-fusa-indigo/5">
          {STATUS_LABELS[entry.status]}
        </span>
        <span className="text-[10px] font-conthrax tracking-widest uppercase text-white/30 border border-white/10 px-3 py-1">
          {categoryLabels[entry.category]}
        </span>
      </div>
      <h3 className="font-conthrax text-xl text-fusa-white mb-4 uppercase tracking-wider group-hover:text-fusa-indigo transition-colors">
        {entry.title}
      </h3>
      <p className="text-white/40 leading-relaxed mb-6">{truncatedDesc}</p>
      <div className="flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-conthrax tracking-widest text-white/20 uppercase border border-white/5 px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}