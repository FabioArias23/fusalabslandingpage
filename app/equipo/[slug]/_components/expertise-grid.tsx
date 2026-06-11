import React from "react";
import { motion } from "framer-motion";
import { MagicCard, MagicContainer } from "@/components/ui/magic-bento";
import { TeamMember } from "@/types";

export interface ExpertiseGridProps {
  member: TeamMember;
  expertiseLabel: string;
  aboutLabel: string;
}

export function ExpertiseGrid({ member, expertiseLabel, aboutLabel }: ExpertiseGridProps) {
  return (
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
  );
}
