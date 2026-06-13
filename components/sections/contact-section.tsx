"use client";

import { CheckCircle, Zap, Search, Shield, TrendingUp, Code2, Users, Rocket, Cpu, Layers } from "lucide-react";
import landingData from "@/data/landingData.json";
import { motion } from "framer-motion";
import { MagicCard, MagicContainer } from "@/components/ui/magic-bento";
import { ContactForm } from "@/components/sections/contact/contact-form";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu, Layers, Zap, Target: Zap, Shield, TrendingUp, Code2, Users, Search, Rocket, CheckCircle,
};

interface ContactSectionProps {
  data: typeof landingData.es;
  isEnglish: boolean;
}

const revealAnimation = {
  initial: { opacity: 0, scale: 0.8, y: 60 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

export function ContactSection({ data, isEnglish }: ContactSectionProps) {
  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-24 bg-transparent">
      <div className="max-w-[1800px] px-6 lg:pl-32 lg:pr-24">
        {/* Container with Blue Border for the whole section content */}
        <div className="border-l-4 sm:border-l-8 border-[#1C058E] pl-6 sm:pl-10 space-y-12">
          {/* Full Width Headers */}
          <motion.div {...revealAnimation}>
            <h2 
              className="font-heading text-4xl sm:text-5xl md:text-[4rem] transition-all scale-y-110 origin-left leading-tight"
              dangerouslySetInnerHTML={{ __html: data.contact.title }}
            />
            <div className="mt-8">
              <p 
                className="text-xl sm:text-2xl md:text-[2.32rem] text-muted-foreground font-light leading-tight"
                dangerouslySetInnerHTML={{ __html: data.contact.greeting }}
              />
            </div>
          </motion.div>

          {/* Two Column Section wrapped in MagicContainer */}
          <MagicContainer className="grid gap-12 lg:grid-cols-2">
            {/* Left Column: Description & Cards */}
            <motion.div {...revealAnimation} className="space-y-12 lg:pt-12">
              <p 
                className="text-lg sm:text-xl md:text-[1.8rem] text-muted-foreground leading-relaxed font-normal"
                dangerouslySetInnerHTML={{ __html: data.contact.description }}
              />
              
              <div className="space-y-6 lg:pt-4">
                {data.contact.cards.map((card, i) => {
                  const Icon = iconMap[card.icon] || CheckCircle;
                  return (
                    <MagicCard 
                      key={i} 
                      className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
                      spotlightRadius={200}
                    >
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
                        <div className="size-12 sm:size-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="size-6 sm:size-7 text-primary" />
                        </div>
                        <div>
                          <p className="text-xl sm:text-3xl font-semibold text-foreground/90">{card.title}</p>
                          <p className="text-base sm:text-[1.35rem] text-muted-foreground mt-1.5 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </MagicCard>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div {...revealAnimation} className="flex flex-col h-full lg:pt-8">
              <MagicCard 
                className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl"
                spotlightRadius={400}
              >
                <ContactForm formData={data.contact.form} />
              </MagicCard>
            </motion.div>
          </MagicContainer>
        </div>
      </div>
    </section>
  );
}
