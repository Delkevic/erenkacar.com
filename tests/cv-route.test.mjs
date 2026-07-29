import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

test("/cv rewrites internally to the centralized résumé asset", () => {
  const nextConfig = read("next.config.ts");
  const siteConfig = read("src/config/site.ts");

  assert.match(
    siteConfig,
    /resumePath:\s*"\/resume\/eren-kacar-resume\.pdf"/,
  );
  assert.match(
    nextConfig,
    /import\s*\{\s*siteConfig\s*\}\s*from\s*"\/?.*src\/config\/site"/,
  );
  assert.match(nextConfig, /source:\s*"\/cv"/);
  assert.match(nextConfig, /destination:\s*siteConfig\.resumePath/);
  assert.doesNotMatch(nextConfig, /redirects\s*\(|https?:\/\//);
  assert.equal(existsSync("src/app/cv/page.tsx"), false);
  assert.equal(existsSync("src/app/cv/route.ts"), false);
});

test("/cv requests inline PDF presentation with a shareable filename", () => {
  const nextConfig = read("next.config.ts");

  assert.match(nextConfig, /key:\s*"Content-Disposition"/);
  assert.match(
    nextConfig,
    /value:\s*'inline; filename="Eren-Kacar-CV\.pdf"'/,
  );
});

test("the configured résumé is a valid PDF and download actions stay unchanged", () => {
  const pdfPath = "public/resume/eren-kacar-resume.pdf";
  const hero = read("src/components/sections/hero.tsx");
  const contact = read("src/components/sections/contact.tsx");

  assert.ok(existsSync(pdfPath));
  assert.equal(readFileSync(pdfPath).subarray(0, 5).toString(), "%PDF-");

  for (const source of [hero, contact]) {
    assert.match(source, /href=\{siteConfig\.resumePath\}/);
    assert.match(source, /\bdownload\b/);
    assert.match(source, />\s*Download CV\s*</);
    assert.doesNotMatch(source, /href=["'](?:#|\/cv)["']/);
  }
});

test("/cv remains outside the four-route HTML sitemap", () => {
  const sitemap = read("src/app/sitemap.ts");
  const routeList =
    sitemap.match(/const routes = \[(?<routes>[\s\S]*?)\] as const/)?.groups
      ?.routes ?? "";
  const routes = [...routeList.matchAll(/"([^"]+)"/g)].map((match) => match[1]);

  assert.deepEqual(routes, [
    "/",
    "/projects/guitarsense",
    "/projects/nexora",
    "/projects/grade-watcher",
  ]);
  assert.doesNotMatch(sitemap, /["']\/cv["']/);
});
