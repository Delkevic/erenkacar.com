import assert from "node:assert/strict";

export const productionOrigin = "https://www.erenkacar.com";
export const pagePairs = [
  { id: "home", en: "/", tr: "/tr", title: "Eren Kaçar" },
  { id: "guitarsense", en: "/projects/guitarsense", tr: "/tr/projects/guitarsense", title: "GuitarSense" },
  { id: "nexora", en: "/projects/nexora", tr: "/tr/projects/nexora", title: "Nexora" },
  { id: "grade-watcher", en: "/projects/grade-watcher", tr: "/tr/projects/grade-watcher", title: "Grade Watcher" },
];
export const decodeText = (value) => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&#39;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
export const parseAttributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key.toLowerCase(), decodeText(value)]));
export const linksIn = (html) => [...html.matchAll(/<a\b[^>]*>/g)].map(([tag]) => parseAttributes(tag));
export const switcherIn = (body) => body.match(/<nav\b(?=[^>]*\bclass="language-switcher")[^>]*>[\s\S]*?<\/nav>/)?.[0];
export const absolutePage = (path) => path === "/" ? productionOrigin : `${productionOrigin}${path}`;
export const normalizeOriginRoot = (url) => url === `${productionOrigin}/` ? productionOrigin : url;
export const metadataValue = (page, name) => page.metadata.find((tag) => tag.property === name || tag.name === name)?.content;

export function assertEnglishPreservation(page, baseline, path) {
  const switcher = switcherIn(page.body);
  assert.ok(switcher, `${path} must add the authorized language switcher`);
  const metadata = page.metadata.filter((tag) => {
    if (tag.element === "link" && tag.rel === "alternate" && ["en", "tr", "x-default"].includes(tag.hreflang)) return false;
    if (tag.property === "og:locale:alternate") return false;
    if (tag.property === "og:locale" && !baseline.metadata.some((original) => original.property === "og:locale")) return false;
    return true;
  });
  assert.deepEqual({ ...page, metadata, body: page.body.replace(switcher, "") }, baseline, `${path} may change only the switcher and separately verified bilingual metadata additions`);
}

export function assertPairSeo(page, pair, locale) {
  assert.equal(page.lang, locale);
  const canonical = page.metadata.filter((tag) => tag.rel === "canonical");
  assert.equal(canonical.length, 1);
  assert.equal(normalizeOriginRoot(canonical[0].href), absolutePage(pair[locale]));
  const alternates = page.metadata.filter((tag) => tag.rel === "alternate" && tag.hreflang);
  assert.equal(alternates.length, 3);
  assert.deepEqual(Object.fromEntries(alternates.map((tag) => [tag.hreflang, normalizeOriginRoot(tag.href)])), { en: absolutePage(pair.en), tr: absolutePage(pair.tr), "x-default": absolutePage(pair.en) });
  assert.equal(metadataValue(page, "og:locale"), locale === "en" ? "en_US" : "tr_TR");
  assert.deepEqual(page.metadata.filter((tag) => tag.property === "og:locale:alternate").map((tag) => tag.content), [locale === "en" ? "tr_TR" : "en_US"]);
  for (const tag of [...canonical, ...alternates]) assert.ok(tag.href.startsWith(productionOrigin));
  assert.ok(!page.metadata.some((tag) => tag.href?.includes("localhost") || tag.content?.includes("vercel.app")));
}

export function assertSwitcher(page, pair, locale) {
  const switcher = switcherIn(page.body);
  assert.ok(switcher);
  const attributes = parseAttributes(switcher.slice(0, switcher.indexOf(">") + 1));
  assert.equal(attributes["aria-label"], locale === "en" ? "Language selection" : "Dil seçimi");
  const links = linksIn(switcher);
  assert.equal(links.length, 2);
  assert.deepEqual(links.map((link) => link.href), [pair.en, pair.tr]);
  for (const [index, language] of ["en", "tr"].entries()) {
    assert.equal(links[index].lang, language);
    assert.equal(links[index].hreflang, language);
    assert.ok(links[index]["aria-label"]);
    assert.equal(links[index]["aria-current"], language === locale ? "page" : undefined);
  }
}
