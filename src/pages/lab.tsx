import Link from "next/link";
import { Layout } from "../components/Layout";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import {
  ExperimentCard,
  PrototypeCard,
  NoteCard,
  JournalCard,
  ArchiveCard,
} from "../components/lab";
import labData from "../data/lab.json";

function LabHub() {
  const { lang } = useLanguage();
  const data = lang === "es" ? labData.es : labData.en;
  const {
    hero,
    categories,
    experimentos,
    prototipos,
    notas,
    journal,
    archivo,
  } = data;

  return (
    <div className="pb-20 md:pb-32">
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-fusa-indigo/20 border border-fusa-indigo/30 flex items-center justify-center rounded-full">
              <span className="text-fusa-indigo text-xs font-black">💡</span>
            </div>
            <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30">
              {hero.badge}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/50 mb-4 leading-relaxed">
            {hero.subtitle}
          </p>
          <p className="text-base text-white/30 leading-relaxed mb-10 max-w-xl">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/lab/experimentos"
              className="flex items-center gap-3 bg-fusa-indigo text-white px-6 py-3 rounded-full font-conthrax text-xs uppercase tracking-widest hover:bg-fusa-indigo/80 transition-colors"
            >
              {hero.ctaPrimary} →
            </Link>
            <Link
              href="/lab/journal"
              className="flex items-center gap-3 border border-white/20 text-white/60 px-6 py-3 rounded-full font-conthrax text-xs uppercase tracking-widest hover:border-white/40 hover:text-white/80 transition-colors"
            >
              {hero.ctaSecondary} →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/lab/experimentos?cat=${cat.id}`}
              className="text-[10px] font-conthrax tracking-widest uppercase border border-white/10 px-4 py-2 text-white/40 hover:border-fusa-indigo/40 hover:text-white/70 transition-all"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-20">
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">
                01
              </span>
              <h2 className="text-3xl font-black tracking-tight">
                {lang === "es" ? "Experimentos" : "Experiments"}
              </h2>
            </div>
            <Link
              href="/lab/experimentos"
              className="text-[10px] font-conthrax uppercase tracking-widest text-fusa-indigo hover:text-white transition-colors"
            >
              {lang === "es" ? "Ver todos →" : "View all →"}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experimentos.slice(0, 3).map((entry) => (
              <ExperimentCard key={entry.id} entry={entry} lang={lang} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">
                02
              </span>
              <h2 className="text-3xl font-black tracking-tight">
                {lang === "es" ? "Prototipos" : "Prototypes"}
              </h2>
            </div>
            <Link
              href="/lab/prototipos"
              className="text-[10px] font-conthrax uppercase tracking-widest text-fusa-indigo hover:text-white transition-colors"
            >
              {lang === "es" ? "Ver todos →" : "View all →"}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prototipos.slice(0, 3).map((entry) => (
              <PrototypeCard key={entry.id} entry={entry} lang={lang} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">
                03
              </span>
              <h2 className="text-3xl font-black tracking-tight">
                {lang === "es" ? "Notas" : "Notes"}
              </h2>
            </div>
            <Link
              href="/lab/notas"
              className="text-[10px] font-conthrax uppercase tracking-widest text-fusa-indigo hover:text-white transition-colors"
            >
              {lang === "es" ? "Ver todos →" : "View all →"}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notas.slice(0, 3).map((entry) => (
              <NoteCard key={entry.id} entry={entry} lang={lang} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">
                04
              </span>
              <h2 className="text-3xl font-black tracking-tight">Journal</h2>
            </div>
            <Link
              href="/lab/journal"
              className="text-[10px] font-conthrax uppercase tracking-widest text-fusa-indigo hover:text-white transition-colors"
            >
              {lang === "es" ? "Ver todos →" : "View all →"}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journal.slice(0, 3).map((entry) => (
              <JournalCard key={entry.id} entry={entry} lang={lang} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-conthrax uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">
                05
              </span>
              <h2 className="text-3xl font-black tracking-tight">
                {lang === "es" ? "Archivo" : "Archive"}
              </h2>
            </div>
            <Link
              href="/lab/archivo"
              className="text-[10px] font-conthrax uppercase tracking-widest text-fusa-indigo hover:text-white transition-colors"
            >
              {lang === "es" ? "Ver todos →" : "View all →"}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {archivo.slice(0, 3).map((entry) => (
              <ArchiveCard key={entry.id} entry={entry} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function LabPage() {
  return (
    <LanguageProvider>
      <Layout>
        <LabHub />
      </Layout>
    </LanguageProvider>
  );
}
