import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/contexts/locale-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const conthrax = localFont({
  src: [
    {
      path: "../public/fonts/Conthrax-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fusa Labs | Soluciones AI & Software",
  description:
    "Modernizando negocios con inteligencia artificial y software a medida.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { BackToTop } from "@/components/BackToTop";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import AdaptiveAurora from "@/components/animations/AdaptiveAurora";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Static export: no podemos leer cookies en el server.
  // El idioma real se hidrata desde localStorage/document.cookie en el cliente
  // (ver LocaleProvider en contexts/locale-context.tsx).
  const initialLang = "es" as const;

  return (
    <html
      lang={initialLang}
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        conthrax.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LocaleProvider initialLang={initialLang}>
            <AdaptiveAurora />
            <Nav />
            {children}
            <Footer />
            <BackToTop />
            <WhatsAppFAB />
            <Toaster />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
