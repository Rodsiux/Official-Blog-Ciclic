# CICLIC Blog de Seguros

## Overview

A Portuguese-language insurance blog platform built with a modern full-stack architecture. The application serves as a content platform for CICLIC, featuring articles about various insurance products including travel insurance, auto insurance, pet health, and more. The frontend displays blog articles with navigation between a home page and individual article pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state and caching
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming (neutral and primary color scales)
- **Build Tool**: Vite for development and production builds

The frontend follows a component-based architecture with:
- Pages located in `client/src/pages/` (Home, Article, NotFound)
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utility functions in `client/src/lib/`

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Build**: esbuild for production bundling
- **Development**: tsx for TypeScript execution during development

The backend follows a modular structure:
- `server/index.ts`: Express app initialization and middleware setup
- `server/routes.ts`: API route registration
- `server/storage.ts`: Data storage abstraction layer with interface pattern
- `server/vite.ts`: Vite dev server integration for development

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle table definitions
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage Pattern**: Interface-based storage (`IStorage`) with in-memory implementation (`MemStorage`) that can be swapped for database implementation

Current schema includes a `users` table with id, username, and password fields.

### Development Workflow
- **Hot Module Replacement**: Vite HMR in development
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets
- **Type Checking**: Strict TypeScript configuration across client, server, and shared code

## External Dependencies

### Database
- **PostgreSQL**: Primary database (via Neon serverless driver `@neondatabase/serverless`)
- **Drizzle Kit**: Database migrations and schema pushing (`db:push` command)
- **connect-pg-simple**: PostgreSQL session storage capability

### UI Libraries
- **Radix UI**: Full suite of accessible UI primitives (accordion, dialog, dropdown, tabs, toast, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality
- **Recharts**: Charting library
- **React Day Picker**: Calendar/date picker
- **Vaul**: Drawer component
- **cmdk**: Command palette component

### Form & Validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolver integration
- **Zod**: Schema validation

### Utilities
- **date-fns**: Date manipulation
- **class-variance-authority**: Variant styling
- **clsx/tailwind-merge**: Class name utilities
- **nanoid**: ID generation

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator