# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm start` — Dev server on http://localhost:3000 (proxies API to Django backend)
- `npm run build` — Production build to `/build`
- `npm test` — Run tests (Jest + React Testing Library)
- Docker: `docker-compose up` — Runs production build via Nginx on port 3000

## Architecture

React 18 SPA built with Create React App. Japanese-language corporate website for EARU (insole/foot health products).

### Routing
React Router v6 in `src/App.js`. Routes wrapped with Framer Motion `AnimatePresence` for page transitions and `ParallaxProvider` for scroll effects. Global smooth scrolling via Lenis library.

Key routes: `/`, `/about-us`, `/products` (nested: `/insole`, `/brand`), `/overview`, `/after-service`, `/membership`, `/faq`, `/contact`, `/news`, `/news/:id`, `/schedules`

### Source Structure
- `src/pages/` — Page components, one per route. Some have subdirectories (News/, Products/, Schedules/)
- `src/components/` — Shared components:
  - `Header.js`, `Footer.js`, `SideMenu.js` — Layout
  - `animaition/` — Scroll animations, loading screen, fade-in (IntersectionObserver)
  - `perts/` — Reusable UI parts (buttons, accordion, tabs, popups, charts)
  - `sections/` — Page sections (contact form, home sections)
- `src/styles/` — SCSS partials imported via `main.scss`. One partial per page/component (e.g., `_home.scss`, `_contact.scss`). Variables in `_variables.scss`
- `src/assets/` — Images and SVGs organized by section

### State Management
Local React hooks only (useState/useEffect). No global state library. Props drilling for component communication.

### Styling
SCSS is the primary styling system. Responsive breakpoints via `@include respond-to(sm|md|lg)` mixin. Tailwind is configured but not actively used.

### API Integrations
- **Django backend** (`REACT_APP_DJANGO_API_BASE_URL`): Schedule/event data at `/api/plan_and_record/public/schedule/`. Dev proxy configured in package.json
- **WordPress REST API** (`https://earu-first.com/Blog/wp-json/wp/v2/posts`): Blog/news content
- **Zipcloud API**: Postal code to address lookup in contact form
- **EmailJS**: Contact form email delivery

### Animation Stack
Framer Motion (page transitions, motion components), Lenis (smooth scroll), react-scroll-parallax (parallax effects), IntersectionObserver-based fade-in components (`src/components/animaition/fade-in.js`)

## Conventions

- Component files use PascalCase (e.g., `AboutUs.js`) or camelCase for utilities
- SCSS partials prefixed with underscore, imported in `main.scss`
- All UI text is hardcoded in Japanese (no i18n library)
- Data fetching uses native `fetch` with async/await in useEffect hooks
- Schedule module (`src/pages/Schedules/`) has its own `api/`, `components/`, and `types.js` — the most structured sub-module
- Note: `animaition` and `perts` folder names are intentional misspellings used throughout

## Environment

- `.env`: `REACT_APP_DJANGO_API_BASE_URL=https://earu-sistem.onrender.com`
- Dev proxy in package.json points to same Django backend
- Docker deployment via multi-stage build (Node 18 → Nginx Alpine)
