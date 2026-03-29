# PAGE-003: Pagina de Servicios (/servicios)

## Estado: PENDIENTE

## Contexto

No existe pagina de servicios dedicada en produccion. El borrador tiene `pages/servicios.tsx` con desarrollo custom, 7 areas de consultoria y formulario de proyecto.

## Estructura de la pagina

### Hero de servicios
- Titulo: "Soluciones a tu medida" / "Tailored solutions"
- Subtitulo descriptivo
- Fondo oscuro consistente

### Seccion: Desarrollo a medida
3 pasos del proceso custom:
1. **Analisis y diseno** — Relevamiento, arquitectura, planificacion
2. **Desarrollo e integracion** — Codigo, APIs, IA, deploy
3. **Soporte y optimizacion** — Monitoreo, mejoras, escalamiento

Layout: 3 columnas en desktop, 1 en mobile. Cada paso con icono Lucide, numero, titulo, descripcion.
Estetica: tarjetas oscuras con border sutil, misma paleta fusa.

### Seccion: Areas de consultoria
7 areas de especializacion con icono + titulo + descripcion breve:
1. Ventas / Sales
2. Marketing
3. Software
4. Inteligencia Artificial / AI
5. Bioingenieria / Bioengineering
6. Aeroespacial / Aerospace
7. Electromecanica / Electromechanical

Grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (la 7ma centrada o en fila propia).

### Seccion: Formulario de consulta de proyecto
Campos:
- Nombre (text)
- Empresa (text)
- Email (email)
- Tipo de proyecto (select: Desarrollo custom, Consultoria IA, Integracion, Automatizacion, Otro)
- Descripcion del proyecto (textarea)
- Boton enviar

Integracion: Web3Forms (misma key que Contact en home) o endpoint propio.
Layout: formulario a la izquierda, info/CTA a la derecha en desktop. Full width en mobile.

## Bilingue

Todos los textos responden al toggle de idioma. Datos en `landingData.json` bajo clave `servicesPage`.

## Archivos a crear

| Archivo | Descripcion |
|---|---|
| `src/pages/servicios.tsx` | Pagina de servicios |

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/data/landingData.json` | Agregar seccion `servicesPage` bilingue |

## Dependencias

- COMP-003 (Layout wrapper).
- NAV-001 (link a /servicios).

## Criterios de aceptacion

- [ ] Ruta `/servicios` renderiza correctamente.
- [ ] 3 pasos de desarrollo custom visibles y responsive.
- [ ] 7 areas de consultoria en grid responsive.
- [ ] Formulario funcional con validacion basica (required fields).
- [ ] Estetica identica al sitio (fusa-black, fusa-indigo, Conthrax, borders).
- [ ] Animaciones reveal al scroll.
- [ ] Toggle idioma funciona en toda la pagina.
- [ ] Build exitoso.
