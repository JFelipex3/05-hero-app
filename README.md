# 🦸 Heroes APP

> Proyecto de aprendizaje del curso de React de Fernando Herrera en Udemy

Este proyecto es una aplicación web moderna para explorar, buscar y gestionar información sobre superhéroes. Implementa conceptos avanzados de React, routing, estado global, y testing.

## 📚 Tabla de Contenidos

- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Conceptos de React Aprendidos](#-conceptos-de-react-aprendidos)
- [Arquitectura de la Aplicación](#-arquitectura-de-la-aplicación)
- [Rutas de la Aplicación](#-rutas-de-la-aplicación)
- [Gestión de Estado](#-gestión-de-estado)
- [Testing](#-testing)

---

## ✨ Características Principales

- 🔍 **Búsqueda de Héroes**: Sistema de búsqueda con filtros y resultados en tiempo real
- 📊 **Estadísticas**: Vista de estadísticas agregadas de todos los héroes
- ⭐ **Favoritos**: Gestión de héroes favoritos con persistencia en LocalStorage
- 📄 **Paginación**: Navegación eficiente a través de grandes listas de héroes
- 🎨 **UI Moderna**: Interfaz con componentes de Radix UI y Tailwind CSS
- 🧪 **Testing Completo**: Pruebas unitarias y de integración con Vitest
- 🚀 **Optimización**: Lazy loading y React Query para caché y optimización

---

## 🛠️ Tecnologías Utilizadas

### Core
- **React 19** - Biblioteca principal de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server

### Routing y Navegación
- **React Router 7** - Manejo de rutas y navegación

### Estado y Data Fetching
- **TanStack Query (React Query)** - Gestión de estado del servidor, caché y sincronización
- **Context API** - Estado global de favoritos

### UI y Estilos
- **Tailwind CSS 4** - Framework de estilos utility-first
- **Radix UI** - Componentes accesibles y sin estilos predefinidos
- **Lucide React** - Iconos

### HTTP Client
- **Axios** - Cliente HTTP para peticiones a la API

### Testing
- **Vitest** - Framework de testing
- **Testing Library** - Testing de componentes React
- **Axios Mock Adapter** - Mock de peticiones HTTP en tests

### Linting y Calidad
- **ESLint** - Linting de código
- **TanStack ESLint Plugin Query** - Reglas específicas para React Query

---

## 📁 Estructura del Proyecto

```
05-hero-app/
├── public/                          # Archivos estáticos
├── src/
│   ├── main.tsx                     # Punto de entrada de la aplicación
│   ├── HeroesApp.tsx                # Componente raíz con providers
│   ├── index.css                    # Estilos globales
│   │
│   ├── admin/                       # Módulo de administración
│   │   ├── layouts/
│   │   │   └── AdminLayout.tsx      # Layout para sección admin
│   │   └── pages/
│   │       └── AdminPage.tsx        # Página principal de admin
│   │
│   ├── components/                  # Componentes compartidos
│   │   ├── custom/                  # Componentes personalizados
│   │   │   ├── CustomBreadcrumbs.tsx
│   │   │   ├── CustomJumbotron.tsx
│   │   │   ├── CustomMenu.tsx
│   │   │   └── CustomPagination.tsx
│   │   └── ui/                      # Componentes UI de Radix
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...
│   │
│   ├── heroes/                      # Módulo principal de héroes
│   │   │
│   │   ├── actions/                 # Acciones de negocio
│   │   │   ├── get-hero.action.ts
│   │   │   ├── get-heroes-by-page.action.ts
│   │   │   ├── get-summary.action.ts
│   │   │   └── search-heroes.action.ts
│   │   │
│   │   ├── api/                     # Configuración de API
│   │   │   └── hero.api.ts          # Cliente Axios configurado
│   │   │
│   │   ├── components/              # Componentes del módulo
│   │   │   ├── HeroGrid.tsx         # Grid de héroes
│   │   │   ├── HeroGridCard.tsx     # Card individual de héroe
│   │   │   ├── HeroStats.tsx        # Estadísticas
│   │   │   └── custom/
│   │   │       └── HeroNotFound.tsx # Componente de héroe no encontrado
│   │   │
│   │   ├── context/                 # Context API
│   │   │   └── FavoriteHeroContext.tsx  # Contexto de favoritos
│   │   │
│   │   ├── hooks/                   # Custom Hooks
│   │   │   ├── useHero.tsx          # Hook para obtener un héroe
│   │   │   ├── useHeroSummary.tsx   # Hook para estadísticas
│   │   │   └── usePaginatedHero.tsx # Hook para paginación
│   │   │
│   │   ├── layouts/
│   │   │   └── HeroesLayout.tsx     # Layout principal de héroes
│   │   │
│   │   ├── pages/                   # Páginas del módulo
│   │   │   ├── hero/
│   │   │   │   └── HeroPage.tsx     # Detalle de héroe individual
│   │   │   ├── home/
│   │   │   │   └── HomePage.tsx     # Página de inicio con grid
│   │   │   └── search/
│   │   │       ├── SearchPage.tsx   # Página de búsqueda
│   │   │       └── ui/
│   │   │           └── SearchControl.tsx  # Controles de búsqueda
│   │   │
│   │   └── types/                   # Interfaces y tipos
│   │       ├── hero.interface.ts
│   │       ├── get-heroes-response.ts
│   │       └── summary-information.response.ts
│   │
│   ├── lib/
│   │   └── utils.ts                 # Utilidades (cn para clases)
│   │
│   └── router/
│       └── app.router.tsx           # Configuración de rutas
│
├── components.json                   # Configuración de shadcn/ui
├── package.json
├── tsconfig.json                     # Configuración de TypeScript
├── vite.config.ts                    # Configuración de Vite
└── eslint.config.js                  # Configuración de ESLint
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (v18 o superior)
- npm o pnpm

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd 05-hero-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear un archivo `.env` en la raíz del proyecto basado en `.env.template`:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. **Levantar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

---

## 📜 Scripts Disponibles

```json
{
  "dev": "vite",                    // Inicia el servidor de desarrollo
  "build": "tsc -b && vite build",  // Compila para producción
  "lint": "eslint .",               // Ejecuta el linter
  "preview": "vite preview",        // Preview de la build de producción
  "test": "vitest",                 // Ejecuta tests en modo watch
  "test:ui": "vitest --ui",         // Ejecuta tests con interfaz UI
  "coverage": "vitest run --coverage" // Genera reporte de cobertura
}
```

---

## 🎓 Conceptos de React Aprendidos

### 1. **React Router 7**
- Configuración de rutas con `createBrowserRouter`
- Rutas anidadas con `children`
- Layouts compartidos
- Navegación programática
- Parámetros de URL (`useParams`)
- Lazy loading de componentes

### 2. **Context API**
- Creación de contextos personalizados
- Provider pattern
- Consumo de contexto con hooks
- Estado global sin librerías externas

### 3. **Custom Hooks**
- Hooks personalizados para lógica reutilizable
- Integración con React Query
- Manejo de estado local en hooks
- Composición de hooks

### 4. **TanStack Query (React Query)**
- Queries para fetching de datos
- Caché automático
- Estados de loading, error y success
- Refetch automático
- Prefetching
- DevTools para debugging

### 5. **TypeScript con React**
- Tipado de componentes
- Interfaces para props
- Tipos genéricos en hooks
- Type safety en toda la aplicación

### 6. **Testing en React**
- Testing de componentes con Testing Library
- Testing de hooks personalizados
- Mocking de APIs con Axios Mock Adapter
- Snapshots testing
- Testing de Context

### 7. **Optimización y Performance**
- Lazy loading de rutas
- Memoización con React Query
- Code splitting
- Optimistic updates

### 8. **LocalStorage**
- Persistencia de datos en el navegador
- Sincronización con estado de React
- Serialización y deserialización

---

## 🏗️ Arquitectura de la Aplicación

### Flujo de Datos

```
┌─────────────────────────────────────────────────────────────┐
│                        HeroesApp.tsx                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │         QueryClientProvider (React Query)            │   │
│  │  ┌───────────────────────────────────────────────┐  │   │
│  │  │    FavoriteHeroProvider (Context API)         │  │   │
│  │  │  ┌─────────────────────────────────────────┐  │  │   │
│  │  │  │      RouterProvider (React Router)      │  │  │   │
│  │  │  │   ┌──────────────┐  ┌──────────────┐   │  │  │   │
│  │  │  │   │ HeroesLayout │  │ AdminLayout  │   │  │  │   │
│  │  │  │   │              │  │              │   │  │  │   │
│  │  │  │   │  - HomePage  │  │  - AdminPage │   │  │  │   │
│  │  │  │   │  - HeroPage  │  └──────────────┘   │  │  │   │
│  │  │  │   │  - SearchPage│                     │  │  │   │
│  │  │  │   └──────────────┘                     │  │  │   │
│  │  │  └─────────────────────────────────────────┘  │  │   │
│  │  └───────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Capas de la Aplicación

1. **API Layer** (`api/`)
   - Configuración de Axios
   - Base URLs y endpoints

2. **Actions Layer** (`actions/`)
   - Lógica de negocio
   - Llamadas a la API
   - Transformación de datos

3. **Hooks Layer** (`hooks/`)
   - Custom hooks con React Query
   - Abstracción de actions
   - Estado derivado

4. **Components Layer** (`components/`)
   - Componentes de presentación
   - Componentes reutilizables
   - UI components

5. **Pages Layer** (`pages/`)
   - Componentes de página
   - Composición de componentes
   - Lógica de vista

6. **Context Layer** (`context/`)
   - Estado global
   - Providers

---

## 🗺️ Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `HomePage` | Lista paginada de héroes con estadísticas |
| `/heroes/:idSlug` | `HeroPage` | Detalle completo de un héroe individual |
| `/search` | `SearchPage` | Búsqueda y filtrado de héroes |
| `/admin` | `AdminPage` | Panel de administración (lazy loaded) |
| `*` | Navigate to `/` | Redirección para rutas no encontradas |

---

## 🔄 Gestión de Estado

### Estado Global (Context API)

**FavoriteHeroContext**
- Almacena héroes favoritos
- Sincroniza con LocalStorage
- Proporciona métodos para agregar/quitar favoritos
- Chequea si un héroe es favorito

```typescript
interface FavoriteHeroContext {
  favorites: Hero[];
  favoriteCount: number;
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}
```

### Estado del Servidor (React Query)

**Queries principales:**
- `useHero(id)` - Obtiene un héroe por ID
- `usePaginatedHero(page)` - Obtiene héroes paginados
- `useHeroSummary()` - Obtiene estadísticas agregadas
- `searchHeroes(query)` - Búsqueda de héroes

**Ventajas:**
- Caché automático
- Sincronización en background
- Estados de loading/error/success
- Refetch automático

---

## 🧪 Testing

El proyecto incluye tests comprehensivos:

### Estructura de Tests

- **Unit Tests**: Funciones puras y actions
  - `get-hero.action.test.ts`
  - `get-heroes-by-page.action.test.ts`
  - `get-summary.action.test.ts`

- **Component Tests**: Componentes React
  - `HeroStats.test.tsx`
  - `SearchControl.test.tsx`
  - `HomePage.test.tsx`
  - `SearchPage.test.tsx`

- **Hook Tests**: Custom hooks
  - `useHeroSummary.test.tsx`
  - `usePaginatedHero.test.tsx`

- **Context Tests**: Context providers
  - `FavoriteHeroContext.test.tsx`

- **Snapshot Tests**: UI consistency
  - `__snapshots__/` directories

### Ejecutar Tests

```bash
# Tests en modo watch
npm run test

# Tests con UI
npm run test:ui

# Reporte de cobertura
npm run coverage
```

### Herramientas de Testing

- **Vitest**: Framework de testing rápido
- **Testing Library**: Testing de componentes
- **Axios Mock Adapter**: Mock de peticiones HTTP

---

## 🎨 Componentes UI Personalizados

### CustomBreadcrumbs
Navegación por migas de pan para mejor UX.

### CustomJumbotron
Banner principal para destacar información.

### CustomMenu
Menú de navegación con soporte para rutas activas.

### CustomPagination
Componente de paginación reutilizable con controles de página anterior/siguiente.

---

## 📦 Componentes de Radix UI

El proyecto utiliza componentes de Radix UI para garantizar accesibilidad:

- **Accordion** - Secciones expandibles
- **Badge** - Etiquetas y tags
- **Button** - Botones con variantes
- **Card** - Contenedores de contenido
- **Dialog** - Modales
- **Input/Label** - Campos de formulario
- **Navigation Menu** - Menús de navegación
- **Progress** - Barras de progreso
- **Select** - Selectores dropdown
- **Slider** - Controles deslizantes
- **Tabs** - Pestañas
- **Textarea** - Áreas de texto

---

## 🌟 Características Avanzadas

### Lazy Loading
Carga diferida del módulo admin para optimizar el bundle inicial:
```typescript
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));
```

### Paginación Eficiente
Sistema de paginación con React Query que mantiene en caché las páginas visitadas.

### Búsqueda en Tiempo Real
Sistema de búsqueda que filtra héroes según criterios múltiples.

### Persistencia de Favoritos
Los favoritos se guardan en LocalStorage y se sincronizan automáticamente.

---

## 🔧 Configuración Adicional

### TypeScript
Configuración estricta para mayor seguridad de tipos.

### ESLint
Reglas configuradas para React, React Hooks y React Query.

### Vite
Build tool moderno con HMR (Hot Module Replacement) ultra rápido.

### Tailwind CSS
Configuración personalizada con Tailwind 4 y soporte para Radix UI.

---

## 📝 Notas del Desarrollador

Este proyecto es parte del curso de React de **Fernando Herrera** en Udemy y cubre:

✅ React 19 con TypeScript
✅ React Router 7 con rutas anidadas
✅ TanStack Query (React Query)
✅ Context API para estado global
✅ Custom Hooks avanzados
✅ Testing comprehensivo con Vitest
✅ UI moderna con Radix UI y Tailwind
✅ Optimización y mejores prácticas
✅ Arquitectura escalable y mantenible

---

## 📄 Licencia

Este es un proyecto educativo sin licencia específica.

---

## 🤝 Créditos

- **Instructor**: Fernando Herrera
- **Plataforma**: Udemy
- **Estudiante**: [Tu nombre]

---

**¡Happy Coding! 🚀**