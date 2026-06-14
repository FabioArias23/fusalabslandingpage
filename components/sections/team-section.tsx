"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TiltedCard from "@/components/animations/TiltedCard";

interface TeamMember {
  name: string;
  slug: string;
  title: string;
  foto: string;
  zoom?: number;
  position?: string;
}

interface TeamSectionProps {
  data: {
    team: {
      title?: string;
      subtitle: string;
      members: TeamMember[];
    };
  };
}

export function TeamSection({ data }: TeamSectionProps) {
  const { team } = data;

  return (
    <section id="equipo" className="py-24 sm:py-32 w-full overflow-hidden">
      <div className="max-w-[1800px] px-6 lg:pl-32 lg:pr-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-6xl scale-y-110 origin-center tracking-tight text-foreground/90">
            {team.title || "Conoce al Staff"}
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="mb-16 sm:mb-24 w-full border-l-4 border-[#1C058E] pl-8 sm:pl-12"
        >
          <p 
            className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-tight font-light dark:font-extralight text-foreground/90 dark:text-white/60"
            dangerouslySetInnerHTML={{ 
              __html: team.subtitle
            }}
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
          {team.members.map((member: TeamMember) => (
            <motion.div
              key={member.slug}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
              }}
            >
              <Link
                href={`/equipo/${member.slug}`}
                className="group block text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6 overflow-visible">
                    <TiltedCard
                      imageSrc={member.foto}
                      altText={member.name}
                      captionText={member.title}
                      containerHeight="240px"
                      containerWidth="240px"
                      imageHeight="220px"
                      imageWidth="220px"
                      imageZoom={member.zoom || 1}
                      imagePosition={member.position || "center"}
                      rotateAmplitude={15}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl sm:text-2xl group-hover:text-primary transition-colors scale-y-110">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-muted-foreground/80 tracking-wide">
                      {member.title}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
