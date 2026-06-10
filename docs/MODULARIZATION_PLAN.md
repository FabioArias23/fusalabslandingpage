# Plan de Modularización: Fusa Landing 🚀

Este documento detalla la estrategia para desacoplar el componente monolítico de perfiles de equipo (`member-content-neural.tsx`) y mejorar la mantenibilidad del proyecto.

## 📋 Resumen de la Estrategia

El objetivo es transformar un archivo de +260 líneas en una serie de componentes pequeños, testeables y reutilizables, siguiendo el principio de **Responsabilidad Única**.

## 🏗️ Desglose de Componentes

| Componente Sugerido | Ubicación Actual | Responsabilidad | Beneficio |
| :--- | :--- | :--- | :--- |
| `SocialLinks` | `member-content-neural.tsx` (L28-63) | Renderizar íconos de redes sociales con sus respectivos links y estilos. | Centralización de íconos de marca y reducción de código repetido. |
| `NeuralHero` | `member-content-neural.tsx` (L98-153) | Sección principal del perfil con la foto (MagicCard), nombre y título. | Aísla la lógica de animaciones complejas de Hero. |
| `ExpertiseGrid` | `member-content-neural.tsx` (L162-180) | Mapeo visual de las skills y logros técnicos del integrante. | Facilita el cambio de diseño de la grilla de habilidades sin tocar la bio. |
| `ProjectCarousel` | `member-content-neural.tsx` (L200-260) | Carrusel interactivo de proyectos con lógica de Embla/Carousel. | Separa la lógica del slider, facilitando el debugging visual. |

## 🛠️ Mejoras de Arquitectura (Hooks & Helpers)

### 1. `useTeamLabels()`
Crear un hook para centralizar las traducciones de la interfaz de miembros.
- **Evita:** Repetir `isEnglish ? "PROYECTOS" : "PROJECTS"` en cada sección.
- **Ubicación:** `hooks/use-team-labels.ts`

### 2. `SocialIconFactory`
Mover todos los SVGs manuales a un componente de utilidad o usar una librería de íconos consistente.
- **Ubicación:** `components/ui/social-icons.tsx`

---

## 🚀 Hoja de Ruta Sugerida

1.  **Fase 1 (Limpieza):** Extraer íconos sociales a `components/ui`.
2.  **Fase 2 (Estructura):** Crear la carpeta `app/equipo/[slug]/_components/` y mover las secciones allí.
3.  **Fase 3 (Lógica):** Implementar el hook de traducción para limpiar el componente padre.
4.  **Fase 4 (Verificación):** Asegurar que las animaciones de `framer-motion` sigan funcionando correctamente tras la separación.

> [!IMPORTANT]
> Se recomienda realizar esta modularización **después** de terminar la carga de contenido de todos los integrantes para evitar conflictos de merge y asegurar que el nuevo esquema cubra todos los casos de uso.

---

