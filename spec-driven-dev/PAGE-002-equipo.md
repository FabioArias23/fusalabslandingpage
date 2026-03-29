# PAGE-002: Pagina de Equipo (/equipo)

## Estado: PENDIENTE

## Contexto

No existe pagina de equipo en produccion. El borrador tiene `pages/equipo.tsx` con 8 miembros.
Se crea como pagina nueva respetando 100% la estetica de produccion.

## Estructura de la pagina

### Hero del equipo
- Titulo: "Las personas detras de Fusa" / "The people behind Fusa"
- Subtitulo: breve descripcion del equipo
- Fondo oscuro `bg-fusa-black` consistente con el resto del sitio

### Grid de miembros
- Grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` con gap-6
- Cada tarjeta de miembro:
  - Foto placeholder (iniciales o avatar generico)
  - Nombre (Conthrax font)
  - Rol / cargo
  - Bio corta (2-3 lineas)
  - Area de expertise (tag)
  - Link a LinkedIn (opcional)
- Fondo tarjeta: `bg-white/[0.02]` con `border border-white/5`
- Animacion: `animate-reveal` con stagger delays

### 8 miembros definidos
Solo Adrian Gamarra tiene datos completos. Los demas son placeholder hasta completar.

## Navegacion

- La pagina usa el componente `Layout` (ver COMP-003) que incluye Navigation + Footer.
- El link "Equipo" en el nav debe mostrarse como activo/highlighted cuando estamos en `/equipo`.

## Bilingue

- Toda la pagina responde al toggle de idioma.
- Datos de miembros en `landingData.json` bajo clave nueva `team` con `es` y `en`.

## Archivos a crear

| Archivo | Descripcion |
|---|---|
| `src/pages/equipo.tsx` | Pagina de equipo |

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/data/landingData.json` | Agregar seccion `team` bilingue con datos de 8 miembros |

## Dependencias

- COMP-003 (Layout wrapper) debe existir primero.
- NAV-001 (link a /equipo en navegacion).

## Criterios de aceptacion

- [ ] Ruta `/equipo` renderiza correctamente.
- [ ] Grid de 8 miembros con layout responsive.
- [ ] Estetica identica al resto del sitio (colores, fuentes, borders, fondo).
- [ ] Animaciones reveal al cargar.
- [ ] Toggle idioma funciona.
- [ ] Navigation y Footer presentes via Layout.
- [ ] Build exitoso.
