# 🎨 Guía de Estilos - Valentina Reyes Psicología

> Guía de diseño y componentes para mantener la consistencia visual del sitio web.

---

## 📋 Tabla de Contenidos

- [Colores](#-colores)
- [Tipografía](#-tipografía)
- [Espaciado](#-espaciado)
- [Componentes](#-componentes)
- [Animaciones](#-animaciones)
- [Responsive](#-responsive)
- [Mejores Prácticas](#-mejores-prácticas)

---

## 🎨 Colores

### Paleta Principal

Todos los colores están definidos como variables CSS en `:root`:

```css
--rust: #B85C38;           /* Color principal de marca */
--rust-deep: #8E3B2B;      /* Rust oscuro para hovers */
--terracotta: #D4816D;     /* Acento cálido */
--blush: #EFD3C8;          /* Tonos suaves */
--warm-white: #FAF8F5;     /* Fondo principal */
--cream: #F5F2EE;          /* Fondo alternativo */
--charcoal: #1A1A1A;       /* Texto principal */
--warm-black: #2B2520;     /* Texto secundario */
--soft-gray: #6B6460;      /* Texto muted */
--accent-gold: #C8A882;    /* Acentos dorados */
```

### Uso de Colores

| Elemento | Variable | Uso |
|----------|----------|-----|
| **Texto principal** | `var(--charcoal)` | Body text, headings |
| **Texto secundario** | `var(--soft-gray)` | Subtítulos, descripciones |
| **Botones primarios** | `var(--rust)` | CTAs principales |
| **Links & accents** | `var(--rust-deep)` | Enlaces, hover states |
| **Fondos claros** | `var(--warm-white)` | Secciones principales |
| **Fondos alternativos** | `var(--cream)` | Secciones intercaladas |

---

## ✍️ Tipografía

### Familias de Fuentes

```css
/* Serif - Para títulos y encabezados */
font-family: 'Libre Baskerville', serif;

/* Sans-serif - Para cuerpo de texto */
font-family: 'Manrope', sans-serif;
```

### Jerarquía Tipográfica

#### Títulos (Headings)

```css
/* Hero Title */
h1 {
    font-family: 'Libre Baskerville', serif;
    font-size: clamp(3.5rem, 9vw, 8rem);
    font-weight: 700;
    line-height: 0.95;
    letter-spacing: -0.03em;
}

/* Section Title */
h2 {
    font-family: 'Libre Baskerville', serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
}

/* Card Title */
h3 {
    font-family: 'Libre Baskerville', serif;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.01em;
}
```

#### Body Text

```css
/* Paragraph Normal */
p {
    font-family: 'Manrope', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
}

/* Subtitle Large */
.hero-subtitle {
    font-size: clamp(1.15rem, 2vw, 1.4rem);
    line-height: 1.7;
}

/* Section Subtitle */
.section-subtitle {
    font-size: 1.15rem;
    line-height: 1.7;
}
```

#### Tags & Labels

```css
/* Section Tag */
.section-tag {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
}
```

---

## 📏 Espaciado

### Sistema de Espaciado

Usa un sistema consistente basado en `rem`:

```css
/* Pequeño */
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */

/* Medio */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */

/* Grande */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 5rem;    /* 80px */
--spacing-3xl: 8rem;    /* 128px */
```

### Padding de Secciones

```css
/* Desktop */
section {
    padding: 8rem 6%;
}

/* Tablet */
@media (max-width: 1024px) {
    section {
        padding: 6rem 5%;
    }
}

/* Mobile */
@media (max-width: 768px) {
    section {
        padding: 5rem 5%;
    }
}
```

---

## 🧩 Componentes

### Botones

#### Botón Primario

```html
<a href="#" class="btn-primary">
    <span>Texto del Botón</span>
</a>
```

Estilos clave:
- Border radius: `100px` (pill shape)
- Padding: `1.3rem 3rem`
- Efecto hover: Translate Y + sombra
- Animación de fill desde abajo

#### Botón Outline

```html
<a href="#" class="btn-outline">
    <span>Texto del Botón</span>
</a>
```

Estilos clave:
- Border: `2px solid var(--charcoal)`
- Background transparente
- Hover: Fill completo

### Cards

#### Service Card

```html
<div class="service-card reveal">
    <svg class="service-icon" viewBox="0 0 24 24">
        <!-- SVG icon here -->
    </svg>
    <h3>Título del Servicio</h3>
    <p>Descripción del servicio...</p>
</div>
```

Características:
- Background: `#fff`
- Border radius: `20px`
- Padding: `3rem`
- Hover: `translateY(-8px)` + sombra dramática
- Overlay gradient en hover

#### Testimonial Card

```html
<div class="testimonial-card reveal">
    <div class="stars">★ ★ ★ ★ ★</div>
    <p class="testimonial-text">Texto del testimonial...</p>
    <div class="testimonial-author">
        <div class="author-avatar">MC</div>
        <div class="author-info">
            <div class="name">María C.</div>
            <div class="role">Paciente desde 2022</div>
        </div>
    </div>
</div>
```

### Tags

```html
<span class="section-tag">Etiqueta</span>
```

Estilos:
- Border: `1.5px solid var(--rust)`
- Border radius: `30px`
- Padding: `0.4rem 1rem`
- Text transform: uppercase

### Forms

#### Input Fields

```html
<input type="text" placeholder="Nombre" required>
```

Características:
- Padding: `1.2rem 1.5rem`
- Border: `2px solid rgba(0,0,0,0.08)`
- Border radius: `12px`
- Focus state: Border color cambia a `var(--rust)`

#### Textarea

```html
<textarea placeholder="Mensaje..." required></textarea>
```

Características similares a input, con:
- Min-height: `160px`
- Resize: vertical

---

## ⚡ Animaciones

### Timing Function Personalizada

```css
cubic-bezier(0.16, 1, 0.3, 1)
```

Usa esta curva para todas las transiciones suaves.

### Animación Principal: Fade Slide Up

```css
@keyframes fadeSlideUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Clase Reveal (Scroll Animation)

Agrega la clase `.reveal` a cualquier elemento que quieras animar al hacer scroll:

```html
<div class="service-card reveal">
    <!-- content -->
</div>
```

El JavaScript detecta automáticamente cuando el elemento entra en viewport y agrega la clase `.visible`.

### Animaciones de Hover

```css
/* Botones */
.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(184, 92, 56, 0.3);
}

/* Cards */
.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 70px rgba(0,0,0,0.12);
}
```

---

## 📱 Responsive

### Breakpoints

```css
/* Desktop First Approach */
@media (max-width: 1024px) {
    /* Tablet */
}

@media (max-width: 768px) {
    /* Mobile */
}

@media (max-width: 480px) {
    /* Small Mobile */
}
```

### Grid Responsivo

```css
/* Auto-responsive grid */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}
```

Este grid se adapta automáticamente:
- Desktop: 3 columnas
- Tablet: 2 columnas
- Mobile: 1 columna

---

## 🎯 Mejores Prácticas

### 1. Uso de Variables CSS

**SIEMPRE** usa las variables CSS definidas en lugar de valores hardcoded:

```css
/* ✅ Correcto */
color: var(--rust);

/* ❌ Incorrecto */
color: #B85C38;
```

### 2. Nomenclatura de Clases

Sigue la convención BEM cuando sea apropiado:

```html
<!-- Bloque -->
<div class="service-card">
    <!-- Elemento -->
    <svg class="service-icon"></svg>
    <h3 class="service-title"></h3>
</div>
```

### 3. Animaciones

- Usa la clase `.reveal` para elementos que deben animar en scroll
- Mantén las duraciones entre 0.3s - 1s
- Usa la timing function personalizada para consistencia

### 4. Espaciado Consistente

- Usa el sistema de espaciado definido
- Mantén padding y margins proporcionales
- Respeta el max-width de 1400px para contenedores

### 5. Accesibilidad

```html
<!-- Buttons con aria-label -->
<button class="hamburger" aria-label="Menú">
    <span></span>
</button>

<!-- Links semánticos -->
<a href="#contacto" class="btn-primary">
    <span>Texto descriptivo</span>
</a>
```

### 6. Optimización de Rendimiento

```css
/* Usa transform en lugar de top/left para animaciones */
/* ✅ Performante */
transform: translateY(-8px);

/* ❌ Menos performante */
margin-top: -8px;
```

---

## 🚀 Creando Nuevos Componentes

### Checklist para Nuevos Componentes

1. **Estructura HTML semántica**
   - Usa tags apropiados (`<article>`, `<section>`, `<nav>`)
   - Incluye clases descriptivas

2. **Estilos CSS**
   - Usa variables CSS para colores
   - Implementa estados hover/focus
   - Añade la clase `.reveal` si debe animar

3. **Responsive**
   - Prueba en los 3 breakpoints principales
   - Ajusta padding/font-size con clamp() si es necesario

4. **Accesibilidad**
   - Añade `aria-label` donde sea necesario
   - Asegura contraste de color adecuado
   - Prueba navegación con teclado

### Ejemplo: Crear un Nuevo Tipo de Card

```html
<div class="info-card reveal">
    <div class="info-card__icon">
        <svg><!-- icon --></svg>
    </div>
    <h3 class="info-card__title">Título</h3>
    <p class="info-card__description">Descripción...</p>
    <a href="#" class="info-card__link">Ver más →</a>
</div>
```

```css
.info-card {
    background: #fff;
    padding: 3rem;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.06);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.info-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 70px rgba(0,0,0,0.12);
}

.info-card__icon {
    width: 56px;
    height: 56px;
    margin-bottom: 2rem;
    color: var(--rust);
}

.info-card__title {
    font-family: 'Libre Baskerville', serif;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--charcoal);
}

.info-card__description {
    color: var(--soft-gray);
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.info-card__link {
    color: var(--rust);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.info-card__link:hover {
    color: var(--rust-deep);
}
```

---

## 📦 Estructura de Archivos

```
psicologia/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── main.js         # JavaScript principal
├── assets/
│   ├── images/         # Imágenes
│   └── icons/          # Iconos SVG
└── STYLE_GUIDE.md      # Este archivo
```

---

## 🎨 Paleta de Colores Visual

```
┌─────────────────────┐
│  Rust (#B85C38)     │  Color principal de marca
├─────────────────────┤
│  Rust Deep (#8E3B2B)│  Hovers y estados activos
├─────────────────────┤
│  Terracotta (#D4816D│  Acentos cálidos
├─────────────────────┤
│  Blush (#EFD3C8)    │  Tonos suaves
├─────────────────────┤
│  Warm White (#FAF8F5│  Fondo principal
├─────────────────────┤
│  Cream (#F5F2EE)    │  Fondo alternativo
├─────────────────────┤
│  Charcoal (#1A1A1A) │  Texto principal
├─────────────────────┤
│  Soft Gray (#6B6460)│  Texto secundario
└─────────────────────┘
```

---

## 📞 Contacto y Soporte

Para dudas sobre implementación o sugerencias de mejoras a esta guía:
- Revisa los comentarios en `css/styles.css`
- Revisa los comentarios en `js/main.js`
- Mantén la consistencia con los componentes existentes

---

**Última actualización:** Febrero 2026
**Versión:** 1.0.0
