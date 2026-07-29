import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

const sectionBetween = (source, heading, nextHeading) => {
  const start = source.indexOf(`<h2>${heading}</h2>`);
  const end = source.indexOf(`<h2>${nextHeading}</h2>`, start + 1);

  assert.ok(start >= 0, `${heading} section should exist`);
  assert.ok(end > start, `${nextHeading} should follow ${heading}`);

  return source.slice(start, end);
};

const registryEntry = (source, image) => {
  const entry = source.match(
    new RegExp(`${image}:\\s*\\{(?<body>[^}]*)\\}`),
  )?.groups?.body;

  assert.ok(entry, `${image} registry entry should exist`);

  return entry;
};

test("the homepage composes the required sections in order", () => {
  const page = read("src/app/page.tsx");
  const sections = [
    "Hero",
    "FeaturedProject",
    "SelectedProjects",
    "Experience",
    "Toolkit",
    "About",
    "OtherWork",
    "Contact",
  ];

  let previousIndex = -1;

  for (const section of sections) {
    const currentIndex = page.indexOf(`<${section}`);
    assert.ok(currentIndex > previousIndex, `${section} should follow the previous section`);
    previousIndex = currentIndex;
  }
});

test("the hero uses the reviewed headline, supporting copy, and focus", () => {
  const hero = read("src/components/sections/hero.tsx");

  assert.match(hero, /Software Engineer<\/p>/);
  assert.match(
    hero,
    /Building end-to-end desktop, web and real-time products\./,
  );
  assert.match(
    hero,
    /I build usable software across desktop and web, with a focus on/,
  );
  assert.match(
    hero,
    /Building GuitarSense and documenting the engineering decisions/,
  );
  assert.doesNotMatch(hero, /Software Engineer building end-to-end/);
});

test("the homepage exposes every navigation section target", () => {
  const sectionFiles = [
    "src/components/sections/featured-project.tsx",
    "src/components/sections/experience.tsx",
    "src/components/sections/toolkit.tsx",
    "src/components/sections/about.tsx",
    "src/components/sections/contact.tsx",
  ];
  const source = sectionFiles.map(read).join("\n");

  for (const id of ["work", "experience", "skills", "about", "contact"]) {
    assert.match(source, new RegExp(`id=["']${id}["']`));
  }
});

test("site configuration centralizes verified public destinations", () => {
  const config = read("src/config/site.ts");

  assert.match(config, /siteUrl:\s*"https:\/\/www\.erenkacar\.com"/);
  assert.match(config, /displayDomain:\s*"erenkacar\.com"/);
  assert.match(config, /githubUrl:\s*"https:\/\/github\.com\/Delkevic"/);
  assert.match(
    config,
    /linkedinUrl:\s*"https:\/\/www\.linkedin\.com\/in\/eren-kacar-7bb143251\/"/,
  );
  assert.match(config, /email:\s*"erenkacr@gmail\.com"/);
  assert.match(config, /contactUrl:\s*"mailto:erenkacr@gmail\.com"/);
  assert.match(config, /resumePath:\s*"\/resume\/eren-kacar-resume\.pdf"/);
});

test("reviewed project data describes GuitarSense, Nexora, and Grade Watcher", () => {
  const projects = read("src/data/projects.ts");

  assert.match(projects, /name:\s*"GuitarSense"/);
  assert.match(projects, /A desktop guitar practice platform combining/);
  assert.match(projects, /TÜBİTAK 2209-A supported/);
  assert.match(projects, /name:\s*"Nexora"/);
  assert.match(projects, /secure account flows, Firebase realtime messaging/);
  assert.match(projects, /name:\s*"Grade Watcher"/);
  assert.match(projects, /monitors academic result changes/);
  assert.doesNotMatch(projects, /needsReview/);
});

test("reviewed experience keeps Bimser Synergy central and dates factual", () => {
  const experience = read("src/data/experience.ts");

  assert.match(experience, /organization:\s*"Trakya University Student Affairs"/);
  assert.match(experience, /role:\s*"Software Developer"/);
  assert.match(experience, /date:\s*"Mar 2025 — Jun 2026"/);
  assert.match(experience, /using the Bimser Synergy low-code platform/);
  assert.match(
    experience,
    /more than 1,000 student requests were handled\./,
  );
  assert.doesNotMatch(
    experience,
    /more than 100 student requests were handled\./,
  );
  assert.match(experience, /organization:\s*"Turkcell"/);
  assert.match(experience, /date:\s*null/);
});

test("the GuitarSense case study qualifies latency and exposes its architecture", () => {
  const page = read("src/app/projects/guitarsense/page.tsx");
  const content = read("src/data/case-study.ts");

  assert.match(page, /guitarSenseImages\.practiceView/);
  assert.match(content, /not laboratory-measured end-to-end round-trip latency/);
  assert.match(content, /React Renderer/);
  assert.match(content, /Electron Main Process/);
  assert.match(content, /Python Audio Engine/);
  assert.match(content, /Packaged Windows beta produced/);
});

test("public content no longer exposes provisional template wording", () => {
  const files = [
    "src/app/projects/guitarsense/page.tsx",
    "src/components/sections/featured-project.tsx",
    "src/components/sections/selected-projects.tsx",
    "src/components/sections/experience.tsx",
    "src/components/sections/toolkit.tsx",
    "src/components/sections/about.tsx",
    "src/components/sections/other-work.tsx",
    "src/components/sections/contact.tsx",
    "src/components/layout/site-footer.tsx",
    "src/data/case-study.ts",
    "src/data/projects.ts",
  ];
  const source = files.map(read).join("\n");

  assert.doesNotMatch(
    source,
    /\b(?:in review|case study in progress|case-study foundation|provisional|archive in preparation)\b/i,
  );
});

test("pages contain no dead hash links or unnecessary client boundaries", () => {
  const files = [
    "src/app/page.tsx",
    "src/app/projects/guitarsense/page.tsx",
    "src/components/layout/site-header.tsx",
    "src/components/sections/contact.tsx",
  ];
  const source = files.map(read).join("\n");

  assert.doesNotMatch(source, /href=["']#["']/);
  assert.doesNotMatch(source, /["']use client["']/);
});

test("the GuitarSense image registry references real accessible screenshot assets", () => {
  const registry = read("src/data/guitarsense-images.ts");
  const sources = [
    ...registry.matchAll(/src:\s*"(?<src>\/images\/projects\/guitarsense\/[^"]+)"/g),
  ].map((match) => match.groups?.src);
  const altTexts = [...registry.matchAll(/alt:\s*"(?<alt>[^"]+)"/g)].map(
    (match) => match.groups?.alt,
  );

  assert.equal(sources.length, 5);
  assert.equal(altTexts.length, sources.length);

  for (const source of sources) {
    assert.ok(source);
    assert.ok(existsSync(`public${source}`), `${source} should exist`);
  }

  for (const alt of altTexts) {
    assert.ok(alt?.trim(), "Every screenshot should have non-empty alt text");
  }
});

test("the production GuitarSense Library asset has matching PNG dimensions", () => {
  const imagePath = "public/images/projects/guitarsense/library.png";
  const registry = read("src/data/guitarsense-images.ts");
  const homepage = read("src/components/sections/featured-project.tsx");
  const library = registryEntry(registry, "library");

  assert.ok(existsSync(imagePath), "The clean Library image should exist");

  const image = readFileSync(imagePath);
  const pngSignature = image.subarray(0, 8).toString("hex");
  const width = image.readUInt32BE(16);
  const height = image.readUInt32BE(20);

  assert.equal(pngSignature, "89504e470d0a1a0a");
  assert.equal(width, 1876);
  assert.equal(height, 952);
  assert.match(
    library,
    /src:\s*"\/images\/projects\/guitarsense\/library\.png"/,
  );
  assert.match(library, /width:\s*1876/);
  assert.match(library, /height:\s*952/);
  assert.match(library, /placement:\s*"homepage"/);
  assert.match(library, /frame:\s*"contain"/);
  assert.match(library, /replaceBeforeLaunch:\s*false/);
  assert.match(homepage, /image=\{guitarSenseImages\.library\}/);
});

test("GuitarSense screenshot mappings and launch readiness stay explicit", () => {
  const registry = read("src/data/guitarsense-images.ts");
  const homepage = read("src/components/sections/featured-project.tsx");
  const caseStudy = read("src/app/projects/guitarsense/page.tsx");

  assert.match(homepage, /guitarSenseImages\.library/);
  for (const image of [
    "practiceView",
    "presetEditor",
    "audioSettings",
    "importWorkflow",
  ]) {
    assert.match(caseStudy, new RegExp(`guitarSenseImages\\.${image}`));
  }
  for (const image of [
    "library",
    "practiceView",
    "presetEditor",
    "audioSettings",
    "importWorkflow",
  ]) {
    assert.match(
      registryEntry(registry, image),
      /replaceBeforeLaunch:\s*false/,
    );
  }
  for (const image of ["presetEditor", "importWorkflow"]) {
    assert.match(
      registryEntry(registry, image),
      /placement: "walkthrough"/,
    );
  }
  assert.doesNotMatch(registry, /replaceBeforeLaunch:\s*true/);
  assert.doesNotMatch(
    [registry, caseStudy].join("\n"),
    /practiceSummary|practice-summary\.png/i,
  );
  assert.doesNotMatch(
    [registry, homepage, caseStudy].join("\n"),
    /full[- ]tab|telephone/i,
  );
});

test("the GuitarSense case study keeps its reviewed section order", () => {
  const page = read("src/app/projects/guitarsense/page.tsx");
  const headings = [
    "My role",
    "Overview",
    "The problem",
    "The solution",
    "Key features",
    "Product walkthrough",
    "Architecture",
    "Engineering challenges",
    "Results",
  ];
  let previousIndex = -1;

  for (const heading of headings) {
    const currentIndex = page.indexOf(`<h2>${heading}</h2>`);
    assert.ok(currentIndex > previousIndex, `${heading} should follow the previous section`);
    previousIndex = currentIndex;
  }
});

test("Key features stays a screenshot-free presentation of all six feature groups", () => {
  const page = read("src/app/projects/guitarsense/page.tsx");
  const content = read("src/data/case-study.ts");
  const keyFeatures = sectionBetween(page, "Key features", "Product walkthrough");

  for (const title of [
    "Real-time guitar audio",
    "Tablature workspace",
    "Practice feedback",
    "Media importing",
    "Desktop packaging",
    "Safety and recovery",
  ]) {
    assert.match(content, new RegExp(`title: "${title}"`));
  }

  assert.doesNotMatch(keyFeatures, /ScreenshotFigure|guitarSenseImages\./);
});

test("Product walkthrough owns only its two useful supporting screenshots", () => {
  const page = read("src/app/projects/guitarsense/page.tsx");
  const walkthrough = sectionBetween(
    page,
    "Product walkthrough",
    "Architecture",
  );

  for (const image of ["presetEditor", "importWorkflow"]) {
    assert.match(walkthrough, new RegExp(`guitarSenseImages\\.${image}`));
  }

  assert.equal(walkthrough.match(/<ProductWalkthroughRow/g)?.length, 2);
  assert.doesNotMatch(walkthrough, /practiceSummary|Practice Summary/i);
  assert.equal(page.match(/guitarSenseImages\.importWorkflow/g)?.length, 1);
});

test("Engineering challenges keeps a regular card grid with separate audio evidence", () => {
  const page = read("src/app/projects/guitarsense/page.tsx");
  const challenges = sectionBetween(page, "Engineering challenges", "Results");

  assert.match(challenges, /challenge-grid/);
  assert.match(challenges, /guitarSenseImages\.audioSettings/);
  assert.match(challenges, /Test configuration interface/);
  assert.doesNotMatch(challenges, /guitarSenseImages\.importWorkflow/);
});

test("GuitarSense screenshot alt text remains descriptive and reviewed", () => {
  const registry = read("src/data/guitarsense-images.ts");
  const altTexts = [
    "GuitarSense project library showing saved practice projects and readiness states",
    "GuitarSense Practice View with tablature, playback controls and practice feedback",
    "GuitarSense preset editor with output level and guitar effects chain controls",
    "GuitarSense import screen showing local, YouTube and AI-assisted import options",
    "GuitarSense advanced audio settings with backend, device and buffer-size controls",
  ];

  for (const altText of altTexts) {
    assert.match(registry, new RegExp(`alt: "${altText}"`));
  }

  for (const caption of [
    "Custom preset creation with output control and an editable effects chain.",
    "Local and YouTube-oriented import workflows with separate core, live-audio and AI runtime states.",
    "Audio backend, device, buffer-size and synchronization controls used during backend testing.",
  ]) {
    assert.match(registry, new RegExp(caption.replaceAll(".", "\\.")));
  }
});

test("rendered GuitarSense media uses Next Image without old placeholders", () => {
  const figure = read("src/components/ui/screenshot-figure.tsx");
  const homepage = read("src/components/sections/featured-project.tsx");
  const caseStudy = read("src/app/projects/guitarsense/page.tsx");
  const source = [homepage, caseStudy].join("\n");

  assert.match(figure, /from "next\/image"/);
  assert.match(figure, /<figure/);
  assert.match(figure, /<figcaption/);
  assert.match(figure, /loading=\{eager \? "eager" : "lazy"\}/);
  assert.equal(homepage.match(/\beager\b/g)?.length, 1);
  assert.equal(caseStudy.match(/\beager\b/g)?.length, 1);
  assert.doesNotMatch(source, /case-placeholder|project-visual__label/);
  assert.doesNotMatch(source, /Placeholder for|visual in review/i);
});

test("the production Practice View renders its complete current screenshot", () => {
  const registry = read("src/data/guitarsense-images.ts");
  const styles = read("src/app/globals.css");
  const practiceView = registryEntry(registry, "practiceView");

  assert.match(practiceView, /width:\s*1897/);
  assert.match(practiceView, /height:\s*943/);
  assert.match(practiceView, /frame:\s*"contain"/);
  assert.doesNotMatch(practiceView, /taskbar-crop/);
  assert.match(
    styles,
    /\.case-primary-visual \.screenshot-frame--contain\s*\{[^}]*aspect-ratio:\s*19\s*\/\s*10/s,
  );
  assert.match(
    styles,
    /\.screenshot-frame--contain \.screenshot-image\s*\{[^}]*object-fit:\s*contain/s,
  );
});

test("walkthrough screenshot frames contain the complete source image", () => {
  const styles = read("src/app/globals.css");

  assert.match(
    styles,
    /\.walkthrough-row__figure \.screenshot-frame\s*\{[^}]*position:\s*relative/s,
  );
  assert.match(
    styles,
    /\.walkthrough-row__figure \.screenshot-image\s*\{[^}]*position:\s*absolute[^}]*inset:\s*0[^}]*height:\s*100%[^}]*object-fit:\s*contain/s,
  );
});
