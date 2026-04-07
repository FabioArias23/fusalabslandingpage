import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/Layout";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import landingData from "../../data/landingData.json";
import {
  Mail,
  ArrowLeft,
  Linkedin,
  Github,
  ExternalLink,
  Award,
  Briefcase,
  Code,
  Globe,
  TrendingUp,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Logro {
  metric: string;
  label: string;
}

interface Proyecto {
  nombre: string;
  descripcion: string;
}

interface LinkExterno {
  tipo: string;
  url: string;
  label: string;
}

interface MemberData {
  name: string;
  slug: string;
  email: string;
  title: string;
  bio: string;
  highlight: string;
  keywords: string[];
  linkedin?: string;
  github?: string;
  resumen: string;
  aporte: string;
  areasEnfoque: string[];
  foto: string;
  categoria: "tech" | "business" | "operations";
  subcategoria: string;
  logros: Logro[];
  proyectos: Proyecto[];
  stack: string[];
  cita: string;
  disponible: boolean;
  links: LinkExterno[];
  disponibilidad: string;
}

interface MemberProps {
  member: {
    es: MemberData;
    en: MemberData;
  };
}

const categoriaColors = {
  tech: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  business: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
  operations: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400",
    glow: "shadow-violet-500/20",
  },
};

const categoriaLabels = {
  es: { tech: "TECH", business: "BUSINESS", operations: "OPERATIONS" },
  en: { tech: "TECH", business: "BUSINESS", operations: "OPERATIONS" },
};

function MemberProfileContent({ member }: MemberProps) {
  const { lang } = useLanguage();
  const m = lang === "es" ? member.es : member.en;
  const cat = categoriaColors[m.categoria];
  const catLabel =
    lang === "es"
      ? { tech: "TECH", business: "BUSINESS", operations: "OPERATIONS" }[
          m.categoria
        ]
      : { tech: "TECH", business: "BUSINESS", operations: "OPERATIONS" }[
          m.categoria
        ];

  return (
    <div className="min-h-screen pb-20 md:pb-32 pt-8">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Back link */}
        <Link
          href="/equipo"
          className="inline-flex items-center gap-2 text-fusa-indigo/60 hover:text-fusa-indigo transition-colors font-conthrax text-[10px] tracking-widest uppercase mb-10 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          {lang === "es" ? "Volver al Equipo" : "Back to Team"}
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          {/* Left: Avatar/Photo */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-gradient-to-br from-fusa-indigo/10 to-white/[0.02] border border-fusa-indigo/20 group">
              <div className="absolute inset-0 bg-radial-gradient from-fusa-indigo/15 to-transparent opacity-60" />
              {m.foto ? (
                <Image
                  src={m.foto}
                  alt={m.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-conthrax text-8xl md:text-9xl text-fusa-indigo/30 group-hover:scale-105 transition-transform duration-700">
                    {m.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
              )}
              {/* Category Badge */}
              <div
                className={`absolute top-4 left-4 ${cat.bg} ${cat.border} border px-3 py-1.5 rounded-sm`}
              >
                <span
                  className={`font-conthrax text-[9px] tracking-widest ${cat.text}`}
                >
                  {catLabel}
                </span>
              </div>
              {/* Availability Badge */}
              {m.disponible && (
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="font-conthrax text-[8px] tracking-widest text-emerald-400 uppercase">
                    {lang === "es" ? "Disponible" : "Available"}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Identity */}
          <div className="lg:col-span-8">
            {/* Subcategoria */}
            <p className="text-[10px] font-conthrax text-fusa-indigo/50 uppercase tracking-[0.3em] mb-2">
              {m.subcategoria}
            </p>

            {/* Name */}
            <h1 className="font-conthrax text-4xl md:text-5xl lg:text-6xl text-fusa-white tracking-tight uppercase mb-3">
              {m.name}
            </h1>

            {/* Role */}
            <p className="font-conthrax text-lg md:text-xl text-fusa-indigo tracking-wide uppercase mb-5">
              {m.title}
            </p>

            {/* Highlight line */}
            <p className="text-base md:text-lg text-white/50 leading-relaxed mb-6 max-w-2xl">
              {m.highlight}
            </p>

            {/* Keywords as focus areas */}
            <div className="flex flex-wrap gap-2 mb-6">
              {m.keywords.map((keyword, i) => (
                <span
                  key={i}
                  className="text-[9px] uppercase tracking-widest font-conthrax text-fusa-indigo/70 border border-fusa-indigo/20 px-3 py-1.5 rounded-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* Quote */}
            {m.cita && (
              <div className="relative pl-6 border-l-2 border-fusa-indigo/30 mb-6">
                <p className="text-sm text-white/40 italic font-light leading-relaxed">
                  "{m.cita}"
                </p>
              </div>
            )}

            {/* Social Buttons */}
            {(m.linkedin || m.github) && (
              <div className="flex flex-wrap gap-3">
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-sm text-fusa-indigo/70 hover:text-fusa-indigo hover:border-fusa-indigo/40 transition-all font-conthrax text-[10px] uppercase tracking-widest"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                )}
                {m.github && (
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-sm text-fusa-indigo/70 hover:text-fusa-indigo hover:border-fusa-indigo/40 transition-all font-conthrax text-[10px] uppercase tracking-widest"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Stats/Logros */}
        {m.logros && m.logros.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {m.logros.map((logro, i) => (
              <div
                key={i}
                className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-sm hover:border-fusa-indigo/30 hover:bg-white/[0.04] transition-all group"
              >
                <p className="font-conthrax text-3xl md:text-4xl text-fusa-indigo mb-2 group-hover:scale-110 transition-transform">
                  {logro.metric}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-conthrax">
                  {logro.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Resumen */}
            <section className="animate-reveal delay-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-fusa-indigo/40" />
                <h2 className="text-[10px] font-conthrax text-fusa-indigo uppercase tracking-[0.25em]">
                  {lang === "es"
                    ? "Perfil profesional"
                    : "Professional Profile"}
                </h2>
              </div>
              <p className="text-base md:text-lg text-white/60 leading-relaxed">
                {m.resumen}
              </p>
            </section>

            {/* Proyectos */}
            {m.proyectos && m.proyectos.length > 0 && (
              <section className="animate-reveal delay-3">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-fusa-indigo/40" />
                  <h2 className="text-[10px] font-conthrax text-fusa-indigo uppercase tracking-[0.25em]">
                    {lang === "es"
                      ? "Proyectos destacados"
                      : "Featured Projects"}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {m.proyectos.map((proy, i) => (
                    <div
                      key={i}
                      className="p-5 bg-white/[0.02] border border-white/[0.05] rounded-sm hover:border-fusa-indigo/30 hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-fusa-indigo/50 group-hover:bg-fusa-indigo transition-colors" />
                        <h3 className="text-sm font-conthrax text-fusa-indigo uppercase tracking-wider">
                          {proy.nombre}
                        </h3>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed">
                        {proy.descripcion}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Stack */}
            {m.stack && m.stack.length > 0 && (
              <section className="animate-reveal delay-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-fusa-indigo/40" />
                  <h2 className="text-[10px] font-conthrax text-fusa-indigo uppercase tracking-[0.25em]">
                    {lang === "es" ? "Stack & Herramientas" : "Stack & Tools"}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {m.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[9px] uppercase tracking-widest font-conthrax text-white/50 bg-white/[0.03] border border-white/[0.05] px-3 py-2 rounded-sm hover:text-fusa-indigo/70 hover:border-fusa-indigo/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Aporte en Fusa */}
            <section className="animate-reveal delay-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-fusa-indigo/40" />
                <h2 className="text-[10px] font-conthrax text-fusa-indigo uppercase tracking-[0.25em]">
                  {lang === "es" ? "Aporte en FUSA" : "Contribution to FUSA"}
                </h2>
              </div>
              <p className="text-base md:text-lg text-white/60 leading-relaxed">
                {m.aporte}
              </p>
            </section>

            {/* Áreas de Enfoque */}
            <section className="animate-reveal delay-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-fusa-indigo/40" />
                <h2 className="text-[10px] font-conthrax text-fusa-indigo uppercase tracking-[0.25em]">
                  {lang === "es"
                    ? "Áreas de especialización"
                    : "Areas of expertise"}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {m.areasEnfoque.map((area, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-sm group hover:border-fusa-indigo/30 hover:bg-white/[0.04] transition-all"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-fusa-indigo/50 group-hover:bg-fusa-indigo transition-colors" />
                    <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Contact */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-10 space-y-6">
              {/* Contact Card */}
              <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-fusa-indigo/40" />
                  <h2 className="text-[10px] font-conthrax text-fusa-indigo uppercase tracking-[0.25em]">
                    {lang === "es" ? "Contacto" : "Contact"}
                  </h2>
                </div>

                <a
                  href={`mailto:${m.email}`}
                  className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-sm hover:border-fusa-indigo/40 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-fusa-indigo/10 flex items-center justify-center text-fusa-indigo group-hover:bg-fusa-indigo group-hover:text-fusa-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase font-conthrax tracking-widest mb-1">
                      Email
                    </p>
                    <p className="text-sm text-white/70 group-hover:text-white transition-colors break-all">
                      {m.email}
                    </p>
                  </div>
                </a>
              </div>

              {/* Availability Info */}
              {m.disponibilidad && (
                <div className="p-6 bg-emerald-500/[0.02] border border-emerald-500/10 rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-emerald-500/40" />
                    <h2 className="text-[10px] font-conthrax text-emerald-400 uppercase tracking-[0.25em]">
                      {lang === "es" ? "Disponibilidad" : "Availability"}
                    </h2>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {m.disponibilidad}
                  </p>
                </div>
              )}

              {/* External Links */}
              {m.links && m.links.length > 0 && (
                <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-fusa-indigo/40" />
                    <h2 className="text-[10px] font-conthrax text-fusa-indigo uppercase tracking-[0.25em]">
                      {lang === "es" ? "Links" : "Links"}
                    </h2>
                  </div>
                  <div className="space-y-2">
                    {m.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/[0.05] rounded-sm hover:border-fusa-indigo/30 hover:bg-white/[0.04] transition-all group"
                      >
                        <span className="text-sm text-white/60 group-hover:text-white/80">
                          {link.label}
                        </span>
                        <ExternalLink
                          size={14}
                          className="text-fusa-indigo/40 group-hover:text-fusa-indigo"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to team CTA */}
              <Link
                href="/equipo"
                className="flex items-center justify-center gap-2 p-4 bg-fusa-indigo/10 border border-fusa-indigo/20 rounded-sm text-fusa-indigo/70 hover:text-fusa-indigo hover:border-fusa-indigo/40 transition-all font-conthrax text-[10px] uppercase tracking-widest"
              >
                ← {lang === "es" ? "Ver todo el equipo" : "View all team"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MemberProfile({ member }: MemberProps) {
  return (
    <LanguageProvider>
      <Layout>
        <MemberProfileContent member={member} />
      </Layout>
    </LanguageProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const members = landingData.es.team.members;
  const paths = members.map((member) => ({
    params: { slug: member.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const memberEs = landingData.es.team.members.find((m) => m.slug === slug);
  const memberEn = landingData.en.team.members.find((m) => m.slug === slug);

  if (!memberEs || !memberEn) {
    return { notFound: true };
  }

  return {
    props: {
      member: {
        es: memberEs,
        en: memberEn,
      },
    },
  };
};
