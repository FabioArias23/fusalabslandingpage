"use client";

import { useLocale } from "@/contexts/locale-context";
import { Separator } from "@/components/ui/separator";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const { data } = useLocale();
  const { footer } = data;

  const getSocialIcon = (social: string): React.ReactNode => {
    switch (social.toLowerCase()) {
      case "mail":
        return <Mail className="size-4" />;
      case "whatsapp":
        return <MessageCircle className="size-4" />;
      default:
        return <span className="text-xs">{social.charAt(0)}</span>;
    }
  };

  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand & Copyright */}
          <div className="space-y-4">
            <div>
              <span className="text-lg font-bold tracking-tight">FUSA</span>
              <span className="text-lg font-light tracking-tight text-muted-foreground">
                {" "}
                LABS
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{footer.copyright}</p>
            {footer.status.active && (
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                <span className="size-2 rounded-full bg-green-600" />
                {footer.status.text}
              </div>
            )}
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {footer.location.title}
            </h4>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {footer.location.text}
            </p>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Social
            </h4>
            <div className="flex gap-3">
              {footer.social.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social}
                >
                  {getSocialIcon(social)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            {data.branding.footer}
          </p>
        </div>
      </div>
    </footer>
  );
}
