import { loadSource, renderSource } from "./helpers/load-source.mjs";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

const projectRoutes = [
  {
    name: "GuitarSense",
    path: "/projects/guitarsense",
    source: "src/app/(en)/projects/guitarsense/page.tsx",
    socialImage: "src/app/projects/guitarsense/opengraph-image.tsx",
  },
  {
    name: "Nexora",
    path: "/projects/nexora",
    source: "src/app/(en)/projects/nexora/page.tsx",
    socialImage: "src/app/projects/nexora/opengraph-image.tsx",
  },
  {
    name: "Grade Watcher",
    path: "/projects/grade-watcher",
    source: "src/app/(en)/projects/grade-watcher/page.tsx",
    socialImage: "src/app/projects/grade-watcher/opengraph-image.tsx",
  },
];

test("root metadata defines the reviewed production identity and sharing defaults", () => {
  const layout = read("src/app/(en)/layout.tsx");
  const config = read("src/config/site.ts");
  const { english } = loadSource("src/i18n/en.ts");
  const metadata = loadSource("src/i18n/metadata.ts").createRootMetadata(english);

  assert.match(config, /siteUrl:\s*"https:\/\/www\.erenkacar\.com"/);
  assert.match(config, /displayDomain:\s*"erenkacar\.com"/);
  assert.doesNotMatch(config, /domain:\s*"https:\/\/erenkacar\.com"/);
  assert.match(
    config,
    /Software engineer building end-to-end desktop, web and real-time products, with work spanning product architecture, automation, audio systems, performance and security\./,
  );
  assert.match(layout, /createRootMetadata\(english\)/);
  assert.equal(metadata.metadataBase.href, "https://www.erenkacar.com/");
  assert.equal(metadata.openGraph.url, "https://www.erenkacar.com");
  assert.deepEqual(metadata.title, { default: "Eren Kaçar — Software Engineer", template: "%s — Eren Kaçar" });
  assert.deepEqual(metadata.authors, [{ name: "Eren Kaçar", url: "https://www.erenkacar.com" }]);
  assert.equal(metadata.creator, "Eren Kaçar");
  assert.equal(metadata.applicationName, "Eren Kaçar");
  assert.equal(metadata.category, "technology");
  assert.equal(metadata.alternates.canonical, "https://www.erenkacar.com/");
  assert.equal(metadata.openGraph.locale, "en_US");
  assert.equal(metadata.twitter.card, "summary_large_image");
  assert.deepEqual(metadata.robots, { index: true, follow: true });
});

test("project metadata uses short templated titles and route-specific canonicals", () => {
  for (const route of projectRoutes) {
    const metadata = loadSource(route.source).metadata;
    assert.equal(metadata.title, route.name);
    assert.equal(metadata.alternates.canonical, `https://www.erenkacar.com${route.path}`);
    assert.equal(typeof metadata.title, "string", "Project title must remain templated, rather than absolute");
  }
});

test("homepage renders safe Person and WebSite JSON-LD from centralized config", () => {
  const home = read("src/components/views/home.tsx");

  assert.match(home, /type="application\/ld\+json"/);
  assert.match(home, /"@type":\s*"Person"/);
  assert.match(home, /"@type":\s*"WebSite"/);
  const data = JSON.parse(renderSource("src/components/views/home.tsx", "HomeView").match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1]);
  assert.equal(data["@graph"][0].jobTitle, "Software Engineer");
  assert.match(home, /email:\s*siteConfig\.contactUrl/);
  assert.match(home, /siteConfig\.githubUrl/);
  assert.match(home, /siteConfig\.linkedinUrl/);
  assert.equal(data["@graph"][0].url, "https://www.erenkacar.com");
  assert.equal(data["@graph"][1].url, "https://www.erenkacar.com");
  assert.equal(data["@graph"][0].alumniOf.name, "Trakya University");
  assert.match(home, /\.replace\(\/<\/g,\s*"\\\\u003c"\)/);
  assert.doesNotMatch(home, /SearchAction|telephone|address|salary/);
});

test("App Router icon and social image conventions cover the site and projects", () => {
  for (const path of [
    "src/app/icon.svg",
    "src/app/apple-icon.tsx",
    "src/app/opengraph-image.tsx",
    "src/app/twitter-image.tsx",
    "src/components/metadata/social-card.tsx",
    ...projectRoutes.map((route) => route.socialImage),
  ]) {
    assert.ok(existsSync(path), `${path} should exist`);
  }

  const icon = read("src/app/icon.svg");
  const appleIcon = read("src/app/apple-icon.tsx");
  const socialCard = read("src/components/metadata/social-card.tsx");
  const rootSocial = loadSource("src/app/opengraph-image.tsx");
  const { english } = loadSource("src/i18n/en.ts");

  assert.match(icon, /viewBox="0 0 40 46"/);
  assert.match(icon, /data-initials="EK"/);
  assert.match(appleIcon, /width:\s*180/);
  assert.match(appleIcon, /height:\s*180/);
  assert.match(socialCard, /width:\s*1200/);
  assert.match(socialCard, /height:\s*630/);
  assert.equal(english.social.supportingLine, "Desktop · Web · Real-time systems");
  assert.match(socialCard, /copy\.supportingLine/);
  assert.match(socialCard, /\{siteConfig\.displayDomain\}/);
  assert.doesNotMatch(socialCard, />www\.erenkacar\.com</);
  assert.match(rootSocial.alt, /Eren Kaçar/);
  assert.match(rootSocial.alt, /Software Engineer/);

  for (const route of projectRoutes) {
    const socialImage = loadSource(route.socialImage);
    assert.match(socialImage.alt, new RegExp(route.name));
  }
});

test("generated metadata images use build-safe vector initials", () => {
  const generatedImages = [
    read("src/app/apple-icon.tsx"),
    read("src/components/metadata/social-card.tsx"),
  ].join("\n");

  assert.doesNotMatch(generatedImages, /<text\b/);
  assert.match(generatedImages, /data-initials="EK"/);
});

test("social cards reserve a stable content region for long project labels", () => {
  const socialCard = read("src/components/metadata/social-card.tsx");

  assert.match(
    socialCard,
    /data-social-card-content[\s\S]*?position:\s*"absolute"/,
  );
});

test("sitemap, robots, and manifest expose only the intended production surface", () => {
  const sitemap = read("src/app/sitemap.ts");
  const robots = read("src/app/robots.ts");
  const manifest = read("src/app/manifest.ts");
  const entries = loadSource("src/app/sitemap.ts").default();
  const routes = entries.map((entry) => new URL(entry.url).pathname).sort();

  assert.deepEqual(routes, [
    "/",
    "/projects/guitarsense",
    "/projects/nexora",
    "/projects/grade-watcher",
    "/tr",
    "/tr/projects/guitarsense",
    "/tr/projects/nexora",
    "/tr/projects/grade-watcher",
  ].sort());
  assert.ok(entries.every((entry) => new URL(entry.url).origin === "https://www.erenkacar.com"));
  assert.doesNotMatch(sitemap, /resume|images|lastModified/);
  assert.match(robots, /allow:\s*"\/"/);
  assert.match(robots, /`\$\{siteConfig\.siteUrl\}\/sitemap\.xml`/);
  assert.equal(loadSource("src/app/manifest.ts").default().name, "Eren Kaçar — Software Engineer");
  assert.match(manifest, /short_name:\s*siteConfig\.name/);
  assert.match(manifest, /background_color:\s*"#0a1017"/);
  assert.match(manifest, /theme_color:\s*"#70b6ab"/);
  assert.match(manifest, /start_url:\s*"\/"/);
  assert.match(manifest, /display:\s*"standalone"/);
});

test("the custom server-rendered not-found page offers real recovery links", () => {
  const path = "src/components/views/not-found.tsx";
  assert.ok(existsSync(path), "Root not-found page should exist");

  const source = read(path);
  const rendered = renderSource(path, "NotFoundView");
  assert.match(source, /<SiteHeader dictionary=\{dictionary\} page="home" \/>/);
  assert.match(source, /<SiteFooter dictionary=\{dictionary\} \/>/);
  assert.match(rendered, /<h1[^>]*>[\s\S]*404[\s\S]*Page not found[\s\S]*<\/h1>/);
  assert.match(rendered, /href="\/"/);
  assert.match(rendered, /href="\/#work"/);
  assert.doesNotMatch(source, /["']use client["']|href=["']#["']/);
});

test("launch assets contain one configured résumé and no stale public references", () => {
  const config = read("src/config/site.ts");
  const publicSourceFiles = [
    ...readdirSync("src/app", { recursive: true, withFileTypes: true }),
  ]
    .filter((entry) => entry.isFile())
    .map((entry) => readFileSync(`${entry.parentPath}/${entry.name}`, "utf8"))
    .join("\n");
  const resumeFiles = readdirSync("public/resume").filter((file) =>
    file.toLowerCase().endsWith(".pdf"),
  );
  const imageRegistries = [
    read("src/data/guitarsense-images.ts"),
    read("src/data/nexora-images.ts"),
  ].join("\n");

  assert.deepEqual(resumeFiles, ["eren-kacar-resume.pdf"]);
  assert.match(config, /resumePath:\s*"\/resume\/eren-kacar-resume\.pdf"/);
  assert.ok(existsSync("public/resume/eren-kacar-resume.pdf"));
  assert.doesNotMatch(
    publicSourceFiles,
    /in review|coming soon|foundation|temporary|placeholder|replace before launch|\bTODO\b|\bTBD\b/i,
  );
  assert.doesNotMatch(
    publicSourceFiles,
    /practice-summary|ana-ekran\.jpg|feed\.jpg|mesaj\.jpg|resume-eski/i,
  );
  assert.doesNotMatch(imageRegistries, /replaceBeforeLaunch:\s*true/);
  assert.doesNotMatch(publicSourceFiles, /href=["']#["']/);
  assert.doesNotMatch(publicSourceFiles, /["']use client["']/);
});
