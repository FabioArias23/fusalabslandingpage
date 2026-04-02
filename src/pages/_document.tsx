import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const baseUrl = "https://www.fusalabs.com";

  return (
    <Html lang="es">
      <Head>
        {/* Root metadataBase for Next.js Metadata API */}
        <meta name="metadataBase" content={baseUrl} />

        {/* Favicons */}
        <link rel="icon" href="/img/logofusalabs.png.png" />
        <link rel="shortcut icon" href="/img/logofusalabs.png.png" />
        <link rel="apple-touch-icon" href="/img/logofusalabs.png.png" />

        {/* Theme / PWA */}
        <meta name="theme-color" content="#1C058E" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Twitter global */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fusalabs" />

        {/* OpenGraph global */}
        <meta property="og:site_name" content="Fusa Labs" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}