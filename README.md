# Modular Frontend Architecture with Next.js App Router

Production-grade modular frontend architecture built with the Next.js App Router, reusable UI primitives, strict RSC/client boundaries, environment-safe configuration patterns, and scalable component organization.


---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      Next.js App Router                      │
│                                                              │
│  app/                                                        │
│  ├── layout.tsx          Root shell — fonts, GA4, metadata   │
│  ├── page.tsx            Section orchestration (RSC)         │
│  ├── blog/               Coming-soon placeholder             │
│  ├── materiais/          Product / materials page            │
│  ├── privacidade/        Privacy policy (static)             │
│  └── termos/             Terms of use (static)               │
│                                                              │
│  components/                                                 │
│  ├── layout/             Nav · Footer · Sticky CTA bar       │
│  ├── sections/           Page sections — one file each       │
│  └── ui/                 Design system primitives            │
│                                                              │
│  lib/                                                        │
│  ├── site.ts             Single source for all env values    │
│  ├── whatsapp.ts         Segment-aware deep-link builder     │
│  ├── analytics.ts        GA4 event helpers (no-op if unset)  │
│  ├── motion.ts           Framer Motion variant presets       │
│  └── utils.ts            cn(), formatNumber(), encode()      │
└─────────────────────────────────────────────────────────────┘
```

Every section in `components/sections/` is a self-contained module: it owns its data (`const` arrays at the top of the file), its markup, and its local interactivity. No section imports from another section. No global state is required.

---

## Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.6 |
| UI runtime | React | 19.2.4 |
| Language | TypeScript (strict) | ^5 |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) | ^4 |
| Animations | Framer Motion | ^12 |
| Headless UI | Radix UI (Accordion, Dialog, NavigationMenu, Slot) | ^1 |
| Typography | Cormorant Garamond + Plus Jakarta Sans (`next/font`) | — |
| Icons | Lucide React | ^1 |
| Analytics | Google Analytics 4 (env-gated, no-op fallback) | — |
| Deployment | Vercel | — |

---

## Design System

### Color Tokens

All tokens are CSS custom properties defined in `src/app/globals.css` under Tailwind v4's `@theme` directive. Components consume them as `var(--token)` — never as hardcoded hex values.

| Token | Value | Role |
|---|---|---|
| `--color-navy-900` | `#0F2444` | Primary text, dark backgrounds |
| `--color-navy-800` | `#1A3258` | Footer, deep surface |
| `--color-gold-500` | `#1555C4` | Blue accent — light backgrounds only |
| `--color-red-brand` | `#D42B2B` | Primary CTA, urgency anchors |
| `--color-cream-100` | `#F4F7FA` | Off-white — section backgrounds, panels |
| `--color-white` | `#FAFAFA` | Cards, light surfaces |

> **Contrast rule enforced in code:** the blue accent (`gold-500`) is never placed on navy. On dark backgrounds, accent elements use `red-brand` or plain white. This prevents the low-contrast failure mode at small type sizes.

### Typography

Two-font system with a deliberate separation of roles:

- **Cormorant Garamond** (`--font-display`) — display moments, pull quotes, large numerals. Loaded via `next/font/google` with `subsets: ["latin"]` and `display: "swap"`.
- **Plus Jakarta Sans** (`--font-body`) — all functional copy, labels, UI text.

Fluid sizing uses `clamp()` throughout, eliminating breakpoint-specific font size overrides. The full scale is defined as CSS variables (`--text-h1` through `--text-label`) and consumed via Tailwind utility classes.

### Component Primitives

| Primitive | File | Notes |
|---|---|---|
| `Section` / `SectionHeader` | `ui/section.tsx` | Background variants, `contained` prop, `headlineClassName` override |
| `Container` / `Stack` | `ui/container.tsx` | Max-width wrapper, gap-based vertical stack |
| `WhatsAppButton` | `ui/button.tsx` | Wraps `buildWhatsAppURL()`, segment-aware |
| `Card` / `FeatureList` | `ui/card.tsx` | Hoverable card with footer slot |
| `Reveal` / `RevealGroup` | `ui/reveal.tsx` | Scroll-triggered fade-up with configurable stagger |
| `Badge` | `ui/badge.tsx` | Tag and pill variants |
| `Accordion` | `ui/accordion.tsx` | Radix UI with full keyboard navigation |
| `DisplayL`, `H2–H4`, `Body`, `Label`, `PullQuote` | `ui/typography.tsx` | Typed semantic wrappers |

---

## RSC / Client Boundary Strategy

The default is React Server Components. `"use client"` is declared only at the exact component boundary where interactivity begins — never hoisted to the section level unless the entire section requires it.

| Component | Boundary | Reason |
|---|---|---|
| `SiteNav` | Client | Scroll state, mobile menu open/close |
| `ProcessSection` | Client | Hover/click active step state |
| `FeatureSection` | Client | Expand/collapse detail panel |
| `HeroSection` | Client | Auto-advancing carousel, progress dots |
| Everything else | Server | No local state required |

This keeps the client bundle minimal. Static sections — including the FAQ accordion — hydrate through Radix UI primitives (which are themselves client components) without requiring their parent sections to become client components.

---

## WhatsApp CTA Architecture

Conversion is driven entirely by WhatsApp deep links. No forms, no email capture on the primary flow.

```
buildWhatsAppURL(segment, source)
  └── NEXT_PUBLIC_WHATSAPP_NUMBER  (env)
  └── PREFILLED_MESSAGES[segment]  (src/lib/whatsapp.ts)
  └── source param                 (for analytics attribution)
```

Each segment maps to a contextual pre-filled message matched to the user's intent. Adding a new segment is a two-line change in `PREFILLED_MESSAGES`. The builder is isomorphic — it never accesses `window`, making it safe in RSC, SSR, and the browser without any `typeof window` guards.

---

## Config Centralisation

`src/lib/site.ts` is the single source of truth for all environment-derived runtime values. Components always import from `site`, never from `process.env` directly.

```ts
// Correct
import { site } from "@/lib/site";
<a href={site.contact.whatsappHref}>{site.contact.phone}</a>

// Never
<a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}>...</a>
```

This makes the codebase safe to publish — no contact data is hardcoded — and reduces environment changes to a single file.

---

## Analytics

All GA4 calls are routed through `src/lib/analytics.ts`. When `NEXT_PUBLIC_GA_MEASUREMENT_ID` is unset (local dev, preview deployments), every function is a no-op. Analytics never throw in any environment.

Tracked events: CTA clicks (with segment and source), scroll depth milestones, section enter via Intersection Observer.

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or pnpm

### Setup

```bash
# Clone
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install
npm install

# Configure environment
cp .env.example .env.local
# Fill in your values — see the table below

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

No sensitive data is hardcoded. All contact details, URLs, and third-party links are injected via environment variables at runtime.

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full deployment URL, no trailing slash |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | Country + area + number, no spaces (e.g. `10012345678`) |
| `NEXT_PUBLIC_CONTACT_PHONE` | Yes | Formatted phone for UI display (e.g. `+1 (00) 12345-6789`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Yes | Contact email shown on the site |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Yes | Full Instagram profile URL |
| `NEXT_PUBLIC_INSTAGRAM_HANDLE` | Yes | Handle for display (e.g. `@your_handle`) |
| `NEXT_PUBLIC_CHECKOUT_URL` | Yes | Checkout / payment link for the featured product |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | GA4 Measurement ID — omit to disable analytics |

See `.env.example` for the annotated template.

---

## Customising Content

Section content is defined as typed `const` arrays at the top of each section file — no CMS required for routine copy updates.

| Content | Location |
|---|---|
| Hero slides | `sections/hero.tsx` → `SLIDES` |
| Problem statements | `sections/problem.tsx` → `STATEMENTS` |
| Method differentiators | `sections/methodology.tsx` → `DIFFERENTIATORS` |
| Program cards | `sections/programs.tsx` → `PROGRAMS` |
| Feature expandable section | `sections/offshore.tsx` → `VOCAB` |
| Process steps | `sections/process.tsx` → `STEPS` |
| Testimonials | `sections/social-proof.tsx` → `TESTIMONIALS` |
| FAQ items | `sections/faq.tsx` → `FAQS` |
| Footer nav links | `layout/footer.tsx` → `PROGRAM_LINKS` |
| WhatsApp messages per segment | `lib/whatsapp.ts` → `PREFILLED_MESSAGES` |
| All contact info and URLs | `lib/site.ts` (reads from env) |

---

## Image Assets

Place images in `/public`. Placeholder SVGs for the logo are included — replace them with your own brand assets before deploying.

```
/public/
├── logo-mark.svg          # Logo mark for nav — replace with your own
├── logo-full.svg          # Logo with tagline for footer — replace with your own
├── hero-1.jpg … hero-5.jpg          # Hero carousel slides
├── program-1.jpg                    # Program card photo headers
├── program-2.jpg
├── program-3.jpg
├── feature-1.jpg                    # Feature section 2×2 grid
├── feature-2.jpg
├── feature-3.jpg
├── feature-4.jpg
└── product-cover.png                # Materials page — product cover
```

Client photos and brand assets should live in `/private-assets` or `/public/private` — both are gitignored.

---

## Deployment

Pre-configured for Vercel. Push to any branch for a preview deployment; promote to production from the dashboard.

Set all `NEXT_PUBLIC_*` variables in **Vercel → Project → Settings → Environment Variables** before the first production deploy. The build succeeds without them (all reads are guarded with fallbacks), but contact links and analytics will be inactive.

---

## Key Architectural Decisions

**No global state.** Component state is always local. Data is co-located with the section that owns it, keeping the component tree shallow and each section independently portable.

**Tailwind v4 — static classes only.** Tailwind v4's JIT scanner reads source files at build time. Dynamic class construction via template literals or computed keys produces classes that do not exist in the output bundle. All utility classes in this codebase are static strings.

**Radix UI for accessibility-critical components.** The accordion and navigation menu use Radix primitives for keyboard navigation, ARIA roles, and focus management — implemented correctly once, not re-implemented per component.

**`clamp()` over breakpoint overrides.** Typography and spacing scale with viewport units via `clamp()`, eliminating the per-breakpoint class overrides that accumulate over time and make responsive behaviour hard to reason about.

**Isomorphic utilities.** `buildWhatsAppURL()` and all `lib/` helpers contain no browser globals. They execute identically in Node (RSC, SSR) and the browser, with no environment detection required.

**Single config source.** `src/lib/site.ts` centralises every environment-derived value. Swapping a deployment (staging → production, one client → another) is a change to environment variables only, with zero source code modifications.

---

## License

MIT — free to use as a template or starting point for your own projects.
