import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

test("the configured English résumé is a real public PDF", () => {
  const config = read("src/config/site.ts");
  const resumePath = "public/resume/eren-kacar-resume.pdf";

  assert.match(config, /resumePath:\s*"\/resume\/eren-kacar-resume\.pdf"/);
  assert.ok(existsSync(resumePath), "Configured résumé PDF should exist");
  assert.equal(readFileSync(resumePath).subarray(0, 5).toString(), "%PDF-");
});

test("hero, contact, and footer expose centralized real profile actions", () => {
  const config = read("src/config/site.ts");
  const hero = read("src/components/sections/hero.tsx");
  const contact = read("src/components/sections/contact.tsx");
  const footer = read("src/components/layout/site-footer.tsx");
  const externalLink = read("src/components/ui/external-link.tsx");
  const publicActions = [hero, contact, footer].join("\n");
  const contactMailAnchors = [...contact.matchAll(/<a\b[\s\S]*?<\/a>/g)]
    .map(([anchor]) => anchor)
    .filter((anchor) => anchor.includes("href={siteConfig.contactUrl}"));

  assert.match(config, /githubUrl:\s*"https:\/\/github\.com\/Delkevic"/);
  assert.match(config, /email:\s*"erenkacr@gmail\.com"/);
  assert.match(config, /contactUrl:\s*"mailto:erenkacr@gmail\.com"/);
  assert.match(
    config,
    /resumePath:\s*"\/resume\/eren-kacar-resume\.pdf"/,
  );
  assert.match(hero, /siteConfig\.githubUrl/);
  assert.match(hero, /siteConfig\.linkedinUrl/);
  assert.match(hero, /siteConfig\.resumePath/);
  assert.match(hero, />\s*Download CV\s*</);
  assert.match(contact, />\s*Download CV\s*</);
  assert.match(
    publicActions,
    /aria-label="Download Eren Kaçar’s CV as PDF"/,
  );
  assert.doesNotMatch(publicActions, /Download résumé/);

  for (const destination of [
    "siteConfig.contactUrl",
    "siteConfig.githubUrl",
    "siteConfig.linkedinUrl",
    "siteConfig.resumePath",
  ]) {
    assert.match(contact, new RegExp(destination.replace(".", "\\.")));
  }
  assert.equal(
    contactMailAnchors.length,
    2,
    "Visible Contact email and Email me should both use the centralized mailto",
  );
  for (const anchor of contactMailAnchors) {
    assert.doesNotMatch(anchor, /\btarget\s*=/);
    assert.doesNotMatch(anchor, /\bdownload\b/);
    assert.doesNotMatch(anchor, /\bonClick\s*=/);
  }
  assert.match(
    contactMailAnchors.find((anchor) => anchor.includes("siteConfig.email")) ?? "",
    /aria-label="Email Eren Kaçar"/,
  );
  assert.match(contact, /siteConfig\.email/);
  assert.match(footer, /siteConfig\.githubUrl/);
  assert.match(footer, /siteConfig\.linkedinUrl/);
  assert.match(footer, /<a href=\{siteConfig\.contactUrl\}>Email<\/a>/);
  assert.match(externalLink, /target="_blank"/);
  assert.match(externalLink, /rel="noreferrer"/);
  assert.doesNotMatch(publicActions, /href=["']#["']/);
});

test("hero profile links use a dedicated larger secondary-action treatment", () => {
  const hero = read("src/components/sections/hero.tsx");
  const styles = read("src/app/globals.css");
  const profileActionRule =
    styles.match(/\.profile-links a\s*\{(?<rule>[^}]*)\}/)?.groups?.rule ?? "";

  assert.match(hero, /className="profile-links"/);
  assert.match(profileActionRule, /min-height:/);
  assert.match(profileActionRule, /border:/);
  assert.match(profileActionRule, /border-radius:\s*var\(--radius-pill\)/);
  assert.match(profileActionRule, /font-family:\s*var\(--font-sans\)/);
  assert.match(profileActionRule, /font-size:\s*(?:0\.9[5-9]|1(?:\.0+)?)rem/);
  assert.match(profileActionRule, /padding:/);
});

test("Grade Watcher is a real homepage project with an accessible flow", () => {
  const projects = read("src/data/projects.ts");
  const projectCard = read("src/components/ui/project-card.tsx");
  const flow = read("src/components/ui/automation-flow.tsx");

  assert.match(projects, /name:\s*"Grade Watcher"/);
  assert.match(projects, /href:\s*"\/projects\/grade-watcher"/);
  assert.match(projects, /visual:\s*"automation-flow"/);
  assert.match(projects, /Result change detection/);
  assert.match(projects, /Duplicate-safe notifications/);
  assert.match(projectCard, /AutomationFlow/);
  assert.match(projectCard, /View project/);
  assert.match(flow, /<ol/);
  assert.match(flow, /aria-hidden="true"/);
  assert.doesNotMatch(flow, /terminal|console|command/i);
});

test("the Grade Watcher route presents the verified private automation design", () => {
  const routePath = "src/app/projects/grade-watcher/page.tsx";
  const dataPath = "src/data/grade-watcher.ts";

  assert.ok(existsSync(routePath), "Grade Watcher route should exist");
  assert.ok(existsSync(dataPath), "Grade Watcher case-study data should exist");

  const page = read(routePath);
  const data = read(dataPath);
  const source = `${page}\n${data}`;

  assert.match(page, /Grade Watcher — Eren Kaçar/);
  assert.match(page, /\/projects\/grade-watcher/);
  assert.match(page, /AutomationFlow/);
  assert.doesNotMatch(page, /images:\s*\[/);
  for (const heading of [
    "Overview",
    "My role",
    "How it works",
    "Engineering decisions",
    "Current status",
  ]) {
    assert.match(page, new RegExp(`>${heading}<`));
  }
  for (const stage of [
    "Local runner",
    "Playwright browser",
    "Authenticated academic portal",
    "Result parser",
    "Snapshot comparison",
    "Telegram Bot API",
  ]) {
    assert.match(data, new RegExp(stage));
  }
  assert.doesNotMatch(source, /captcha|repository link|github\.com|fake terminal/i);
  assert.doesNotMatch(source, /["']use client["']/);
});

test("Practice Summary is fully removed without losing practice feedback copy", () => {
  const registry = read("src/data/guitarsense-images.ts");
  const page = read("src/app/projects/guitarsense/page.tsx");
  const content = read("src/data/case-study.ts");
  const readme = read("README.md");

  assert.doesNotMatch(registry, /practiceSummary|practice-summary\.png/i);
  assert.doesNotMatch(page, /practiceSummary|practice-summary\.png/i);
  assert.doesNotMatch(readme, /Practice Summary/i);
  assert.match(content, /title:\s*"Practice feedback"/);
  assert.match(content, /accuracy, score and streak tracking/);
  assert.doesNotMatch(registry, /replaceBeforeLaunch:\s*true/);
  assert.equal(existsSync("public/images/projects/guitarsense/practice-summary.png"), false);
});

test("the sprint adds no client boundary or dependency", () => {
  const files = [
    "src/app/projects/grade-watcher/page.tsx",
    "src/components/ui/automation-flow.tsx",
    "src/components/ui/external-link.tsx",
    "src/components/sections/hero.tsx",
    "src/components/sections/contact.tsx",
    "src/components/layout/site-footer.tsx",
  ];
  const source = files.filter(existsSync).map(read).join("\n");

  assert.doesNotMatch(source, /["']use client["']/);
  assert.doesNotMatch(read("package.json"), /lucide|react-icons|heroicons/);
});
