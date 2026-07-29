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
└── resume/            # Future résumé file
```

## Content and assets still needed

- Reviewed copy for every project and experience entry
- Replace the zero-value GuitarSense Practice Summary capture with a meaningful completed session before public launch
- Nexora screenshot replacements before public launch:
  - Replace the Explore capture with owned media instead of third-party test artwork
  - Replace the messaging capture containing test-user names or profile imagery
- Grade Watcher project details
- Confirmed GitHub, LinkedIn, and contact destinations
- Final résumé
- Final visual identity and social preview imagery

Unknown destinations remain disabled rather than linking to placeholders.
