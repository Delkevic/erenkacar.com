import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

test("the interface icon system stays inline, decorative, and server-rendered", () => {
  const iconPath = "src/components/ui/interface-icon.tsx";

  assert.ok(existsSync(iconPath), "The shared inline icon component should exist");

  const icon = read(iconPath);
  const packageManifest = read("package.json");

  assert.match(icon, /<svg/);
  assert.match(icon, /aria-hidden="true"/);
  assert.match(icon, /focusable="false"/);
  assert.doesNotMatch(icon, /["']use client["']/);
  assert.doesNotMatch(icon, /from ["'](?:lucide|react-icons|@heroicons)/);
  assert.doesNotMatch(
    packageManifest,
    /"(?:lucide-react|react-icons|@heroicons\/react)"/,
  );
});

test("case-study pages expose restrained project accent modifiers", () => {
  const guitarSensePage = read("src/app/projects/guitarsense/page.tsx");
  const nexoraPage = read("src/app/projects/nexora/page.tsx");
  const styles = read("src/app/globals.css");

  assert.match(guitarSensePage, /case-study--guitarsense/);
  assert.match(nexoraPage, /case-study--nexora/);
  assert.match(styles, /\.case-study--guitarsense\s*\{/);
  assert.match(styles, /\.case-study--nexora\s*\{/);
  assert.match(styles, /--project-accent:/);
});

test("visual polish preserves server components and introduces no fake links", () => {
  const files = [
    "src/app/page.tsx",
    "src/app/projects/guitarsense/page.tsx",
    "src/app/projects/nexora/page.tsx",
    "src/app/projects/grade-watcher/page.tsx",
    "src/components/layout/site-header.tsx",
    "src/components/sections/contact.tsx",
  ];
  const source = files.map(read).join("\n");

  assert.doesNotMatch(source, /["']use client["']/);
  assert.doesNotMatch(source, /href=["']#["']/);
  assert.doesNotMatch(source, /example\.com|placeholder/i);
});
