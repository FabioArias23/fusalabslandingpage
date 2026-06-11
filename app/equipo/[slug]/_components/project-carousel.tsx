import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagicCard, MagicContainer } from "@/components/ui/magic-bento";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TeamMember } from "@/types";

export interface ProjectCarouselProps {
  member: TeamMember;
  portfolioLabel: string;
}

export function ProjectCarousel({ member, portfolioLabel }: ProjectCarouselProps) {
  if (!member.proyectos || member.proyectos.length === 0) return null;

  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
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
                  className="rounded-3xl bg-background/5 border border-border/20 transition-all duration-500 h-full shadow-lg dark:shadow-none flex flex-col group"
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
                    <p className="text-sm sm:text-base lg:text-lg text-foreground/50 dark:text-white leading-relaxed font-sans line-clamp-3">
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
  );
}
