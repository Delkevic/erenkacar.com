import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

const projectRoutes = [
  {
    name: "GuitarSense",
    path: "/projects/guitarsense",
    source: "src/app/projects/guitarsense/page.tsx",
    socialImage: "src/app/projects/guitarsense/opengraph-image.tsx",
  },
  {
    name: "Nexora",
    path: "/projects/nexora",
    source: "src/app/projects/nexora/page.tsx",
    socialImage: "src/app/projects/nexora/opengraph-image.tsx",
  },
  {
    name: "Grade Watcher",
    path: "/projects/grade-watcher",
    source: "src/app/projects/grade-watcher/page.tsx",
    socialImage: "src/app/projects/grade-watcher/opengraph-image.tsx",
  },
];

test("root metadata defines the reviewed production identity and sharing defaults", () => {
  const layout = read("src/app/layout.tsx");
  const config = read("src/config/site.ts");

  assert.match(config, /siteUrl:\s*"https:\/\/www\.erenkacar\.com"/);
  assert.match(config, /displayDomain:\s*"erenkacar\.com"/);
  assert.doesNotMatch(config, /domain:\s*"https:\/\/erenkacar\.com"/);
  assert.match(
    config,
    /Software engineer building end-to-end desktop, web and real-time products, with work spanning product architecture, automation, audio systems, performance and security\./,
  );
  assert.match(layout, /metadataBase:\s*new URL\(siteConfig\.siteUrl\)/);
  assert.match(layout, /url:\s*siteConfig\.siteUrl/);
  assert.match(layout, /default:\s*"Eren Kaçar — Software Engineer"/);
  assert.match(layout, /template:\s*"%s — Eren Kaçar"/);
  assert.match(layout, /authors:\s*\[\{\s*name:\s*siteConfig\.name/);
  assert.match(layout, /creator:\s*siteConfig\.name/);
  assert.match(layout, /applicationName:\s*siteConfig\.name/);
  assert.match(layout, /category:\s*"technology"/);
  assert.match(layout, /canonical:\s*"\/"/);
  assert.match(layout, /openGraph:\s*\{/);
  assert.match(layout, /locale:\s*"en_US"/);
  assert.match(layout, /twitter:\s*\{/);
  assert.match(layout, /card:\s*"summary_large_image"/);
  assert.match(layout, /robots:\s*\{[\s\S]*index:\s*true[\s\S]*follow:\s*true/);
});

test("project metadata uses short templated titles and route-specific canonicals", () => {
  for (const route of projectRoutes) {
    const source = read(route.source);
    const escapedName = route.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const escapedPath = route.path.replaceAll("/", "\\/");

    assert.match(
      source,
      new RegExp(
        `export const metadata:[\\s\\S]*?title:\\s*"${escapedName}"`,
      ),
    );
    assert.match(
      source,
      new RegExp(`canonical:\\s*"${escapedPath}"`),
    );
    assert.doesNotMatch(
      source,
      new RegExp(
        `absolute:\\s*"${escapedName} — Eren Kaçar(?: — Eren Kaçar)?"`,
      ),
    );
  }
});

test("homepage renders safe Person and WebSite JSON-LD from centralized config", () => {
  const home = read("src/app/page.tsx");

  assert.match(home, /type="application\/ld\+json"/);
  assert.match(home, /"@type":\s*"Person"/);
  assert.match(home, /"@type":\s*"WebSite"/);
  assert.match(home, /jobTitle:\s*"Software Engineer"/);
  assert.match(home, /email:\s*siteConfig\.contactUrl/);
  assert.match(home, /siteConfig\.githubUrl/);
  assert.match(home, /siteConfig\.linkedinUrl/);
  assert.equal(home.match(/url:\s*siteConfig\.siteUrl/g)?.length, 2);
  assert.match(home, /name:\s*"Trakya University"/);
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
  const rootSocial = read("src/app/opengraph-image.tsx");

  assert.match(icon, /viewBox="0 0 40 46"/);
  assert.match(icon, /data-initials="EK"/);
  assert.match(appleIcon, /width:\s*180/);
  assert.match(appleIcon, /height:\s*180/);
  assert.match(socialCard, /width:\s*1200/);
  assert.match(socialCard, /height:\s*630/);
  assert.match(socialCard, /Desktop · Web · Real-time systems/);
  assert.match(socialCard, /\{siteConfig\.displayDomain\}/);
  assert.doesNotMatch(socialCard, />www\.erenkacar\.com</);
  assert.match(rootSocial, /Eren Kaçar/);
  assert.match(rootSocial, /Software Engineer/);

  for (const route of projectRoutes) {
    const socialImage = read(route.socialImage);
    assert.match(socialImage, new RegExp(route.name));
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
  assert.match(sitemap, /siteConfig\.siteUrl/);
  assert.doesNotMatch(sitemap, /resume|images|lastModified/);
  assert.match(robots, /allow:\s*"\/"/);
  assert.match(robots, /`\$\{siteConfig\.siteUrl\}\/sitemap\.xml`/);
  assert.match(manifest, /name:\s*"Eren Kaçar — Software Engineer"/);
  assert.match(manifest, /short_name:\s*siteConfig\.name/);
  assert.match(manifest, /background_color:\s*"#0a1017"/);
  assert.match(manifest, /theme_color:\s*"#70b6ab"/);
  assert.match(manifest, /start_url:\s*"\/"/);
  assert.match(manifest, /display:\s*"standalone"/);
});

test("the custom server-rendered not-found page offers real recovery links", () => {
  const path = "src/app/not-found.tsx";
  assert.ok(existsSync(path), "Root not-found page should exist");

  const source = read(path);
  assert.match(source, /<SiteHeader \/>/);
  assert.match(source, /<SiteFooter \/>/);
  assert.match(source, /<h1[^>]*>[\s\S]*404[\s\S]*Page not found[\s\S]*<\/h1>/);
  assert.match(source, /href="\/"/);
  assert.match(source, /href="\/#work"/);
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
