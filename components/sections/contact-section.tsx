"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Zap, Search, Shield, TrendingUp, Code2, Users, Rocket, Cpu, Layers, CheckCircle2, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import landingData from "@/data/landingData.json";
import { motion } from "framer-motion";
import { MagicCard, MagicContainer } from "@/components/ui/magic-bento";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Extract form data
    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData.entries());

    try {
      /**
       * OPCIÓN RECOMENDADA: Formspree (Gratis y rápido)
       * 1. Creá una cuenta en https://formspree.io
       * 2. Creá un "New Form" y copidá el ID.
       * 3. Reemplazá 'tu_form_id' abajo.
       */
      /*
      const response = await fetch("https://formspree.io/f/tu_form_id", {
        method: "POST",
        body: JSON.stringify(dataObj),
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) throw new Error();
      */

      // Simulación de envío de 1.5s para feedback visual
      await new Promise(resolve => setTimeout(resolve, 1500));

      setStatus("success");
      toast.success(
        isEnglish
          ? "Message received! We'll contact you soon."
          : "¡Mensaje recibido! Te contactaremos pronto.",
      );
    } catch (error) {
      setStatus("idle");
      toast.error(
        isEnglish
          ? "Something went wrong. Please try again."
          : "Algo salió mal. Por favor, reintentalo.",
      );
    }
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
                  .replace("¿", '<span class="dark:text-[#1C058E]">¿</span>')
                  .replace("?", '<span class="dark:text-[#1C058E]">?</span>') 
              }}
            />
            <div className="mt-8">
              <p 
                className="text-xl sm:text-2xl md:text-[2.32rem] text-muted-foreground font-light leading-tight whitespace-nowrap"
                dangerouslySetInnerHTML={{ __html: data.contact.greeting.replace(/<br.*?\/>/g, " ") }}
              />
            </div>
          </motion.div>

          {/* Two Column Section wrapped in MagicContainer */}
          <MagicContainer className="grid gap-12 lg:grid-cols-2">
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
              
              <div className="space-y-6 lg:pt-4">
                {data.contact.cards.map((card, i) => {
                  const Icon = iconMap[card.icon] || CheckCircle;
                  return (
                    <MagicCard 
                      key={i} 
                      className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
                      spotlightRadius={200}
                    >
                      <div className="flex items-start gap-5">
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
                <Card className="h-full border-0 bg-transparent flex flex-col">
                  <CardContent className="flex-1 pt-6 sm:pt-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#1C058E] dark:text-white uppercase tracking-wider">
                        {isEnglish ? "CONTACT US" : "CONTACTANOS"}
                      </h3>
                    </div>
                    {status === "success" ? (
                      <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center animate-in fade-in zoom-in duration-500">
                        <div className="rounded-full bg-primary/10 p-4">
                          <CheckCircle2 className="h-16 w-16 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-foreground">
                            {isEnglish ? "Message Sent!" : "¡Mensaje Enviado!"}
                          </h3>
                          <p className="text-muted-foreground text-balanced max-w-[280px]">
                            {isEnglish 
                              ? "Thank you for reaching out. Our team will get back to you shortly." 
                              : "Gracias por contactarnos. Nuestro equipo te responderá a la brevedad."}
                          </p>
                        </div>
                        <Button 
                          variant="outline" 
                          onClick={() => setStatus("idle")}
                          className="mt-4"
                        >
                          {isEnglish ? "Send another message" : "Enviar otro mensaje"}
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-base">{data.contact.form.nameLabel}</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.contact.form.namePlaceholder}
                            required
                            disabled={status === "loading"}
                            className="h-12 bg-background/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base">{data.contact.form.emailLabel}</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={data.contact.form.emailPlaceholder}
                            required
                            disabled={status === "loading"}
                            className="h-12 bg-background/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-base">
                            {data.contact.form.messageLabel}
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder={data.contact.form.messagePlaceholder}
                            rows={4}
                            disabled={status === "loading"}
                            className="text-base sm:text-sm bg-background/50"
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full h-12 text-base shadow-lg shadow-primary/20 group"
                          disabled={status === "loading"}
                        >
                          {status === "loading" ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="h-5 w-5 animate-spin" />
                              <span>{isEnglish ? "Sending..." : "Enviando..."}</span>
                            </div>
                          ) : (
                            <>
                              {data.contact.form.submitButton}
                              <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </MagicCard>
            </motion.div>
          </MagicContainer>
        </div>
      </div>
    </section>
  );
}
