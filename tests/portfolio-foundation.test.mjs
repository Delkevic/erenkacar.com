import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

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

test("the hero uses the approved headline without repeating the eyebrow", () => {
  const hero = read("src/components/sections/hero.tsx");

  assert.match(hero, /Software Engineer<\/p>/);
  assert.match(
    hero,
    /Building end-to-end desktop, web and real-time products\./,
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

test("site configuration keeps unknown contact destinations nullable", () => {
  const config = read("src/config/site.ts");

  assert.match(config, /domain:\s*"https:\/\/erenkacar\.com"/);
  assert.match(config, /githubUrl:\s*null/);
  assert.match(config, /linkedinUrl:\s*null/);
  assert.match(config, /contactUrl:\s*null/);
  assert.match(config, /resumePath:\s*null/);
});

test("provisional content is marked for review in the data layer", () => {
  const projects = read("src/data/projects.ts");
  const experience = read("src/data/experience.ts");

  assert.match(projects, /name:\s*"GuitarSense"/);
  assert.match(projects, /name:\s*"Nexora"/);
  assert.match(projects, /name:\s*"Grade Watcher"/);
  assert.match(experience, /organization:\s*"Trakya University Student Affairs"/);
  assert.match(experience, /organization:\s*"Turkcell"/);
  assert.match(projects, /needsReview:\s*true/);
  assert.match(experience, /needsReview:\s*true/);
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

test("the GuitarSense case-study media stays route-specific and viewport-conscious", () => {
  const styles = read("src/app/globals.css");
  const casePlaceholder =
    styles.match(/\.case-placeholder\s*\{(?<declarations>[^}]*)\}/)?.groups
      ?.declarations ?? "";

  assert.match(casePlaceholder, /width:\s*min\(100%,\s*70rem\)/);
  assert.match(casePlaceholder, /max-height:\s*32rem/);
  assert.match(casePlaceholder, /margin-inline:\s*auto/);
  assert.match(casePlaceholder, /aspect-ratio:\s*16\s*\/\s*9/);
  assert.match(
    styles,
    /\.case-placeholder\s*>\s*img\s*\{[^}]*object-fit:\s*contain/s,
  );
});
