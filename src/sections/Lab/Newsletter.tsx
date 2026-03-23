import { ArrowRight } from "lucide-react";

interface NewsletterProps {
  label: string;
  placeholder: string;
}

export const Newsletter = ({ label, placeholder }: NewsletterProps) => (
  <div className="w-full md:w-1/3 space-y-12">
    <div className="h-px bg-black/10 w-full" />
    <div className="space-y-6">
      <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
        {label}
      </span>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder={placeholder}
          className="bg-zinc-100 border-none rounded-xl px-6 py-4 flex-1 outline-none"
        />
        <button
          className="bg-black text-white p-4 rounded-xl"
          aria-label="Subscribe to newsletter"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </div>
);
