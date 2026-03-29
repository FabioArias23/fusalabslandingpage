import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/Layout";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import landingData from "../../data/landingData.json";
import { Mail, ArrowLeft, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";

interface MemberProps {
  translation: {
    es: any;
    en: any;
  };
}

function MemberProfileContent({ translation }: MemberProps) {
  const { lang } = useLanguage();
  const member = (translation as any)[lang] || translation.es;
  
  return (
    <div className="min-h-screen pb-20 md:pb-32 pt-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <Link 
          href="/equipo" 
          className="inline-flex items-center gap-2 text-fusa-indigo hover:text-fusa-white transition-colors font-conthrax text-[10px] tracking-widest uppercase mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {lang === "es" ? "Volver al Equipo" : "Back to Team"}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual/Initials */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="aspect-square rounded-sm bg-white/[0.02] border border-white/5 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-radial-gradient from-fusa-indigo/10 to-transparent opacity-50" />
              <span className="font-conthrax text-6xl md:text-8xl text-fusa-indigo/20 group-hover:scale-110 transition-transform duration-1000">
                {member.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
              </span>
              
              {/* Decorative scan line */}
              <div className="absolute inset-x-0 h-px bg-fusa-indigo/20 animate-scan-vertical pointer-events-none" />
            </div>
            
            <div className="mt-8 flex flex-col gap-4">
              <a 
                href={`mailto:${member.email}`}
                className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-fusa-indigo/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-fusa-indigo/10 flex items-center justify-center text-fusa-indigo group-hover:bg-fusa-indigo group-hover:text-fusa-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-white/20 uppercase font-conthrax tracking-widest">Email</p>
                  <p className="text-xs text-fusa-white font-medium">{member.email}</p>
                </div>
              </a>

              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-fusa-indigo/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-fusa-indigo/10 flex items-center justify-center text-fusa-indigo group-hover:bg-fusa-indigo group-hover:text-fusa-white transition-all">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/20 uppercase font-conthrax tracking-widest">LinkedIn</p>
                    <p className="text-xs text-fusa-white font-medium">Professional Profile</p>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Bio & Info */}
          <div className="lg:col-span-8">
            <div className="animate-reveal">
              <span className="inline-block text-[10px] md:text-[12px] font-conthrax text-fusa-indigo tracking-[0.3em] uppercase mb-4">
                {member.area}
              </span>
              <h1 className="font-conthrax text-4xl md:text-6xl text-fusa-white tracking-tight mb-2 uppercase">
                {member.name}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
                <p className="font-conthrax text-sm md:text-lg text-fusa-indigo/80 uppercase tracking-widest">
                  {member.title}
                </p>
                <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
                <p className="font-conthrax text-sm md:text-lg text-white/40 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-fusa-indigo/30 to-transparent mb-12" />

              <div className="space-y-8">
                <div>
                  <h3 className="text-[10px] font-conthrax text-white/20 uppercase tracking-[0.2em] mb-4">
                    {lang === "es" ? "Sobre mí" : "About me"}
                  </h3>
                  <p className="text-base md:text-xl text-white/60 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                    <h4 className="text-[10px] font-conthrax text-fusa-indigo uppercase tracking-widest mb-2">
                       {lang === "es" ? "Especialidad" : "Expertise"}
                    </h4>
                    <p className="text-sm text-fusa-white font-medium">Advanced AI Systems & Industrial Engineering</p>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                    <h4 className="text-[10px] font-conthrax text-fusa-indigo uppercase tracking-widest mb-2">
                      {lang === "es" ? "Ubicación" : "Location"}
                    </h4>
                    <p className="text-sm text-fusa-white font-medium">Argentina / Remote</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MemberProfile({ translation }: MemberProps) {
  return (
    <LanguageProvider>
      <Layout>
        <MemberProfileContent translation={translation} />
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

  return {
    props: {
      translation: {
        es: memberEs,
        en: memberEn
      }
    },
  };
};

