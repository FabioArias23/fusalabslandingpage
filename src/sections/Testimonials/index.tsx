interface Testimonial {
  quote: string;
  name: string;
  company: string;
  result: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => (
  <section className="relative py-16 md:py-24">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`animate-reveal delay-${(i % 3) + 1} bg-white/[0.02] border border-white/5 rounded-sm p-6 md:p-8 hover:border-fusa-indigo/20 transition-all duration-500`}
          >
            <p className="text-sm text-white/60 leading-relaxed mb-6 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="border-t border-white/5 pt-4">
              <p className="font-conthrax text-[10px] text-fusa-white tracking-wide uppercase">
                {t.name}
              </p>
              <p className="text-[10px] text-fusa-indigo mt-1">{t.company}</p>
              <p className="text-[10px] text-white/30 mt-2">{t.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
