import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

const objectBetween = (source, start, end) => {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);

  assert.ok(startIndex >= 0, `${start} should exist`);
  assert.ok(endIndex > startIndex, `${end} should follow ${start}`);

  return source.slice(startIndex, endIndex);
};

const registryEntry = (source, image) => {
  const entry = source.match(
    new RegExp(`${image}:\\s*\\{(?<body>[^}]*)\\}`),
  )?.groups?.body;

  assert.ok(entry, `${image} registry entry should exist`);

  return entry;
};

test("the Nexora homepage card uses its real feed image and detail route", () => {
  const projects = read("src/data/projects.ts");
  const projectCard = read("src/components/ui/project-card.tsx");
  const registry = read("src/data/nexora-images.ts");
  const nexora = objectBetween(projects, 'name: "Nexora"', 'name: "Grade Watcher"');

  assert.match(nexora, /href:\s*"\/projects\/nexora"/);
  assert.match(nexora, /image:\s*nexoraImages\.homeFeed/);
  const homeFeed = registryEntry(registry, "homeFeed");

  assert.match(homeFeed, /src:\s*"\/images\/projects\/nexora\/ana-ekran\.jpg"/);
  assert.match(homeFeed, /frame:\s*"contain"/);
  assert.match(projectCard, /<ScreenshotFigure/);
  assert.match(projectCard, /View project/);
  assert.match(projectCard, /from "next\/link"/);
});

test("Nexora technologies use Firebase and Gemini without WebSocket claims", () => {
  const projects = read("src/data/projects.ts");
  const nexora = objectBetween(projects, 'name: "Nexora"', 'name: "Grade Watcher"');

  for (const technology of [
    "React",
    "Go",
    "Gin",
    "MySQL",
    "Firebase",
    "Gemini API",
  ]) {
    assert.match(nexora, new RegExp(`"${technology}"`));
  }

  assert.doesNotMatch(nexora, /WebSocket/i);
});

test("the concise Nexora case study covers the supplied product facts", () => {
  const routePath = "src/app/projects/nexora/page.tsx";

  assert.ok(existsSync(routePath), "The /projects/nexora route should exist");

  const page = read(routePath);
  const content = read("src/data/nexora-case-study.ts");
  const source = `${page}\n${content}`;

  assert.match(source, /FULL-STACK SOCIAL PLATFORM/);
  assert.match(source, /Secure account flows/);
  assert.match(source, /Firebase-backed conversations/);
  assert.match(source, /Feed and discovery/);
  assert.match(source, /AI-assisted content analysis and discovery/);
  assert.match(source, /Gemini API/);
  assert.match(source, /React Client/);
  assert.match(source, /Go \/ Gin API/);
  assert.match(source, /MySQL/);
  assert.match(source, /Closing summary/);
  assert.doesNotMatch(source, /recommendation engine|personalized ranking|custom WebSocket/i);
  assert.doesNotMatch(page, /href=["']#["']|https?:\/\//);
  assert.doesNotMatch(page, /["']use client["']/);
});

test("the Nexora route exposes factual metadata without a social preview image", () => {
  const page = read("src/app/projects/nexora/page.tsx");

  assert.match(page, /absolute:\s*"Nexora — Eren Kaçar"/);
  assert.match(
    page,
    /A full-stack social platform built with React, Go, MySQL, Firebase and Gemini-assisted content experiences\./,
  );
  assert.doesNotMatch(page, /images:\s*\[/);
});

test("the Nexora case study renders three distinct reviewed screenshots", () => {
  const page = read("src/app/projects/nexora/page.tsx");
  const registry = read("src/data/nexora-images.ts");
  const renderedKeys = [
    ...page.matchAll(/image=\{nexoraImages\.(?<key>\w+)\}/g),
  ].map((match) => match.groups?.key);

  assert.deepEqual(renderedKeys, ["explore", "authentication", "messaging"]);
  assert.ok(renderedKeys.length <= 5);
  assert.equal(new Set(renderedKeys).size, renderedKeys.length);

  for (const key of renderedKeys) {
    assert.ok(key);
    assert.match(registryEntry(registry, key), /alt:\s*"[^"]+"/);
  }
});

test("Nexora temporary screenshots have private launch-readiness reasons", () => {
  const registry = read("src/data/nexora-images.ts");
  const expectedReasons = new Map([
    ["homeFeed", "Contains third-party artwork or media used as test content."],
    ["explore", "Contains third-party artwork or media used as test content."],
    ["authentication", "Contains an intentionally unrealistic test email address."],
    ["messaging", "Contains identifiable test-user names or profile imagery."],
  ]);

  for (const [key, reason] of expectedReasons) {
    const entry = registryEntry(registry, key);

    assert.match(entry, /replaceBeforeLaunch:\s*true/);
    assert.match(entry, new RegExp(reason.replaceAll(".", "\\.")));
  }

  const publicSource = [
    read("src/app/projects/nexora/page.tsx"),
    read("src/components/ui/project-card.tsx"),
  ].join("\n");

  assert.doesNotMatch(
    publicSource,
    /replaceBeforeLaunch|replacementReason|third-party artwork|test-user/i,
  );
});

test("the internal checklist records only private Nexora screenshot cleanup", () => {
  const readme = read("README.md");

  assert.match(readme, /Nexora screenshot replacements before public launch/);
  assert.match(readme, /home feed and Explore/i);
  assert.match(readme, /unrealistic test email/i);
  assert.match(readme, /test-user names or profile imagery/i);
});
