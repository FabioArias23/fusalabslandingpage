"use client";

import { ArrowRight, CheckCircle, Zap, Search, Shield, TrendingUp, Code2, Users, Rocket, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import landingData from "@/data/landingData.json";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu, Layers, Zap, Target: Zap, Shield, TrendingUp, Code2, Users, Search, Rocket, CheckCircle,
};

interface ContactSectionProps {
  data: typeof landingData.es;
  isEnglish: boolean;
}

const revealAnimation = {
  initial: { opacity: 0, scale: 0.98, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

export function ContactSection({ data, isEnglish }: ContactSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      isEnglish
        ? "Message sent! We'll get back to you soon."
        : "¡Mensaje enviado! Te responderemos pronto.",
    );
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-24 bg-transparent">
      <div className="max-w-[1800px] px-6 lg:pl-32 lg:pr-24">
        {/* Container with Blue Border for the whole section content */}
        <div className="border-l-4 sm:border-l-8 border-[#1C058E] pl-6 sm:pl-10 space-y-12">
          {/* Full Width Headers */}
          <motion.div {...revealAnimation}>
            <h2 
              className="font-heading text-4xl sm:text-5xl md:text-[4rem] transition-all scale-y-110 origin-left leading-none whitespace-nowrap"
              dangerouslySetInnerHTML={{ 
                __html: data.contact.title.replace(/<br.*?\/>/g, " ")
                  .replace("¿", '<span class="text-[#1C058E]">¿</span>')
                  .replace("?", '<span class="text-[#1C058E]">?</span>') 
              }}
            />
            <div className="mt-8">
              <p 
                className="text-xl sm:text-2xl md:text-[2.32rem] text-muted-foreground font-light leading-tight whitespace-nowrap"
                dangerouslySetInnerHTML={{ __html: data.contact.greeting.replace(/<br.*?\/>/g, " ") }}
              />
            </div>
          </motion.div>

          {/* Two Column Section */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column: Description & Cards */}
            <motion.div {...revealAnimation} className="space-y-12 lg:pt-12">
              <p 
                className="text-lg sm:text-xl md:text-[1.8rem] text-muted-foreground leading-relaxed font-normal"
                dangerouslySetInnerHTML={{ 
                  __html: data.contact.description
                    .replace("consultorias", '<strong class="font-bold text-foreground">consultorias</strong>')
                    .replace("personalizadas", '<strong class="font-bold text-foreground">personalizadas</strong>')
                    .replace("Productos IA", '<strong class="font-bold text-foreground">Productos IA</strong>')
                }}
              />
              
              <div className="space-y-10 lg:pt-4">
                {data.contact.cards.map((card, i) => {
                  const Icon = iconMap[card.icon] || CheckCircle;
                  return (
                    <div key={i} className="flex items-start gap-5">
                      <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="size-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl sm:text-3xl font-semibold text-foreground/90">{card.title}</p>
                        <p className="text-lg sm:text-[1.35rem] text-muted-foreground mt-1.5 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div {...revealAnimation} className="flex flex-col justify-start lg:pt-4">
              <Card>
                <CardContent className="pt-6 sm:pt-8">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">{data.contact.form.nameLabel}</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={data.contact.form.namePlaceholder}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">{data.contact.form.emailLabel}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={data.contact.form.emailPlaceholder}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base">
                        {data.contact.form.messageLabel}
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={data.contact.form.messagePlaceholder}
                        rows={4}
                        className="text-base sm:text-sm"
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 text-base">
                      {data.contact.form.submitButton}
                      <ArrowRight className="size-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
