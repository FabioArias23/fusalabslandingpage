<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

ESTÁ COMPLETAMENTE PROHIBIDO GENERAR CODIGO CSS, JAMAS BAJO NINGUNA CIRCUNSTANCIA EDITAR O CREAR NUEVO CSS, TODO ES 100% A TRAVES DE TW Y SHADCN

# Fusa Landing

## Stack

- Next.js (App Router)
- Tailwind CSS 4
- shadcn/ui

Este proyecto usa Tailwind 4. No usamos el esquema de Tailwind 3 para tokens.

## Regla de estilos (obligatoria)

- Una sola hoja global: app/globals.css
- Estilos de UI via Tailwind utilities + componentes shadcn/ui
- No agregar CSS legacy en rutas paralelas

Estado actual verificado:

- CSS existentes en el repo: app/globals.css
- Import global activo: app/layout.tsx importa app/globals.css

## Design Tokens (Tailwind 4)

Los tokens viven en app/globals.css y se conectan a utilidades de Tailwind con @theme inline.

### 1. Tokens base

Definidos como variables CSS en :root y .dark:

- Superficie y texto: --background, --foreground
- Componentes: --card, --popover, --primary, --secondary, --muted, --accent, --destructive
- Bordes y foco: --border, --input, --ring
- Data viz: --chart-1 ... --chart-5
- Sidebar: --sidebar-\*
- Radius: --radius

Valores actuales en formato oklch(...) para mejor consistencia visual.

### 2. Mapeo a Tailwind

En @theme inline se exponen esos tokens como utilidades (--color-_, --radius-_, etc).

Ejemplos:

- --color-background: var(--background) -> bg-background
- --color-foreground: var(--foreground) -> text-foreground
- --color-border: var(--border) -> border-border
- --radius-lg: var(--radius) -> rounded-lg

### 3. Consumo en componentes

Usar clases utilitarias tokenizadas, por ejemplo:

- bg-background text-foreground
- border-border
- bg-card text-card-foreground
- bg-primary text-primary-foreground

## Identidad Fusa Labs (colores)

Paleta de marca (referencia de uso en UI):

- Fusa Black: #050505
- Fusa White: #FDFDFD
- Fusa Indigo: #1C058E

Paleta de apoyo que aparece en variantes legacy de marca:

- Brand 1 (light): #8E4EC6
- Brand 2 (light): #713CA1
- Brand 1 (dark): #A855F7
- Brand 2 (dark): #BD34FE

## Identidad Fusa Labs (tipografias)

Familias objetivo:

- Headings: Conthrax
- Body/UI: Inter

Archivos de fuente disponibles hoy en public/fonts:

- Conthrax-SemiBold.otf
- Conthrax-SemiBold.woff
- Conthrax-SemiBold.woff2
- Inter-VariableFont_opsz,wght.ttf
- Inter-Italic-VariableFont_opsz,wght.ttf

Nota para assets tipograficos:

- Si diseno/prod exige TTF como fuente canonica, usar los .ttf de Inter ya presentes.
- Para web performance, preferir .woff2 para entrega final en navegador.

## Checklist rapido

- Tokens centralizados en app/globals.css
- Una sola entrada global de estilos via app/layout.tsx
- Colores y fuentes de Fusa Labs documentados en este README
