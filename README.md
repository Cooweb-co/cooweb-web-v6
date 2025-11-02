# CooWeb V6 - Astro Project

Proyecto moderno desarrollado con Astro 5, migrando una plantilla HTML multipropósito a un sitio web optimizado con las mejores prácticas de desarrollo y SEO.

## Características

- **Astro 5** - Framework moderno y rápido
- **TypeScript Strict** - Tipado estricto para mayor seguridad
- **Componentes Modulares** - Arquitectura basada en componentes reutilizables
- **SEO Optimizado** - Meta tags, Open Graph, Twitter Cards, sitemap automático
- **Rendimiento** - Prefetching, compresión HTML, CSS minificado
- **Responsive Design** - Totalmente adaptable a dispositivos móviles

## Estructura del Proyecto

```
cooweb-v6/
├── public/
│   ├── assets/          # Recursos estáticos (CSS, JS, imágenes)
│   └── robots.txt       # Configuración para motores de búsqueda
├── src/
│   ├── components/
│   │   ├── sections/    # Componentes de secciones (Hero, About, Services, etc.)
│   │   ├── Header.astro # Componente de cabecera
│   │   └── Footer.astro # Componente de pie de página
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout base con SEO
│   └── pages/
│       └── index.astro  # Página principal
├── astro.config.mjs     # Configuración de Astro
└── tsconfig.json        # Configuración de TypeScript
```

## Instalación

```bash
# Clonar el proyecto
cd cooweb-v6

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts Disponibles

```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción
npm run astro        # Ejecutar CLI de Astro
```

## Configuración

### Variables de Entorno

Copia `.env.example` a `.env` y configura tus variables:

```env
PUBLIC_SITE_URL=https://yoursite.com
PUBLIC_SITE_NAME=Xeno - Creative Digital Agency
PUBLIC_EMAIL=example@gmail.com
PUBLIC_PHONE=+1 (234) 568-9023
```

### Configuración del Sitio

Edita `astro.config.mjs` para configurar tu dominio:

```javascript
export default defineConfig({
  site: 'https://yoursite.com',
  // ...
});
```

## Componentes

### BaseLayout

Layout principal con SEO optimizado que incluye:
- Meta tags esenciales
- Open Graph para redes sociales
- Twitter Cards
- Canonical URLs
- Structured data ready

### Secciones Disponibles

- **Hero** - Sección principal con CTA
- **About** - Información de la empresa
- **Services** - Lista de servicios con acordeón
- **Counter** - Estadísticas con animaciones
- **Projects** - Portafolio de trabajos
- **Testimonials** - Opiniones de clientes
- **Team** - Equipo de trabajo
- **Blog** - Últimas publicaciones

## Buenas Prácticas Implementadas

1. **SEO**
   - Sitemap automático
   - Meta tags completos
   - Canonical URLs
   - robots.txt
   - Semantic HTML

2. **Rendimiento**
   - Prefetching automático
   - Compresión HTML
   - CSS minificado
   - Assets optimizados
   - Lazy loading de imágenes

3. **Accesibilidad**
   - Atributos alt en imágenes
   - Aria labels en enlaces sociales
   - Estructura semántica
   - Contraste de colores

4. **Desarrollo**
   - TypeScript strict mode
   - Componentes modulares
   - Código limpio y mantenible
   - Separación de responsabilidades

## Personalización

### Modificar Contenido

Edita los componentes en `src/components/sections/` para cambiar el contenido de cada sección.

### Añadir Nuevas Páginas

Crea archivos `.astro` en `src/pages/` siguiendo este patrón:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout title="Tu Título" description="Tu descripción">
  <Header />
  <main>
    <!-- Tu contenido aquí -->
  </main>
  <Footer />
</BaseLayout>
```

## Despliegue

### Build para Producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

### Plataformas Recomendadas

- **Vercel** - Deploy automático con Git
- **Netlify** - CI/CD integrado
- **Cloudflare Pages** - Edge computing
- **AWS Amplify** - Infraestructura escalable

## Tecnologías Utilizadas

- [Astro](https://astro.build) - Framework web moderno
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Bootstrap 5](https://getbootstrap.com/) - Framework CSS
- [AOS](https://michalsnik.github.io/aos/) - Animaciones on scroll
- [GSAP](https://greensock.com/gsap/) - Animaciones avanzadas

## Soporte

Para preguntas o problemas, por favor abre un issue en el repositorio.

## Licencia

Este proyecto está basado en la plantilla Xeno. Consulta la licencia original de la plantilla para más detalles.
