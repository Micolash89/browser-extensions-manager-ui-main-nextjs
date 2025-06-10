# Browser Extensions Manager UI

![Browser Extensions Manager Preview](./preview.jpg)

Una aplicación web moderna para gestionar extensiones de navegador, construida con Next.js, TypeScript y Tailwind CSS. Este proyecto incluye funcionalidades avanzadas como animaciones fluidas, búsqueda en tiempo real y un sistema de temas dinámico.

## 🚀 Demo en Vivo

[Ver Demo](https://browser-extensions-manager-kohl.vercel.app/)

## ✨ Características

### Funcionalidades Principales
- **Gestión de Extensiones**: Activar/desactivar extensiones con un simple toggle
- **Filtrado Inteligente**: Filtra extensiones por estado (activas/inactivas)
- **Búsqueda Avanzada**: Busca extensiones por nombre en tiempo real
- **Eliminación**: Remueve extensiones de la lista con confirmación
- **Temas Personalizables**: Cambia entre diferentes esquemas de colores
- **Diseño Responsivo**: Adaptado para dispositivos móviles y desktop

### Mejoras Implementadas
- **Animaciones Fluidas**: Transiciones suaves con Framer Motion
- **Búsqueda en Tiempo Real**: Sistema de filtrado instantáneo
- **Interfaz Moderna**: Diseño actualizado con mejores UX patterns
- **Performance Optimizada**: Renderizado eficiente con React 19

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 15.3.2](https://nextjs.org/) con App Router
- **Lenguaje**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion 12.16.0](https://www.framer.com/motion/)
- **Runtime**: React 19


## 🚀 Instalación y Configuración

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Micolash89/browser-extensions-manager-ui-main-nextjs
   cd browser-extensions-manager-ui-main-nextjs
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abre tu navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 📁 Estructura del Proyecto

```
browser-extensions-manager/
├── app/                    # App Router de Next.js
│   ├── components/         # Componentes reutilizables
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── public/                # Archivos estáticos
│   ├── assets/           # Imágenes y recursos
│   └── data.json         # Datos de extensiones
├── types/                # Definiciones de TypeScript
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Características de Diseño

### Temas Disponibles
- **Tema Claro**: Interfaz limpia y minimalista
- **Tema Oscuro**: Diseño elegante para uso nocturno
- **Temas Personalizados**: Múltiples esquemas de colores

### Animaciones
- **Transiciones de Estado**: Animaciones suaves al cambiar el estado de las extensiones
- **Hover Effects**: Efectos interactivos en botones y cards
- **Loading States**: Animaciones de carga elegantes
- **Micro-interacciones**: Detalles que mejoran la experiencia del usuario

**Desarrollado con ❤️ por [Javier Espindola](https://github.com/Micolash89)**