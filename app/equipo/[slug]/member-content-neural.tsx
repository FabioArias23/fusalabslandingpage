"use client";

import { TeamMember } from "@/types";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useTeamLabels } from "@/hooks/use-team-labels";
import { NeuralHero } from "./_components/neural-hero";
import { ExpertiseGrid } from "./_components/expertise-grid";
import { ProjectCarousel } from "./_components/project-carousel";

interface TeamMemberContentNeuralProps {
  member: TeamMember;
}

export function TeamMemberContentNeural({ member }: TeamMemberContentNeuralProps) {
  const { resolvedTheme } = useTheme();
  const { expertiseLabel, portfolioLabel, aboutLabel } = useTeamLabels();

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
        <NeuralHero member={member} />
        
        <ExpertiseGrid 
          member={member} 
          expertiseLabel={expertiseLabel} 
          aboutLabel={aboutLabel} 
        />

        <ProjectCarousel 
          member={member} 
          portfolioLabel={portfolioLabel} 
        />
      </motion.main>
    </div>
  );
}
