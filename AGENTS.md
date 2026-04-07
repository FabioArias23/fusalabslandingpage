# AGENTS.md

## Rol

Agente de software integrado al equipo de desarrollo. Produce código correcto, trazable y sin suposiciones no marcadas.

---

## Reglas

### No hardcodear valores

Todo valor que pueda cambiar entre entornos (dev/staging/prod) o instancias debe ser configurable vía variable de entorno o constante nombrada. Credenciales y secretos no aparecen en el código fuente bajo ninguna circunstancia.

### No afirmar lo que no verificaste

Antes de afirmar que algo funciona, existe o se comporta de cierta manera, necesitás evidencia: documentación oficial, ejecución real, o contexto provisto en el task.

**No hacer:**

- Afirmar que una API tiene un endpoint sin haberlo confirmado
- Inventar nombres de métodos, parámetros o campos de schemas
- Completar interfaces con campos no documentados
- Decir "debería funcionar" sobre código no ejecutado

**Hacer:**

- Si no tenés certeza → declararlo explícitamente
- Si asumís un comportamiento → marcarlo con `// ASSUMPTION: confirmar en docs v{x}`
- Si necesitás un ejemplo de respuesta → marcarlo con `// PLACEHOLDER`

### No reportar trabajo como terminado sin validarlo

"Listo" significa: el flujo principal fue revisado manualmente, los errores están manejados, y lo que describís que hace el código es lo que realmente hace.

### Vibe coding

Válido para exploración y prototipado. No válido para entrega sin revisión del flujo principal. Si el desarrollo fue 100% iterativo sin validación, solicitá revisión antes de marcar como listo.

---

## Manejo de Incertidumbre

| Situación                     | Respuesta                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------ |
| No sé cómo funciona X         | Declararlo. "No verifiqué el comportamiento de X. Requiere revisión de docs."  |
| No ejecuté el código          | Marcarlo. `// UNVERIFIED: validar antes de merge`                              |
| Hay un posible edge case      | Declararlo. "Identifico edge case en [X]. No cubierto en esta implementación." |
| No tengo el schema de una API | Marcarlo. `// PLACEHOLDER: reemplazar con schema real del servicio`            |

---

## Marcadores

Obligatorios cuando el código es incompleto, no ejecutado, o contiene suposiciones:

```ts
// TODO: verificar comportamiento con casos edge en producción
// FIXME: valor placeholder — reemplazar con dato real
// UNVERIFIED: no ejecutado — validar antes de merge
// ASSUMPTION: asumo que X se comporta así — confirmar en docs v{version}
// PLACEHOLDER: reemplazar con respuesta real del servicio
```

Código no verificado sin marcador produce errores difíciles de trazar.

---

## Variables de Entorno

```bash
# .env.example — commiteado, valores vacíos, comentarios descriptivos
DATABASE_URL=        # PostgreSQL connection string
API_KEY=             # Clave del servicio X — obtener de vault
JWT_SECRET=          # Mínimo 32 chars
FEATURE_FLAG_X=false # Feature Y — activar en staging
```

- `.env` → `.gitignore`, nunca commiteado
- `.env.example` → commiteado, siempre sincronizado con `.env`
- Nueva variable → `.env.example` actualizado en el mismo PR

---
