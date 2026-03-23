import { ContactForm } from "./ContactForm";
import { InfoCard } from "./InfoCard";
import type { ContactProps } from "./types";

export const Contact = ({
  title,
  greeting,
  description,
  form,
  cards,
}: ContactProps) => {
  return (
    <section id="contacto" className="py-28 px-6 md:px-12 border-t border-fusa-indigo/20 relative z-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column - Contact Form */}
        <div className="lg:col-span-5">
          <h2 className="font-conthrax text-5xl md:text-7xl mb-12 leading-tight">
            {title}
          </h2>
          <ContactForm form={form} />
        </div>

        {/* Right Column - Info Cards */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-conthrax leading-tight">
              {greeting}
            </h3>
            <p className="text-xl text-fusa-white/60 leading-relaxed">{description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {cards.map((card, idx) => (
              <InfoCard key={idx} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
