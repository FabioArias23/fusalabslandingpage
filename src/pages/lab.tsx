import Link from "next/link";
import { FormEvent, useState } from "react";
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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fusa Lab | Prototipos, experimentos y journal",
  description:
    "Fusa Lab documenta prototipos, experimentos, notas y exploraciones aplicadas en IA, producto y sistemas.",
  alternates: {
    canonical: "/lab",
  },
  openGraph: {
    title: "Fusa Lab | Prototipos, experimentos y journal",
    description:
      "Fusa Lab documenta prototipos, experimentos, notas y exploraciones aplicadas en IA, producto y sistemas.",
    url: "/lab",
    siteName: "Fusa Labs",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    title: "Fusa Lab | Prototipos, experimentos y journal",
    description:
      "Fusa Lab documenta prototipos, experimentos, notas y exploraciones aplicadas en IA, producto y sistemas.",
  },
};

function LabHub() {
  const { lang } = useLanguage();
  const [inviteType, setInviteType] = useState("participar");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");

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

  const inviteOptions =
    lang === "es"
      ? [
          { value: "participar", label: "Quiero participar del Lab" },
          { value: "proyecto", label: "Tengo un proyecto para impulsar" },
          { value: "conectar", label: "Solo quiero conectar" },
        ]
      : [
          { value: "participate", label: "I want to join the Lab" },
          { value: "project", label: "I have a project to build" },
          { value: "connect", label: "I just want to connect" },
        ];

  const handleInviteSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject =
      lang === "es" ? "Invitacion al Lab I+D" : "R&D Lab invitation";

    const body =
      lang === "es"
        ? `Nombre: ${name}%0AEmail: ${email}%0AInteres: ${inviteType}%0A%0AContexto:%0A${idea}`
        : `Name: ${name}%0AEmail: ${email}%0AInterest: ${inviteType}%0A%0AContext:%0A${idea}`;

    window.location.href = `mailto:labsfusa@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;
  };

  return (
    <div className="pb-20 md:pb-32">
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 max-w-3xl">
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <div className="w-10 h-10 bg-fusa-indigo/20 border border-fusa-indigo/30 flex items-center justify-center rounded-full">
                <span className="text-fusa-indigo text-xs font-black">RD</span>
              </div>
              <span className="text-[10px] font-conthrax uppercase tracking-widest text-fusa-indigo border border-fusa-indigo/30 px-3 py-1.5 rounded-full bg-fusa-indigo/10">
                I+D
              </span>
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

            <div className="p-6 md:p-8 rounded-3xl border border-fusa-indigo/30 bg-gradient-to-br from-fusa-indigo/20 via-fusa-indigo/10 to-transparent mb-10">
              <p className="text-[10px] font-conthrax uppercase tracking-[0.25em] text-fusa-indigo mb-4">
                Venture Builder Lab
              </p>
              <p className="text-white/70 leading-relaxed text-base md:text-lg">
                {lang === "es"
                  ? "El Lab es el espacio donde pueden nacer proyectos en diferentes nichos: exploramos, prototipamos y validamos ideas para transformarlas en productos con traccion real."
                  : "The Lab is where projects can emerge across different niches: we explore, prototype, and validate ideas to turn them into products with real traction."}
              </p>
            </div>

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

          <div className="lg:col-span-5 w-full">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-lg md:text-xl font-conthrax uppercase tracking-wide text-white mb-2">
                {lang === "es" ? "Invitacion al Lab" : "Lab Invitation"}
              </h2>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">
                {lang === "es"
                  ? "Si queres participar, traer un proyecto o simplemente conectar, este formulario abre la puerta al I+D de Fusa."
                  : "If you want to join, bring a project, or simply connect, this form opens the door to Fusa's R&D."}
              </p>

              <form onSubmit={handleInviteSubmit} className="space-y-4">
                <select
                  value={inviteType}
                  onChange={(e) => setInviteType(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 text-white/80 px-4 py-3 outline-none focus:border-fusa-indigo/50"
                  required
                >
                  {inviteOptions.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="bg-fusa-black text-white"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === "es" ? "Tu nombre" : "Your name"}
                  className="w-full rounded-xl border border-white/10 bg-black/40 text-white/80 px-4 py-3 outline-none focus:border-fusa-indigo/50"
                  required
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === "es" ? "Tu email" : "Your email"}
                  className="w-full rounded-xl border border-white/10 bg-black/40 text-white/80 px-4 py-3 outline-none focus:border-fusa-indigo/50"
                  required
                />

                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  rows={4}
                  placeholder={
                    lang === "es"
                      ? "Contanos tu idea, nicho o como te gustaria participar"
                      : "Tell us your idea, niche, or how you'd like to participate"
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/40 text-white/80 px-4 py-3 outline-none focus:border-fusa-indigo/50 resize-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-fusa-indigo text-white rounded-xl px-5 py-3 font-conthrax text-[11px] uppercase tracking-widest hover:bg-fusa-indigo/80 transition-colors"
                >
                  {lang === "es" ? "Enviar invitacion" : "Send Invitation"}
                </button>
              </form>
            </div>
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
