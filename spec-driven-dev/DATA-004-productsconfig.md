# DATA-004: productsConfig.json y actualizacion de landingData.json

## Estado: PENDIENTE

## Contexto

Produccion solo tiene `landingData.json`. Se necesita crear `productsConfig.json` y extender landingData con datos para las secciones y paginas nuevas.

## productsConfig.json (NUEVO)

Archivo independiente con la config de los 4 productos SaaS.

### Estructura

```json
{
  "products": {
    "dentalogic": {
      "name": "Dentalogic",
      "slug": "dentalogic",
      "icon": "Cpu",
      "tagline": { "es": "...", "en": "..." },
      "description": { "es": "...", "en": "..." },
      "tags": ["Salud", "IA", "WhatsApp"],
      "features": { "es": ["...", "..."], "en": ["...", "..."] },
      "pricing": null,
      "demoUrl": "",
      "appUrl": "",
      "docsUrl": "",
      "active": true
    },
    "platform-ai": { ... },
    "periodistapp": { ... },
    "crm-ventas": { ... }
  }
}
```

### Formato bilingue
Los campos de texto (`tagline`, `description`, `features`) tienen subobjetos `es`/`en` para mantener consistencia con el sistema de idiomas de produccion.

Los campos estructurales (`slug`, `icon`, `tags`, `pricing`, URLs, `active`) no necesitan traduccion.

## Extensiones a landingData.json

Agregar las siguientes claves al objeto `es` y `en`:

### `metrics` (para HOME-002 S1)
```json
"metrics": [
  { "value": "4+", "label": "Productos SaaS" },
  { "value": "8", "label": "Expertos" },
  { "value": "7", "label": "Areas de expertise" },
  { "value": "24hs", "label": "Tiempo de respuesta" }
]
```

### `trustPoints` (para HOME-002 S2)
```json
"trustPoints": [
  { "icon": "Shield", "title": "...", "description": "..." },
  { "icon": "TrendingUp", "title": "...", "description": "..." },
  { "icon": "Code2", "title": "...", "description": "..." },
  { "icon": "Users", "title": "...", "description": "..." }
]
```

### `testimonials` (para HOME-002 S4)
```json
"testimonials": [
  { "quote": "...", "name": "...", "company": "...", "result": "..." }
]
```

### `cta` (para HOME-002 S5)
```json
"cta": { "title": "...", "subtitle": "...", "buttonText": "...", "buttonLink": "#contacto" }
```

### `team` (para PAGE-002)
```json
"team": {
  "title": "...",
  "subtitle": "...",
  "members": [
    { "name": "...", "role": "...", "bio": "...", "area": "...", "linkedin": "" }
  ]
}
```

### `servicesPage` (para PAGE-003)
```json
"servicesPage": {
  "title": "...",
  "subtitle": "...",
  "devSteps": [...],
  "consultingAreas": [...],
  "form": { "fields": [...], "submitText": "..." }
}
```

## Archivos a crear

| Archivo | Descripcion |
|---|---|
| `src/data/productsConfig.json` | Config de 4 productos SaaS |

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/data/landingData.json` | Agregar: metrics, trustPoints, testimonials, cta, team, servicesPage — en ambos idiomas (es/en) |

## Criterios de aceptacion

- [ ] `productsConfig.json` tiene los 4 productos con datos bilingues.
- [ ] `landingData.json` tiene todas las claves nuevas en `es` y `en`.
- [ ] Los datos son consistentes con el contenido del borrador.
- [ ] El nombre de empresa es "Fusa Labs" (no "MR / Lab" del borrador).
- [ ] Precios y URLs reflejan informacion real de los productos.
- [ ] Build exitoso (JSON valido, sin errores de importacion).
