import { Layout } from "../components/Layout";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import landingData from "../data/landingData.json";
import { Lab } from "../sections/Lab";

function LabContent() {
  const { lang } = useLanguage();
  const data = (landingData as any)[lang];
  const { lab } = data;

  return (
    <div className="pb-20 md:pb-32">
      <Lab {...lab} />
      
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-20 animate-reveal delay-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-8 md:p-12 hover:border-fusa-indigo/20 transition-all duration-500">
            <h3 className="font-conthrax text-xl text-fusa-white mb-6 uppercase tracking-wider">
              Investigación en IA
            </h3>
            <p className="text-white/40 leading-relaxed mb-8">
              Estamos explorando el uso de agentes autónomos para la optimización de procesos industriales complejos, integrando modelos de lenguaje con sistemas de visión artificial.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-[10px] font-conthrax tracking-widest text-fusa-indigo uppercase border border-fusa-indigo/20 px-3 py-1 bg-fusa-indigo/5">RAG</span>
              <span className="text-[10px] font-conthrax tracking-widest text-fusa-indigo uppercase border border-fusa-indigo/20 px-3 py-1 bg-fusa-indigo/5">Multi-Agent</span>
              <span className="text-[10px] font-conthrax tracking-widest text-fusa-indigo uppercase border border-fusa-indigo/20 px-3 py-1 bg-fusa-indigo/5">LLMOps</span>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-8 md:p-12 hover:border-fusa-indigo/20 transition-all duration-500">
            <h3 className="font-conthrax text-xl text-fusa-white mb-6 uppercase tracking-wider">
              Prototipos Activos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 group">
                <div className="w-1 h-1 bg-fusa-indigo rounded-full shadow-[0_0_10px_rgba(28,5,142,1)]" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">AI Predictor v0.4</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-1 h-1 bg-fusa-indigo rounded-full shadow-[0_0_10px_rgba(28,5,142,1)]" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">Vision-Path Finder</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-1 h-1 bg-fusa-indigo rounded-full shadow-[0_0_10px_rgba(28,5,142,1)]" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">Autonomous Agent Swarm</span>
              </li>
            </ul>
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
        <LabContent />
      </Layout>
    </LanguageProvider>
  );
}
