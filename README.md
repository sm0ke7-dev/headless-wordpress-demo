# Headless WordPress + Next.js Project

A modern physical therapy and rehabilitation website built with Next.js 16 and Relume UI components, designed to work with a headless WordPress backend.

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About page
│   ├── services/
│   │   ├── page.tsx              # Services listing page
│   │   └── [slug]/page.tsx       # Single service page (dynamic route)
│   ├── locations/
│   │   ├── page.tsx              # Locations listing page
│   │   └── [slug]/page.tsx       # Single location page (dynamic route)
│   ├── layout.tsx                # Root layout with Navbar & Footer
│   └── globals.css               # Global styles
│
└── components/                   # React components organized by page
    ├── layout/                   # Shared layout components
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    ├── home/                     # Homepage sections
    ├── about/                    # About page sections
    ├── services/                 # Services listing page sections
    ├── service-single/           # Single service page sections
    ├── locations/                # Locations listing page sections
    └── location-single/          # Single location page sections
```

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Relume UI** - Pre-built UI component library
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Current Status - Phase 1 Complete ✓

**Phase 1: Project Structure Setup** ✅
- ✅ Next.js project initialized with TypeScript
- ✅ Routing structure created for all pages
- ✅ Relume components migrated and organized
- ✅ Shared Navbar and Footer components set up
- ✅ Dynamic routes created for services/[slug] and locations/[slug]

**Next Steps: Phase 2**
- Set up WordPress locally
- Create custom post types (Services, Locations, Reviews)
- Configure ACF fields
- Add dummy content

**Future: Phase 3**
- Create WordPress API utilities
- Make components dynamic with WordPress data
- Replace hardcoded content with API calls

## Pages and Routes

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Homepage with hero, services, testimonials | ✅ Static |
| `/about` | About us with team, stats, testimonials | ✅ Static |
| `/services` | Services listing page | ✅ Static |
| `/services/[slug]` | Single service detail page | ✅ Dynamic route ready |
| `/locations` | Locations listing with FAQ | ✅ Static |
| `/locations/[slug]` | Single location detail page | ✅ Dynamic route ready |

## Notes

- All components are currently using hardcoded content from Relume
- Components use placeholder images that need to be replaced
- Dynamic routes ([slug]) are set up but not yet connected to WordPress
- Navbar and Footer are shared across all pages via root layout
