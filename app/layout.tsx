import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { cookies } from "next/headers";
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

import { MouseGradient } from "@/components/MouseGradient";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import AdaptiveAurora from "@/components/animations/AdaptiveAurora";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value;
  const initialLang = cookieLang === "en" ? "en" : "es";

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
            {/* <MouseGradient /> */}
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
