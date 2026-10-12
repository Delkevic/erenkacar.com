import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import ts from "typescript";
import { loadSource, renderSource } from "./helpers/load-source.mjs";

const read = (path) => readFileSync(path, "utf8");
const origin = "https://www.erenkacar.com";
const views = { home: "HomeView", guitarsense: "GuitarSenseView", nexora: "NexoraView", "grade-watcher": "GradeWatcherView" };
const dictionary = () => {
  assert.ok(existsSync("src/i18n/tr.ts"), "A complete, explicit Turkish dictionary must exist");
  return loadSource("src/i18n/tr.ts").turkish;
};

test("both published locales resolve every stable page identity and reject unsupported locales", () => {
  const { enabledLocales, pageIds, getPublicPath, isEnabledLocale } = loadSource("src/i18n/routes.ts");
  assert.deepEqual(enabledLocales, ["en", "tr"]);
  for (const page of pageIds) {
    assert.equal(getPublicPath(page, "tr"), page === "home" ? "/tr" : `/tr/projects/${page}`);
    assert.equal(getPublicPath(page, "en"), page === "home" ? "/" : `/projects/${page}`);
  }
  assert.equal(isEnabledLocale("de"), false);
  assert.throws(() => getPublicPath("home", "de"), /not enabled/);
});

test("dictionary access publishes the actual complete Turkish object without English fallback", () => {
  const tr = dictionary();
  const en = loadSource("src/i18n/en.ts").english;
  const { getDictionary } = loadSource("src/i18n/dictionaries.ts");
  assert.equal(getDictionary("tr"), tr);
  assert.throws(() => getDictionary("de"), /not enabled/);
  const shape = (value) => Array.isArray(value) ? value.map(shape) : value && typeof value === "object"
    ? Object.fromEntries(Object.keys(value).map((key) => [key, shape(value[key])])) : typeof value;
  assert.deepEqual(shape(tr), shape(en));
  assert.equal(tr.locale, "tr");
  assert.notEqual(tr.home.hero.title, en.home.hero.title);
  assert.notEqual(tr.notFound.title, en.notFound.title);
  assert.doesNotMatch(read("src/i18n/tr.ts"), /\.\.\.english|from ["']@\/i18n\/en["']|JSON\.(?:parse|stringify)|Object\.assign/);
});

test("the real Turkish source satisfies DictionaryFor<tr> and missing UI remains rejected", () => {
  dictionary();
  const filename = resolve("tests/bilingual-dictionary-check.ts");
  const source = 'import { turkish } from "@/i18n/tr"; import type { DictionaryFor } from "@/i18n/schema"; const actual: DictionaryFor<"tr"> = turkish; const { languageNavigation, ...shared } = turkish.shared; const omitted: DictionaryFor<"tr"> = { ...turkish, shared };';
  const config = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
  const options = ts.parseJsonConfigFileContent(config.config, ts.sys, process.cwd()).options;
  options.incremental = false;
  const host = ts.createCompilerHost(options);
  const original = host.getSourceFile.bind(host);
  host.getSourceFile = (path, version, ...rest) => resolve(path) === filename
    ? ts.createSourceFile(path, source, version, true) : original(path, version, ...rest);
  const diagnostics = ts.getPreEmitDiagnostics(ts.createProgram([filename], options, host));
  assert.equal(diagnostics.length, 1, diagnostics.map((item) => ts.flattenDiagnosticMessageText(item.messageText, " ")).join("\n"));
  assert.match(ts.flattenDiagnosticMessageText(diagnostics[0].messageText, " "), /languageNavigation/);
});

test("descriptive skill labels translate while software names and tuple cardinality remain fixed", () => {
  const filename = resolve("tests/bilingual-label-check.ts");
  const source = `import { english } from "@/i18n/en"; import type { DictionaryFor } from "@/i18n/schema";
    const copy = english.content;
    const translated: DictionaryFor<"en"> = { ...english, content: { ...copy,
      selectedProjects: [copy.selectedProjects[0], { ...copy.selectedProjects[1], tags: ["Python", "Playwright", "Telegram Bot API", "Otomasyon"] }],
      experience: [{ ...copy.experience[0], technologies: ["Bimser Synergy", "İş Akışı Otomasyonu", "Go", "React", "MySQL"] }, { ...copy.experience[1], technologies: ["Linux", "Sistem Yönetimi", "Altyapı", "Teknik Dokümantasyon"] }],
      toolkit: [copy.toolkit[0], { ...copy.toolkit[1], items: ["React", "Next.js", "HTML", "CSS", "Duyarlı Arayüz"] }, copy.toolkit[2], { ...copy.toolkit[3], items: ["Electron", "IPC", "ZMQ", "Linux", "Windows Paketleme"] }, copy.toolkit[4]],
      otherWork: [{ ...copy.otherWork[0], tags: ["HTML", "CSS", "JavaScript", "Duyarlı Tasarım"] }, copy.otherWork[1], { ...copy.otherWork[2], tags: ["Kotlin", "Android", "Ses İzleme"] }]
    } };`;
  const config = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
  const options = ts.parseJsonConfigFileContent(config.config, ts.sys, process.cwd()).options;
  options.incremental = false;
  const host = ts.createCompilerHost(options);
  const original = host.getSourceFile.bind(host);
  host.getSourceFile = (path, version, ...rest) => resolve(path) === filename ? ts.createSourceFile(path, source, version, true) : original(path, version, ...rest);
  const diagnostics = ts.getPreEmitDiagnostics(ts.createProgram([filename], options, host));
  assert.deepEqual(diagnostics.map((item) => ts.flattenDiagnosticMessageText(item.messageText, " ")), []);
});

test("translatable skill tuples still reject same-length substitutions of actual software and API names", () => {
  const filename = resolve("tests/bilingual-invariant-check.ts");
  const cases = {
    projectSoftware: '{ ...copy.selectedProjects[1], tags: ["Rust", "Playwright", "Telegram Bot API", "Otomasyon"] }',
    projectApi: '{ ...copy.selectedProjects[1], tags: ["Python", "Playwright", "Discord API", "Otomasyon"] }',
  };
  const source = `import { english } from "@/i18n/en"; import type { DictionaryFor } from "@/i18n/schema"; const copy = english.content;
    ${Object.entries(cases).map(([name, project]) => `const ${name}: DictionaryFor<"en"> = { ...english, content: { ...copy, selectedProjects: [copy.selectedProjects[0], ${project}] } };`).join("\n")}
    const toolkitSoftware: DictionaryFor<"en"> = { ...english, content: { ...copy, toolkit: [copy.toolkit[0], { ...copy.toolkit[1], items: ["Vue", "Next.js", "HTML", "CSS", "Duyarlı Arayüz"] }, copy.toolkit[2], copy.toolkit[3], copy.toolkit[4]] } };
    const experienceSoftware: DictionaryFor<"en"> = { ...english, content: { ...copy, experience: [{ ...copy.experience[0], technologies: ["Changed platform", "İş Akışı Otomasyonu", "Go", "React", "MySQL"] }, copy.experience[1]] } };
    const otherSoftware: DictionaryFor<"en"> = { ...english, content: { ...copy, otherWork: [copy.otherWork[0], copy.otherWork[1], { ...copy.otherWork[2], tags: ["Swift", "Android", "Ses İzleme"] }] } };
    const extraTag: DictionaryFor<"en"> = { ...english, content: { ...copy, selectedProjects: [copy.selectedProjects[0], { ...copy.selectedProjects[1], tags: ["Python", "Playwright", "Telegram Bot API", "Otomasyon", "Extra label"] }] } };`;
  const config = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
  const options = ts.parseJsonConfigFileContent(config.config, ts.sys, process.cwd()).options;
  options.incremental = false;
  const host = ts.createCompilerHost(options);
  const original = host.getSourceFile.bind(host);
  host.getSourceFile = (path, version, ...rest) => resolve(path) === filename ? ts.createSourceFile(path, source, version, true) : original(path, version, ...rest);
  const diagnostics = ts.getPreEmitDiagnostics(ts.createProgram([filename], options, host));
  for (const name of [...Object.keys(cases), "toolkitSoftware", "experienceSoftware", "otherSoftware", "extraTag"]) {
    assert.ok(diagnostics.some((item) => item.file && item.start !== undefined && item.file.text.split(/\r?\n/)[item.file.getLineAndCharacterOfPosition(item.start).line].includes(`const ${name}:`)), `${name} must be rejected`);
  }
  assert.equal(diagnostics.length, 6);
});

test("Turkish thin wrappers render the real dictionary inside a Turkish document", () => {
  const tr = dictionary();
  assert.equal(existsSync("src/app/layout.tsx"), false);
  for (const [page, view] of Object.entries(views)) {
    const file = page === "home" ? "src/app/tr/page.tsx" : `src/app/tr/projects/${page}/page.tsx`;
    assert.ok(existsSync(file), file);
    const html = renderSource(file, "default");
    assert.equal(html, renderSource(`src/components/views/${page === "grade-watcher" ? "grade-watcher" : page}.tsx`, view, { dictionary: tr }));
  }
  const shell = renderSource("src/app/tr/layout.tsx", "default", { children: "Turkish document" });
  assert.match(shell, /<html lang="tr">/);
  assert.ok(shell.includes(tr.shared.skipLink));
  assert.ok(existsSync("src/app/tr/not-found.tsx"));
  assert.ok(renderSource("src/app/tr/not-found.tsx", "default").includes(tr.notFound.title));
});

test("the plain server language switcher preserves every page with locale labels and active state", () => {
  assert.ok(existsSync("src/components/layout/language-switcher.tsx"));
  const tr = dictionary();
  const en = loadSource("src/i18n/en.ts").english;
  const { pageIds, getPublicPath } = loadSource("src/i18n/routes.ts");
  for (const copy of [en, tr]) for (const page of pageIds) {
    const html = renderSource("src/components/layout/language-switcher.tsx", "LanguageSwitcher", { dictionary: copy, page });
    assert.ok(html.includes(`aria-label="${copy.shared.languageNavigation}"`));
    const links = [...html.matchAll(/<a\b([^]*?)>(EN|TR)<\/a>/g)];
    assert.equal(links.length, 2);
    for (const [index, locale] of ["en", "tr"].entries()) {
      assert.ok(links[index][1].includes(`href="${getPublicPath(page, locale)}"`));
      assert.ok(links[index][1].includes(`lang="${locale}"`));
      assert.ok(links[index][1].includes(`hrefLang="${locale}"`));
      assert.ok(links[index][1].includes(`aria-label="${copy.shared[locale === "en" ? "englishVersion" : "turkishVersion"]}"`));
      assert.equal(links[index][1].includes('aria-current="page"'), copy.locale === locale);
    }
    assert.doesNotMatch(html, /<button|<select|onclick|data-nextjs/i);
  }
});

test("all views explicitly pass their stable identity and header puts switcher between brand and navigation", () => {
  const en = loadSource("src/i18n/en.ts").english;
  for (const [page, view] of [...Object.entries(views), ["not-found", "NotFoundView"]]) {
    const identity = page === "not-found" ? "home" : page;
    const source = read(`src/components/views/${page}.tsx`);
    assert.match(source, new RegExp(`<SiteHeader dictionary=\\{dictionary\\} page="${identity}"`));
    const html = renderSource(`src/components/views/${page}.tsx`, view, { dictionary: en });
    assert.ok(html.indexOf('class="brand"') < html.indexOf('class="language-switcher"'));
    assert.ok(html.indexOf('class="language-switcher"') < html.indexOf('class="site-nav"'));
  }
});

test("localized content links keep external profiles, image assets and the shared English CV unchanged", () => {
  const tr = dictionary();
  const en = loadSource("src/i18n/en.ts").english;
  assert.deepEqual(tr.links, { home: "/tr", work: "/tr#work", about: "/tr#about" });
  assert.deepEqual(tr.shared.navigation.map((item) => item.href), ["/tr#work", "/tr#experience", "/tr#skills", "/tr#about", "/tr#contact"]);
  assert.equal(tr.content.featuredProject.href, "/tr/projects/guitarsense");
  assert.deepEqual(tr.content.selectedProjects.map((item) => item.href), ["/tr/projects/nexora", "/tr/projects/grade-watcher"]);
  for (const collection of ["guitarSenseImages", "nexoraImages"]) for (const key of Object.keys(en.content[collection])) {
    assert.equal(tr.content[collection][key].src, en.content[collection][key].src);
    assert.notEqual(tr.content[collection][key].alt, en.content[collection][key].alt);
  }
  const home = renderSource("src/components/views/home.tsx", "HomeView", { dictionary: tr });
  for (const href of ["/resume/eren-kacar-resume.pdf", "https://github.com/Delkevic", "https://www.linkedin.com/in/eren-kacar-7bb143251/", "mailto:erenkacr@gmail.com"]) assert.ok(home.includes(`href="${href}"`), href);
});

test("the actual Turkish descriptive skills render alongside invariant software identities", () => {
  const tr = dictionary();
  const en = loadSource("src/i18n/en.ts").english;
  const home = renderSource("src/components/views/home.tsx", "HomeView", { dictionary: tr });
  const pairs = [
    [en.content.selectedProjects[1].tags[3], tr.content.selectedProjects[1].tags[3]],
    [en.content.experience[0].technologies[1], tr.content.experience[0].technologies[1]],
    ...[1, 2, 3].map((index) => [en.content.experience[1].technologies[index], tr.content.experience[1].technologies[index]]),
    [en.content.toolkit[1].items[4], tr.content.toolkit[1].items[4]],
    [en.content.toolkit[3].items[4], tr.content.toolkit[3].items[4]],
    [en.content.otherWork[0].tags[3], tr.content.otherWork[0].tags[3]],
    [en.content.otherWork[2].tags[2], tr.content.otherWork[2].tags[2]],
  ];
  for (const [original, translated] of pairs) {
    assert.notEqual(translated, original);
    assert.ok(home.includes(translated), translated);
  }
  for (const technology of ["React", "Python", "Electron", "Go", "Next.js", "Linux", "ASIO", "WASAPI", "Bimser Synergy", "Gemini API", "Telegram Bot API"]) assert.ok(home.includes(technology), technology);
});

test("the Turkish source translates every prose and accessibility leaf with explicit technical exceptions", () => {
  const tr = dictionary();
  const en = loadSource("src/i18n/en.ts").english;
  const sameAllowed = new Set([
    "shared.github", "shared.linkedin", "caseStudies.nexora.api", "notFound.code",
    "metadata.guitarsense.title", "metadata.nexora.title", "metadata.grade-watcher.title",
    "social.home.title", "social.guitarsense.title", "social.nexora.title", "social.grade-watcher.title",
    "content.experience.1.organization", "content.toolkit.1.title", "content.guitarSenseCaseStudy.facts.3",
    "content.nexoraCaseStudy.facts.0", "content.gradeWatcherCaseStudy.architecture.5.label",
  ]);
  const visit = (original, translated, path = "") => {
    if (typeof original === "string") {
      assert.ok(translated.trim(), path);
      const invariant = /(?:^|\.)(?:name|id|icon|src|frame|placement|visual|socialTitle|titleTemplate)$/.test(path)
        || /\.(?:tags|technologies|items)\.\d+$/.test(path) || path.startsWith("content.nexoraArchitecture.")
        || /^content\.gradeWatcherCaseStudy\.facts\.[012]$/.test(path);
      if (!invariant && !sameAllowed.has(path)) assert.notEqual(translated, original, `${path} should be translated`);
      return;
    }
    if (original && typeof original === "object") for (const key of Object.keys(original)) visit(original[key], translated[key], path ? `${path}.${key}` : key);
  };
  visit(en, tr);
});

test("canonical and reciprocal language alternates use only the production origin for all eight pages", () => {
  const tr = dictionary();
  const en = loadSource("src/i18n/en.ts").english;
  const { createRootMetadata, createProjectMetadata } = loadSource("src/i18n/metadata.ts");
  const { pageIds, getPublicPath } = loadSource("src/i18n/routes.ts");
  for (const copy of [en, tr]) for (const page of pageIds) {
    const metadata = page === "home" ? createRootMetadata(copy) : createProjectMetadata(page, copy.locale, copy);
    const enUrl = new URL(getPublicPath(page, "en"), origin).href;
    const trUrl = new URL(getPublicPath(page, "tr"), origin).href;
    assert.deepEqual(metadata.alternates, { canonical: copy.locale === "en" ? enUrl : trUrl, languages: { en: enUrl, tr: trUrl, "x-default": enUrl } });
    assert.equal(metadata.openGraph.locale, copy.locale === "en" ? "en_US" : "tr_TR");
    assert.deepEqual(metadata.openGraph.alternateLocale, [copy.locale === "en" ? "tr_TR" : "en_US"]);
    if (page !== "home" && copy.locale === "en") assert.equal("twitter" in metadata, false);
    if (copy.locale === "tr") assert.equal(metadata.description, page === "home" ? tr.metadata.description : tr.metadata[page].description);
  }
});

test("Turkish social metadata points at dedicated localized endpoints while English URLs stay exact", () => {
  const tr = dictionary();
  const en = loadSource("src/i18n/en.ts").english;
  const { createRootMetadata, createProjectMetadata } = loadSource("src/i18n/metadata.ts");
  for (const copy of [en, tr]) {
    const root = createRootMetadata(copy);
    assert.equal(root.openGraph.images[0].url, copy.locale === "en" ? "/opengraph-image" : "/social/tr/home");
    assert.equal(root.twitter.images[0].url, copy.locale === "en" ? "/twitter-image" : "/social/tr/twitter");
    for (const page of ["guitarsense", "nexora", "grade-watcher"]) {
      const metadata = createProjectMetadata(page, copy.locale, copy);
      assert.equal(metadata.openGraph.images[0].url, copy.locale === "en" ? `/projects/${page}/opengraph-image` : `/social/tr/${page}`);
      if (copy.locale === "tr") assert.equal(metadata.twitter.images[0].url, `/social/tr/${page}`);
    }
  }
  for (const key of ["home", "twitter", "guitarsense", "nexora", "grade-watcher"]) {
    const path = `src/app/social/tr/${key}/route.ts`;
    assert.ok(existsSync(path), path);
    assert.match(read(path), /export const dynamic = "force-static"/);
    assert.match(read(path), /export function GET\(/);
    assert.match(read(path), /locale: "tr"/);
    assert.doesNotMatch(read(path), /fetch\(|readFile|fonts:/);
  }
});

test("the bilingual sitemap enumerates exactly eight HTML pages with reciprocal alternates and stable priorities", () => {
  const { pageIds, getPublicPath } = loadSource("src/i18n/routes.ts");
  const entries = loadSource("src/app/sitemap.ts").default();
  assert.equal(entries.length, 8);
  for (const page of pageIds) for (const locale of ["en", "tr"]) {
    const url = new URL(getPublicPath(page, locale), origin).href;
    const entry = entries.find((item) => item.url === url);
    assert.ok(entry, url);
    assert.deepEqual(entry.alternates.languages, { en: new URL(getPublicPath(page, "en"), origin).href, tr: new URL(getPublicPath(page, "tr"), origin).href, "x-default": new URL(getPublicPath(page, "en"), origin).href });
    assert.equal(entry.priority, page === "home" ? 1 : 0.7);
    assert.equal(entry.changeFrequency, page === "home" ? "monthly" : "yearly");
    assert.equal("lastModified" in entry, false);
  }
});

test("Turkish JSON-LD localizes descriptions and website language without changing person identity", () => {
  const tr = dictionary();
  const en = loadSource("src/i18n/en.ts").english;
  const json = (copy) => JSON.parse(renderSource("src/components/views/home.tsx", "HomeView", { dictionary: copy }).match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1]);
  const original = json(en)["@graph"];
  const translated = json(tr)["@graph"];
  for (const key of ["@type", "name", "url", "email", "sameAs"]) assert.deepEqual(translated[0][key], original[0][key]);
  assert.equal(translated[0].jobTitle, tr.metadata.personJobTitle);
  assert.equal(translated[0].alumniOf.name, tr.metadata.alumni);
  assert.deepEqual(translated[1], { "@type": "WebSite", name: "Eren Kaçar", url: `${origin}/tr`, inLanguage: "tr" });
  assert.equal(original[1].url, origin);
});

test("localization styling is additive and all document entries import it after original CSS", () => {
  assert.ok(existsSync("src/app/localization.css"));
  for (const file of ["src/app/(en)/layout.tsx", "src/app/tr/layout.tsx", "src/app/global-not-found.tsx"]) {
    const source = read(file);
    assert.ok(source.indexOf("globals.css") < source.indexOf("localization.css"), file);
  }
  const css = read("src/app/localization.css");
  assert.match(css, /\.language-switcher/);
  assert.match(css, /margin-left:\s*auto/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /aria-current/);
});

test("both dictionaries preserve approved GuitarSense facts and backend-reported latency limits", () => {
  const tr = dictionary();
  const en = loadSource("src/i18n/en.ts").english;
  for (const copy of [en, tr]) {
    const relevant = JSON.stringify({ featured: copy.content.featuredProject, caseStudy: copy.content.guitarSenseCaseStudy, metadata: copy.metadata.guitarsense, social: copy.social.guitarsense });
    assert.doesNotMatch(relevant, /YouTube|stem separation|pitch scor|install.{0,20}rollback|runtime pack|unreleased import|timing.score|cache internals|AI-assisted/iu);
    for (const fact of [/Windows/, /2209-A/, /Electron/, /React/, /Python/, /ASIO/, /WASAPI/, /64/, /6\s*ms/, /46\s*ms/]) assert.match(relevant, fact);
    assert.match(relevant, copy.locale === "en" ? /backend-reported/i : /(?:backend|arka uç) tarafından bildir|arka ucun bildirdiği|arka uç rapor|arka ucundan|arka ucun rapor/i);
    assert.match(relevant, copy.locale === "en" ? /not independently measured/i : /bağımsız.{0,30}ölç/i);
  }
});

test("bilingual routing introduces no authored clients, state, locale negotiation or fragile unmatched route hacks", () => {
  for (const file of readdirSync("src", { recursive: true }).filter((file) => /\.(tsx?|mjs)$/.test(file))) {
    assert.doesNotMatch(read(`src/${file}`), /["']use client["']|localStorage|sessionStorage|navigator\.language|cookies\(|Accept-Language|usePathname|useRouter|window\.location|headers\(/i, file);
  }
  for (const file of ["src/middleware.ts", "src/proxy.ts", "src/app/layout.tsx", "src/app/tr/[...unmatched]/page.tsx"]) assert.equal(existsSync(file), false, file);
  assert.match(renderSource("src/app/global-not-found.tsx", "default"), /<html lang="en">/);
});
