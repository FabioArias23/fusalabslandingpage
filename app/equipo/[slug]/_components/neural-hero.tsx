import React from "react";
import { motion } from "framer-motion";
import { MagicCard, MagicContainer } from "@/components/ui/magic-bento";
import { TeamMember } from "@/types";
import { SocialLinks } from "./social-links";

export interface NeuralHeroProps {
  member: TeamMember;
}

export function NeuralHero({ member }: NeuralHeroProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
      }}
    >
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

          <SocialLinks member={member} />

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
  );
}
