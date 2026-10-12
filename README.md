# erenkacar.com

The first technical foundation for Eren Kaçar’s product-first software
engineering portfolio. The site introduces selected projects, experience,
technical focus, and a structured GuitarSense case-study route.

## Current status

This repository contains the initial responsive and accessible portfolio
foundation. The visual identity and all public-facing text are provisional and
will be refined as verified content and assets become available.

## Technology stack

- Next.js with the App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` after the development server starts.

Additional validation commands:

```bash
npm test
npm run lint
npm run build
```

## Main structure

```text
src/
├── app/          # Routes, metadata, and global styles
├── components/   # Layout, section, and reusable UI components
├── config/       # Site-wide destinations and settings
├── data/         # Provisional project and experience content
└── types/        # Shared content types

public/
├── images/projects/  # Future reviewed project visuals
└── resume/            # Public résumé PDF
```

## Content and assets still needed

- Reviewed copy for every project and experience entry
- Final visual identity and social preview imagery

Unknown destinations remain disabled rather than linking to placeholders.

## Localization architecture (Phase 2B-1)

English routes live under `src/app/(en)` and render the server views in
`src/components/views` with an explicit dictionary. `src/i18n/en.ts` owns UI,
accessibility, metadata and social copy, composing the existing reviewed data
modules rather than duplicating their paragraphs or image descriptions.
`src/i18n/schema.ts` requires the complete translation shape, while
`src/i18n/routes.ts` maps stable page IDs to locale destinations. English remains
at the original URLs; the complete explicit Turkish dictionary in `src/i18n/tr.ts`
renders `/tr` and its three project pages through thin wrappers. Each root layout
sets its document language. The URL alone selects the dictionary, with no
automatic redirect or stored preference. Unsupported locales throw without a
prose fallback. Toolkit icons use stable IDs instead of translated headings.
Reviewed collections are exact readonly tuples, so intentionally adding or
removing entries requires updating the authoritative English data and its
derived translation schema. Dictionaries localize internal destinations through
the route registry types; project identities, software/API names, asset dimensions,
framing, asset URLs and external URLs remain fixed. Descriptive skill labels can
translate while their collection positions and lengths remain checked.

A small ordinary-link EN | TR switcher preserves page identity. Both languages
share the unchanged English CV and screenshots. Self-canonicals, reciprocal
en/tr/x-default alternates and the eight-page sitemap use the production origin.
Existing English social images keep their original paths and bytes; Turkish
previews reuse the renderer at explicit `/social/tr/*` endpoints. The separate
`src/app/localization.css` preserves the original global stylesheet and limits
responsive adjustments to the header and narrow Turkish hero.

Server-rendered unmatched routes in this architecture use the
documented experimental `globalNotFound` convention in installed Next.js
16.2.12. `src/app/global-not-found.tsx` explicitly shares the
dictionary-driven document shell, root metadata, viewport and global CSS with
the English layout, then renders `NotFoundView`. Unknown Turkish URLs currently
use this English document with a real 404 and noindex; the Turkish local
not-found view is prepared but the native global convention bypasses it for
unmatched URLs. There is no catchall page. See
`docs/localization-phase-2b1-report.md` for validation and the owner-review limits.

After building and starting the production server, run the HTTP baseline checks:

```powershell
$env:PORTFOLIO_TEST_ORIGIN = "http://localhost:3000"
node --test tests/integration/*.test.mjs
```
