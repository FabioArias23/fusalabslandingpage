"use client";

import * as React from "react";
import {
  Cpu,
  Code2,
  Layers,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Users,
  Search,
  Rocket,
  CheckCircle,
} from "lucide-react";
import landingData from "@/data/landingData.json";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PillarCarousel } from "./services/pillar-carousel";
import { Pillar3DDeck } from "./services/pillar-3d-deck";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Layers,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Code2,
  Users,
  Search,
  Rocket,
  CheckCircle,
};

export function ServicesPreviewSection({
  data,
}: {
  data: typeof landingData.es;
}) {
  const pillars = data.services.pillars || [];

  return (
    <section id="servicios" className="pt-12 sm:pt-16 md:pt-24">
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1800px] mx-auto px-6 text-center mb-8 sm:mb-12 md:mb-16"
      >
        <h2 className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-[4.2rem] tracking-tight text-foreground/90 scale-y-110 origin-center">
          {data.services.title}
        </h2>
      </motion.div>

      <div className="flex flex-col">
        {pillars.map((pillar: any, index: number) => (
          <motion.div
            key={pillar.icon || index}
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + (index * 0.05) }}
            className={cn(
              "py-12 sm:py-16 md:py-24",
              index !== pillars.length - 1 && "border-b border-white/5",
            )}
          >
            {["Cpu", "TrendingUp", "Code2"].includes(pillar.icon) ? (
              <Pillar3DDeck pillar={pillar} />
            ) : (
              <PillarCarousel
                pillar={pillar}
                Icon={iconMap[pillar.icon] || Cpu}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
