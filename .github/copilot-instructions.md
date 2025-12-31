# Copilot Instructions for Official-Blog-Ciclic

## Project Overview
This is a full-stack blog/landing page application for Ciclic insurance company, built with React (client) and Express (server). It uses TypeScript, Vite for building, and Drizzle ORM for database interactions.

## Architecture
- **Client**: React SPA in `client/` using wouter for routing, @tanstack/react-query for data fetching, Radix UI components with Tailwind CSS styling.
- **Server**: Express.js API in `server/`, currently with in-memory storage but configured for PostgreSQL via Drizzle.
- **Shared**: Type-safe schemas in `shared/schema.ts` using Drizzle and Zod.
- **Build**: Vite handles client bundling; esbuild bundles server for production.

## Key Patterns
- **Routing**: Use wouter's `<Route>` in `client/src/App.tsx` for client-side navigation.
- **Components**: Leverage shadcn/ui components from `client/src/components/ui/`; extend with custom variants using `class-variance-authority`.
- **Styling**: Tailwind CSS with custom design tokens; responsive classes like `sm:`, `md:` for breakpoints.
- **Data Fetching**: Wrap API calls with React Query hooks; define queries in component files.
- **Database**: Use Drizzle's query builder for type-safe SQL; run `npm run db:push` after schema changes.
- **Error Handling**: Server uses custom error middleware; client shows toasts via `useToast` hook.

## Development Workflow
- **Start Dev**: `npm run dev` runs both client and server with hot reload.
- **Build**: `npm run build` creates production bundles in `dist/`.
- **Type Check**: `npm run check` validates TypeScript across the project.
- **Database**: Update schemas in `shared/schema.ts`, then `npm run db:push` to sync with Neon DB.

## Conventions
- **File Structure**: Client pages in `client/src/pages/`, components in `client/src/components/`.
- **Imports**: Use `@/` alias for `client/src/`; absolute imports for server files.
- **Naming**: PascalCase for components, camelCase for hooks/utilities.
- **Language**: UI text in Portuguese; code comments in English.
- **Assets**: Static images in `client/public/figmaAssets/`; reference with `/figmaAssets/...`.

## Examples
- Add new page: Create component in `client/src/pages/`, add `<Route path="/new" component={NewPage} />` in `App.tsx`.
- New API endpoint: Define in `server/routes.ts`, use `storage` interface for data operations.
- Custom component: Build on Radix primitives, e.g., extend `Button` with variants in `client/src/components/ui/button.tsx`.

For questions about unclear sections, ask for clarification.</content>
<parameter name="filePath">/workspaces/Official-Blog-Ciclic/.github/copilot-instructions.md