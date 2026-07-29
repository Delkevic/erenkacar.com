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
  const imagePath = "public/images/projects/nexora/ana-ekran.png";

  assert.match(nexora, /href:\s*"\/projects\/nexora"/);
  assert.match(nexora, /image:\s*nexoraImages\.homeFeed/);
  const homeFeed = registryEntry(registry, "homeFeed");

  assert.ok(existsSync(imagePath), "The clean Nexora homepage image should exist");

  const image = readFileSync(imagePath);
  const pngSignature = image.subarray(0, 8).toString("hex");
  const width = image.readUInt32BE(16);
  const height = image.readUInt32BE(20);

  assert.equal(pngSignature, "89504e470d0a1a0a");
  assert.equal(width, 1881);
  assert.equal(height, 856);
  assert.match(homeFeed, /src:\s*"\/images\/projects\/nexora\/ana-ekran\.png"/);
  assert.match(homeFeed, /width:\s*1881/);
  assert.match(homeFeed, /height:\s*856/);
  assert.match(homeFeed, /frame:\s*"contain"/);
  assert.match(homeFeed, /placement:\s*"homepage"/);
  assert.match(homeFeed, /replaceBeforeLaunch:\s*false/);
  assert.match(homeFeed, /replacementReason:\s*null/);
  assert.doesNotMatch(registry, /ana-ekran\.jpg/);
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

test("all rendered Nexora screenshots are production-ready", () => {
  const registry = read("src/data/nexora-images.ts");

  for (const image of ["homeFeed", "explore", "authentication", "messaging"]) {
    const entry = registryEntry(registry, image);

    assert.match(entry, /replaceBeforeLaunch:\s*false/);
    assert.match(entry, /replacementReason:\s*null/);
  }

  assert.doesNotMatch(registry, /replaceBeforeLaunch:\s*true/);

  const publicSource = [
    read("src/app/projects/nexora/page.tsx"),
    read("src/components/ui/project-card.tsx"),
  ].join("\n");

  assert.doesNotMatch(
    publicSource,
    /replaceBeforeLaunch|replacementReason|third-party artwork|test-user/i,
  );
});

test("the production authentication image exists with matching PNG dimensions", () => {
  const imagePath = "public/images/projects/nexora/2fa.png";
  const registry = read("src/data/nexora-images.ts");
  const authentication = registryEntry(registry, "authentication");

  assert.ok(existsSync(imagePath), "The clean authentication image should exist");

  const image = readFileSync(imagePath);
  const pngSignature = image.subarray(0, 8).toString("hex");
  const width = image.readUInt32BE(16);
  const height = image.readUInt32BE(20);

  assert.equal(pngSignature, "89504e470d0a1a0a");
  assert.equal(width, 1333);
  assert.equal(height, 769);
  assert.match(
    authentication,
    /src:\s*"\/images\/projects\/nexora\/2fa\.png"/,
  );
  assert.match(authentication, /width:\s*1333/);
  assert.match(authentication, /height:\s*769/);
});

test("the production Explore and Messaging images exist with matching PNG dimensions", () => {
  const registry = read("src/data/nexora-images.ts");
  const expectedImages = [
    {
      key: "explore",
      path: "public/images/projects/nexora/feed.png",
      src: "/images/projects/nexora/feed.png",
      width: 1882,
      height: 848,
    },
    {
      key: "messaging",
      path: "public/images/projects/nexora/messaging.png",
      src: "/images/projects/nexora/messaging.png",
      width: 1262,
      height: 855,
    },
  ];

  for (const image of expectedImages) {
    assert.ok(existsSync(image.path), `${image.key} image should exist`);

    const file = readFileSync(image.path);
    const entry = registryEntry(registry, image.key);

    assert.equal(file.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(file.readUInt32BE(16), image.width);
    assert.equal(file.readUInt32BE(20), image.height);
    assert.match(entry, new RegExp(`src:\\s*"${image.src.replaceAll(".", "\\.")}"`));
    assert.match(entry, new RegExp(`width:\\s*${image.width}`));
    assert.match(entry, new RegExp(`height:\\s*${image.height}`));
  }

  assert.doesNotMatch(registry, /feed\.jpg|mesaj\.jpg/);
});

test("the cropped Messaging description matches the active conversation view", () => {
  const registry = read("src/data/nexora-images.ts");
  const messaging = registryEntry(registry, "messaging");

  assert.match(
    messaging,
    /alt:\s*"Nexora direct-message interface showing an online demo conversation and realtime message updates"/,
  );
  assert.match(
    messaging,
    /Firebase-backed direct messaging with presence, delivery state and realtime conversation updates\./,
  );
  assert.doesNotMatch(messaging, /conversation list/i);
});

test("the internal checklist keeps only the pending GuitarSense screenshot", () => {
  const readme = read("README.md");

  assert.match(readme, /GuitarSense Practice Summary/i);
  assert.doesNotMatch(
    readme,
    /Nexora screenshot replacements|home feed|Explore capture|messaging capture|authentication|unrealistic test email/i,
  );
});
