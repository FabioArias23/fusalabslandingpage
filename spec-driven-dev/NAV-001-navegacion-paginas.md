# NAV-001: Links de Equipo, Servicios y Productos visibles en navegacion

## Estado: PENDIENTE

## Contexto

La navegacion actual (`src/sections/Navigation/index.tsx`) muestra 3 items: Inicio, Productos, Proyectos. Todos son anchors internos (`#inicio`, `#productos`, `#proyectos`) dentro de la single page.

Se necesita agregar links a las nuevas paginas (`/equipo`, `/servicios`, `/productos`) que sean **siempre visibles, centrados, tanto en mobile como en desktop**.

Actualmente el menu desktop usa `hidden lg:flex` — es decir, en mobile/tablet **no se ve ningun menu item**, solo logo + idioma + CTA.

## Problema

1. Los items de menu **desaparecen** en pantallas < `lg` (1024px).
2. No existen links a `/equipo`, `/servicios`, `/productos` (solo anchors internos).

## Requisitos

### R1 — Nuevos items de navegacion
- Agregar 3 nuevos items al menu: **Equipo**, **Servicios**, **Productos**.
- Estos deben ser `<Link>` de Next.js (no anchors `#`), apuntando a:
  - `/equipo`
  - `/servicios`
  - `/productos` (pagina indice de productos)
- Idioma ingles: **Team**, **Services**, **Products**.

### R2 — Visibles siempre, centrados
- Los 3 links nuevos deben estar **visibles en todas las resoluciones** (mobile, tablet, desktop).
- Deben estar **centrados horizontalmente** en la barra de navegacion.
- En mobile: pueden tener texto mas pequeno o spacing reducido, pero **nunca ocultarse**.

### R3 — No romper nada existente
- El logo a la izquierda **no cambia**.
- El toggle de idioma (ES/EN) **no cambia**.
- El boton CTA "CONTACTO" **no cambia**.
- Las animaciones del nav (scroll state, hover glow, underline, sonido) **se mantienen intactas**.
- La transicion scroll (`py-8` → `py-3`, backdrop blur, border indigo) **no cambia**.

## Diseno propuesto

### Layout del nav (3 columnas)

```
| Logo |  Equipo  Servicios  Productos  | Idioma  CTA |
```

### Desktop (>= lg)
- Mantener los items actuales (Inicio, Productos, Proyectos como anchors) si se desea, O reemplazarlos por los nuevos links. **Decision**: reemplazar — los anchors internos pierden sentido con paginas dedicadas.
- Misma estetica actual: `text-[10px] font-bold tracking-[0.25em] text-fusa-white/40 uppercase font-conthrax`.
- Hover: underline indigo con glow + sonido.
- Efecto radial gradient en mouse move se mantiene.

### Mobile/Tablet (< lg)
- Los 3 links deben mostrarse centrados.
- Tamano de texto reducido: `text-[8px]` o `text-[9px]`.
- Spacing reducido: `gap-4` o `gap-6` en lugar de `gap-14`.
- Sin efecto radial gradient (innecesario en touch).
- Sin sonido en hover (innecesario en touch).
- Underline hover se mantiene si cabe.

### Responsive breakpoints

| Breakpoint | Texto | Gap | Padding nav |
|---|---|---|---|
| < 640px (mobile) | `text-[8px]` | `gap-4` | `px-4` |
| 640-1023px (tablet) | `text-[9px]` | `gap-6` | `px-6` |
| >= 1024px (desktop) | `text-[10px]` | `gap-14` | `px-12` |

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/sections/Navigation/index.tsx` | Reemplazar `hidden lg:flex` por `flex`. Cambiar items y `sectionMap` por links Next.js. Ajustar responsive. |
| `src/data/landingData.json` | Actualizar `navigation.menuItems` en ES y EN con los nuevos nombres. Agregar campo `menuLinks` con las rutas. |
| `src/sections/Navigation/types.ts` | Agregar `menuLinks: string[]` al interface si se separan labels de rutas. |

## Archivos que NO se tocan

- `src/sections/Hero/` — intacto
- `src/sections/Services/` — intacto
- `src/sections/Methodology/` — intacto
- `src/sections/Pricing/` — intacto
- `src/sections/Contact/` — intacto
- `src/sections/Footer/` — intacto
- `src/components/Logo.tsx` — intacto
- `src/components/Spotlight.tsx` — intacto
- `src/components/WhatsAppFAB.tsx` — intacto
- `src/styles/` — intacto
- `tailwind.config.js` — intacto

## Criterios de aceptacion

- [ ] Los 3 links (Equipo, Servicios, Productos) aparecen centrados en desktop.
- [ ] Los 3 links aparecen centrados en mobile (320px+).
- [ ] Los 3 links aparecen centrados en tablet.
- [ ] Click en cada link navega a la ruta correspondiente.
- [ ] El toggle de idioma cambia los labels (ES: Equipo/Servicios/Productos, EN: Team/Services/Products).
- [ ] Logo, CTA, toggle de idioma funcionan exactamente igual que antes.
- [ ] Animacion de scroll del nav (fondo, blur, border, shadow) no se altera.
- [ ] Hover effects en desktop (underline, glow, sonido, radial gradient) funcionan.
- [ ] No hay scroll horizontal en ninguna resolucion.
- [ ] La landing compila sin errores (`npm run build`).
