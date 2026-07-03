# AGENTS.md — Guía de mantenimiento del portfolio

Este documento instruye a cualquier agente de IA (o humano) que deba actualizar este sitio.
Leelo completo antes de tocar un archivo. Ante ambigüedad, **preguntar a Carlos antes de asumir**.

## 1. Qué es este sitio

Portfolio profesional bilingüe de **Carlos Miyén Brandolino**, servido como sitio estático
en GitHub Pages (repo `MiyoBran/MiyoBran.github.io`, rama `main`, raíz del repo).
Sin build, sin frameworks, sin backend: HTML + CSS + JS vanilla. El sitio Jekyll anterior
está respaldado en la rama `jekyll-legacy` — no restaurarlo ni mezclarlo.

```
/
├── index.html                  # One-page en ESPAÑOL (fuente de verdad del contenido)
├── en/index.html               # Espejo en INGLÉS (debe mantenerse sincronizado)
├── blog/                       # Artículos, SOLO en español
│   └── <slug-del-post>.html
├── css/styles.css              # Sistema de diseño completo (tokens en :root)
├── assets/                     # Imágenes optimizadas (badges, etc.)
├── js/main.js                  # Reveal on scroll (IntersectionObserver)
├── .nojekyll                   # NO BORRAR: desactiva Jekyll en GitHub Pages
├── README.md                   # Cara pública del repo (humanos)
└── AGENTS.md                   # Este archivo (agentes)
```

## 2. Reglas duras (no negociables)

1. **Bilingüe siempre:** todo cambio de contenido en `index.html` se replica traducido en
   `en/index.html`. Los posts del blog son la única excepción (solo español; desde la
   versión EN se enlazan con la nota "(ES)").
2. **No inventar datos.** Fechas, métricas, nombres de certificaciones y descripciones de
   proyectos salen de lo que Carlos provea. Si falta un dato, pedirlo.
3. **No cambiar el sistema de diseño** (paleta, tipografías, componentes) sin pedido
   explícito. Los colores viven como variables CSS en `:root` de `css/styles.css`.
4. **No agregar dependencias:** ni frameworks, ni librerías JS, ni build tools. Google
   Fonts (Sora, IBM Plex Sans, IBM Plex Mono) es la única carga externa permitida.
5. **No publicar datos internos del empleador** (Hotel Austral): nada de nombres de
   colegas, incidentes, cifras ni detalles operativos sensibles. Las descripciones del
   rol se mantienen genéricas y profesionales.
6. **`.nojekyll` no se toca.** Sin ese archivo, GitHub Pages intenta procesar el sitio
   con Jekyll.
7. Antes de commitear: validar que no haya links internos rotos ni tags HTML sin cerrar.

## 3. Sistema de diseño (referencia rápida)

Tokens en `css/styles.css` → `:root`:

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0B1526` | Fondo navy general |
| `--surface` | `#13223B` | Cards |
| `--surface-2` | `#182C49` | Chips, certs |
| `--accent` | `#4CC6F2` | Cyan: números, tags, links |
| `--accent-2` | `#2F7BF6` | Azul eléctrico: detalles, botón primario |
| `--text` / `--muted` | `#E8F0FA` / `#97ACC8` | Texto principal / secundario |

Tipografías: **Sora** (títulos, `--font-display`), **IBM Plex Sans** (cuerpo),
**IBM Plex Mono** (eyebrows, metadatos, chips). Componentes ya existentes que se deben
reutilizar (no crear variantes nuevas): `.card`, `.proj`, `.chip`, `.stat`, `.post-link`,
`.xp-item`, `.cert`, `.callout`, `.btn`. Toda pieza nueva de contenido lleva la clase
`.reveal` para la animación de entrada.

## 4. Procedimiento: agregar un proyecto nuevo

Ejemplos de proyectos que van a llegar por esta vía: el **challenge de Data Science de
Oracle Next Education G9** (ya realizado) y el proyecto del **Hackaton** al que Carlos
accedió por aprobar la certificación OCI 2025 Foundations Associate (comienza 06/07/2026).

**Paso 1 — Pedir a Carlos los datos mínimos:**
- Nombre del proyecto y una descripción de 2–4 líneas (qué problema resuelve, con qué se hizo).
- Tag tecnológico (2–3 términos, ej. `Python · Pandas · EDA`).
- Links: repo de GitHub y/o demo en vivo.
- Si además quiere un post en el blog: el texto del post (no redactarlo sin su input).

**Paso 2 — Card en la sección Proyectos** (`index.html`, sección `#proyectos`, dentro de
`.grid-3`). Copiar esta plantilla y completar:

```html
<article class="card proj reveal">
  <p class="tag">Python · Pandas · EDA</p>
  <h3>Nombre del Proyecto</h3>
  <p>
    Descripción de 2 a 4 líneas: qué es, qué problema resuelve y con qué
    tecnologías se construyó. Sin adjetivos vacíos.
  </p>
  <div class="links">
    <a href="blog/slug-del-post.html">Leer el caso →</a>            <!-- solo si hay post -->
    <a href="https://github.com/MiyoBran/repo" target="_blank" rel="noopener">GitHub ↗</a>
  </div>
</article>
```

Replicar traducida en `en/index.html` (sección `#projects`; los links al blog cambian a
`../blog/...` y el texto a `Read the case (ES) →`).

**Criterio de curaduría:** la grilla muestra los proyectos más representativos. Si al
agregar uno la sección supera 6 cards, proponerle a Carlos cuál retirar — no decidirlo
por cuenta propia.

**Paso 3 — Post en el blog (opcional).** Crear `blog/<slug>.html` copiando la estructura
de un post existente (`blog/simulador-colectivos-urbanos.html` es la referencia limpia).
Mantener: `<html lang="es">`, topbar con brand a `../index.html`, `<main class="article">`,
link `← Volver al portfolio` arriba y en el footer, `<time datetime="AAAA-MM-DD">`.
El CSS de artículo ya existe (`.article`, `.update` para recuadros de actualización).

**Paso 4 — Listarlo en la sección Blog** de `index.html` y `en/index.html` (orden:
más reciente arriba):

```html
<a class="post-link reveal" href="blog/slug-del-post.html">
  <b>Título del post</b>
  <time datetime="2026-07-15">15 · 07 · 2026</time>
</a>
```

**Paso 5 — Efectos colaterales.** Evaluar si el proyecto nuevo justifica actualizar:
- Chips de **Habilidades** (ej. sumar `Python / Pandas` si entra Data Science).
- **Stats del hero** (solo si cambia un hito mayor: título obtenido, nueva certificación,
  etapa de ONE completada).
- Siempre confirmar estos cambios con Carlos antes de aplicarlos.

## 5. Procedimiento: otras actualizaciones frecuentes

- **Nueva certificación:** agregar un bloque `.cert` en `#formacion` (ES) y `#education`
  (EN), con el nombre EXACTO del badge oficial (verificar contra Credly u Oracle CertView)
  y el año de obtención. Si hay imagen del badge, guardarla optimizada (PNG con fondo
  transparente, ~240px) en `assets/` y usarla como `<img class="badge-img">` en lugar del
  `<span class="dot"></span>`. Si existe URL pública de verificación, agregarla dentro del
  `<span>` del emisor:
  `<span>Emisor · Año · <a href="URL" target="_blank" rel="noopener">Verificar ↗</a></span>`
  (en EN: `Verify ↗`). Las certificaciones Oracle se comparten con los links
  `catalog-education.oracle.com/pls/certview/sharebadge?id=...` de Oracle CertView
  (NO usar links de sesión `brm-certification.oracle.com/apex/...`, que expiran);
  las de IBM SkillsBuild, desde Credly.
- **Cambio de rol/experiencia:** editar los `.xp-item` de `#experiencia` / `#experience`.
  Cerrar períodos con año de fin; el más reciente va arriba.
- **Avance académico:** actualizar el `.edu-item` de la Licenciatura (año en curso,
  título intermedio) y, si corresponde, la stat del hero.

## 6. Checklist antes de commit/push

- [ ] Cambio replicado en ES y EN.
- [ ] Links internos verificados (rutas relativas correctas según profundidad: desde
      `blog/` y `en/` se usa `../`).
- [ ] Links externos con `target="_blank" rel="noopener"`.
- [ ] Clases `.reveal` presentes en los bloques nuevos.
- [ ] HTML válido (tags cerrados) y probado abriendo `index.html` local en navegador,
      incluyendo vista mobile (~380px).
- [ ] Mensaje de commit descriptivo en español.

## 7. Contexto del dueño (para redactar con criterio)

Carlos combina gestión de operaciones (13+ años, actualmente Asistente de Gerencia en
Hotel Austral Viedma) con formación en informática (Licenciatura UNPSJB — 3er año,
Oracle Next Education G9 — Tech Advanced, certificaciones OCI). La tesis del sitio es el
**perfil híbrido gestión + software**; toda pieza nueva debe reforzar esa narrativa, no
diluirla. Tono: profesional, directo, primera persona, español rioplatense en ES y
inglés neutro en EN. Sin frases de relleno.
