# PAGE-004: Paginas de Productos (/productos/[slug])

## Estado: PENDIENTE

## Contexto

No existen paginas individuales de producto en produccion. El borrador tiene `pages/productos/[slug].tsx` con SSG (getStaticPaths/getStaticProps) para 4 productos.

## Productos

| Producto | Slug | Icono | Tags | Pricing |
|---|---|---|---|---|
| Dentalogic | `dentalogic` | Cpu | Salud, IA, WhatsApp | Sin pricing |
| Platform AI Solutions | `platform-ai` | Layers | Omnicanal, IA, E-commerce | Free Trial, Pro, Enterprise |
| Periodistapp | `periodistapp` | Zap | Medios, IA, Automatizacion | Trial 7d, Starter $29, Pro $79, Enterprise $199 |
| CRM de Ventas | `crm-ventas` | Target | Ventas, CRM, IA, WhatsApp | Sin pricing |

## Estructura de cada pagina de producto

### Hero del producto
- Icono grande (Lucide, mapeado desde `productsConfig.json`)
- Nombre del producto (Conthrax, grande)
- Tagline (subtitulo)
- Descripcion (1-2 parrafos)
- Tags como badges
- Botones CTA: "Demo" (si tiene demoUrl), "Ir a la app" (si tiene appUrl), o "Proximamente"

### Features
- Lista de features con icono checkmark
- Grid o lista vertical con animacion stagger

### Pricing (condicional)
- Solo se muestra si el producto tiene `pricing` definido en productsConfig
- Cards de plan con nombre, precio, features incluidas
- Misma estetica que la seccion Pricing del home

### CTA final
- "Contactanos" o "Probalo gratis" segun el producto
- Link a contacto o a la app directamente

## Generacion estatica (SSG)

```tsx
export async function getStaticPaths() {
  // Genera paths para los 4 slugs desde productsConfig.json
}

export async function getStaticProps({ params }) {
  // Lee el producto por slug desde productsConfig.json
}
```

## Bilingue

- Los datos de producto en `productsConfig.json` deben tener estructura `es`/`en` o campos traducidos.
- La UI de la pagina (labels como "Caracteristicas", "Planes", "Contactanos") viene de `landingData.json`.

## Archivos a crear

| Archivo | Descripcion |
|---|---|
| `src/pages/productos/[slug].tsx` | Pagina dinamica de producto |
| `src/data/productsConfig.json` | Configuracion de los 4 productos |

## Dependencias

- COMP-003 (Layout wrapper).
- COMP-004 (ProductCard, para la seccion de productos en Home).
- NAV-001 (link a /productos).

## Criterios de aceptacion

- [ ] `/productos/dentalogic` renderiza correctamente.
- [ ] `/productos/platform-ai` renderiza correctamente.
- [ ] `/productos/periodistapp` renderiza correctamente.
- [ ] `/productos/crm-ventas` renderiza correctamente.
- [ ] Pricing se muestra solo en productos que lo tienen.
- [ ] CTAs funcionan (links a demo, app, contacto).
- [ ] Estetica consistente con el sitio.
- [ ] SSG genera las 4 paginas en build.
- [ ] Build exitoso.
