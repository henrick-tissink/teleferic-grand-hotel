# Teleferic Grand Hotel — Website

5-star luxury hotel website for Teleferic Grand Hotel, Poiana Brasov, Romania.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components, Turbopack)
- **Language:** TypeScript 5.7, React 19
- **Styling:** Tailwind CSS 4 with custom theme (CSS variables in `src/styles/globals.css`)
- **i18n:** next-intl — 3 locales: `ro` (default), `en`, `de`
- **CMS:** Sanity 3 (studio at `/studio`, GROQ queries)
- **Forms:** react-hook-form + zod validation
- **Animation:** framer-motion (respects `prefers-reduced-motion`)
- **Icons:** lucide-react
- **Package manager:** pnpm

## Commands

```bash
pnpm dev          # Dev server with Turbopack
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # ESLint
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # All pages (rooms, dining, spa, booking, etc.)
│   ├── studio/            # Sanity CMS studio
│   ├── globals.css        # Imports styles/globals.css
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Header, Footer, Navigation, MobileMenu, LanguageSwitcher
│   ├── sections/          # HeroSlider, BookingBar, RoomCard, DiningCard, AwardsStrip
│   ├── ui/                # AnimateIn, Button, Card, Badge, Accordion, Gallery, Slider
│   └── forms/             # BookingForm, ContactForm
├── content/               # Static TypeScript data (rooms.ts, dining.ts, awards.ts)
├── i18n/
│   ├── config.ts          # Locales, pathname mappings
│   ├── routing.ts         # next-intl Link, useRouter, usePathname
│   ├── request.ts         # Server-side message loading
│   └── messages/          # en.json, ro.json, de.json
├── sanity/
│   ├── client.ts          # Sanity client
│   ├── queries.ts         # GROQ query functions
│   ├── types.ts           # Sanity document interfaces
│   └── schemas/           # 17 schema definitions
├── lib/
│   ├── utils.ts           # t(), tSlug(), tPortableText(), cn()
│   └── blur.ts            # Blur placeholder data URL
├── styles/globals.css     # Tailwind theme, custom properties, base styles
└── middleware.ts           # Locale detection/routing
```

## Key Patterns

- **Server components by default.** Pages are async server components; interactivity isolated in `'use client'` files.
- **Translations flow down.** Pages call `getTranslations()` server-side, pass translation objects as props to client components.
- **Localized routing.** All routes under `[locale]/` with translated slugs (e.g., `/ro/camere` vs `/en/rooms` vs `/de/zimmer`). Mappings in `src/i18n/config.ts`.
- **Hybrid content.** Static data in `src/content/*.ts` (rooms, dining, awards), dynamic content via Sanity CMS.
- **Multi-language content.** Uses `Record<Locale, string>` for static data; Sanity uses `localeString`, `localeSlug`, `localePortableText` object types.

## Design System

**Colors** (defined as CSS variables in `src/styles/globals.css`):
- `navy` (#1a1f36) — primary dark, backgrounds
- `gold` (#c9a96e) — accent, CTAs, highlights
- `cream` (#faf8f4) — light backgrounds
- `charcoal` (#2d2d2d) — body text
- `forest` (#2d5a3d) — secondary accent

**Typography:**
- Headings: Playfair Display (serif) — `font-[family-name:var(--font-heading)]`
- Body: Inter (sans-serif) — `font-[family-name:var(--font-body)]`

**Component conventions:**
- PascalCase component files, camelCase utilities
- `AnimateIn` wrapper for scroll-triggered entrance animations
- Forms use underline-style inputs with gold focus states
- Buttons: gold background, navy text, uppercase tracking

## Content Data

- **Rooms:** `src/content/rooms.ts` — 8 room types with localized names/descriptions, amenities, capacity, images
- **Dining:** `src/content/dining.ts` — restaurant/bar venues with capacity, hours, menu links
- **Awards:** `src/content/awards.ts` — award entries with year, name, localized titles, image paths
- **Images:** `public/images/` organized by section (hero, rooms, restaurants, spa, awards, etc.)
- **Assets source:** `assets/` contains original images before placement in `public/images/`

## Important Notes

- Award logo PNGs are white/transparent — they need dark backgrounds to be visible.
- Image optimization uses Next.js `<Image>` with blur placeholders from `src/lib/blur.ts`.
- The Sanity project ID is configured via `NEXT_PUBLIC_SANITY_PROJECT_ID` env var.
- Routing uses `src/i18n/routing.ts` exports (`Link`, `useRouter`, `usePathname`) instead of Next.js defaults for locale-aware navigation.
