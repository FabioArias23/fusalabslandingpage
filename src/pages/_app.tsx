import "../styles/globals.css";
import "../styles/animations.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Head>
        {/* SEO Básico */}
        <title>Fusa Labs | AI Venture Builder & Neural Systems</title>
        <meta name="description" content="Creamos, escalamos y optimizamos soluciones con redes de agentes de IA para transformar la complejidad operativa en éxito empresarial." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/img/LOGOTIPO1.svg" />
        <link rel="shortcut icon" href="/img/LOGOTIPO1.svg" />
        <link rel="apple-touch-icon" href="/img/LOGOTIPO1.svg" />

        {/* Theming PWA y Navegador */}
        <meta name="theme-color" content="#1C058E" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* OpenGraph (WhatsApp, LinkedIn, Facebook, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fusalabs.com/" />
        <meta property="og:title" content="Fusa Labs | AI Venture Builder" />
        <meta property="og:description" content="Integrando Inteligencia Artificial en el ADN de tu negocio." />
        <meta property="og:image" content="https://www.fusalabs.com/img/LOGOTIPO1.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fusa Labs | AI Venture Builder" />
        <meta name="twitter:description" content="Integrando Inteligencia Artificial en el ADN de tu negocio." />
        <meta name="twitter:image" content="https://www.fusalabs.com/img/LOGOTIPO1.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
