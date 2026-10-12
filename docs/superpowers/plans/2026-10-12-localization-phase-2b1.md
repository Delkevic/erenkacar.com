# Phase 2B-1 implementation plan

> For agentic workers: use superpowers:subagent-driven-development for the content and routing tasks, then independent spec and code quality reviews. User instruction overrides commit/worktree steps: preserve this working tree and do not commit, merge, push or deploy.

**Goal:** Prepare eight complete English/Turkish portfolio pages locally for owner review, preserving approved English output except the small language switcher and required bilingual SEO additions.

**Architecture:** Continue the existing typed dictionaries, stable page registry and five specialized server views. Add a static Turkish root at `src/app/tr`, ordinary page-aware language links and explicit metadata-image endpoints. Keep the pinned Next.js version, English route group, shared assets/CV, original stylesheet and native global 404 convention.

**Stack:** Installed Next.js 16.2.12, React 19.2.4, TypeScript and the existing ImageResponse renderer; no dependencies or framework migration.

## 1. Preserve and verify the starting tree

- [x] Read the Phase 2A report and relevant installed Next.js internationalization, route-group, metadata, sitemap, route-handler and not-found guides.
- [x] Record branch `codex/i18n-phase-2a`, unchanged HEAD `dcd10463c7cdca7c56c048c98b40c042e659f0eb`, current unstaged/untracked Phase 2A changes and hashes of existing working-tree files in `tests/fixtures/phase-2b1-working-tree.json`.
- [x] Run `npm test`: 82 passed. Run original production integration suite: 15 passed.
- [x] Record all four English pages and 404 at 1440×900, 390×844 and 320×844 before editing. Keep `tests/fixtures/english-baseline.json` immutable.

## 2. Author the complete Turkish dictionary

**Owner:** Content implementer, exclusively `src/i18n/tr.ts`.

- [x] Core implementer first adds failing tests for a complete actual Turkish dictionary, expected terminology, every translated copy leaf and fixed factual values.
- [x] Author a full object checked with `satisfies DictionaryFor<"tr">`. Do not spread an English dictionary or inherit English prose. Reference existing approved data for fixed names, technology tuples, dimensions, framing and asset paths; explicitly provide translated prose, summaries, facts, qualifications, alt text and captions.
- [x] Use only current `src/i18n/en.ts` and reviewed current `src/data` modules for GuitarSense. Do not read history, archived material, product code or other development documentation.
- [x] Translate all shared/home/case-study/error/metadata/social namespaces and every reviewed content collection. Preserve factual dates, roles, ownership, outcomes, approximately 6 ms ASIO/46 ms WASAPI and the explicit backend-reported versus independently measured round-trip qualification.
- [x] Follow the user’s Turkish terminology. Preserve names/API names/URLs/emails; keep developer terms where natural. Add these new shared labels: `languageNavigation`, `englishVersion`, `turkishVersion`.
- [x] Identify deliberate retained technical terms/proper names for editorial review. Typecheck with the real schema; fix genuine schema overconstraints only in coordination with the core implementer.

## 3. Enable locales and thin Turkish wrappers

**Owner:** Core implementer. Files: `src/i18n/routes.ts`, `dictionaries.ts`, `en.ts`; `src/app/tr/layout.tsx`, `page.tsx`, `not-found.tsx`, `projects/{guitarsense,nexora,grade-watcher}/page.tsx`.

- [x] Add failing tests for both enabled dictionaries, eight route identities, full server document language and locale-aware links, retaining missing/incompatible dictionary compiler tests.
- [x] Enable `en` and `tr` explicitly; make the dictionary map complete without fallback. Add English switcher accessibility labels without changing existing English copy.
- [x] Use the existing DocumentShell, siteViewport and styles for the Turkish root:

```tsx
import { DocumentShell } from "@/components/layout/document-shell";
import { turkish } from "@/i18n/tr";
import { createRootMetadata, siteViewport } from "@/i18n/metadata";
import "../globals.css";
import "../localization.css";
export const metadata = createRootMetadata(turkish);
export const viewport = siteViewport;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DocumentShell dictionary={turkish}>{children}</DocumentShell>;
}
```

- [x] Each page wrapper passes `turkish` to the existing corresponding view and, for projects, calls `createProjectMetadata` with its stable identity and `"tr"`. Root/home wrapper uses HomeView. The Turkish not-found wrapper passes the same dictionary to NotFoundView.
- [x] Preserve the global 404 full English document for unknown routes if the installed convention cannot select locale reliably. Do not add catchall/header-path hacks or migrate the framework. Document unknown `/tr` fallback explicitly; test real 404/noindex/language consistency. Keep localized not-found content ready under the Turkish root.

## 4. Add the small server-rendered language switcher

**Owner:** Core implementer. Files: `components/layout/language-switcher.tsx`, `site-header.tsx`, all five view header calls and `src/app/localization.css`; import the added stylesheet from both roots and global 404.

- [x] First fail tests for exact page-preserving destinations, active language, language attributes, localized ARIA labels and plain anchors.
- [x] Switcher contract: `DictionaryProps & { page: PageId }`. Render EN, a decorative separator and TR using ordinary links whose destinations come from `getPublicPath(page, locale)`. Set `lang`, `hrefLang`, localized `aria-label` and `aria-current="page"` on the active link.
- [x] Pass explicit page identity from each specialized view; use home as the recovery identity on not-found content. Place the switcher after the brand and before the original navigation in DOM order. Desktop auto margin places it next to navigation; mobile grid keeps brand/switcher on the first row and scrollable section navigation on the second.
- [x] Keep original global CSS bytes unchanged. New CSS targets only switcher/header positioning and any demonstrated Turkish wrapping issue. Keep header height and all English body geometry unchanged where possible; preserve existing focus styling and avoid animations/flags/dropdowns/client state.

## 5. Complete bilingual SEO, JSON-LD and social images

**Owner:** Core implementer. Files: `src/i18n/metadata.ts`, `src/app/sitemap.ts`, `src/components/views/home.tsx`, `components/metadata/social-card.tsx`, localized social helper and five static `src/app/social/tr/{home,twitter,guitarsense,nexora,grade-watcher}/route.ts` wrappers.

- [x] First fail tests for canonical/reciprocal en/tr/x-default relationships, OG locales, eight sitemap entries, Turkish structured data and localized image paths.
- [x] Use the production origin for self-canonicals and alternates. Preserve English title/description/template and inherited homepage Twitter on project pages. Set appropriate OG locale/alternateLocale for every pair. Turkish project Twitter may explicitly use its corresponding localized preview.
- [x] Build sitemap from four page identities times two locales. Include matching absolute alternate links; preserve frequency/priority and robots; add no assets/errors/lastModified dates.
- [x] Preserve English Person/WebSite JSON-LD exactly. Turkish preserves person identity/contact/profile URLs, translates job/alumni labels, uses `/tr` for its website URL and `inLanguage="tr"`. Retain safe `<` escaping.
- [x] Keep all English metadata-image URLs/bytes intact. Dedicated localized endpoints under `/social/tr` reuse the existing renderer and accents; no automatic prefixing of existing assets. Preserve 1200×630, composition, fonts and colors. Handle Turkish uppercase with locale-aware text only if necessary, with the English rendering branch unchanged. Verify all Turkish glyphs and image layout.

## 6. Preserve regression coverage and validate final production output

**Owner:** Core implementer owns unit/source tests; root owns production tests, screenshots, reviews and report.

- [x] Adapt Phase 2A-only expectations (Turkish disabled, four sitemap pages, absent alternates) to the newly authorized behavior. Preserve every other substantive assertion and original baseline fixture.
- [x] Root updates `tests/integration/english-parity.test.mjs` to remove only the precisely defined switcher markup and authorized added metadata when comparing old English output, with separate exact assertions for these additions. Preserve CV/assets/social/docs/English body/JSON-LD coverage. Add eight-page bilingual production coverage, no redirects/cookies, reciprocal URLs, internal/external links, safe errors and privacy/latency checks.
- [x] Run `npm test`, `npm run lint`, `npx --no-install tsc --noEmit --incremental false`, `npm run build`, `git diff --check` and production integration tests against `npm run start`.
- [x] Review eight pages at all three widths, every language pair in both directions, navigation/back links, wrapping, images/footer, keyboard focus, history and browser errors. Compare English body geometry and screenshot pixels outside the authorized header additions.
- [x] Test navigation with website scripts blocked using a test-only local CSP proxy if browser controls do not expose a JavaScript-disable setting. Do not alter production response policy.
- [x] Obtain independent spec and quality reviews; resolve concrete findings and reverify changed behavior.
- [x] Save the requested 19-point completion report and browser artifacts. Preserve all changes locally for owner review; no commit/merge/push/deployment.
