"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/locale-context";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, Code2, Rocket, Send, Layers, Zap, TrendingUp, Settings, Shield, Cpu } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Code2,
  Rocket,
  Layers,
  Zap,
  TrendingUp,
  Settings,
  Shield,
  Cpu,
};

export default function ServiciosPage() {
  const { data, isEnglish } = useLocale();
  const { servicesPage } = data;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success(
      isEnglish ? "Inquiry sent" : "Consulta enviada",
      { description: isEnglish ? "We'll contact you soon." : "Te contactaremos pronto." }
    );
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const comoTrabajamos = isEnglish ? "How we work" : "Cómo trabajamos";
  const areasConsultoria = isEnglish ? "Consulting Areas" : "Áreas de Consultoría";
  const seleccionar = isEnglish ? "Select..." : "Seleccionar...";
  const enviando = isEnglish ? "Sending..." : "Enviando...";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-12 md:py-16">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{servicesPage.title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{servicesPage.subtitle}</p>
        <p className="text-muted-foreground max-w-3xl">{servicesPage.subtitle2}</p>
      </section>

      {/* Development Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{comoTrabajamos}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {servicesPage.devSteps.map((step) => {
            const IconComponent = iconMap[step.icon ?? ""] || Search;
            return (
              <Card key={step.num}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <IconComponent className="size-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">{step.num}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator />

      {/* Consulting Areas */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{areasConsultoria}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicesPage.consultingAreas.map((area, index) => {
            const IconComponent = iconMap[area.icon] || Search;
            return (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                      <IconComponent className="size-4 text-primary" />
                    </div>
                    <CardTitle className="text-base">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator />

      {/* Contact Form */}
      <section className="space-y-6">
        <Card>
          <CardHeader className="space-y-2">
            <CardTitle>{servicesPage.formIntro.title}</CardTitle>
            <CardDescription>{servicesPage.formIntro.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {servicesPage.form.fields.nameLabel}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={servicesPage.form.fields.namePlaceholder}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    {servicesPage.form.fields.companyLabel}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder={servicesPage.form.fields.companyPlaceholder}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {servicesPage.form.fields.emailLabel}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={servicesPage.form.fields.emailPlaceholder}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium">
                  {servicesPage.form.fields.typeLabel}
                </label>
                <select
                  id="type"
                  name="type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">{seleccionar}</option>
                  {servicesPage.form.fields.typeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  {servicesPage.form.fields.descriptionLabel}
                </label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder={servicesPage.form.fields.descriptionPlaceholder}
                  rows={4}
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  enviando
                ) : (
                  <>
                    <Send className="size-4 mr-2" />
                    {servicesPage.form.submitButton}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
