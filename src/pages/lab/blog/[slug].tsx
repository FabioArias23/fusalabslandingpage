import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../../components/Layout";
import { LanguageProvider, useLanguage } from "../../../context/LanguageContext";
import labData from "../../../data/lab.json";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { BlogEntry } from "../../../components/lab/types";

interface BlogPageProps {
  entry: {
    es: BlogEntry;
    en: BlogEntry;
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
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", options);
}

function BlogEntryContent({ entry }: BlogPageProps) {
  const { lang } = useLanguage();
  const e = lang === "es" ? entry.es : entry.en;
  const categoryLabels = lang === "es" ? CATEGORY_LABELS_ES : CATEGORY_LABELS_EN;

  return (
    <div className="min-h-screen pb-20 md:pb-32 pt-8">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        {/* Back link */}
        <Link
          href="/lab/blog"
          className="inline-flex items-center gap-2 text-fusa-indigo/60 hover:text-fusa-indigo transition-colors font-conthrax text-[10px] tracking-widest uppercase mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {lang === "es" ? "Volver al Blog" : "Back to Blog"}
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="text-[10px] font-conthrax tracking-widest uppercase text-fusa-indigo border border-fusa-indigo/20 px-3 py-1 bg-fusa-indigo/5">
              {lang === "es" ? "Blog" : "Blog"}
            </span>
            <span className="text-[10px] font-conthrax tracking-widest text-white/40 border border-white/10 px-3 py-1">
              {categoryLabels[e.category]}
            </span>
          </div>

          <h1 className="font-conthrax text-3xl md:text-4xl lg:text-5xl text-fusa-white tracking-tight uppercase mb-6">
            {e.title}
          </h1>

          <p className="text-white/40 leading-relaxed mb-8">
            {e.description}
          </p>

          {/* Autor */}
          <Link 
            href={`/equipo/${e.autor.slug}`}
            className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-fusa-indigo/20 transition-all group mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fusa-indigo/20 to-fusa-indigo/5 border border-fusa-indigo/30 flex items-center justify-center overflow-hidden">
              <span className="font-conthrax text-sm text-fusa-indigo">
                {e.autor.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div>
              <p className="text-sm font-conthrax text-fusa-white uppercase tracking-wider group-hover:text-fusa-indigo transition-colors">
                {e.autor.name}
              </p>
              <p className="text-xs text-white/40">
                {e.autor.role}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-[10px] font-conthrax tracking-widest text-white/20 uppercase">
            <span>{formatDate(e.date, lang)}</span>
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

        {/* Body */}
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed whitespace-pre-line">
            {e.body}
          </p>
        </article>

        {/* Footer navigation */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/lab/blog"
            className="inline-flex items-center gap-2 text-fusa-indigo/60 hover:text-fusa-indigo transition-colors font-conthrax text-[10px] tracking-widest uppercase"
          >
            <ArrowLeft size={14} />
            {lang === "es" ? "Ver todos los artículos" : "View all articles"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BlogEntryPage({ entry }: BlogPageProps) {
  return (
    <LanguageProvider>
      <Layout>
        <BlogEntryContent entry={entry} />
      </Layout>
    </LanguageProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogEs = labData.es.blog;
  const paths = blogEs.map((entry) => ({
    params: { slug: entry.id.replace("blog-", "") },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const id = `blog-${slug}`;

  const entryEs = labData.es.blog.find((e) => e.id === id);
  const entryEn = labData.en.blog.find((e) => e.id === id);

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