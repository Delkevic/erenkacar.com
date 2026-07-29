import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

test("the homepage sections render both decorative illustration variants", () => {
  const hero = read("src/components/sections/hero.tsx");
  const contact = read("src/components/sections/contact.tsx");

  assert.match(hero, /<DecorativeIllustration variant="headstock"\s*\/>/);
  assert.match(contact, /<DecorativeIllustration variant="cable"\s*\/>/);
});

test("decorative illustrations are static, hidden from assistive technology, and non-interactive", () => {
  const component = read(
    "src/components/ui/decorative-illustration.tsx",
  );
  const styles = read("src/app/globals.css");

  assert.match(component, /aria-hidden="true"/);
  assert.match(component, /focusable="false"/);
  assert.match(component, /fill="none"/);
  assert.match(component, /stroke="currentColor"/);
  assert.match(component, /strokeLinecap="round"/);
  assert.match(component, /strokeLinejoin="round"/);
  assert.doesNotMatch(component, /<text\b|["']use client["']/);
  assert.doesNotMatch(component, /(?:href|src)=["']https?:\/\//);
  assert.match(
    styles,
    /\.decorative-illustration\s*\{[^}]*pointer-events:\s*none/s,
  );
});

test("decorative illustrations remain locally contained on the homepage", () => {
  const projectPages = [
    "src/app/projects/guitarsense/page.tsx",
    "src/app/projects/nexora/page.tsx",
    "src/app/projects/grade-watcher/page.tsx",
  ].map(read).join("\n");
  const styles = read("src/app/globals.css");

  assert.doesNotMatch(projectPages, /DecorativeIllustration|decorative-illustration/);
  assert.match(styles, /\.hero\s*\{[^}]*overflow:\s*clip/s);
  assert.match(styles, /\.contact-panel\s*\{[^}]*overflow:\s*clip/s);
  assert.match(
    styles,
    /@media\s*\(max-width:\s*780px\)\s*\{[\s\S]*?\.decorative-illustration\s*\{[^}]*display:\s*none/s,
  );
});
