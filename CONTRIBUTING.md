# Guía de Contribución

¡Gracias por tu interés en contribuir a OculusLab! 🎉

Este documento proporciona pautas para contribuir al proyecto. Siguiendo estas pautas ayudas a mantener el proyecto organizado y facilita que los mantenedores revisen y acepten tus contribuciones.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guías de Estilo](#guías-de-estilo)
- [Estructura de Commits](#estructura-de-commits)
- [Pull Requests](#pull-requests)

## 📜 Código de Conducta

Este proyecto y todos los que participan en él se rigen por nuestro [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que respetes este código.

## 🤝 ¿Cómo puedo contribuir?

### Reportar Bugs

Antes de crear un bug report, verifica si ya existe un issue similar. Si no existe:

1. Usa un **título claro y descriptivo**
2. Describe los **pasos exactos para reproducir** el problema
3. Proporciona **ejemplos específicos**
4. Describe el **comportamiento observado** y el **esperado**
5. Incluye **screenshots** si es posible
6. Menciona tu **entorno** (OS, navegador, versión de Node, etc.)

**Template de Bug Report:**

```markdown
**Descripción del bug**
Una descripción clara del problema.

**Pasos para reproducir**
1. Ve a '...'
2. Haz click en '...'
3. Scroll down a '...'
4. Observa el error

**Comportamiento esperado**
Lo que debería pasar.

**Screenshots**
Si aplica, añade screenshots.

**Entorno**
- OS: [e.g. macOS 13.0]
- Navegador: [e.g. Chrome 120]
- Node: [e.g. 18.17]
```

### Sugerir Mejoras

Las sugerencias de mejoras se rastrean como GitHub issues:

1. Usa un **título claro y descriptivo**
2. Proporciona una **descripción detallada** de la mejora
3. Incluye **ejemplos** de cómo funcionaría
4. Explica **por qué** sería útil

### Tu Primera Contribución de Código

¿No sabes por dónde empezar? Busca issues etiquetados con:

- `good first issue` - Issues adecuados para principiantes
- `help wanted` - Issues donde necesitamos ayuda
- `documentation` - Mejoras en documentación

## 🔧 Proceso de Desarrollo

### 1. Fork y Clone

```bash
# Fork el repo en GitHub, luego:
git clone https://github.com/TU_USUARIO/oculus-lab-web.git
cd oculus-lab-web
git remote add upstream https://github.com/Oculus-Lab/oculus-lab-web.git
```

### 2. Configurar el Entorno

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# En otra terminal, ejecutar type-check en watch mode
npm run type-check -- --watch
```

### 3. Crear una Rama

```bash
# Actualizar main
git checkout main
git pull upstream main

# Crear rama para tu feature
git checkout -b feature/nombre-descriptivo
# o para bugs
git checkout -b fix/nombre-del-bug
```

### 4. Hacer Cambios

- Escribe código limpio y mantenible
- Sigue las guías de estilo del proyecto
- Añade comentarios cuando sea necesario
- Actualiza documentación si es relevante

### 5. Probar tus Cambios

```bash
# Lint
npm run lint

# Type check
npm run type-check

# Build
npm run build

# Preview
npm run preview
```

### 6. Commit

```bash
git add .
git commit -m "feat: añadir nueva funcionalidad X"
```

Ver [Estructura de Commits](#estructura-de-commits) para más detalles.

### 7. Push y Pull Request

```bash
git push origin feature/nombre-descriptivo
```

Luego abre un Pull Request en GitHub.

## 🎨 Guías de Estilo

### TypeScript

- **Usar TypeScript estricto** - No usar `any`, preferir tipos específicos
- **Interfaces sobre Types** - Usar `interface` para objetos
- **Named exports** - Preferir exports nombrados sobre default
- **Functional components** - Usar componentes funcionales con hooks

**Ejemplo:**

```tsx
// ✅ Correcto
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// ❌ Incorrecto
export default function Button(props: any) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
```

### React

- **Hooks** - Usar hooks de React para state y side effects
- **Props destructuring** - Destructurar props en parámetros
- **Key props** - Siempre usar `key` único en listas
- **Componentes pequeños** - Mantener componentes enfocados y pequeños

### CSS / Tailwind

- **Tailwind first** - Usar clases de Tailwind cuando sea posible
- **Responsive** - Mobile-first, usar breakpoints (sm, md, lg, xl)
- **clsx/cn** - Usar utilidad `cn()` para clases condicionales
- **Evitar inline styles** - Solo cuando sea absolutamente necesario

**Ejemplo:**

```tsx
// ✅ Correcto
<div className={cn(
  "px-4 py-2 rounded-lg",
  isActive && "bg-purple-500",
  isDisabled && "opacity-50 cursor-not-allowed"
)} />

// ❌ Incorrecto
<div style={{ padding: '8px 16px', borderRadius: '8px' }} />
```

### Nombres de Archivos

- **PascalCase** para componentes: `Button.tsx`, `HeroSection.tsx`
- **camelCase** para utilities/hooks: `useScrollReveal.ts`, `helpers.ts`
- **kebab-case** para assets: `hero-video.mp4`, `logo-dark.svg`

### Estructura de Componentes

```tsx
// 1. Imports
import React from 'react';
import { cn } from '@/utils';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
}

// 3. Subcomponents (si son pequeños y específicos)
const SubComponent = () => <div />;

// 4. Componente principal
export const Component: React.FC<ComponentProps> = ({ title }) => {
  // 4.1 Hooks
  const [state, setState] = useState();
  
  // 4.2 Handlers
  const handleClick = () => {};
  
  // 4.3 Effects
  useEffect(() => {}, []);
  
  // 4.4 Render
  return <div>{title}</div>;
};
```

## 📝 Estructura de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mensajes de commit claros y consistentes.

### Formato

```
<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios que no afectan el código (espacios, formato, etc.)
- `refactor`: Refactorización de código
- `perf`: Mejoras de performance
- `test`: Añadir o corregir tests
- `chore`: Cambios en build, CI, dependencias

### Ejemplos

```bash
feat(cursor): añadir cursor personalizado con efecto glass
fix(navbar): corregir animación en scroll
docs(readme): actualizar guía de instalación
style(button): formatear código con prettier
refactor(hero): simplificar lógica de video loader
perf(animations): optimizar GSAP timeline
chore(deps): actualizar GSAP a 3.13
```

## 🔄 Pull Requests

### Antes de Enviar

- ✅ Tu código sigue las guías de estilo
- ✅ Has ejecutado `npm run lint` sin errores
- ✅ Has ejecutado `npm run type-check` sin errores
- ✅ El build funciona (`npm run build`)
- ✅ Has actualizado documentación si es necesario
- ✅ Tus commits siguen Conventional Commits

### Template de PR

```markdown
## Descripción
Breve descripción de los cambios.

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Documentación

## ¿Cómo se ha probado?
Describe las pruebas que realizaste.

## Checklist
- [ ] Mi código sigue las guías de estilo
- [ ] He revisado mi propio código
- [ ] He comentado partes complejas
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan warnings
- [ ] He añadido tests si es aplicable
```

### Proceso de Revisión

1. Un mantenedor revisará tu PR
2. Pueden solicitar cambios o mejoras
3. Una vez aprobado, será merged
4. Tu contribución aparecerá en el changelog

## 🎯 Áreas Específicas

### Añadir un Nuevo Componente

```bash
src/components/
├── common/          # Componentes genéricos reutilizables
├── layout/          # Componentes de layout (Navbar, Footer)
└── sections/        # Secciones de páginas
    └── NewSection/
        ├── NewSection.tsx      # Componente principal
        ├── SubComponent.tsx    # Subcomponentes si es necesario
        └── index.ts            # Barrel export
```

### Añadir un Hook

```bash
src/hooks/
├── useNewHook.ts    # Tu hook
└── index.ts         # Actualizar export
```

### Añadir Animaciones GSAP

```tsx
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  const ctx = gsap.context(() => {
    // Tus animaciones aquí
  }, ref);

  return () => ctx.revert(); // Cleanup importante
}, []);
```

## 🆘 ¿Necesitas Ayuda?

- 💬 Abre un [Discussion](https://github.com/Oculus-Lab/oculus-lab-web/discussions)
- 📧 Escríbenos a contact@oculuslab.dev
- 🐛 Revisa [Issues abiertos](https://github.com/Oculus-Lab/oculus-lab-web/issues)

## 🙏 Reconocimiento

Todos los colaboradores serán reconocidos en nuestro README y changelog.

---

**¡Gracias por contribuir a OculusLab!** 💜
