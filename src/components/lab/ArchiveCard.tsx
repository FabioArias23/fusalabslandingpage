import Link from "next/link";
import type { ArchivoEntry } from "./types";

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
  entry: ArchivoEntry;
  lang: "es" | "en";
}

export function ArchiveCard({ entry, lang }: Props) {
  const categoryLabels = lang === "es" ? CATEGORY_LABELS_ES : CATEGORY_LABELS_EN;

  return (
    <Link
      href="/lab/archivo"
      className="group block bg-white/[0.03] border border-white/5 rounded-sm p-8 opacity-60 hover:opacity-100 hover:border-fusa-indigo/20 transition-all duration-500"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <span className="text-[10px] font-conthrax tracking-widest uppercase text-white/20 border border-white/10 px-3 py-1">
          Archivado
        </span>
        <span className="text-[10px] font-conthrax tracking-widest uppercase text-white/20 border border-white/10 px-3 py-1">
          {categoryLabels[entry.category]}
        </span>
      </div>
      <h3 className="font-conthrax text-xl text-white/40 mb-4 uppercase tracking-wider line-through group-hover:text-white/60 transition-colors">
        {entry.title}
      </h3>
      <p className="text-white/30 leading-relaxed mb-4">{entry.description}</p>
      <p className="text-[10px] font-conthrax tracking-widest text-white/20 uppercase border border-white/5 px-3 py-2 bg-white/[0.02]">
        {entry.reason}
      </p>
    </Link>
  );
}