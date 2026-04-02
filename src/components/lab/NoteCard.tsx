import Link from "next/link";
import type { NotaEntry } from "./types";

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

function formatDate(dateStr: string, lang: "es" | "en"): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", options);
}

interface Props {
  entry: NotaEntry;
  lang: "es" | "en";
}

export function NoteCard({ entry, lang }: Props) {
  const categoryLabels = lang === "es" ? CATEGORY_LABELS_ES : CATEGORY_LABELS_EN;

  return (
    <Link
      href="/lab/notas"
      className="group block bg-white/[0.02] border border-white/5 rounded-sm p-8 hover:border-fusa-indigo/20 transition-all duration-500"
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="text-[10px] font-conthrax tracking-widest uppercase text-white/30 border border-white/10 px-3 py-1">
          {categoryLabels[entry.category]}
        </span>
        <span className="text-[10px] font-conthrax tracking-widest text-white/20">
          {formatDate(entry.date, lang)}
        </span>
      </div>
      <h3 className="font-conthrax text-xl text-fusa-white mb-4 uppercase tracking-wider group-hover:text-fusa-indigo transition-colors">
        {entry.title}
      </h3>
      <p className="text-white/40 leading-relaxed mb-4 italic">
        &ldquo;{entry.excerpt}&rdquo;
      </p>
      <p className="text-[10px] font-conthrax tracking-widest text-white/20 uppercase">
        Nota
      </p>
    </Link>
  );
}