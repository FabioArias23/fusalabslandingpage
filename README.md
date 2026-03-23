# FUSA LABS - Landing Page

Plataforma web corporativa y de alta conversión para **FUSA LABS** (AI Venture Builder). Diseñada con una estética minimalista, *High-Tech* y *Cyber-Corporate* para transmitir autoridad y escalabilidad global en el desarrollo de Inteligencia Artificial.

## 🚀 Tecnologías Principales

- **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
- **Librería UI:** [React](https://reactjs.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Formularios:** [Web3Forms](https://web3forms.com/) (API para envío de emails sin backend)

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular enfocada en la mantenibilidad y la separación de responsabilidades:

```text
landing-page-main/
├── public/
│   └── fonts/               # Archivos de fuentes locales (ej. Conthrax-SemiBold)
├── src/
│   ├── components/          # Componentes UI reutilizables (Logo, Spotlight, etc.)
│   ├── data/
│   │   └── landingData.json # Fuente de la verdad del contenido (Textos, Links, etc.)
│   ├── hooks/               # Custom hooks de React (Scroll, Mouse tracking, Intersections)
│   ├── pages/               # Rutas de Next.js (App, Document, Index)
│   ├── sections/            # Secciones principales de la landing page
│   │   ├── Contact/         # Formulario de contacto integrado con Web3Forms
│   │   ├── Footer/          # Pie de página y links sociales
│   │   ├── Hero/            # Encabezado principal con animación Matrix/Decodificación
│   │   ├── Methodology/     # Pasos operativos
│   │   ├── Navigation/      # Barra de navegación (Soporte i18n básico)
│   │   ├── Pricing/         # Esquema de productos/servicios
│   │   └── Services/        # Tarjetas interactivas de servicios
│   └── styles/
│       └── index.css        # Estilos globales, Tailwind, animaciones y patrón neuronal
├── tailwind.config.js       # Configuración de Tailwind y paleta de colores corporativa
└── package.json             # Dependencias y scripts
```

## ⚙️ Configuración del Entorno

Para que el formulario de contacto funcione correctamente, necesitas crear un archivo `.env.local` en la raíz del proyecto y agregar tu clave de acceso de Web3Forms:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu-clave-de-acceso-aqui
```

## 🛠️ Scripts y Compilación

Asegúrate de tener Node.js instalado. Ejecuta los siguientes comandos en tu terminal:

### 1. Instalar dependencias
```bash
npm install
```

### 2. Entorno de desarrollo (Local)
```bash
npm run dev
```
*Abre http://localhost:3000 en tu navegador para ver el resultado.*

### 3. Compilación para Producción (Deploy)
```bash
npm run build
```
*Este script optimizará el proyecto y generará los estáticos en la carpeta `.next`. Posteriormente, puedes iniciar el servidor de producción con `npm run start` o desplegarlo en plataformas como Vercel o Cloudflare Pages.*# fusalabslandingpage
