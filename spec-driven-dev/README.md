# Specs — Merge borrador → produccion

## Orden de implementacion

Las dependencias dictan el orden. Se ejecutan en capas:

### Capa 1 — Fundamentos (sin dependencias)
| Spec | Descripcion | Archivos nuevos | Archivos modificados |
|---|---|---|---|
| **DATA-004** | productsConfig.json + extensiones landingData.json | `productsConfig.json` | `landingData.json` |
| **NAV-001** | Links Equipo/Servicios/Productos siempre visibles | — | `Navigation/index.tsx`, `landingData.json`, `Navigation/types.ts` |

### Capa 2 — Componentes compartidos (depende de Capa 1)
| Spec | Descripcion | Archivos nuevos |
|---|---|---|
| **COMP-003** | Layout wrapper + ProductCard + LanguageContext | `Layout.tsx`, `ProductCard.tsx`, `LanguageContext.tsx` |

### Capa 3 — Paginas y secciones (depende de Capa 2)
| Spec | Descripcion | Archivos nuevos | Archivos modificados |
|---|---|---|---|
| **HOME-002** | 5 secciones de conversion en Home | `Metrics/`, `TrustPoints/`, `Products/`, `Testimonials/`, `CTA/` | `pages/index.tsx` |
| **PAGE-002** | Pagina /equipo | `pages/equipo.tsx` | — |
| **PAGE-003** | Pagina /servicios | `pages/servicios.tsx` | — |
| **PAGE-004** | Paginas /productos/[slug] | `pages/productos/[slug].tsx` | — |

### Capa 3 se puede paralelizar — las 4 specs son independientes entre si.

## Reglas generales

- **Estetica de produccion intocable**: colores fusa-black/fusa-white/fusa-indigo, Conthrax, Logo, animaciones.
- **Bilingue obligatorio**: todo contenido nuevo en ES y EN.
- **No romper nada existente**: Hero, Services, Methodology, Pricing, Contact, Footer, WhatsAppFAB — intactos.
- **Build limpio**: cada spec debe dejar el proyecto en estado buildeable.
