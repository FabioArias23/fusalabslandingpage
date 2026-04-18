"use client";

import { useLocale } from "@/contexts/locale-context";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Cpu,
  Layers,
  MessageCircle,
  Rocket,
  Search,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import landingData from "@/data/landingData.json";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

// Modular section components (Lego blocks)
import { ServicesPreviewSection } from "@/components/sections/services-preview";

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

function HeroSection({
  data,
  isEnglish,
}: {
  data: typeof landingData.es;
  isEnglish: boolean;
}) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8">
          {/* Title */}
          <div>
            <h1 className="font-heading text-5xl md:text-7xl tracking-tight">
              {data.hero.title}
              <span className="text-muted-foreground">
                {data.hero.subtitle}
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-lg text-muted-foreground">
            {data.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="h-16 px-12 text-2xl font-semibold rounded-xl"
            >
              <Link href="#contacto">
                {isEnglish ? "Start Today!" : "Empezá hoy mismo"}
                <ArrowRight className="size-7 ml-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({
  data,
  isEnglish,
}: {
  data: typeof landingData.es;
  isEnglish: boolean;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      isEnglish
        ? "Message sent! We'll get back to you soon."
        : "¡Mensaje enviado! Te responderemos pronto.",
    );
  };

  return (
    <section id="contacto" className="py-16 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl">
                {data.contact.title}
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                {data.contact.greeting}
              </p>
              <p className="mt-2 text-muted-foreground">
                {data.contact.description}
              </p>
            </div>

            <div className="space-y-4">
              {data.contact.cards.map((card, i) => {
                const Icon = iconMap[card.icon] || CheckCircle;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{card.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{data.contact.form.nameLabel}</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={data.contact.form.namePlaceholder}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{data.contact.form.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={data.contact.form.emailPlaceholder}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    {data.contact.form.messageLabel}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={data.contact.form.messagePlaceholder}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  {data.contact.form.submitButton}
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const { data, isEnglish } = useLocale();

  return (
    <TooltipProvider>
      <main className="flex flex-col">
        <HeroSection data={data} isEnglish={isEnglish} />
        <ServicesPreviewSection data={data} />
        <ContactSection data={data} isEnglish={isEnglish} />

        {/* WhatsApp FAB */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              size="icon"
              className="fixed right-6 bottom-6 size-14 rounded-full shadow-lg"
            >
              <a
                href="https://wa.me/5491111111111"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isEnglish ? "Open WhatsApp" : "Abrir WhatsApp"}
              >
                <MessageCircle className="size-6" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            {isEnglish ? "Chat on WhatsApp" : "Hablar por WhatsApp"}
          </TooltipContent>
        </Tooltip>
      </main>
    </TooltipProvider>
  );
}
