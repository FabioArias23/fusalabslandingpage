"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/locale-context";
import { TeamMember } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Mail, 
  Share2, 
  Shield, 
  Cpu, 
  Network, 
  LayoutDashboard, 
  Database,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass
} from "lucide-react";

interface TeamMemberContentNeuralProps {
  member: TeamMember;
}

export function TeamMemberContentNeural({ member }: TeamMemberContentNeuralProps) {
  const { isEnglish } = useLocale();

  const volverLabel = isEnglish ? "Back to team" : "Volver al equipo";
  const connectLabel = isEnglish ? "Establish Connection" : "Establecer Conexión";
  const expertiseLabel = isEnglish ? "EXPERIENCE" : "EXPERIENCIA";
  const portfolioLabel = isEnglish ? "PROJECT PORTFOLIO / Active Deployments" : "PROYECTOS / Despliegues Activos";
  const aboutLabel = isEnglish ? "SYSTEM PROTOCOL // ABOUT" : "PROTOCOLO DE SISTEMA // ACERCA DE";

  const linkedinUrl = member.linkedin || "https://www.linkedin.com/company/fusa-labs";
  const instagramUrl = member.instagram || "https://www.instagram.com/fusa.labs";

  return (
    <div className="flex-1 relative min-h-screen flex flex-col bg-[#050505] text-[#FDFDFD] font-sans selection:bg-[#1C058E]/40">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#1C058E]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1C058E]/5 blur-[100px] rounded-full"></div>
      </div>



      {/* Main Content */}
      <main className="flex-1 px-8 py-10 max-w-7xl mx-auto w-full space-y-16 z-10">
        
        {/* Hero Profile Section */}
        <section className="flex flex-col md:flex-row gap-12 items-start md:items-center py-8">
          <div className="relative group">
            <div className="w-56 h-56 rounded-full border-2 border-[#1C058E]/30 p-2 relative z-10 backdrop-blur-sm bg-white/5 transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
                <img 
                  src={member.foto} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" 
                  style={{ objectPosition: member.position, scale: member.zoom || 1 }}
                />
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -inset-6 bg-[#1C058E]/20 blur-3xl rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-0 right-0 w-12 h-12 bg-[#1C058E] rounded-full flex items-center justify-center border-4 border-[#050505] z-20">
               <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <h1 className="text-6xl font-bold tracking-tighter font-heading text-white uppercase leading-none">
                {member.name}
              </h1>
              <p className="text-[#1C058E] font-heading tracking-[0.2em] text-sm uppercase opacity-90 pl-1">
                {member.title}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button className="h-12 px-10 bg-gradient-to-r from-[#1C058E] to-[#1C058E]/80 text-[#FDFDFD] font-bold text-xs uppercase tracking-widest rounded-none border border-white/10 hover:shadow-[0_0_30px_rgba(28,5,142,0.4)] transition-all">
                {connectLabel}
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="size-12 rounded-none bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-[#1C058E] transition-all" asChild>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <Share2 size={18} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="size-12 rounded-none bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-[#1C058E] transition-all" asChild>
                  <a href={`mailto:${member.email}`}>
                    <Mail size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Bio & Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Expertise Nodes */}
          <div className="bg-white/5 border border-white/5 p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-8">
              <h2 className="text-[10px] font-bold tracking-[0.4em] text-[#1C058E] uppercase flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#1C058E]"></span> {expertiseLabel}
              </h2>
              <div className="flex flex-col gap-4">
                {[member.subcategoria, member.highlight, ...(member.logros?.map(l => l.label) || [])].filter(Boolean).map((node, i) => (
                  <div key={i} className="px-4 py-3 bg-white/5 border-l-2 border-[#1C058E] hover:bg-[#1C058E]/10 transition-colors group cursor-default">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 group-hover:text-white">
                      {node}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="lg:col-span-2 space-y-8 bg-white/[0.02] border border-white/5 p-10 backdrop-blur-md relative overflow-hidden group hover:border-[#1C058E]/20 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <Cpu size={120} className="text-[#1C058E]" />
            </div>
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-[#1C058E] uppercase flex items-center gap-3">
              <span className="w-12 h-[1px] bg-[#1C058E]"></span> {aboutLabel}
            </h2>
            <p className="text-white/70 font-sans leading-[1.8] text-base md:text-lg max-w-3xl">
              {member.resumen || member.bio}
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Impact Contribution</span>
                <span className="text-sm font-medium text-white/90">{member.aporte}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Portfolio Section */}
        <section className="space-y-10 pt-8 pb-20">
          <div className="flex justify-between items-end border-b border-white/5 pb-6">
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-[#1C058E] uppercase flex items-center gap-3">
              <span className="w-12 h-[1px] bg-[#1C058E]"></span> {portfolioLabel}
            </h2>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="size-10 rounded-none bg-white/5 border-white/10 text-white/50 hover:border-[#1C058E] hover:text-white transition-all">
                <ChevronLeft size={16} />
              </Button>
              <Button variant="outline" size="icon" className="size-10 rounded-none bg-white/5 border-white/10 text-white/50 hover:border-[#1C058E] hover:text-white transition-all">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project 1 */}
            <div className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-[#1C058E]/50 transition-all duration-500 rounded-none">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Project Cyber" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" 
                />
              </div>
              <div className="p-8 space-y-4 relative bg-gradient-to-t from-[#050505] to-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-heading tracking-tight text-white uppercase group-hover:text-[#1C058E] transition-colors tracking-widest">
                    SYSTEMA VERA
                  </h3>
                  <div className="flex items-center gap-2">
                     <span className="text-[10px] text-[#1C058E] uppercase tracking-widest font-bold">ACTIVE</span>
                     <span className="w-1.5 h-1.5 rounded-full bg-[#1C058E] animate-pulse"></span>
                  </div>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  {isEnglish 
                    ? "Designing and implementing autonomous systems for large-scale data processing and intelligence synchronization."
                    : "Diseño e implementación de sistemas autónomos para procesamiento de datos a gran escala y sincronización de inteligencia."
                  }
                </p>
                <div className="pt-4 flex justify-end">
                  <ArrowRight size={18} className="text-[#1C058E] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Example Project 2 */}
            <div className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-[#1C058E]/50 transition-all duration-500 rounded-none">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                  alt="Network" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" 
                />
              </div>
              <div className="p-8 space-y-4 relative bg-gradient-to-t from-[#050505] to-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-heading tracking-tight text-white uppercase group-hover:text-[#1C058E] transition-colors tracking-widest">
                    CORE NEURAL
                  </h3>
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">SYNCED</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                   {isEnglish
                    ? "Optimization of neural architectures to ensure absolute coherence in decision protocols."
                    : "Optimización de arquitecturas neuronales para asegurar coherencia absoluta en protocolos de decisión."
                   }
                </p>
                <div className="pt-4 flex justify-end">
                   <ArrowRight size={18} className="text-[#1C058E] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Example Project 3 */}
            <div className="hidden lg:block group relative overflow-hidden bg-white/5 border border-white/10 hover:border-[#1C058E]/50 transition-all duration-500 rounded-none">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                  alt="Vault" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" 
                />
              </div>
              <div className="p-8 space-y-4 relative bg-gradient-to-t from-[#050505] to-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-heading tracking-tight text-white uppercase group-hover:text-[#1C058E] transition-colors tracking-widest">
                    LAB CIPHER
                  </h3>
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">ENCRYPTED</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  {isEnglish
                    ? "Quantum security systems for strategic asset protection and encrypted communications."
                    : "Sistemas de seguridad cuántica para protección de activos estratégicos y comunicaciones cifradas."
                  }
                </p>
                <div className="pt-4 flex justify-end">
                  <ArrowRight size={18} className="text-[#1C058E] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
