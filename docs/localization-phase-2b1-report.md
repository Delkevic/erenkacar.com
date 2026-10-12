# Phase 2B-1 localization report

Prepared locally on 12 October 2026 for owner review. The eight bilingual pages are implemented and verified. Publication is pending the owner's Turkish editorial and browser review. No commit, merge, push or deployment was performed.

Repository: `C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com`.

## 1. Git branch and baseline

Continued the existing uncommitted Phase 2A tree on `codex/i18n-phase-2a`, with HEAD unchanged at `dcd10463c7cdca7c56c048c98b40c042e659f0eb`. Read the Phase 2A report and installed Next.js 16.2.12 guides before implementation. The initial suite passed 82 unit tests and 15 production HTTP tests. Recorded 15 English baseline captures: four valid pages and the native 404 at 1440×900, 390×844 and 320×844.

`tests/fixtures/phase-2b1-working-tree.json` records the starting status and SHA-256 of 97 existing files. Of these, 74 remain byte-identical and 23 received intentional Phase 2B-1 edits. The original English response/asset fixture and historical Phase 2A report are unchanged. Prior Phase 2A deletions, replacements and additions were preserved.

## 2. Files changed or added

Paths in this inventory are relative to the repository above. Phase 2B-1 changed these 23 existing working-tree files:

```text
README.md
src/app/(en)/layout.tsx
src/app/global-not-found.tsx
src/app/sitemap.ts
src/components/layout/site-header.tsx
src/components/metadata/social-card.tsx
src/components/views/grade-watcher.tsx
src/components/views/guitarsense.tsx
src/components/views/home.tsx
src/components/views/nexora.tsx
src/components/views/not-found.tsx
src/i18n/dictionaries.ts
src/i18n/en.ts
src/i18n/metadata.ts
src/i18n/routes.ts
src/i18n/schema.ts
tests/cv-route.test.mjs
tests/guitarsense-disclosure.test.mjs
tests/helpers/english-output.mjs
tests/integration/english-parity.test.mjs
tests/launch-readiness.test.mjs
tests/localization-foundation.test.mjs
tests/portfolio-completion.test.mjs
```

Added these 23 files:

```text
docs/localization-phase-2b1-report.md
docs/superpowers/plans/2026-10-12-localization-phase-2b1.md
src/app/localization.css
src/app/social/tr/grade-watcher/route.ts
src/app/social/tr/guitarsense/route.ts
src/app/social/tr/home/route.ts
src/app/social/tr/nexora/route.ts
src/app/social/tr/twitter/route.ts
src/app/tr/layout.tsx
src/app/tr/not-found.tsx
src/app/tr/page.tsx
src/app/tr/projects/grade-watcher/page.tsx
src/app/tr/projects/guitarsense/page.tsx
src/app/tr/projects/nexora/page.tsx
src/components/layout/language-switcher.tsx
src/i18n/social-images.ts
src/i18n/tr.ts
tests/bilingual-foundation.test.mjs
tests/fixtures/phase-2b1-working-tree.json
tests/helpers/bilingual-output.mjs
tests/helpers/no-script-proxy.mjs
tests/integration/bilingual-production.test.mjs
tests/production-output.test.mjs
```

No Phase 2B-1 file deletion, dependency installation, Next.js upgrade or configuration change. Existing approved data modules, fonts, screenshots, CV, icons, manifest, robots policy and original global CSS retain their starting hashes.

## 3. Localization architecture completed

Enabled `en` and `tr` in the established typed route registry and complete dictionary map. The explicit Turkish dictionary satisfies `DictionaryFor<"tr">`; there is no spread of English prose or fallback dictionary. Stable software/API names, project identities, external URLs, image properties and collection cardinality remain enforced. Nine descriptive technology labels can translate without allowing actual software/API names to change; compiler regression tests check same-length invalid substitutions as well as missing fields and wrong tuple lengths.

English keeps its URL-transparent `(en)` route group. Turkish uses a small root layout and four thin page wrappers under `src/app/tr`. Both roots reuse `DocumentShell`, fonts, viewport and the five shared server views; the document language comes from the selected dictionary. The URL alone chooses the language. No middleware, next-intl, client locale hooks, automatic redirects, cookies or storage were introduced. There are no additional authored client boundaries.

## 4. Complete Turkish content coverage

Translated header/navigation, hero, featured/selected projects, experience, skills, about, other work, contact, footer, all three case studies, CTAs, facts, badges, captions, alt text, accessibility labels, metadata, social copy and the local error dictionary. Preferred terms include Yazılım Mühendisi, Seçili Projeler, Deneyim, Yetkinlikler, Hakkımda, İletişim, Projeyi İncele, CV'yi İndir and Proje Detayları.

Deliberate retained terms include frontend, backend, full-stack, API, runtime, low-code, preset, Reels and REST APIs where natural; vendor/software/API names and established project names remain unchanged. Screenshot UI remains the approved original binary. Dates, technologies, ownership, outcomes and the carefully worded contribution to processes handling more than 1,000 student requests are preserved. Independent specification and quality reviews approved the implementation; owner editorial acceptance is still pending.

## 5. English regression findings

All original substantive coverage remains. Production comparison strips only the newly authorized switcher and specific bilingual metadata additions, then compares English body content, titles, descriptions, prior head values and JSON-LD against the immutable original fixture. Separate assertions verify every authorized addition. React's emitted `hrefLang` spelling required case-insensitive attribute recognition in the test parser; a failing-then-passing parser regression test was added without changing baseline values.

All 15 English main/footer geometry comparisons match exactly, including text, styles and element rectangles. Header height remains approximately 72.8px on desktop and 109.6px on mobile. The original global CSS hash is unchanged. English preview image bytes, approved screenshots, icons and CV match the baseline.

Decoded screenshot pixels below the header are identical in 14 of 15 comparisons. The 320px homepage capture has a small raster difference confined to the Nexora screenshot (bounds x47–279, y2575–2695): mean absolute channel error 0.00724 on a 0–255 scale over the compared region, maximum 16. Its source asset, image markup, position and geometry remain unchanged; visual inspection found no perceptible layout or content regression. The precise rasterization/optimization cause was not established, so this report does not claim complete screenshot byte identity.

## 6. Eight-route status

| English route | Status / lang | Turkish route | Status / lang |
| --- | --- | --- | --- |
| `/` | 200 / en | `/tr` | 200 / tr |
| `/projects/guitarsense` | 200 / en | `/tr/projects/guitarsense` | 200 / tr |
| `/projects/nexora` | 200 / en | `/tr/projects/nexora` | 200 / tr |
| `/projects/grade-watcher` | 200 / en | `/tr/projects/grade-watcher` | 200 / tr |

Opposite-language `Accept-Language` headers and locale-like cookies leave each URL's language and status unchanged. No automatic redirect or preference-setting response is emitted.

## 7. Header language-switch behavior

The small EN | TR control uses ordinary anchors, explicit page identity, `lang`, `hrefLang`, localized ARIA labels and `aria-current="page"`. Underline/color indicate the current language; both links have visible keyboard focus. No flags, dropdown, animation or client state.

Desktop places the control beside navigation. Mobile places it beside the brand above the existing scrollable navigation, so it stays visible at 390px and 320px without scrolling the nav. Clicked both directions for all four identities and verified Back/Forward. Clicked all five header section links in both languages and all six case-study return links. Turkish navigation returns to `/tr#…`; English retains `/#…`. External profiles, email, assets and CV destinations remain shared.

## 8. SEO, hreflang and sitemap results

Every valid page has a self-canonical and reciprocal `en`, `tr`, `x-default` references to its matching pair; x-default selects the English equivalent. All use `https://www.erenkacar.com`. English titles/descriptions/title structure and prior English metadata image URLs are preserved. Turkish titles/descriptions are localized. OG uses `en_US` or `tr_TR`, with the corresponding alternate locale. English project pages preserve the original inherited homepage Twitter behavior; Turkish project Twitter previews use the corresponding localized project image.

The sitemap returns exactly eight unique HTML pages with all three alternate references per entry. It contains no CV, PDF, screenshot, social image, error route or invented last-modified date. Existing robots and manifest responses remain exact.

## 9. Structured-data results

English Person/WebSite JSON-LD remains exact. Turkish preserves the same person identity, email/contact details and profile URLs, translates job/education labels, uses the Turkish website URL and `inLanguage: "tr"`. Safe serialization continues escaping `<`. No additional factual claims or schema types were introduced.

## 10. Social-preview image findings

Five Turkish static endpoints load as 1200×630 PNGs:

```text
/social/tr/home
/social/tr/twitter
/social/tr/guitarsense
/social/tr/nexora
/social/tr/grade-watcher
```

They reuse the existing renderer, typography, palette, composition and project accents. Only relevant text changes; locale-aware Turkish uppercase preserves dotted/dotless I. Visually inspected all five previews and a renderer-only test probe displaying `ç ğ ı İ ö ş ü`: glyphs render without missing boxes or truncation. The probe is a local QA artifact, not a public route or repository asset. English preview responses remain byte-identical to the original fixture.

## 11. 404 behavior and limitations

Native Next.js 16.2.12 experimental `globalNotFound` handles unmatched URLs outside the individual root layouts. Unknown English paths preserve English content, `lang="en"`, real 404 and noindex. Unknown Turkish paths currently receive that same truthful English global document, also 404/noindex. No Turkish page is silently rendered under an English document language. The complete Turkish `src/app/tr/not-found.tsx` view is ready, but unmatched paths bypass it.

This is the explicit permitted limitation. There is no fragile catchall, header/path inference or framework migration. The header's TR link provides a working Turkish-home recovery path. The smallest safe follow-up is to keep this recovery and use the existing Turkish segment error view when a supported segment-level `notFound()` is triggered. Fully localized arbitrary unknown URLs require a separately reviewed, documented locale-aware global-404 routing convention; validate status, noindex and document language together before changing architecture. An owner-approved bilingual recovery hint in the existing global page could improve clarity without route changes, but would also change the English error-page copy and was left for review.

## 12. CV and screenshot integrity

Both languages use the same English PDF. `/cv` returns it inline as `Eren-Kacar-CV.pdf`; download links retain the shared PDF URL. SHA-256 remains `90794ace390d6886b5509943988f5c468975e85076574bcdc047abed8e97996f`.

All seven approved PNG binaries match both fixtures and HTTP responses:

| Screenshot | SHA-256 |
| --- | --- |
| GuitarSense/library.png | `a5b19c1329ae0bf78b727302b412ee40236f3c8cf6632b86ce9493f97264dfde` |
| GuitarSense/practice-view.png | `5021b885e055a3cd11f9238d8f53eb9f8b3df6ceaca20ed868f359594f269d64` |
| GuitarSense/preset-editor.png | `fc3c1244830b809c14d78024ee010f3732bc56bd5e4ecedc63a9b73c8aa3174d` |
| Nexora/2fa.png | `27b73dfa2efe50aefc40935911f1fa266d9f2e65f397dac6880b4d9aeff6ffb2` |
| Nexora/ana-ekran.png | `c49108d0f73ec1a10509a9ac7d20644b3f0fbd7f74a91755acdb8d7b89cc3206` |
| Nexora/feed.png | `2cfa8b8b129901dbab4dc86475fd4eb33c97813a8e269e3810872d857f56d765` |
| Nexora/messaging.png | `f7d9c37d8f8d2f8661705d387f57ee659fb82c7a2267c90553183219c6383569` |

No additional or removed-functionality screenshots were introduced. Browser images completed with positive natural dimensions and localized alt text.

## 13. GuitarSense confidentiality review

The Turkish translation uses only the current approved English dictionary/data. No historical case study, archive, product source, private development documentation or prior AI description was consulted for its content. Both language outputs pass restricted-disclosure tests and independent review.

Public content remains limited to approved guitar processing/effects/practice, Electron/React/Python integration, stack, TÜBİTAK 2209-A support, Windows beta and qualified figures. It retains approximately 6ms ASIO and 46ms WASAPI in the tested 64-sample configurations. The visible Turkish engineering text explicitly says these are backend-reported values, not independently measured end-to-end round-trip latency.

## 14. Test, lint, typecheck and build results

| Check | Final result |
| --- | --- |
| `npm test` | 101 passed, 0 failed |
| `npm run lint` | Exit 0 |
| `npx --no-install tsc --noEmit --incremental false` | Exit 0 |
| `npm run build` | Exit 0, 25 static outputs |
| `git -c core.safecrlf=false diff --check` | Exit 0 |
| Production integration suites | 44 passed, 0 failed |

Preserved the original 82 unit tests, with legitimate Phase 2B updates to disabled-Turkish/four-page assumptions. Added 18 bilingual tests and one parser regression test. Coverage includes missing/incompatible dictionaries, tuple invariants, actual rendered Turkish, route identity, metadata, asset integrity, privacy and authored-client-boundary restrictions. New behavior was tested failing before implementation; production tests initially recorded 27 expected failures against the old Phase 2A build before passing on the bilingual build.

The build still emits the same Phase 2A warning about missing metadataBase while app-root file metadata is evaluated before the grouped root layout. All eight final page heads have the production canonical, alternates and image URLs, verified by HTTP; runtime startup/browser logs show no metadata or route errors. This warning is retained and documented, not hidden or called a clean warning-free build. No unreviewed metadata-file migration or environment workaround was introduced.

## 15. Production HTTP results

Ran both suites against the final `npm run start` build on `127.0.0.1:3100`:

```powershell
$env:PORTFOLIO_TEST_ORIGIN = "http://127.0.0.1:3100"
node --test tests/integration/*.test.mjs
```

The 44 checks verify eight 200 pages, language/default behavior, no preference redirect/cookie, every language switch destination and active state, internal/shared/external destinations, localized descriptions, canonical/hreflang/OG metadata, exact eight-page sitemap, safe JSON-LD, unchanged CV and assets, English image bytes, five Turkish images, privacy/latency qualifications and true unknown-route 404/noindex. Final result: 44 passed, 0 failed.

## 16. Desktop/mobile findings

Reviewed every valid page at 1440×900, 390×844 and 320×844, plus English errors at all three sizes and an unknown Turkish route. Saved 27 full-page final captures and 24 final viewport captures. Main headings, paragraphs, lists, links, figures and footer bounds fit in all 24 valid combinations. Desktop/mobile screenshots, captions, case grids and footers render correctly. Keyboard skip link, brand and EN/TR focus order work; the switcher outline is visible. Normal browser console contains no warnings/errors or hydration messages.

Visual review caught the Turkish hero's long word forcing a wider grid column at a scrollbar-bearing 320px viewport. A Turkish-only heading size of 2.75rem at ≤360px fixes it while leaving all English styling unchanged. Final 320px h1 width is approximately 280.8px inside the available content width, with no clipping. The mobile navigation intentionally retains its existing horizontal scroll; the switcher remains independently visible.

Also tested all eight pages and both switch directions with website scripts blocked by a local test-only CSP proxy (`script-src 'none'`). Verified the Next bootstrap did not execute, while ordinary links, Turkish case recovery, section navigation, Back and Forward still worked. Expected script-block messages belong only to this proxy test; production policy was not changed.

Browser evidence is saved at:

`C:/Users/erenk/.codex/visualizations/2026/10/12/01a13092-96e7-7c63-974c-949bf1ed717f/phase-2b1`

Key records: `geometry-comparison.json`, `pixel-comparison.json`, `stable-viewport-checks.json`, `navigation-checks.json`, `tree-audit.json`, `unit-final.log`, `http-final.log`, `before/`, `after/`, final viewport screenshots and `social/` including the glyph probe. Capture dimensions reflect the Windows scrollbar gutter; stable-viewport records explicitly verify the requested innerWidth and the usable clientWidth.

## 17. Unresolved issues

Owner review of Turkish prose and browser outputs remains required before publication. Technical limitations are the native English fallback for unknown Turkish URLs, the existing build-time metadataBase warning with correct final page metadata, and the tiny image-only raster difference described above. No failing test, broken valid route/image, hydration error or further clipping issue remains in the checked matrix.

## 18. Recommended Phase 2B-2 editorial/visual fixes

- Owner review the Turkish hero/section heading cadence and the retained industry terms for preferred personal tone. The current narrow hero is fixed; further shortening would be editorial, not a required functional repair.
- Review factual wording for dates, job scope, the 1,000-request contribution and the backend-reported latency qualification before publication; retain the current measured limits and confidentiality boundaries.
- Decide whether the existing mobile scrollable nav should remain or receive a separately approved visual redesign. The switcher is already accessible without nav scrolling.
- Review the native global-error recovery wording. Any fully localized unknown-route design or metadata-file change should be a small, separately approved architectural follow-up with the current regression matrix retained.
- Treat the final Turkish previews, homepage/case captures and CV-language expectation as the owner sign-off set. No Turkish PDF is needed for this phase.

## 19. Git status

All work remains local and unstaged on `codex/i18n-phase-2a`; HEAD is unchanged. The staged diff is empty. Final combined status: 34 modified tracked files, six prior Phase 2A route-file deletions and 50 untracked files. The tree intentionally contains the preserved Phase 2A work plus the 23 edited and 23 added Phase 2B-1 files listed above. No Phase 2A file was discarded. See `tree-audit.json` for the exact final `git status --short --untracked-files=all` and before/after hashes. No commit, merge, push or deployment was performed. Temporary browser tabs, viewport override, production server and script-blocking proxy were cleaned up after verification.
