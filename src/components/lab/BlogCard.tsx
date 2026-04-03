import Link from "next/link";
import type { BlogEntry } from "./types";

const CATEGORY_LABELS_ES: Record<string, string> = {
  "ia-aplicada": "IA aplicada",
  automatizacion: "Automatización",
  interfaces: "Interfaces",
  sistemas: "Sistemas",
  producto: "Producto",
  operaciones: "Operaciones",
  research: "Research",
  blog: "Blog",
};

const CATEGORY_LABELS_EN: Record<string, string> = {
  "ia-aplicada": "Applied AI",
  automatizacion: "Automation",
  interfaces: "Interfaces",
  sistemas: "Systems",
  producto: "Product",
  operaciones: "Operations",
  research: "Research",
  blog: "Blog",
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
  entry: BlogEntry;
  lang: "es" | "en";
}

export function BlogCard({ entry, lang }: Props) {
  const categoryLabels = lang === "es" ? CATEGORY_LABELS_ES : CATEGORY_LABELS_EN;
  const truncatedBody =
    entry.body.length > 150 ? entry.body.slice(0, 150) + "..." : entry.body;

  return (
    <Link
      href={`/lab/blog/${entry.id.replace("blog-", "")}`}
      className="group block bg-white/[0.02] border border-white/5 rounded-sm p-8 hover:border-fusa-indigo/20 transition-all duration-500"
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="text-[10px] font-conthrax tracking-widest uppercase text-fusa-indigo border border-fusa-indigo/20 px-3 py-1 bg-fusa-indigo/5">
          {lang === "es" ? "Blog" : "Blog"}
        </span>
        <span className="text-[10px] font-conthrax tracking-widest text-white/30 border border-white/10 px-3 py-1">
          {categoryLabels[entry.category]}
        </span>
      </div>
      
      <h3 className="font-conthrax text-xl text-fusa-white mb-4 uppercase tracking-wider group-hover:text-fusa-indigo transition-colors">
        {entry.title}
      </h3>
      
      <p className="text-white/40 leading-relaxed mb-4">{truncatedBody}</p>
      
      {/* Autor */}
      {entry.autor && (
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fusa-indigo/20 to-fusa-indigo/5 border border-fusa-indigo/30 flex items-center justify-center">
            <span className="font-conthrax text-[10px] text-fusa-indigo">
              {entry.autor.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
          <span className="text-xs text-white/40">
            {entry.autor.name}
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-conthrax tracking-widest text-white/20 uppercase">
          {formatDate(entry.date, lang)}
        </span>
        <span className="text-[10px] font-conthrax tracking-widest text-white/20 uppercase group-hover:text-fusa-indigo transition-colors">
          →
        </span>
      </div>
    </Link>
  );
}