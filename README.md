# FUSA LABS - Landing Page 🌌

Plataforma web corporativa y de alta conversión para **FUSA LABS** (AI Venture Builder). Diseñada con una estética minimalista, *High-Tech* y *Cyber Corporate* para transmitir autoridad y escalabilidad global en el desarrollo de Inteligencia Artificial y Automatización.

## 🚀 Tech Stack

La plataforma está construida bajo los estándares más modernos de performance y UI/UX:

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Componentes:** [shadcn/ui](https://ui.shadcn.com/)
- **Animaciones 3D:** [Framer Motion](https://www.framer.com/motion/) (CSS 3D `preserve-3d`, `perspective`)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Formularios:** Web3Forms (API para envío de emails sin backend)

## 🏗️ Arquitectura y Features Clave

- **Motor 3D Coverflow (`Pillar3DDeck`):** Sistema de carrusel inmersivo renderizado con CSS 3D y Framer Motion, utilizado en los pilares principales (IA, Software, Marketing) para mostrar mockups sin bordes flotando en el espacio 3D.
- **Data-Driven (i18n):** Todo el contenido de la landing, metadatos SEO y rutas de imágenes se alimentan dinámicamente desde `data/landingData.json` (soporte `es` / `en`).
- **Dynamic SEO:** Optimización técnica completa para web crawlers, OpenGraph y tags dinámicos basados en la configuración global.
- **Zero-Bloat Assets:** Política estricta de 3 imágenes `.webp` por pilar de servicio. Máximo performance, LCP optimizado y carga bajo demanda con `next/image`.

## 🎨 Identidad Visual y Tokens (Tailwind 4)

Este proyecto utiliza el nuevo motor de Tailwind 4. Las variables viven y se orquestan en `app/globals.css`.

### Paleta de Colores
- **Fusa Black:** `#050505` (Background principal)
- **Fusa White:** `#FDFDFD` (Foreground / Textos)
- **Fusa Indigo:** `#1C058E` (Acentos primarios)
- **Apoyo Tech (Dark):** `#A855F7` y `#BD34FE`

### Tipografías
- **Headings (Títulos):** `Conthrax` (Cargada localmente via webfonts).
- **Body / UI:** `Inter` (Variable font para máxima legibilidad).

## 💻 Desarrollo Local

Para levantar el entorno en tu máquina:

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
