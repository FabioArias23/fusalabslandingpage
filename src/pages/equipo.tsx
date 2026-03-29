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
        <div className="mb-16 animate-reveal">
          <h1 className="font-conthrax text-3xl md:text-4xl lg:text-5xl text-fusa-white tracking-wide mb-4">
            {title}
          </h1>
          <p className="text-sm md:text-base text-white/40 max-w-2xl">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {members.map((member: any, i: number) => (
            <Link
              key={i}
              href={`/equipo/${member.slug}`}
              className={`animate-reveal delay-${(i % 3) + 1} bg-white/[0.02] border border-white/5 rounded-sm p-6 md:p-8 hover:border-fusa-indigo/40 hover:bg-white/[0.04] transition-all duration-500 group relative block`}
            >
              <div className="w-14 h-14 rounded-full bg-fusa-indigo/10 border border-fusa-indigo/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                <span className="font-conthrax text-sm text-fusa-indigo">
                  {member.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>

              <h3 className="font-conthrax text-sm text-fusa-white tracking-wide group-hover:text-fusa-indigo transition-colors">
                {member.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-fusa-indigo font-conthrax mt-1">
                {member.title}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-conthrax mt-0.5">
                {member.role}
              </p>

              <p className="text-xs text-white/40 leading-relaxed mt-4 mb-4">
                {member.bio}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-[9px] uppercase tracking-widest text-white/20 border border-white/10 px-2 py-1 rounded-sm font-conthrax">
                  {member.area}
                </span>
                <span className="text-[10px] font-conthrax text-fusa-indigo opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW PROFILE →
                </span>
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
