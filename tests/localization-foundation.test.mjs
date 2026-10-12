import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import test from "node:test";
import { loadSource, renderSource } from "./helpers/load-source.mjs";
import ts from "typescript";
import { resolve } from "node:path";

const read = (path) => readFileSync(path, "utf8");

const checkDictionaryTypes = (source) => {
  const filename = resolve("tests/dictionary-type-check.ts");
  const config = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
  const options = ts.parseJsonConfigFileContent(config.config, ts.sys, process.cwd()).options;
  options.incremental = false;
  const host = ts.createCompilerHost(options);
  const original = host.getSourceFile.bind(host);
  host.getSourceFile = (path, languageVersion, ...rest) => resolve(path) === filename
    ? ts.createSourceFile(path, source, languageVersion, true)
    : original(path, languageVersion, ...rest);
  return ts.getPreEmitDiagnostics(ts.createProgram([filename], options, host)).map((diagnostic) => ({
    message: ts.flattenDiagnosticMessageText(diagnostic.messageText, " "),
    line: diagnostic.file && diagnostic.start !== undefined
      ? source.split(/\r?\n/)[diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start).line]
      : "",
  }));
};

test("the typed route registry keeps stable page IDs and English public destinations", () => {
  assert.ok(existsSync("src/i18n/routes.ts"), "Typed route registry should exist");
  const { pageIds, routeRegistry, getPublicPath } = loadSource("src/i18n/routes.ts");
  assert.deepEqual(pageIds, ["home", "guitarsense", "nexora", "grade-watcher"]);
  assert.deepEqual(pageIds.map((id) => getPublicPath(id, "en")), [
    "/", "/projects/guitarsense", "/projects/nexora", "/projects/grade-watcher",
  ]);
  assert.equal(routeRegistry.home.tr, "/tr");
  assert.equal(routeRegistry.guitarsense.tr, "/tr/projects/guitarsense");
  assert.equal(getPublicPath("home", "tr"), "/tr");
  assert.throws(() => getPublicPath("home", "de"), /not enabled/);
});

test("English dictionary composes approved data without translation fallback", () => {
  assert.ok(existsSync("src/i18n/dictionaries.ts"), "Explicit dictionary access should exist");
  const { getDictionary } = loadSource("src/i18n/dictionaries.ts");
  const dictionary = getDictionary("en");
  assert.equal(dictionary.locale, "en");
  assert.equal(dictionary.home.hero.title, "Building end-to-end desktop, web and real-time products.");
  assert.equal(dictionary.content.guitarSenseCaseStudy, loadSource("src/data/case-study.ts").guitarSenseCaseStudy);
  assert.equal(dictionary.content.nexoraCaseStudy.overview, loadSource("src/data/nexora-case-study.ts").nexoraCaseStudy.overview);
  assert.equal(dictionary.content.gradeWatcherCaseStudy.statusSummary, loadSource("src/data/grade-watcher.ts").gradeWatcherCaseStudy.statusSummary);
  assert.equal(getDictionary("tr").locale, "tr");
  assert.throws(() => getDictionary("de"), /not enabled/);
});

test("shared views use the explicitly supplied locale, UI copy and reviewed content", () => {
  const { english } = loadSource("src/i18n/en.ts");
  const dictionary = {
    ...english,
    locale: "tr",
    shared: { ...english.shared, homeLabel: "Injected home label", primaryNavigation: "Injected navigation" },
    home: { ...english.home, hero: { ...english.home.hero, title: "Injected home heading" } },
    caseStudies: { ...english.caseStudies, common: { ...english.caseStudies.common, overview: "Injected overview" } },
    notFound: { ...english.notFound, title: "Injected recovery title" },
    content: {
      ...english.content,
      guitarSenseCaseStudy: { ...english.content.guitarSenseCaseStudy, introduction: "Injected GuitarSense introduction" },
      nexoraCaseStudy: { ...english.content.nexoraCaseStudy, overview: "Injected Nexora overview" },
      gradeWatcherCaseStudy: { ...english.content.gradeWatcherCaseStudy, role: "Injected Grade Watcher role" },
      toolkit: english.content.toolkit.map((group) => ({ ...group, title: "Injected toolkit heading" })),
    },
  };
  const home = renderSource("src/components/views/home.tsx", "HomeView", { dictionary });
  assert.match(home, /Injected home heading/);
  assert.match(home, /aria-label="Injected home label"/);
  assert.match(home, /aria-label="Injected navigation"/);
  assert.match(home, /Injected toolkit heading/);
  const jsonLd = JSON.parse(home.match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1]);
  assert.equal(jsonLd["@graph"][1].inLanguage, "tr");
  assert.match(renderSource("src/components/views/guitarsense.tsx", "GuitarSenseView", { dictionary }), /Injected GuitarSense introduction/);
  assert.match(renderSource("src/components/views/nexora.tsx", "NexoraView", { dictionary }), /Injected Nexora overview/);
  assert.match(renderSource("src/components/views/grade-watcher.tsx", "GradeWatcherView", { dictionary }), /Injected Grade Watcher role/);
  assert.match(renderSource("src/components/views/not-found.tsx", "NotFoundView", { dictionary }), /Injected recovery title/);
});

test("metadata preserves production origins, shallow project Open Graph and inherited Twitter", () => {
  const { english } = loadSource("src/i18n/en.ts");
  const { createRootMetadata, createProjectMetadata } = loadSource("src/i18n/metadata.ts");
  const root = createRootMetadata(english);
  assert.equal(root.metadataBase.href, "https://www.erenkacar.com/");
  assert.equal(root.openGraph.locale, "en_US");
  assert.equal(createRootMetadata(loadSource("src/i18n/tr.ts").turkish).openGraph.locale, "tr_TR");
  for (const id of ["guitarsense", "nexora", "grade-watcher"]) {
    const metadata = createProjectMetadata(id, "en", english);
    assert.equal(metadata.openGraph.url, `/projects/${id}`);
    assert.deepEqual(metadata.openGraph.images, [{ url: `/projects/${id}/opengraph-image`, type: "image/png", width: 1200, height: 630, alt: english.social[id].alt }]);
    assert.equal(metadata.openGraph.locale, "en_US");
    assert.deepEqual(metadata.openGraph.alternateLocale, ["tr_TR"]);
    for (const key of ["siteName", "type"]) assert.equal(key in metadata.openGraph, false);
    assert.equal("twitter" in metadata, false);
    assert.equal(createProjectMetadata(id, "tr", loadSource("src/i18n/tr.ts").turkish).openGraph.locale, "tr_TR");
    assert.throws(() => createProjectMetadata(id, "en", { ...english, locale: "tr" }), /must match/);
  }
});

test("grouped root metadata explicitly preserves the original Open Graph and Twitter images", () => {
  const { english } = loadSource("src/i18n/en.ts");
  const root = loadSource("src/i18n/metadata.ts").createRootMetadata(english);
  assert.deepEqual(root.openGraph.images, [{
    url: "/opengraph-image", type: "image/png", width: 1200, height: 630,
    alt: "Eren Kaçar — Software Engineer",
  }]);
  assert.deepEqual(root.twitter.images, [{
    url: "/twitter-image", type: "image/png", width: 1200, height: 630,
    alt: "Eren Kaçar — Software Engineer",
  }]);
});

test("unmatched routing uses the native global not-found document and no throwing catchall", () => {
  const boundaryPath = "src/app/global-not-found.tsx";
  assert.ok(existsSync(boundaryPath), "Grouped roots need a native global not-found document");
  assert.equal(loadSource("next.config.ts").default.experimental.globalNotFound, true);
  for (const file of ["page", "layout", "not-found"]) {
    assert.equal(existsSync(`src/app/(en)/[...unmatched]/${file}.tsx`), false);
  }
  const html = renderSource(boundaryPath, "default");
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<a class="skip-link" href="#main-content">Skip to content<\/a>/);
  assert.match(html, /<header class="site-header">/);
  assert.match(html, /<main class="not-found-page" id="main-content">/);
  assert.match(html, /<footer class="site-footer">/);
  assert.doesNotMatch(html, /<script\b|__next_error__/);
  assert.ok(html.includes(renderSource("src/components/views/not-found.tsx", "NotFoundView")));
});

test("the native global 404 explicitly preserves English root metadata, viewport and styles", () => {
  assert.ok(existsSync("src/app/global-not-found.tsx"));
  const root = loadSource("src/app/(en)/layout.tsx");
  const global = loadSource("src/app/global-not-found.tsx");
  assert.deepEqual(global.metadata, root.metadata);
  assert.deepEqual(global.viewport, root.viewport);
  assert.match(read("src/app/global-not-found.tsx"), /import "\.\/globals\.css"/);
  assert.match(read("src/app/(en)/layout.tsx"), /import "\.\.\/globals\.css"/);
});

test("the shared document shell receives locale and skip-link copy explicitly", () => {
  assert.ok(existsSync("src/components/layout/document-shell.tsx"));
  const { english } = loadSource("src/i18n/en.ts");
  const dictionary = { ...english, locale: "tr", shared: { ...english.shared, skipLink: "Injected skip link" } };
  const html = renderSource("src/components/layout/document-shell.tsx", "DocumentShell", { dictionary, children: "Document child" });
  assert.match(html, /<html lang="tr">/);
  assert.match(html, />Injected skip link<\/a>/);
  assert.match(html, /Document child<\/body>/);
});

test("the dictionary type accepts translated strings and rejects missing UI, image and locale entries", () => {
  const check = (source) => checkDictionaryTypes(source).map((diagnostic) => diagnostic.message);
  const imports = 'import { english } from "@/i18n/en"; import { routeRegistry } from "@/i18n/routes"; import type { Dictionary, CompleteDictionaries } from "@/i18n/schema";';
  assert.deepEqual(check(`${imports}
    const translated = { ...english, locale: "tr",
      links: { home: routeRegistry.home.tr, work: "/tr#work", about: "/tr#about" },
      shared: { ...english.shared, skipLink: "Translated skip link", navigation: [
        { ...english.shared.navigation[0], href: "/tr#work" },
        { ...english.shared.navigation[1], href: "/tr#experience" },
        { ...english.shared.navigation[2], href: "/tr#skills" },
        { ...english.shared.navigation[3], href: "/tr#about" },
        { ...english.shared.navigation[4], href: "/tr#contact" }
      ] },
      home: { ...english.home, hero: { ...english.home.hero, title: "Translated headline" } },
      content: { ...english.content,
        featuredProject: { ...english.content.featuredProject, href: routeRegistry.guitarsense.tr },
        selectedProjects: [
          { ...english.content.selectedProjects[0], href: routeRegistry.nexora.tr },
          { ...english.content.selectedProjects[1], href: routeRegistry["grade-watcher"].tr }
        ],
        guitarSenseImages: { ...english.content.guitarSenseImages,
        library: { ...english.content.guitarSenseImages.library, alt: "Translated image description" } } }
    } as const satisfies Dictionary;
    const complete: CompleteDictionaries = { en: english, tr: translated };
  `), []);
  const errors = check(`${imports}
    const { downloadCvLabel, ...shared } = english.shared;
    const missingUi: Dictionary = { ...english, shared };
    const { alt, ...library } = english.content.guitarSenseImages.library;
    const missingImage: Dictionary = { ...english, content: { ...english.content, guitarSenseImages: { ...english.content.guitarSenseImages, library } } };
    const missingLocale: CompleteDictionaries = { en: english };
  `);
  assert.equal(errors.length, 3, errors.join("\n"));
  assert.ok(errors.some((error) => error.includes("downloadCvLabel")));
  assert.ok(errors.some((error) => error.includes("alt")));
  assert.ok(errors.some((error) => error.includes("'tr'")));
});

test("translation types reject omitted content entries and changes to fixed project data", () => {
  const prefix = 'import { english } from "@/i18n/en"; import type { Dictionary } from "@/i18n/schema";';
  const cases = {
    missingSelected: '{ ...english, content: { ...english.content, selectedProjects: [] } }',
    missingGradeWatcher: '{ ...english, content: { ...english.content, selectedProjects: [english.content.selectedProjects[0]] } }',
    missingExperience: '{ ...english, content: { ...english.content, experience: [] } }',
    missingToolkit: '{ ...english, content: { ...english.content, toolkit: [] } }',
    missingOtherWork: '{ ...english, content: { ...english.content, otherWork: [] } }',
    missingProofs: '{ ...english, content: { ...english.content, featuredProject: { ...english.content.featuredProject, proofPoints: [] } } }',
    missingSelectedProofs: '{ ...english, content: { ...english.content, selectedProjects: [{ ...english.content.selectedProjects[0], proofPoints: [] }, english.content.selectedProjects[1]] } }',
    missingCapabilities: '{ ...english, content: { ...english.content, guitarSenseCaseStudy: { ...english.content.guitarSenseCaseStudy, capabilities: [] } } }',
    missingNexoraImage: '{ ...english, content: { ...english.content, selectedProjects: [{ ...english.content.selectedProjects[0], image: undefined }, english.content.selectedProjects[1]] } }',
    changedName: '{ ...english, content: { ...english.content, featuredProject: { ...english.content.featuredProject, name: "Changed brand" } } }',
    changedSocialName: '{ ...english, social: { ...english.social, guitarsense: { ...english.social.guitarsense, title: "Changed brand" } } }',
    changedMetadataName: '{ ...english, metadata: { ...english.metadata, guitarsense: { ...english.metadata.guitarsense, title: "Changed brand" } } }',
    changedStack: '{ ...english, content: { ...english.content, featuredProject: { ...english.content.featuredProject, tags: ["Changed technology"] } } }',
    changedNexoraSource: '{ ...english, content: { ...english.content, selectedProjects: [{ ...english.content.selectedProjects[0], image: { ...english.content.selectedProjects[0].image, src: "/changed.png" } }, english.content.selectedProjects[1]] } }',
    changedNexoraSize: '{ ...english, content: { ...english.content, selectedProjects: [{ ...english.content.selectedProjects[0], image: { ...english.content.selectedProjects[0].image, width: 999 } }, english.content.selectedProjects[1]] } }',
    changedNexoraFrame: '{ ...english, content: { ...english.content, selectedProjects: [{ ...english.content.selectedProjects[0], image: { ...english.content.selectedProjects[0].image, frame: "natural" } }, english.content.selectedProjects[1]] } }',
    changedHref: '{ ...english, content: { ...english.content, featuredProject: { ...english.content.featuredProject, href: "https://example.com" } } }',
    wrongEnglishAnchor: '{ ...english, links: { ...english.links, work: "/tr#work" } }',
    changedNavigation: '{ ...english, shared: { ...english.shared, navigation: [{ ...english.shared.navigation[0], href: "https://example.com" }, ...english.shared.navigation.slice(1)] } }',
    wrongLocaleLinks: '{ ...english, locale: "tr" }',
  };
  const errors = checkDictionaryTypes(`${prefix}\n${Object.entries(cases).map(([name, value]) => `const ${name}: Dictionary = ${value};`).join("\n")}`);
  for (const name of Object.keys(cases)) assert.ok(errors.some((error) => error.line.includes(`const ${name}:`)), `${name} must be rejected by the translation contract`);
});

test("Nexora architecture separates fixed technology identities from translatable labels", () => {
  assert.ok(existsSync("src/data/nexora-architecture.ts"), "Nexora architecture identities need an invariant source");
  const { english } = loadSource("src/i18n/en.ts");
  assert.deepEqual(english.content.nexoraArchitecture, { client: "React", api: "Go / Gin", database: "MySQL", firebase: "Firebase", gemini: "Gemini API" });
  const prefix = 'import { english } from "@/i18n/en"; import type { Dictionary } from "@/i18n/schema";';
  const source = `${prefix}\n${["client", "api", "database", "firebase", "gemini"].map((field) => `const changed_${field}: Dictionary = { ...english, content: { ...english.content, nexoraArchitecture: { ...english.content.nexoraArchitecture, ${field}: "Changed technology" } } };`).join("\n")}`;
  const errors = checkDictionaryTypes(source);
  for (const field of ["client", "api", "database", "firebase", "gemini"]) assert.ok(errors.some((error) => error.line.includes(`const changed_${field}:`)), `${field} identity must be fixed`);
});

test("Nexora architecture technology labels render as the original single text nodes", () => {
  const { english } = loadSource("src/i18n/en.ts");
  const tree = loadSource("src/components/views/nexora.tsx").NexoraView({ dictionary: english });
  const find = (node) => {
    if (!node || typeof node !== "object") return undefined;
    if (node.props?.className === "nexora-architecture__core") return node;
    for (const child of [].concat(node.props?.children ?? [])) {
      const result = find(child);
      if (result) return result;
    }
  };
  const core = find(tree);
  assert.ok(core);
  const labels = core.props.children.map((item) => [].concat(item.props.children)[0].props.children.filter((child) => typeof child === "string"));
  assert.deepEqual(labels, [["React Client"], ["Go / Gin API"], ["MySQL"]]);
});

test("technology headings and accessibility templates translate while technology arrays stay fixed", () => {
  const prefix = 'import { english } from "@/i18n/en"; import type { Dictionary } from "@/i18n/schema";';
  assert.deepEqual(checkDictionaryTypes(`${prefix}
    const translatedLabels: Dictionary = { ...english,
      shared: { ...english.shared, technologies: "{name} teknolojileri" },
      caseStudies: { ...english.caseStudies, guitarsense: { ...english.caseStudies.guitarsense, technologies: "Teknolojiler" } }
    };
  `), []);
  const errors = checkDictionaryTypes(`${prefix}
    const changedAudioTechnologies: Dictionary = { ...english, content: { ...english.content, guitarSenseCaseStudy: { ...english.content.guitarSenseCaseStudy, technologies: ["Changed technology"] } } };
    const changedExperienceTechnologies: Dictionary = { ...english, content: { ...english.content, experience: [{ ...english.content.experience[0], technologies: ["Changed technology"] }, english.content.experience[1]] } };
    const changedToolkitTechnologies: Dictionary = { ...english, content: { ...english.content, toolkit: [{ ...english.content.toolkit[0], items: ["Changed technology"] }, ...english.content.toolkit.slice(1)] } };
  `);
  for (const name of ["changedAudioTechnologies", "changedExperienceTechnologies", "changedToolkitTechnologies"]) assert.ok(errors.some((error) => error.line.includes(`const ${name}:`)), `${name} must be rejected`);
});

test("standalone Grade Watcher technologies stay fixed while descriptive facts and stage labels translate", () => {
  const prefix = 'import { english } from "@/i18n/en"; import type { Dictionary } from "@/i18n/schema"; const grade = english.content.gradeWatcherCaseStudy;';
  assert.deepEqual(checkDictionaryTypes(`${prefix}
    const translatedDescriptions: Dictionary = { ...english, content: { ...english.content, gradeWatcherCaseStudy: { ...grade,
      facts: [grade.facts[0], grade.facts[1], grade.facts[2], "Translated private-project label"],
      architecture: [{ ...grade.architecture[0], label: "Translated local-runner label" }, grade.architecture[1], grade.architecture[2], grade.architecture[3], grade.architecture[4], grade.architecture[5]]
    } } };
  `), []);
  const cases = {
    changedPythonFact: '["Rust", grade.facts[1], grade.facts[2], grade.facts[3]]',
    changedPlaywrightFact: '[grade.facts[0], "Puppeteer", grade.facts[2], grade.facts[3]]',
    changedTelegramFact: '[grade.facts[0], grade.facts[1], "Discord API", grade.facts[3]]',
  };
  const source = `${prefix}\n${Object.entries(cases).map(([name, facts]) => `const ${name}: Dictionary = { ...english, content: { ...english.content, gradeWatcherCaseStudy: { ...grade, facts: ${facts} } } };`).join("\n")}
    const changedTelegramStage: Dictionary = { ...english, content: { ...english.content, gradeWatcherCaseStudy: { ...grade, architecture: [grade.architecture[0], grade.architecture[1], grade.architecture[2], grade.architecture[3], grade.architecture[4], { ...grade.architecture[5], label: "Discord API" }] } } };
  `;
  const errors = checkDictionaryTypes(source);
  for (const name of [...Object.keys(cases), "changedTelegramStage"]) assert.ok(errors.some((error) => error.line.includes(`const ${name}:`)), `${name} must be rejected`);
});

test("reusable views contain no locale imports, hard-coded prose or accessibility copy", () => {
  const files = readdirSync("src/components", { recursive: true }).filter((file) => /\.tsx$/.test(file));
  for (const file of files) {
    const source = read(`src/components/${file}`);
    assert.doesNotMatch(source, /from ["']@\/(?:i18n\/en|i18n\/dictionaries|data\/)/, file);
    const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const visit = (node) => {
      if (ts.isJsxText(node)) {
        const text = node.text.trim();
        assert.ok(!text || ["EK", "→", "←", "↗"].includes(text), `${file}: JSX copy should come from the dictionary: ${text}`);
      }
      if (ts.isJsxAttribute(node) && ["aria-label", "alt", "title", "heading", "text", "eyebrow", "intro", "label"].includes(node.name.getText(ast))) {
        assert.ok(!node.initializer || !ts.isStringLiteral(node.initializer), `${file}: ${node.name.getText(ast)} should be supplied as copy`);
      }
      ts.forEachChild(node, visit);
    };
    visit(ast);
  }
});

test("English wrappers use shared server views in one English root", () => {
  assert.ok(existsSync("src/app/(en)/layout.tsx"), "English root layout should exist");
  assert.equal(existsSync("src/app/layout.tsx"), false);
  for (const [file, view] of [["page", "HomeView"], ["projects/guitarsense/page", "GuitarSenseView"], ["projects/nexora/page", "NexoraView"], ["projects/grade-watcher/page", "GradeWatcherView"], ["not-found", "NotFoundView"]]) {
    assert.match(read(`src/app/(en)/${file}.tsx`), new RegExp(`<${view} dictionary=\\{english\\}`));
  }
  assert.equal(existsSync("src/app/(en)/[...unmatched]/page.tsx"), false);
  const turkishFiles = existsSync("src/app/tr") ? readdirSync("src/app/tr", { recursive: true }).filter((file) => /\.(tsx?|jsx?)$/.test(file)) : [];
  assert.deepEqual(turkishFiles.sort(), ["layout.tsx", "not-found.tsx", "page.tsx", "projects/grade-watcher/page.tsx", "projects/guitarsense/page.tsx", "projects/nexora/page.tsx"].map((file) => file.replaceAll("/", process.platform === "win32" ? "\\" : "/")).sort());
  for (const slug of ["guitarsense", "nexora", "grade-watcher"]) {
    assert.ok(existsSync(`src/app/projects/${slug}/opengraph-image.tsx`));
    assert.equal(existsSync(`src/app/(en)/projects/${slug}/opengraph-image.tsx`), false);
  }
});

test("toolkit presentation uses stable IDs for icons", () => {
  const { toolkit } = loadSource("src/data/toolkit.ts");
  assert.deepEqual(toolkit.map((group) => group.id), ["languages", "frontend", "backend-data", "desktop-systems", "audio-automation"]);
  const view = read("src/components/sections/toolkit.tsx");
  assert.match(view, /toolkitIcons\[group\.id\]/);
  assert.doesNotMatch(view, /toolkitIcons\[group\.title\]/);
});

test("bilingual routes introduce no client state or automatic locale negotiation", () => {
  const files = readdirSync("src", { recursive: true }).filter((file) => /\.(tsx?|mjs)$/.test(file));
  for (const file of files) {
    assert.doesNotMatch(read(`src/${file}`), /["']use client["']|localStorage|sessionStorage|navigator\.language|cookies\(|Accept-Language/i, file);
  }
  assert.equal(existsSync("src/middleware.ts"), false);
  assert.equal(existsSync("src/proxy.ts"), false);
});
