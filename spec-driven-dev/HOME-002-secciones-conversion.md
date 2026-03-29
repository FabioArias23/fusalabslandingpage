# HOME-002: Secciones de conversion en Home Page

## Estado: PENDIENTE

## Contexto

La home de produccion (`pages/index.tsx`) tiene: Hero, Services, Methodology, Pricing, Contact, Footer.
El borrador agrega 5 secciones estrategicas de conversion que faltan en produccion.

## Secciones a agregar (en orden de aparicion)

### S1 — Metricas (despues del Hero)
4 tarjetas KPI en fila horizontal:
- **4+ productos** SaaS activos
- **8 expertos** en el equipo
- **7 areas** de expertise
- **24hs** tiempo de respuesta

Cada tarjeta: numero grande + label debajo. Fondo `bg-white/[0.02]` con `border border-white/5`. Grid `grid-cols-2 md:grid-cols-4`.

**Bilingue**: traducir labels a EN.

### S2 — Trust Points (despues de Services)
4 tarjetas de propuesta de valor:
1. **Arquitectura soberana** — Tu codigo, tu infraestructura, sin lock-in
2. **IA orientada a ROI** — No modelos aislados, IA integrada en tu stack
3. **Stack de ultima generacion** — Next.js, NestJS, TypeORM, LangChain
4. **Equipo real** — No freelancers rotativos, equipo estable y dedicado

Misma estetica que service cards: fondo oscuro, border sutil, icono Lucide arriba.

**Bilingue**: traducir a EN.

### S3 — Productos SaaS (despues de Trust Points)
Seccion que muestra las 4 tarjetas de producto usando el nuevo `ProductCard` component (ver COMP-003).
- Titulo de seccion: "Nuestros productos" / "Our products"
- Grid `grid-cols-1 md:grid-cols-2` con gap-6
- Datos vienen de `productsConfig.json` (ver DATA-004)
- Cada card linkea a `/productos/[slug]`

### S4 — Testimonios (despues de Productos)
3 tarjetas de caso de estudio / quote:
- Quote text + nombre del cliente + empresa + resultado
- Fondo `bg-white/[0.02]` con `border border-white/5`
- Grid `grid-cols-1 md:grid-cols-3`
- Contenido placeholder hasta tener testimonios reales

**Bilingue**: traducir a EN.

### S5 — CTA de conversion (despues de Testimonios)
Seccion full-width con:
- Titulo: "Listo para integrar IA?" / "Ready to integrate AI?"
- Subtitulo de 1-2 lineas
- Boton CTA grande que scrollea a contacto o abre WhatsApp
- Fondo con gradiente sutil indigo

## Orden final del Home

```
1. Navigation (existente)
2. Hero (existente)
3. **Metricas** (NUEVA)
4. Services (existente)
5. **Trust Points** (NUEVA)
6. Methodology (existente)
7. **Productos SaaS** (NUEVA)
8. **Testimonios** (NUEVA)
9. **CTA Conversion** (NUEVA)
10. Pricing (existente)
11. Contact (existente)
12. Footer (existente)
```

## Restricciones

- Cada seccion nueva debe usar `animate-reveal` con delays stagger igual que las existentes.
- Fuente Conthrax para titulos de seccion, Inter/Space Grotesk para body.
- Paleta: `fusa-black`, `fusa-white`, `fusa-indigo` — nada nuevo.
- Responsive mobile-first con breakpoints `md:` y `lg:`.
- Las secciones existentes (Hero, Services, Methodology, Pricing, Contact, Footer) **no se modifican**.

## Archivos a crear

| Archivo | Descripcion |
|---|---|
| `src/sections/Metrics/index.tsx` | Seccion de metricas KPI |
| `src/sections/TrustPoints/index.tsx` | Propuesta de valor |
| `src/sections/Products/index.tsx` | Grid de productos SaaS |
| `src/sections/Testimonials/index.tsx` | Casos de estudio |
| `src/sections/CTA/index.tsx` | Call to action conversion |

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/pages/index.tsx` | Importar y renderizar las 5 secciones nuevas en el orden correcto |
| `src/data/landingData.json` | Agregar datos bilingues para metricas, trust points, testimonios, CTA |

## Criterios de aceptacion

- [ ] Las 5 secciones nuevas se renderizan en el orden especificado.
- [ ] Cada seccion es responsive (mobile, tablet, desktop).
- [ ] Toggle de idioma afecta el contenido de todas las secciones nuevas.
- [ ] Animaciones reveal con stagger funcionan al hacer scroll.
- [ ] Las secciones existentes no cambian visualmente ni funcionalmente.
- [ ] Productos SaaS muestra 4 cards con link a `/productos/[slug]`.
- [ ] Build exitoso sin errores.
