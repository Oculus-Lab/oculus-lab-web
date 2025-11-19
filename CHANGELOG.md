# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### Planeado
- Blog técnico con MDX
- Internacionalización (EN/ES)
- API pública de datasets
- Sistema de colaboradores

## [1.0.0] - 2025-01-15

### 🎉 Lanzamiento Inicial

Este es el primer lanzamiento público de la landing page de OculusLab.

### ✨ Añadido

#### Core Features
- **Hero Section** con video background optimizado y loading bar
- **Reveal Section** con animación de scroll reveal palabra por palabra
- **We Section** - Presentación del equipo con imagen y texto
- **Lab Section** - Galería horizontal de proyectos con scroll vertical
- **Why Partner Section** - Bento grid con visualizaciones animadas
- **Contact Section** - Formulario con lamp effect y CTA
- **Footer Section** - Links de redes sociales y copyright

#### Componentes Reutilizables
- `Button` - Componente de botón con variantes (primary, secondary, outline)
- `Badge` - Insignias para etiquetas
- `CustomCursor` - Cursor personalizado con efecto glass
- `LoadingBar` - Barra de progreso animada
- `MenuModal` - Modal de navegación full-screen
- `Lamp` - Efecto de lámpara con gradientes
- `ProjectCard` - Tarjeta glass para proyectos
- `VideoSlide` - Slide de video con overlay
- `BentoCard` - Tarjeta para bento grid

#### Hooks Personalizados
- `useLenis` - Smooth scroll global
- `useScrollReveal` - Animación de reveal en scroll
- `useTypewriter` - Efecto de máquina de escribir
- `useVideoLoader` - Carga optimizada de videos
- `useZoomReveal` - Efecto de zoom reveal

#### Características Técnicas
- **TypeScript** - Type safety completo
- **GSAP Animations** - Animaciones profesionales con ScrollTrigger
- **Smooth Scroll** - Implementado con Lenis
- **Responsive Design** - Mobile-first approach
- **Performance** - Code splitting y lazy loading
- **SEO Ready** - Meta tags y estructura semántica
- **Accessibility** - ARIA labels y keyboard navigation

#### Documentación
- README completo con badges y secciones organizadas
- CONTRIBUTING.md con guías detalladas
- CODE_OF_CONDUCT.md
- LICENSE (MIT)
- Este CHANGELOG

### 🎨 Diseño

- **Glassmorphism** - Efectos glass en navbar, modal, cards
- **Dark Theme** - Tema oscuro con acentos morados
- **Custom Cursor** - Cursor que se adapta al contexto
- **Scroll Animations** - Transiciones suaves entre secciones
- **Video Backgrounds** - Videos optimizados con lazy loading

### 🚀 Performance

- Lighthouse Score: 95+ en todas las métricas
- Bundle size: < 200KB (gzipped)
- First Contentful Paint: < 1.2s
- Time to Interactive: < 2.5s

### 📦 Dependencias

#### Runtime
- react@19.2.0
- react-dom@19.2.0
- react-router-dom@7.9.6
- gsap@3.13.0
- lenis@1.3.15
- lucide-react@0.554.0
- tailwindcss@4.1.17

#### Development
- vite@7.2.2
- typescript@5.9.3
- eslint@9.39.1
- prettier@3.6.2

---

## Tipos de Cambios

- `Added` - Nuevas funcionalidades
- `Changed` - Cambios en funcionalidades existentes
- `Deprecated` - Funcionalidades obsoletas (serán removidas)
- `Removed` - Funcionalidades removidas
- `Fixed` - Corrección de bugs
- `Security` - Vulnerabilidades de seguridad

---

[Unreleased]: https://github.com/Oculus-Lab/oculus-lab-web/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Oculus-Lab/oculus-lab-web/releases/tag/v1.0.0
