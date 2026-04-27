"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/contexts/locale-context";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import landingData from "@/data/landingData.json";

import TiltedCard from "@/components/animations/TiltedCard";

export default function EquipoPage() {
  const { data } = useLocale();
  const { team } = data;

  return (
    <main className="min-h-screen pb-16 sm:pb-24 pt-32 sm:pt-44">
      <div className="max-w-[1800px] px-6 lg:pl-32 lg:pr-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="mb-24 sm:mb-32 w-full border-l-4 border-[#1C058E] pl-8 sm:pl-12"
        >
          <p 
            className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-relaxed tracking-tight font-light dark:font-extralight text-foreground/90 dark:text-white/60"
            dangerouslySetInnerHTML={{ 
              __html: team.subtitle
                .replace("Fusa Labs", "<strong class='dark:text-white dark:font-medium!'>Fusa Labs</strong>")
                .replace("Agencia de Software con IA", "<strong class='dark:text-white dark:font-medium!'>Agencia de Software con IA</strong>")
                .replace("AI-powered software agency", "<strong class='dark:text-white dark:font-medium!'>AI-powered software agency</strong>")
                .replace("automatizar", "<strong class='dark:text-white dark:font-medium!'>automatizar</strong>")
                .replace("streamline their operations", "<strong class='dark:text-white dark:font-medium!'>streamline their operations</strong>")
                .replace("consolidar", "<strong class='dark:text-white dark:font-medium!'>consolidar</strong>")
                .replace("solidify their digital infrastructure", "<strong class='dark:text-white dark:font-medium!'>solidify their digital infrastructure</strong>")
                .replace("proyectar", "<strong class='dark:text-white dark:font-medium!'>proyectar</strong>")
                .replace("project", "<strong class='dark:text-white dark:font-medium!'>project</strong>")
                .replace("confianza", "<strong class='dark:text-white dark:font-medium!'>confianza</strong>")
                .replace("trust", "<strong class='dark:text-white dark:font-medium!'>trust</strong>")
            }}
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.8
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24"
        >
          {team.members.map((member: any) => (
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
                  <div className="mb-8 overflow-visible">
                    <TiltedCard
                      imageSrc={member.foto}
                      altText={member.name}
                      captionText={member.title}
                      containerHeight="320px"
                      containerWidth="320px"
                      imageHeight="300px"
                      imageWidth="300px"
                      imageZoom={member.zoom || 1}
                      imagePosition={member.position || "center"}
                      rotateAmplitude={20}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl sm:text-3xl group-hover:text-primary transition-colors scale-y-110">
                      {member.name}
                    </h3>
                    <p className="text-base sm:text-lg font-medium text-muted-foreground/80 tracking-wide">
                      {member.title}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
