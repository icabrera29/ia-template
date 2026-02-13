# 💼 Valentina Reyes - Psicóloga Clínica

Landing page profesional para servicios de psicología clínica con diseño editorial-contemporáneo.

## 🚀 Características

- ✨ Diseño editorial moderno y distintivo
- 📱 Completamente responsive (mobile-first)
- ⚡ Animaciones suaves y performantes
- 🎨 Sistema de diseño consistente con variables CSS
- ♿ Accesible y semántico
- 🎯 Optimizado para conversión

## 📂 Estructura del Proyecto

```
psicologia/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   └── main.js             # JavaScript principal
├── api/
│   └── send-email.js       # Serverless function para emails (Vercel)
├── assets/                 # Carpeta para recursos
│   ├── images/             # Imágenes
│   └── icons/              # Iconos
├── package.json            # Dependencias (Resend)
├── .env.example            # Template de variables de entorno
├── .gitignore              # Archivos a ignorar en Git
├── STYLE_GUIDE.md          # Guía de estilos completa
└── README.md               # Este archivo
```

## 🎨 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript Vanilla** - Frontend sin frameworks
- **Google Fonts** - Libre Baskerville + Manrope
- **Resend** - API de envío de emails
- **Vercel** - Hosting + Serverless Functions

## 💻 Instalación y Uso

### Opción 1: Abrir localmente

Simplemente abre `index.html` en tu navegador favorito.

### Opción 2: Servidor local

Con Python:
```bash
cd psicologia
python -m http.server 8000
```

Luego abre `http://localhost:8000` en tu navegador.

Con Node.js (usando `npx`):
```bash
cd psicologia
npx serve
```

## 🚀 Desplegar en Vercel (Recomendado)

Este proyecto usa **Vercel + Resend** para el formulario de contacto con una serverless function.

### Paso 1: Preparar el proyecto

```bash
# Instalar dependencias
npm install

# (Opcional) Probar localmente
npm run dev
```

### Paso 2: Obtener API Key de Resend

1. Ve a [resend.com](https://resend.com/) y crea una cuenta (gratis)
2. Verifica tu dominio o usa el dominio de prueba
3. Ve a **API Keys** y crea una nueva key
4. Copia la API key (empieza con `re_`)

### Paso 3: Desplegar en Vercel

**Opción A: Desde GitHub (Recomendado)**

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Haz clic en "New Project"
4. Importa tu repositorio
5. Agrega las **Environment Variables**:
   - `RESEND_API_KEY`: Tu API key de Resend
   - `RECIPIENT_EMAIL`: Email donde recibirás las consultas
6. Haz clic en "Deploy"

**Opción B: Desde la CLI**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Agregar variables de entorno
vercel env add RESEND_API_KEY
vercel env add RECIPIENT_EMAIL

# Deploy a producción
vercel --prod
```

### Configurar Variables de Entorno en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Settings > Environment Variables
3. Agrega:
   - **RESEND_API_KEY**: `re_tu_api_key_aqui`
   - **RECIPIENT_EMAIL**: `tu-email@ejemplo.com`
4. Redeploy el proyecto

¡Listo! Tu formulario está funcionando.

---

## 🌐 Otras Opciones de Deployment

Si prefieres no usar Vercel, puedes desplegar en:

### GitHub Pages (Solo frontend)

⚠️ **Nota**: El formulario de contacto NO funcionará en GitHub Pages porque requiere una serverless function. Considera usar Web3Forms como alternativa.

```bash
1. Sube el código a GitHub
2. Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará en https://tu-usuario.github.io/nombre-repo
```

### Netlify (Con Netlify Functions)

Netlify también soporta serverless functions. Necesitarías adaptar `api/send-email.js` al formato de Netlify Functions.

```bash
1. Conecta tu repositorio en netlify.com
2. Configura las Environment Variables
3. Deploy automático
```

---

## 🎯 Guía de Estilos

Para mantener la consistencia del diseño al agregar nuevos componentes o páginas, consulta [STYLE_GUIDE.md](STYLE_GUIDE.md).

La guía incluye:
- Sistema de colores y variables CSS
- Tipografía y jerarquías
- Componentes reutilizables
- Animaciones y transiciones
- Mejores prácticas
- Ejemplos de código

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Rust | `#B85C38` | Color principal de marca |
| Terracotta | `#D4816D` | Acentos cálidos |
| Warm White | `#FAF8F5` | Fondo principal |
| Charcoal | `#1A1A1A` | Texto principal |
| Soft Gray | `#6B6460` | Texto secundario |

## 📱 Responsive

El diseño está optimizado para:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚡ Optimizaciones

- CSS y JS en archivos separados para mejor cacheado
- Animaciones con `transform` para mejor performance
- Lazy loading con Intersection Observer
- Tipografía optimizada con Google Fonts
- Código limpio y bien comentado

## 📧 Cómo Funciona el Formulario

El formulario usa **Resend** con una **Vercel Serverless Function** para enviar emails de forma segura.

### Arquitectura

```
Usuario rellena formulario
         ↓
    JavaScript frontend
         ↓
    /api/send-email (Serverless Function)
         ↓
    Resend API (envía el email)
         ↓
    Tu email recibe la consulta
```

### Personalizar el Email

Puedes modificar el template del email en `api/send-email.js`:

```javascript
// Cambiar el asunto
subject: `Nueva consulta de ${fullName}`,

// Cambiar el remitente (requiere dominio verificado)
from: 'Consultas <consultas@tudominio.com>',

// Modificar el HTML del email
html: `...tu template personalizado...`
```

### Verificar tu Dominio (Opcional)

Para usar tu propio dominio en el email:

1. Ve a Resend Dashboard > Domains
2. Agrega tu dominio
3. Configura los registros DNS
4. Actualiza el campo `from` en `api/send-email.js`

---

## 📝 Personalización

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --rust: #TU_COLOR;
    --charcoal: #TU_COLOR;
    /* ... */
}
```

### Cambiar Contenido

Todo el contenido está en `index.html`. Busca las secciones por sus IDs:
- `#inicio` - Hero section
- `#servicios` - Servicios
- `#testimonios` - Testimonios
- `#contacto` - Formulario de contacto
- `#ubicacion` - Ubicación y horarios

### Agregar Nuevas Secciones

1. Copia la estructura de una sección existente
2. Usa las clases de componentes definidas en STYLE_GUIDE.md
3. Añade la clase `.reveal` para animaciones de scroll
4. Mantén el spacing consistente

## 🐛 Solución de Problemas

### Los estilos no se cargan

Verifica que las rutas en `index.html` sean correctas:
```html
<link rel="stylesheet" href="css/styles.css">
<script src="js/main.js"></script>
```

### Las animaciones no funcionan

Asegúrate de que el archivo `js/main.js` se está cargando correctamente al final del `<body>`.

### Fuentes no se ven

Verifica tu conexión a internet, las fuentes se cargan desde Google Fonts.

## 📄 Licencia

Este proyecto es de uso personal. Si deseas usar el diseño para tu propio proyecto, por favor personaliza los contenidos y colores.

## 🤝 Contribuciones

Para sugerencias o mejoras:
1. Revisa STYLE_GUIDE.md
2. Mantén la consistencia del diseño
3. Documenta tus cambios

---

**Diseñado con** ❤️ **usando el skill frontend-design**
