"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useLocale } from "@/contexts/locale-context";

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  const { data } = useLocale();
  const { footer } = data.global;

  return (
    <footer className="mt-auto py-12 border-t border-border/40">
      <div className="max-w-[1800px] mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <Link
            href={footer.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-10 rounded-full border border-border/40 bg-card/50 hover:bg-card/80 hover:scale-110 transition-all text-foreground hover:text-primary"
            title="WhatsApp Fusa Labs"
          >
            <MessageCircle className="size-5" />
          </Link>
          <Link
            href={footer.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-10 rounded-full border border-border/40 bg-card/50 hover:bg-card/80 hover:scale-110 transition-all text-foreground hover:text-primary"
            title="Instagram Fusa Labs"
          >
            <Instagram className="size-5" />
          </Link>
          <Link
            href={footer.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-10 rounded-full border border-border/40 bg-card/50 hover:bg-card/80 hover:scale-110 transition-all text-foreground hover:text-primary"
            title="LinkedIn Fusa Labs"
          >
            <Linkedin className="size-5" />
          </Link>
        </div>
        <p 
          className="text-xs tracking-[0.3em] text-muted-foreground/50 uppercase text-center"
          dangerouslySetInnerHTML={{ __html: footer.copyright }}
        />
      </div>
    </footer>
  );
}
