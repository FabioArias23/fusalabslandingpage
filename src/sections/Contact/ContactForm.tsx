import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

interface ContactFormProps {
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
  };
}

export const ContactForm = ({ form }: ContactFormProps) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.toString() || "";

    // Expresión regular estándar para validación de emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setStatus("loading");

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000); // Vuelve al estado normal tras 5 seg
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-[10px] font-conthrax uppercase tracking-widest text-white/60 ml-1">
          {form.nameLabel}
        </label>
        <input
          name="name"
          type="text"
          placeholder={form.namePlaceholder}
          className="w-full bg-fusa-indigo/[0.02] border border-white/5 rounded-sm px-5 py-4 outline-none focus:border-fusa-indigo focus:bg-fusa-indigo/5 transition-all text-fusa-white placeholder:text-white/20 font-inter text-sm"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-conthrax uppercase tracking-widest text-white/60 ml-1">
          {form.emailLabel}
        </label>
        <input
          name="email"
          type="email"
          placeholder={form.emailPlaceholder}
          className={`w-full bg-fusa-indigo/[0.02] border ${
            emailError ? "border-red-500/50" : "border-white/5"
          } rounded-sm px-5 py-4 outline-none focus:border-fusa-indigo focus:bg-fusa-indigo/5 transition-all text-fusa-white placeholder:text-white/20 font-inter text-sm`}
          required
          onChange={() => setEmailError("")}
        />
        {emailError && <p className="text-[10px] text-red-400 font-inter ml-1">{emailError}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-conthrax uppercase tracking-widest text-white/60 ml-1">
          {form.messageLabel}
        </label>
        <textarea
          name="message"
          placeholder={form.messagePlaceholder}
          rows={5}
          className="w-full bg-fusa-indigo/[0.02] border border-white/5 rounded-sm px-5 py-4 outline-none resize-none focus:border-fusa-indigo focus:bg-fusa-indigo/5 transition-all text-fusa-white placeholder:text-white/20 font-inter text-sm"
          required
        />
      </div>

      <div className="pt-4">
        {status === "error" && (
          <div className="mb-4 p-4 rounded-sm bg-red-500/10 border border-red-500/30 flex items-center justify-center gap-3 text-red-400 text-[10px] font-conthrax tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span>ERROR DE TRANSMISIÓN. INTENTA NUEVAMENTE.</span>
          </div>
        )}
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full bg-fusa-indigo text-fusa-white py-5 rounded-full font-conthrax text-base hover:bg-fusa-indigo/90 transition-all flex items-center justify-center gap-3 group shadow-[0_0_15px_rgba(28,5,142,0.3)] disabled:opacity-80 disabled:cursor-default"
        >
          <span>
            {status === "loading" ? "ENVIANDO..." : status === "success" ? "TRANSMISIÓN EXITOSA" : form.submitButton}
          </span>
          {status === "idle" && (
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          )}
        </button>
      </div>
    </form>
  );
};
