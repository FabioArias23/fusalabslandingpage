import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // obligatorio con export
  trailingSlash: true,           // recomendado para hosting estático
  async redirects() {
    return [
      {
        source: '/equipo',
        destination: '/#equipo',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
