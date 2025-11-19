<div align="center">

![OculusLab Banner](image.png)

# 🔬 OculusLab

### *Rompiendo barreras para crear nuevas realidades*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**[Demo en vivo](https://oculuslab.dev)** • **[Documentación](docs/)** • **[Contribuir](#-cómo-contribuir)**

</div>

---

## 📖 Índice

- [Acerca de OculusLab](#-acerca-de-oculuslab)
- [¿Por qué este proyecto?](#-por-qué-este-proyecto)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Inicio Rápido](#-inicio-rápido)
- [Arquitectura](#-arquitectura)
- [Componentes Destacados](#-componentes-destacados)
- [El Equipo](#-el-equipo)
- [Roadmap](#-roadmap)
- [Contribuir](#-cómo-contribuir)
- [Licencia](#-licencia)

---

## 🔬 Acerca de OculusLab

**OculusLab** es un laboratorio de investigación independiente formado por estudiantes y profesionales con iniciativa y visión. Nos especializamos en:

- 🧠 **Neurotecnología** - Interfaces cerebro-computadora y sistemas EEG
- 🎮 **Experiencias Inmersivas** - Realidad virtual y aumentada
- 🤖 **Machine Learning** - Modelos predictivos y análisis de datos neurales
- 🔧 **Hardware Open Source** - Dispositivos sensoriales y microcontroladores

### Nuestra Filosofía

> *"Si quieres las cosas bien hechas, hazlas tú mismo."*

Creemos en la importancia de:
- ✅ **Investigación con propósito** - Proyectos reales que generan impacto
- ✅ **Talento interdisciplinario** - Diversidad de conocimientos y perspectivas
- ✅ **Código abierto** - Compartir conocimiento para acelerar la innovación
- ✅ **Aprendizaje continuo** - El único requisito para unirse es querer aprender

---

## 💡 ¿Por qué este proyecto?

Esta landing page no es solo una vitrina, es una **declaración de principios**. Cada animación, cada interacción, cada detalle técnico representa nuestro compromiso con la excelencia y la innovación.

### Problemas que resolvimos

1. **Storytelling visual complejo** → Implementamos scroll-triggered animations con GSAP
2. **Performance en animaciones pesadas** → Optimización con RAF y lazy loading
3. **UX inmersiva** → Custom cursor, smooth scroll y transiciones naturales
4. **Escalabilidad** → Arquitectura modular y componentes reutilizables

---

## ✨ Características

### 🎨 Experiencia Visual

- **Scroll Interactivo** - Animaciones sincronizadas con el scroll usando GSAP ScrollTrigger
- **Cursor Personalizado** - Cursor glass con efectos adaptativos según contexto
- **Video Background** - Hero section con video optimizado y lazy loading
- **Zoom Reveal Effect** - Transiciones cinematográficas entre secciones
- **Glassmorphism UI** - Elementos con efecto cristal y blur dinámico

### 🚀 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Code Splitting** automático con Vite
- **Lazy Loading** de componentes y assets
- **Optimización de animaciones** con GSAP y RequestAnimationFrame
- **Bundle size** < 200KB (gzipped)

### 📱 Responsividad

- **Mobile-first design**
- **Breakpoints adaptativos** (sm, md, lg, xl, 2xl)
- **Touch-friendly interactions**
- **Reduced motion support** para accesibilidad

### 🎯 Secciones Principales

1. **Hero** - Video inmersivo con tagline animado
2. **Reveal** - Mensaje motivacional con scroll reveal
3. **Who We Are** - Presentación del equipo y misión
4. **From the Lab** - Galería horizontal de proyectos con videos
5. **Why Partner** - Bento grid con métricas y visualizaciones
6. **Contact** - Formulario con lamp effect y CTA
7. **Footer** - Links y redes sociales

---

## 🛠 Stack Tecnológico

### Core

- **[React 19.2](https://react.dev/)** - UI library con Server Components
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type safety y mejor DX
- **[Vite 7.2](https://vitejs.dev/)** - Build tool ultra-rápido
- **[React Router 7.9](https://reactrouter.com/)** - Client-side routing

### Styling

- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

### Animations

- **[GSAP 3.13](https://greensock.com/gsap/)** - Professional-grade animations
  - ScrollTrigger - Scroll-based animations
  - Timeline - Secuencias complejas
- **[Lenis 1.3](https://lenis.studiofreight.com/)** - Smooth scroll
- **[Motion 12](https://motion.dev/)** - Framer Motion fork

### Icons & Assets

- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Custom SVG](src/assets/)** - Ilustraciones optimizadas

### Development

- **[ESLint 9](https://eslint.org/)** - Linting y code quality
- **[Prettier 3.6](https://prettier.io/)** - Code formatting
- **[TypeScript ESLint 8](https://typescript-eslint.io/)** - TS linting rules

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ y npm/yarn/pnpm
- Git

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Oculus-Lab/oculus-lab-web.git
cd oculus-lab-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Ejecutar ESLint
npm run lint:fix     # Fix automático de problemas
npm run format       # Formatear código con Prettier
npm run type-check   # Verificar tipos TypeScript
```

---

## 🏗 Arquitectura

### Estructura de Carpetas

```
src/
├── assets/          # Imágenes, videos, fonts
├── components/
│   ├── common/      # Componentes reutilizables
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Lamp.tsx
│   │   └── LoadingBar.tsx
│   ├── layout/      # Layout components
│   │   ├── Navbar.tsx
│   │   └── MenuModal.tsx
│   └── sections/    # Secciones de la landing
│       ├── HeroSection/
│       ├── RevealSection/
│       ├── WeSection/
│       ├── LabSection/
│       ├── WhyPartnerSection/
│       ├── ContactSection/
│       └── FooterSection/
├── hooks/           # Custom React hooks
│   ├── useLenis.ts
│   ├── useScrollReveal.ts
│   ├── useTypewriter.ts
│   ├── useVideoLoader.ts
│   └── useZoomReveal.ts
├── pages/           # Page components
│   └── home.tsx
├── styles/          # Global styles
├── types/           # TypeScript types
├── utils/           # Utilidades
│   ├── animations.ts
│   └── helpers.ts
├── App.tsx          # Root component
└── main.tsx         # Entry point
```

### Principios de Diseño

1. **Modularidad** - Cada componente es independiente y reutilizable
2. **Single Responsibility** - Un componente, una responsabilidad
3. **Composition over Inheritance** - Composición de componentes pequeños
4. **Props drilling prevention** - Context API cuando es necesario
5. **Type Safety** - TypeScript en todo el código

---

## 🎨 Componentes Destacados

### CustomCursor

Cursor personalizado con efecto glass que se expande al hacer hover sobre elementos interactivos.

```tsx
<CustomCursor size={16} />
```

**Características:**
- Detección automática de elementos clickeables
- Animaciones suaves con cubic-bezier
- Oculta cursor nativo globalmente

### LabSection

Galería horizontal de proyectos con scroll vertical controlado por GSAP.

```tsx
<LabSection
  title="Desde el laboratorio"
  description="Proyectos reales..."
  projects={myProjects}
/>
```

**Características:**
- Scroll horizontal con pin
- Videos autoplay en loop
- ProjectCard con glassmorphism
- Animación de entrada bottom-to-top

### WhyPartnerSection

Bento grid con visualizaciones animadas SVG.

```tsx
<WhyPartnerSection />
```

**Características:**
- Grid responsive (1 col → 3 cols)
- Visuales personalizados por tarjeta
- Animaciones CSS y SVG
- BentoCard reutilizable

### MenuModal

Modal full-screen con navegación y efectos glass.

```tsx
<MenuModal isOpen={isOpen} onClose={handleClose} />
```

**Características:**
- Animaciones GSAP staggered
- Smooth scroll a secciones
- Cierre con ESC o click fuera
- Previene scroll del body

---

## 👥 El Equipo

OculusLab está formado por investigadores, desarrolladores y diseñadores apasionados por empujar los límites de la tecnología.

### Áreas de Expertise

- **Neurotecnología** - EEG, BCI, señales biomédicas
- **Frontend Engineering** - React, TypeScript, WebGL
- **Machine Learning** - TensorFlow, PyTorch, scikit-learn
- **Hardware** - Arduino, Raspberry Pi, sensores
- **UX/UI Design** - Figma, prototyping, motion design

### ¿Quieres unirte?

**El único requisito es querer aprender.** No importa tu nivel de experiencia, si tienes ganas de innovar y aprender, tienes un lugar aquí.

📧 **Contacto:** [contact@oculuslab.dev](mailto:contact@oculuslab.dev)

---

## 🗺 Roadmap

### Q1 2025 ✅

- [x] Landing page con animaciones avanzadas
- [x] Sistema de componentes modular
- [x] Custom cursor y smooth scroll
- [x] Documentación completa

### Q2 2025 🚧

- [ ] Blog técnico con MDX
- [ ] Sección de proyectos públicos
- [ ] Dashboard de métricas open-source
- [ ] Internacionalización (EN/ES)

### Q3 2025 📋

- [ ] API pública de datasets
- [ ] Playground interactivo de demos
- [ ] Sistema de colaboradores
- [ ] Integración con Discord/Slack

### Q4 2025 🔮

- [ ] Plataforma de aprendizaje
- [ ] Certificaciones open-source
- [ ] Hackathons virtuales
- [ ] Publicación de papers

---

## 🤝 Cómo Contribuir

¡Las contribuciones son bienvenidas! Este proyecto es **open source** y queremos que crezca con la comunidad.

### Proceso de Contribución

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

### Guías de Estilo

- **TypeScript** estricto (no `any` permitido)
- **Prettier** para formateo automático
- **Conventional Commits** para mensajes
- **Componentes funcionales** con hooks
- **Props con interfaces** TypeScript

### Áreas donde puedes ayudar

- 🐛 **Bug fixes** - Reportar o arreglar issues
- ✨ **Features** - Nuevas secciones o componentes
- 📝 **Documentación** - Mejorar READMEs y comentarios
- 🎨 **Diseño** - Mejorar UX/UI
- ♿ **Accesibilidad** - ARIA labels, keyboard navigation
- 🌍 **i18n** - Traducciones a otros idiomas
- 🧪 **Testing** - Unit tests, E2E tests

### Code of Conduct

Lee nuestro [Código de Conducta](CODE_OF_CONDUCT.md) antes de contribuir.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 OculusLab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙏 Agradecimientos

- **[GSAP](https://greensock.com/)** - Por hacer las animaciones web increíbles
- **[Tailwind Labs](https://tailwindlabs.com/)** - Por revolucionar el CSS
- **[Vercel](https://vercel.com/)** - Por el hosting y deployment
- **Comunidad Open Source** - Por inspirarnos cada día

---

## 📬 Contacto

- **Website:** [oculuslab.dev](https://oculuslab.dev)
- **Email:** [contact@oculuslab.dev](mailto:contact@oculuslab.dev)
- **GitHub:** [@Oculus-Lab](https://github.com/Oculus-Lab)
- **Twitter:** [@OculusLabTech](https://twitter.com/OculusLabTech)
- **LinkedIn:** [OculusLab](https://linkedin.com/company/oculuslab)

---

<div align="center">

**[⬆ Volver arriba](#-oculuslab)**

Hecho con 💜 por el equipo de OculusLab

*Rompiendo barreras para crear nuevas realidades*

</div>