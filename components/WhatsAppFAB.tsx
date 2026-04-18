import { MessageCircle } from "lucide-react";

export const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/5493518799794?text=Hola%20Fusa%20Labs,%20estoy%20interesado%20en%20sus%20servicios%20de%20IA."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-fusa-indigo-glow hover:shadow-fusa-indigo-glow-lg hover:scale-110 transition-all duration-300 [animation:fab-attention_10s_ease-in-out_infinite] group"
      aria-label="Contactar por WhatsApp"
      title="¡Hablemos por WhatsApp!"
    >
      <MessageCircle size={28} strokeWidth={1.5} className="group-hover:animate-pulse" />
    </a>
  );
};