# Phase 2A localization completion report

Verified locally on 2026-10-12. English output is preserved; Turkish remains unpublished.

## 1. Baseline commit and initial Git status

The original checkout was clean on `main` at `dcd10463c7cdca7c56c048c98b40c042e659f0eb`. All 62 original tests and the production build passed before implementation. Original production responses, metadata, JSON-LD, documents, screenshot/PDF hashes and social-image hashes were captured in `tests/fixtures/english-baseline.json` before production code changed. Desktop and mobile screenshots were captured before editing.

## 2. Architecture implemented

Native App Router localization uses `Locale = "en" | "tr"`, four stable page identities, a typed route registry, explicit dictionaries and specialized server views. Only `en` is enabled. Unpublished dictionary/path requests throw; there is no English fallback. No dependency, middleware, language negotiation, cookie/storage state or authored client component was added.

The locale-discriminated dictionary schema derives from the authoritative English structures. Required readonly tuples prevent omitted collection entries. Fixed identities, technology values, asset references, dimensions and framing remain constrained. Internal destinations are typed from the route registry; descriptive labels, prose, accessibility text and image descriptions can translate. Compiler tests prove both acceptance of a complete future locale structure and rejection of missing or incompatible content.

## 3. Files added, moved, modified or removed

Original HTML route bodies moved into five `src/components/views/` modules: `home.tsx`, `guitarsense.tsx`, `nexora.tsx`, `grade-watcher.tsx` and `not-found.tsx`. Original `src/app/layout.tsx`, `page.tsx`, `not-found.tsx` and the three project `page.tsx` files were replaced by six thin equivalents under `src/app/(en)/`.

Added:

- `src/i18n/routes.ts`, `en.ts`, `schema.ts`, `dictionaries.ts`, `metadata.ts`, `format.ts`.
- `src/components/layout/document-shell.tsx`, `src/app/global-not-found.tsx`, `src/data/nexora-architecture.ts`.
- `tests/english-assets.test.mjs`, `tests/localization-foundation.test.mjs`, `tests/fixtures/english-baseline.json`, `tests/helpers/english-output.mjs`, `tests/helpers/load-source.mjs`, `tests/integration/english-parity.test.mjs`.
- This report.

Modified:

- `README.md` and `next.config.ts` (the latter only enables the native global 404 flag).
- Existing manifest and root/project social-image generators, plus `components/metadata/social-card.tsx`, to consume English copy at their original URLs.
- Header/footer, all eight homepage sections and `components/ui/project-card.tsx` to receive explicit dictionaries.
- `data/projects.ts`, `experience.ts`, `toolkit.ts`, `case-study.ts` and `types/content.ts` for stable IDs and complete readonly structures, retaining reviewed paragraphs.
- Eight original test files: CV route, GuitarSense disclosure, homepage decorations, launch readiness, Nexora portfolio, portfolio completion, portfolio foundation and visual identity. Changes follow moved files or extracted ownership.

Public assets, global CSS, package/lock files, site destinations, sitemap, robots and icon sources are unchanged. No unrelated modifications were present initially or introduced.

## 4. English copy preservation

All four valid English pages and the custom 404 match the baseline server-rendered body, accessible markup and metadata. Existing data modules remain the source of reviewed paragraphs. Extraction includes section text, header/footer, summaries, case studies, buttons, labels, accessibility names, image descriptions/captions, social copy and error text.

The comparison excludes framework scripts and React comments, and normalizes generated image/icon version-query tokens in head values. JSON-LD is compared separately. Actual image bytes are independently hashed. It does not normalize wording, layout classes, links, ARIA attributes, canonicals or content.

## 5. Shared views and dictionaries

Five specialized server views preserve their original project layouts. The English dictionary composes reviewed data with shared, home, case-study, error, metadata and social copy. The shared document shell receives its locale and skip-link copy explicitly. Toolkit icons use stable IDs. No Turkish dictionary was created.

## 6. Routes and root layouts

`/`, `/projects/guitarsense`, `/projects/nexora` and `/projects/grade-watcher` still return 200 with `html lang="en"`. The English root layout lives in `(en)` and preserves the original CSS, fonts, skip link and viewport.

Installed Next.js 16.2.12 requires the documented experimental `globalNotFound` mechanism for the selected layout architecture to preserve the original unmatched-route response. Its full document shares the English shell, CSS, metadata, viewport and not-found view. Unknown paths and all four planned Turkish HTML paths return the original English 404. No catchall, Turkish layout or new public HTML route exists. The build retains the original 16 static outputs.

## 7. Metadata and SEO parity

Titles, descriptions, canonicals, Open Graph, inherited homepage Twitter metadata on project pages and homepage Person/WebSite JSON-LD match the baseline. Four-page sitemap, robots and manifest responses remain byte-identical. No language alternates or unfinished navigation were added.

Social image file conventions remain outside `(en)` at the original URLs because this installed version adds a suffix when image conventions move into route groups. Explicit metadata descriptors preserve the original image destinations and project metadata merge behavior.

## 8. Screenshot and CV integrity

All seven approved PNGs and the CV retain their SHA-256 hashes. `/cv` returns 200, `application/pdf`, and `inline; filename="Eren-Kacar-CV.pdf"`; its rewrite and download destinations are unchanged. Existing root/project social images and icons return 200 with unchanged image bytes. Optimized image requests used by existing pages also succeed.

| Public asset | Unchanged SHA-256 |
| --- | --- |
| `/images/projects/guitarsense/library.png` | `a5b19c1329ae0bf78b727302b412ee40236f3c8cf6632b86ce9493f97264dfde` |
| `/images/projects/guitarsense/practice-view.png` | `5021b885e055a3cd11f9238d8f53eb9f8b3df6ceaca20ed868f359594f269d64` |
| `/images/projects/guitarsense/preset-editor.png` | `fc3c1244830b809c14d78024ee010f3732bc56bd5e4ecedc63a9b73c8aa3174d` |
| `/images/projects/nexora/2fa.png` | `27b73dfa2efe50aefc40935911f1fa266d9f2e65f397dac6880b4d9aeff6ffb2` |
| `/images/projects/nexora/ana-ekran.png` | `c49108d0f73ec1a10509a9ac7d20644b3f0fbd7f74a91755acdb8d7b89cc3206` |
| `/images/projects/nexora/feed.png` | `2cfa8b8b129901dbab4dc86475fd4eb33c97813a8e269e3810872d857f56d765` |
| `/images/projects/nexora/messaging.png` | `f7d9c37d8f8d2f8661705d387f57ee659fb82c7a2267c90553183219c6383569` |
| `/resume/eren-kacar-resume.pdf` | `90794ace390d6886b5509943988f5c468975e85076574bcdc047abed8e97996f` |

## 9. GuitarSense confidentiality

Existing disclosure tests pass and public output matches the checked-in baseline. Previously removed material remains absent from public copy, metadata and image descriptions. Windows beta, TÜBİTAK 2209-A support and the approved stack remain. Approximately 6 ms ASIO and 46 ms WASAPI values in tested 64-sample configurations retain their backend-reported qualification and explicit distinction from independently measured end-to-end round-trip latency.

## 10. Existing and new tests

All 62 original tests remain; none was deleted or had substantive coverage weakened. Twenty new unit tests cover routes, explicit dictionary selection, supplied locale/copy, metadata, root/social handling, native 404, complete/invariant translation types, stable icons, server-only scope and asset/CSS integrity. Fifteen additional production integration tests compare the original outputs and verify endpoints and unpublished Turkish routes. Spec and code quality reviews are approved after their findings were corrected and rechecked.

## 11. Final check results

| Check | Result |
| --- | --- |
| `npm test` | 82 passed, 0 failed |
| `npm run lint` | Exit 0; no diagnostics |
| `npx --no-install tsc --noEmit --incremental false` | Exit 0; no diagnostics |
| `npm run build` | Exit 0; original static route inventory retained |
| `git diff --check` | Exit 0 |
| `node --test tests/integration/*.test.mjs` | 15 passed, 0 failed against the final production build |

Production validation used `http://127.0.0.1:3100`. The build warning described below remains; final HTTP metadata contains the correct production origins.

## 12. Desktop and mobile visuals

All ten final full-page JPEG captures are byte-identical to the original production captures: homepage, each of the three case studies and custom 404 at desktop 1440×900 and mobile 390×844. Full-document element geometry, text, computed fonts/colors, links and alt text also match. Browser error/warning logs were empty.

Before/after images and `visual-parity.json` are saved under `C:/Users/erenk/.codex/visualizations/2026/10/12/01a13092-96e7-7c63-974c-949bf1ed717f/phase-2a/`.

## 13. Remaining Phase 2B work

Author and review the complete Turkish dictionary/content; enable Turkish only when ready; add its root layout and thin route wrappers; finish localized metadata/social behavior, language alternates, sitemap entries and language navigation. Reassess locale handling for future unknown routes and verify Turkish accessibility, wrapping, links, confidentiality and production outputs. These features are not published in Phase 2A.

## 14. Risks and unexpected changes

- Native global 404 handling depends on the experimental `globalNotFound` option in pinned Next.js 16.2.12. Keep the production 404 comparison when upgrading Next.
- Next emits a `metadataBase` warning while resolving automatic root-level image metadata before processing the grouped English layout. Explicit grouped metadata supplies the correct final production image URLs; all final head and image checks pass. The warning is retained rather than changing public asset conventions or hiding diagnostics.
- Exact collection types require deliberate updates to authoritative English data when reviewed entries change. This prevents incomplete future translations.

## 15. Current Git status

Branch: `codex/i18n-phase-2a`. HEAD remains `dcd10463c7cdca7c56c048c98b40c042e659f0eb`. All Phase 2A changes are unstaged/uncommitted; added files are untracked and the old HTML paths appear as deletions until staging recognizes the replacements. No commit, push, deployment or merge was performed. The working checkout and changes are preserved for review.
