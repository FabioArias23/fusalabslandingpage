import Link from "next/link";
import { Layout } from "../components/Layout";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import landingData from "../data/landingData.json";

function EquipoContent() {
  const { lang } = useLanguage();
  const data = (landingData as any)[lang];
  const { title, subtitle, members } = data.team;

  return (
    <section className="pb-20 md:pb-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-12 animate-reveal">
          <h1 className="font-conthrax text-3xl md:text-4xl lg:text-5xl text-fusa-white tracking-wide mb-4">
            {title}
          </h1>
          <p className="text-sm md:text-base text-white/50 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {members.map((member: any, i: number) => (
            <Link
              key={i}
              href={`/equipo/${member.slug}`}
              className="animate-reveal group relative block bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-sm p-6 hover:border-fusa-indigo/50 hover:bg-white/[0.06] transition-all duration-500"
            >
              {/* Initials Circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fusa-indigo/20 to-fusa-indigo/5 border border-fusa-indigo/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500">
                <span className="font-conthrax text-lg text-fusa-indigo tracking-wide">
                  {member.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-conthrax text-base text-fusa-white tracking-wide mb-1 group-hover:text-fusa-indigo transition-colors">
                {member.name}
              </h3>

              {/* Title/Role */}
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                {member.title}
              </p>

              {/* Highlight line */}
              <p className="text-[11px] text-fusa-indigo/80 font-medium mb-4 leading-relaxed">
                {member.highlight}
              </p>

              {/* Bio */}
              <p className="text-[11px] text-white/40 leading-relaxed mb-5 line-clamp-2">
                {member.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {member.keywords.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-[9px] uppercase tracking-widest text-white/30 border border-white/10 px-2 py-1 rounded-sm font-conthrax"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EquipoPage() {
  return (
    <LanguageProvider>
      <Layout>
        <EquipoContent />
      </Layout>
    </LanguageProvider>
  );
}