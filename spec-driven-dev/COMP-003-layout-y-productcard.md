# COMP-003: Layout wrapper y ProductCard

## Estado: PENDIENTE

## Contexto

Las paginas nuevas (/equipo, /servicios, /productos/[slug]) necesitan un layout compartido que incluya Navigation + Footer + Spotlight sin duplicar codigo. Ademas se necesita un ProductCard reutilizable.

## Layout.tsx

### Proposito
Wrapper para todas las subpaginas. La home (`index.tsx`) puede seguir armandose manualmente o migrar a Layout — decision: **no tocar la home**, Layout es solo para paginas nuevas.

### Estructura

```tsx
<div className="min-h-screen bg-fusa-black text-fusa-white">
  <Spotlight mouseX={mouseX} mouseY={mouseY} />
  <Navigation {/* mismos props que en home */} />
  <main className="pt-32">  {/* padding-top para compensar nav fixed */}
    {children}
  </main>
  <Footer {/* mismos props que en home */} />
  <WhatsAppFAB />
</div>
```

### Props
- `children: ReactNode`
- Internamente maneja: idioma (estado + toggle), scroll (useScrolled), mouse (useMousePosition)
- Pasa los datos correctos a Navigation y Footer desde `landingData.json`

### Consideraciones
- El estado de idioma debe ser compartido. Opciones:
  - Context API simple (recomendado)
  - O prop drilling como hace la home actual
- **Decision**: crear un `LanguageContext` minimo para que Layout y las paginas accedan al idioma.

## ProductCard.tsx

### Proposito
Tarjeta de producto reutilizable para la seccion de productos en Home y potencialmente en otras paginas.

### Props

```tsx
interface ProductCardProps {
  name: string;
  slug: string;
  tagline: string;
  icon: string;       // nombre del icono Lucide
  tags: string[];
  demoUrl?: string;
  appUrl?: string;
  active: boolean;
}
```

### Estructura visual

```
┌─────────────────────────┐
│  [Icono]                │
│  Nombre del producto    │  ← Conthrax
│  Tagline breve          │  ← Inter/Space Grotesk
│                         │
│  [tag1] [tag2] [tag3]   │  ← badges pequeños
│                         │
│  Ver mas →   Demo       │  ← links
└─────────────────────────┘
```

### Estetica
- Fondo: `bg-white/[0.02]` con `border border-white/5`
- Hover: `hover:border-fusa-indigo/30` con transicion
- Icono: renderizado via `IconMap` existente
- "Ver mas" → `Link` de Next.js a `/productos/${slug}`
- "Demo" → link externo si existe `demoUrl`
- Si `active === false` → mostrar "Proximamente" en vez de links

## Archivos a crear

| Archivo | Descripcion |
|---|---|
| `src/components/Layout.tsx` | Layout wrapper con Nav + Footer + Spotlight |
| `src/components/ProductCard.tsx` | Tarjeta de producto reutilizable |
| `src/context/LanguageContext.tsx` | Context simple para idioma compartido |

## Archivos que NO se tocan

- `src/pages/index.tsx` — la home sigue con su estructura actual, no migra a Layout.
- Todos los sections existentes — intactos.

## Criterios de aceptacion

- [ ] Layout renderiza Navigation con todos los props correctos.
- [ ] Layout renderiza Footer con todos los props correctos.
- [ ] Layout incluye Spotlight y WhatsAppFAB.
- [ ] El padding-top compensa el nav fixed (no hay contenido tapado).
- [ ] Toggle de idioma en Layout afecta Navigation, Footer y children.
- [ ] ProductCard muestra icono, nombre, tagline, tags y links.
- [ ] ProductCard es responsive.
- [ ] ProductCard hover tiene transicion suave.
- [ ] Build exitoso.
