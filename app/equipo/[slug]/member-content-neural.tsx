"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/locale-context";
import { TeamMember } from "@/types";
import { 
  Mail, 
  Globe, 
  MessageCircle, 
  ExternalLink,
  Shield,
  Zap,
  Share2,
  ArrowRight
} from "lucide-react";
import { useTheme } from "next-themes";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { MagicCard, MagicContainer } from "@/components/ui/magic-bento";
import { motion } from "framer-motion";

// Custom SVG Icons for social media (since they might be missing in this lucide-react version)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M16 12.5c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1s-.6.7-.8.9c-.1.2-.3.2-.5.1s-.9-.3-1.7-1c-.6-.5-1-1.2-1.2-1.5-.1-.2 0-.3.1-.4l.3-.3a.1.1 0 0 0 .1-.2c0-.1-.1-.3-.2-.6-.1-.3-.2-.6-.3-.7-.2-.2-.4-.2-.5-.2h-.5c-.2 0-.5.1-.7.4-.2.3-.9 1-1 2.3s1.1 2.6 1.3 2.8l.1.1a10 10 0 0 0 4.1 3.6 4.3 4.3 0 0 0 1.6.3c.4 0 .8-.1 1-.2.5-.2 1.3-.8 1.5-1.6.2-.7.2-1.3.1-1.5-.1-.1-.3-.2-.5-.3z" />
  </svg>
);

interface TeamMemberContentNeuralProps {
  member: TeamMember;
}

export function TeamMemberContentNeural({ member }: TeamMemberContentNeuralProps) {
  const { isEnglish } = useLocale();
  const { resolvedTheme } = useTheme();

  const expertiseLabel = isEnglish ? "EXPERIENCE" : "EXPERIENCIA";
  const portfolioLabel = isEnglish ? "PROJECT PORTFOLIO" : "PROYECTOS";
  const aboutLabel = isEnglish ? "About Me" : "SOBRE MI";

  return (
    <div className="flex-1 relative min-h-screen flex flex-col bg-transparent text-foreground font-sans selection:bg-primary/40">
      {/* Main Content is rendered over the global AdaptiveAurora background found in RootLayout */}

      {/* Main Content */}
      <motion.main 
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.5,
              delayChildren: 0.3
            }
          }
        }}
        className="flex-1 px-4 sm:px-6 lg:pl-32 lg:pr-24 pt-20 sm:pt-24 pb-10 max-w-[1800px] mx-auto w-full space-y-10 sm:space-y-16 z-10"
      >
        
        {/* Hero Profile Section */}
        <motion.div variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
        }}>
          <MagicContainer glowColor="28, 5, 142">
            <section className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center md:items-stretch py-6 sm:py-8">
            <div className="relative group shrink-0">
              <MagicCard
                className="w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full bg-background/5 border-2 border-white/40 backdrop-blur-sm p-2 overflow-hidden ring-4 ring-indigo-500/10"
                glowColor="28, 5, 142"
              >
                <div className="w-full h-full rounded-full overflow-hidden border border-white/20">
                  <img 
                    src={member.foto} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" 
                    style={{ objectPosition: member.position, scale: member.zoom || 1 }}
                  />
                </div>
              </MagicCard>
            </div>

            {/* Social Icons — horizontal on mobile, vertical on md+ */}
            <div className="flex md:hidden items-center justify-center gap-6">
              <Link href={member.instagram || "https://www.instagram.com/fusa.labs"} className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank">
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link href={member.linkedin || "https://www.linkedin.com/company/fusa-labs"} className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link href={member.github || "https://github.com/Fusa-Labs"} className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank">
                <GithubIcon className="w-5 h-5" />
              </Link>
              <Link href={member.phone ? `https://wa.me/${member.phone.replace(/[\+\s]/g, '')}` : "https://wa.me/5493518799794"} className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank">
                <WhatsappIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Social Icons Vertical — desktop only */}
            <div className="hidden md:flex items-center gap-8 h-56">
              <div className="w-[1px] h-full bg-[#1C058E] dark:bg-white/40 relative">
                <div className="absolute inset-y-0 -left-[1.5px] w-[4px] bg-white/20 blur-[2px] hidden dark:block"></div>
              </div>
              <div className="flex flex-col justify-between h-full py-4">
                <Link href={member.instagram || "https://www.instagram.com/fusa.labs"} className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank">
                  <InstagramIcon className="w-6 h-6" />
                </Link>
                <Link href={member.linkedin || "https://www.linkedin.com/company/fusa-labs"} className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank">
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
                <Link href={member.github || "https://github.com/Fusa-Labs"} className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank">
                  <GithubIcon className="w-6 h-6" />
                </Link>
                <Link href={member.phone ? `https://wa.me/${member.phone.replace(/[\+\s]/g, '')}` : "https://wa.me/5493518799794"} className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank">
                  <WhatsappIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter font-heading text-foreground dark:!text-[#1C058E] uppercase leading-none">
                  {member.name}
                </h1>
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide !text-white dark:text-white font-sans">
                  {member.title}
                </p>
              </div>
            </div>
          </section>
          </MagicContainer>
        </motion.div>

        {/* Bio & Expertise Grid */}
        <motion.div variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
        }}>
          <MagicContainer className="grid grid-cols-1 lg:grid-cols-3 gap-10" glowColor="28, 5, 142">
            {/* Expertise Nodes */}
          <MagicCard 
            className="rounded-3xl bg-background/10 border border-border/10 backdrop-blur-sm"
            glowColor="28, 5, 142"
          >
            <div className="p-5 sm:p-7 lg:p-10 flex flex-col h-full">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] !text-[#1C058E] uppercase flex items-center gap-3 sm:gap-4 font-heading mb-6 sm:mb-8">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#1C058E]"></span> {expertiseLabel}
              </h2>
              <div className="flex flex-col justify-between flex-1 gap-3 sm:gap-4">
                {(member.logros?.map(l => l.label) || []).filter(Boolean).map((node, i) => (
                  <div key={i} className="px-3 py-3 sm:px-4 sm:py-4 bg-background/5 border-l-2 border-[#1C058E] hover:bg-[#1C058E]/10 transition-colors group cursor-default flex-1 flex items-center">
                    <span className="text-xs sm:text-sm lg:text-base uppercase tracking-wider font-bold text-foreground/60 group-hover:text-foreground transition-colors">
                      {node}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </MagicCard>

          {/* About Section */}
          <MagicCard 
            className="lg:col-span-2 bg-background/10 border border-border/10 backdrop-blur-sm relative overflow-hidden rounded-3xl"
            glowColor="28, 5, 142"
          >
            <div className="p-5 sm:p-7 lg:p-10 space-y-5 sm:space-y-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] !text-[#1C058E] uppercase flex items-center gap-3 sm:gap-4 font-heading">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#1C058E]"></span> {aboutLabel}
              </h2>
              <p className="text-foreground/70 dark:text-white font-sans leading-[1.8] text-sm sm:text-base md:text-lg lg:text-xl w-full">
                {member.resumen || member.bio}
              </p>
            </div>
            </MagicCard>
          </MagicContainer>
        </motion.div>

        {/* Portfolio Showcase Area (REINSTATED AS CAROUSEL) */}
        {member.proyectos && member.proyectos.length > 0 && (
          <motion.section 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
            }}
            className="space-y-10 pt-8 pb-20"
          >
            <div className="flex justify-between items-end border-b border-border/10 pb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] !text-[#1C058E] uppercase flex items-center gap-3 sm:gap-4 font-heading">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#1C058E]"></span> {portfolioLabel}
              </h2>
            </div>

            <MagicContainer className="w-full" glowColor="28, 5, 142">
              <Carousel 
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-6">
                  {member.proyectos.map((proj, i) => (
                    <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3">
                      <MagicCard 
                        className="rounded-3xl bg-background/5 border border-border/20 transition-all duration-500 h-full shadow-lg dark:shadow-none flex flex-col"
                        glowColor="28, 5, 142"
                      >
                        <div className="aspect-square overflow-hidden bg-background shrink-0">
                          <img 
                            src={proj.image} 
                            alt={proj.title} 
                            className="w-full h-full object-cover transition-transform duration-700 opacity-100 dark:opacity-80 dark:group-hover:opacity-100" 
                          />
                        </div>
                        <div className="p-8 pt-2 space-y-0 relative bg-gradient-to-t from-background to-transparent flex-1 flex flex-col">
                          <div className="flex items-center justify-between min-h-[4rem]">
                            <h3 className="text-sm sm:text-base lg:text-lg font-bold font-heading tracking-tight !text-[#1C058E] uppercase group-hover:opacity-80 transition-opacity tracking-widest leading-tight">
                              {proj.title}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base lg:text-lg text-foreground/50 dark:text-white! leading-relaxed font-sans line-clamp-3">
                            {proj.description}
                          </p>
                          <div className="pt-4 flex justify-end mt-auto">
                            <ArrowRight size={18} className="text-[#1C058E] group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </MagicCard>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-start gap-4 mt-8">
                  <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-none bg-background/5 border-border text-foreground/50 hover:border-[#1C058E] hover:text-[#1C058E] transition-all" />
                  <CarouselNext className="static translate-y-0 h-10 w-10 rounded-none bg-background/5 border-border text-foreground/50 hover:border-[#1C058E] hover:text-[#1C058E] transition-all" />
                </div>
              </Carousel>
            </MagicContainer>
          </motion.section>
        )}

      </motion.main>
    </div>
  );
}
