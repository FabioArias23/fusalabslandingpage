import { useState } from "react";
import { Layout } from "../components/Layout";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import { iconMap, IconName } from "../components/IconMap";
import landingData from "../data/landingData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de IA y Automatización | Fusa Labs",
  description:
    "Arquitectura, desarrollo, automatización e IA aplicada para llevar procesos y productos a producción.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios de IA y Automatización | Fusa Labs",
    description:
      "Arquitectura, desarrollo, automatización e IA aplicada para llevar procesos y productos a producción.",
    url: "/servicios",
    siteName: "Fusa Labs",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    title: "Servicios de IA y Automatización | Fusa Labs",
    description:
      "Arquitectura, desarrollo, automatización e IA aplicada para llevar procesos y productos a producción.",
  },
};

function ServiciosContent() {
  const { lang } = useLanguage();
  const data = (landingData as any)[lang];
  const { title, subtitle, subtitle2, devSteps, consultingAreas, formIntro, form } = data.servicesPage;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    type: "",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setFormData({ name: "", company: "", email: "", type: "", description: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="pb-20 md:pb-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Hero */}
        <div className="mb-16 animate-reveal">
          <p className="text-[10px] uppercase tracking-[0.3em] text-fusa-indigo font-conthrax mb-4">
            (02)
          </p>
          <h1 className="font-conthrax text-3xl md:text-4xl lg:text-5xl text-fusa-white tracking-wide mb-4">
            {title}
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mb-3 leading-relaxed">{subtitle}</p>
          <p className="text-sm text-white/30 max-w-2xl leading-relaxed">{subtitle2}</p>
        </div>

        {/* Cómo trabajamos */}
        <div className="mb-20">
          <div className="mb-10 animate-reveal">
            <p className="text-[10px] uppercase tracking-[0.3em] text-fusa-indigo font-conthrax mb-4">
              {lang === "es" ? "Cómo trabajamos" : "How we work"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {devSteps.map((step: any, i: number) => {
              const StepIcon = iconMap[step.icon as IconName];
              return (
                <div
                  key={step.num}
                  className={`animate-reveal delay-${i + 1} bg-white/[0.02] border border-white/5 rounded-sm p-6 md:p-8 hover:border-fusa-indigo/20 transition-all duration-500`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-conthrax text-2xl text-fusa-indigo/30">
                      {step.num}
                    </span>
                    {StepIcon && <StepIcon size={20} className="text-fusa-indigo" />}
                  </div>
                  <h3 className="font-conthrax text-sm text-fusa-white tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Áreas de especialización */}
        <div className="mb-20">
          <div className="mb-10 animate-reveal">
            <p className="text-[10px] uppercase tracking-[0.3em] text-fusa-indigo font-conthrax mb-4">
              {lang === "es" ? "Áreas de especialización" : "Areas of expertise"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {consultingAreas.map((area: any, i: number) => {
              const AreaIcon = iconMap[area.icon as IconName];
              return (
                <div
                  key={area.title}
                  className={`animate-reveal delay-${(i % 3) + 1} bg-white/[0.02] border border-white/5 rounded-sm p-6 hover:border-fusa-indigo/20 transition-all duration-500`}
                >
                  {AreaIcon && (
                    <div className="w-10 h-10 rounded-sm bg-fusa-indigo/10 border border-fusa-indigo/20 flex items-center justify-center mb-4">
                      <AreaIcon size={20} className="text-fusa-indigo" />
                    </div>
                  )}
                  <h3 className="font-conthrax text-xs text-fusa-white tracking-wide mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form intro */}
        <div className="mb-12 max-w-2xl mx-auto text-center animate-reveal">
          <h2 className="font-conthrax text-xl md:text-2xl text-fusa-white tracking-wide mb-4">
            {formIntro.title}
          </h2>
          <p className="text-sm text-white/40 leading-relaxed">
            {formIntro.description}
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto animate-reveal">
          <h3 className="font-conthrax text-lg text-fusa-white tracking-wide mb-8 text-center">
            {form.title}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-conthrax block mb-2">
                  {form.fields.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={form.fields.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-fusa-white placeholder:text-white/20 focus:border-fusa-indigo/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-conthrax block mb-2">
                  {form.fields.companyLabel}
                </label>
                <input
                  type="text"
                  placeholder={form.fields.companyPlaceholder}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-fusa-white placeholder:text-white/20 focus:border-fusa-indigo/50 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-conthrax block mb-2">
                {form.fields.emailLabel}
              </label>
              <input
                type="email"
                required
                placeholder={form.fields.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-fusa-white placeholder:text-white/20 focus:border-fusa-indigo/50 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-conthrax block mb-2">
                {form.fields.typeLabel}
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-fusa-white focus:border-fusa-indigo/50 focus:outline-none transition-colors"
              >
                <option value="" className="bg-fusa-black">—</option>
                {form.fields.typeOptions.map((opt: string) => (
                  <option key={opt} value={opt} className="bg-fusa-black">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-conthrax block mb-2">
                {form.fields.descriptionLabel}
              </label>
              <textarea
                rows={4}
                placeholder={form.fields.descriptionPlaceholder}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-fusa-white placeholder:text-white/20 focus:border-fusa-indigo/50 focus:outline-none transition-colors resize-none"
              />
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-fusa-indigo text-fusa-white px-8 py-3 rounded-full shadow-[0_0_15px_rgba(28,5,142,0.5)] text-[11px] font-conthrax font-bold uppercase tracking-widest hover:shadow-[0_0_25px_rgba(28,5,142,0.8)] hover:scale-105 transition-all active:scale-95 disabled:opacity-50"
              >
                {status === "sending"
                  ? "..."
                  : status === "sent"
                  ? lang === "es" ? "Enviado!" : "Sent!"
                  : form.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function ServiciosPage() {
  return (
    <LanguageProvider>
      <Layout>
        <ServiciosContent />
      </Layout>
    </LanguageProvider>
  );
}