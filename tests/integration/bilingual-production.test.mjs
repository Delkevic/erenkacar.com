import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { inspectHtml } from "../helpers/english-output.mjs";
import { absolutePage, assertPairSeo, assertSwitcher, decodeText, linksIn, metadataValue, normalizeOriginRoot, pagePairs, parseAttributes, productionOrigin, switcherIn } from "../helpers/bilingual-output.mjs";
import { loadSource } from "../helpers/load-source.mjs";

const origin = process.env.PORTFOLIO_TEST_ORIGIN ?? "http://127.0.0.1:3100";
const { turkish } = loadSource("src/i18n/tr.ts");
const baseline = JSON.parse(readFileSync(new URL("../fixtures/english-baseline.json", import.meta.url), "utf8"));
const pages = {};
for (const pair of pagePairs) for (const locale of ["en", "tr"]) {
  const response = await fetch(`${origin}${pair[locale]}`, { redirect: "manual" });
  pages[pair[locale]] = { status: response.status, ...inspectHtml(await response.text()) };
}

for (const pair of pagePairs) for (const locale of ["en", "tr"]) {
  const path = pair[locale];
  test(`${path} returns 200 with its language, pair SEO and ordinary switch links`, () => {
    const page = pages[path];
    assert.equal(page.status, 200);
    assertPairSeo(page, pair, locale);
    assertSwitcher(page, pair, locale);
    assert.match(page.body, /<main\b[^>]*id="main-content"/);
    assert.match(page.body, /<footer\b/);
    assert.ok(!page.metadata.some((tag) => tag.name === "robots" && tag.content.includes("noindex")));
    if (locale === "tr") {
      assert.equal(page.title, pair.id === "home" ? turkish.metadata.homeTitle : `${pair.title} — Eren Kaçar`);
      assert.equal(metadataValue(page, "description"), pair.id === "home" ? turkish.metadata.description : turkish.metadata[pair.id].description);
      assert.match(page.body, /İçeriğe geç/);
      assert.match(page.body, /Eren Kaçar — Yazılım Mühendisi/);
      assert.doesNotMatch(page.body, /Software Engineer|Building end-to-end|Back to selected work|Download CV|View project/);
    }
  });

  test(`${path} follows its URL even with opposite-language preferences`, async () => {
    const other = locale === "en" ? "tr" : "en";
    const response = await fetch(`${origin}${path}`, { redirect: "manual", headers: { "Accept-Language": `${other}-${other === "tr" ? "TR" : "US"}`, Cookie: `NEXT_LOCALE=${other}` } });
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("location"), null);
    assert.equal(response.headers.get("set-cookie"), null);
    assert.equal(inspectHtml(await response.text()).lang, locale);
  });

  test(`${path} uses locale-aware internal links and unchanged shared destinations`, () => {
    const page = pages[path];
    const links = linksIn(page.body.replace(switcherIn(page.body), ""));
    const home = locale === "tr" ? "/tr" : "/";
    for (const link of links) {
      if (!link.href?.startsWith("/") || link.href.startsWith("/resume/")) continue;
      assert.ok(locale === "tr" ? link.href === "/tr" || link.href.startsWith("/tr#") || link.href.startsWith("/tr/projects/")
        : link.href === "/" || link.href.startsWith("/#") || link.href.startsWith("/projects/"), `${path}: ${link.href}`);
    }
    const header = page.body.match(/<header\b[^>]*>[\s\S]*?<\/header>/)[0];
    const headerLinks = linksIn(header.replace(switcherIn(header), ""));
    assert.equal(headerLinks[0].href, home);
    assert.deepEqual(headerLinks.slice(1).map((link) => link.href), ["work", "experience", "skills", "about", "contact"].map((anchor) => `${home}#${anchor}`));
    for (const url of ["https://github.com/Delkevic", "https://www.linkedin.com/in/eren-kacar-7bb143251/", "mailto:erenkacr@gmail.com"]) assert.ok(links.some((link) => link.href === url));
    if (pair.id === "home") {
      const cvTags = [...page.body.matchAll(/<a\b[^>]*href="\/resume\/eren-kacar-resume\.pdf"[^>]*>/g)].map(([tag]) => tag);
      assert.equal(cvTags.length, 2);
      for (const tag of cvTags) assert.match(tag, /\bdownload(?:=|\s|>)/);
    } else assert.ok(links.some((link) => link.href === `${home}#work`));
    for (const [, src] of page.body.matchAll(/<img\b[^>]*src="([^"]+)"/g)) assert.doesNotMatch(src, /(?:%2Ftr%2F|\/tr\/images)/i);
  });
}

test("sitemap has exactly eight unique HTML pages with reciprocal language references", async () => {
  const response = await fetch(`${origin}/sitemap.xml`);
  assert.equal(response.status, 200);
  const xml = await response.text();
  const rows = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, body]) => ({ url: normalizeOriginRoot(body.match(/<loc>(.*?)<\/loc>/)[1]), links: [...body.matchAll(/<xhtml:link\b[^>]*\/>/g)].map(([tag]) => parseAttributes(tag)) }));
  assert.equal(rows.length, 8);
  assert.equal(new Set(rows.map((row) => row.url)).size, 8);
  assert.deepEqual(rows.map((row) => row.url).sort(), pagePairs.flatMap((pair) => [absolutePage(pair.en), absolutePage(pair.tr)]).sort());
  assert.doesNotMatch(xml, /<lastmod>|\/cv<|\/resume\/|\/images\/|\/social\/|opengraph|404/);
  for (const row of rows) {
    const pair = pagePairs.find((candidate) => [absolutePage(candidate.en), absolutePage(candidate.tr)].includes(row.url));
    assert.equal(row.links.length, 3);
    assert.deepEqual(Object.fromEntries(row.links.map((link) => [link.hreflang, normalizeOriginRoot(link.href)])), { en: absolutePage(pair.en), tr: absolutePage(pair.tr), "x-default": absolutePage(pair.en) });
    assert.ok(row.links.every((link) => link.rel === "alternate"));
  }
});

test("Turkish JSON-LD preserves person identity with localized labels and website URL", () => {
  assert.deepEqual(pages["/"].jsonLd, baseline.pages["/"].jsonLd);
  const before = baseline.pages["/"].jsonLd[0];
  const actual = pages["/tr"].jsonLd[0];
  assert.equal(actual["@context"], before["@context"]);
  assert.deepEqual(actual["@graph"][0], { ...before["@graph"][0], jobTitle: turkish.metadata.personJobTitle, alumniOf: { "@type": "CollegeOrUniversity", name: turkish.metadata.alumni } });
  assert.deepEqual(actual["@graph"][1], { ...before["@graph"][1], url: `${productionOrigin}/tr`, inLanguage: "tr" });
});

test("both GuitarSense pages retain approved figures and explicit measurement qualification", () => {
  for (const locale of ["en", "tr"]) {
    const body = decodeText(pages[pagePairs[1][locale]].body);
    for (const term of ["6 ms", "46 ms", "64", "ASIO", "WASAPI", "TÜBİTAK 2209-A", "Windows beta"]) assert.ok(body.includes(term), term);
    assert.match(body, locale === "en" ? /backend-reported values, not independently measured end-to-end round-trip latency/ : /backend tarafından bildirilmiştir; bağımsız olarak ölçülmüş uçtan uca gidiş-dönüş gecikmesi değildir/);
    assert.doesNotMatch(body, /YouTube|VenoTune|stem separation|AI import|runtime.pack|rollback|pitch.match|scoring internals|timing tolerances|yapay zek[âa].*içe akt|kanal ayrıştırma|kök ayırma|geri alma iç|perde eşleştirme|puanlama algoritm|zamanlama tolerans|önbellek mekanizm/i);
  }
});

test("dedicated Turkish previews are 1200 by 630 PNGs referenced by Turkish metadata", async () => {
  const images = new Map();
  for (const key of ["home", "twitter", "guitarsense", "nexora", "grade-watcher"]) {
    const path = `/social/tr/${key}`;
    const response = await fetch(`${origin}${path}`);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type"), /^image\/png/);
    const bytes = Buffer.from(await response.arrayBuffer());
    assert.equal(bytes.subarray(1, 4).toString(), "PNG");
    assert.equal(bytes.readUInt32BE(16), 1200);
    assert.equal(bytes.readUInt32BE(20), 630);
    images.set(key, bytes);
  }
  assert.ok(images.get("home").equals(images.get("twitter")));
  for (const pair of pagePairs) {
    assert.equal(metadataValue(pages[pair.tr], "og:image"), `${productionOrigin}/social/tr/${pair.id}`);
    assert.equal(metadataValue(pages[pair.tr], "twitter:image"), `${productionOrigin}/social/tr/${pair.id === "home" ? "twitter" : pair.id}`);
  }
});

test("unknown URLs return noindex 404 content consistent with their declared language", async () => {
  for (const path of ["/phase-2b1-missing", "/tr/phase-2b1-missing", "/tr/projects/unknown"]) {
    const response = await fetch(`${origin}${path}`, { redirect: "manual" });
    assert.equal(response.status, 404, path);
    const page = inspectHtml(await response.text());
    assert.ok(page.metadata.some((tag) => tag.name === "robots" && tag.content.includes("noindex")));
    if (page.lang === "tr") {
      assert.match(page.body, /Sayfa bulunamadı/);
      assert.ok(linksIn(page.body).some((link) => link.href === "/tr"));
    } else {
      assert.equal(page.lang, "en");
      assert.match(page.body, /Page not found/);
      assert.doesNotMatch(page.body, /Sayfa bulunamadı/);
    }
  }
});
