import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { captureEnglishOutput, englishPaths, inspectHtml, sha256 } from "../helpers/english-output.mjs";
import { assertEnglishPreservation, assertPairSeo, assertSwitcher, pagePairs } from "../helpers/bilingual-output.mjs";

const baseline = JSON.parse(readFileSync(new URL("../fixtures/english-baseline.json", import.meta.url), "utf8"));
const origin = process.env.PORTFOLIO_TEST_ORIGIN ?? "http://127.0.0.1:3100";
const actual = await captureEnglishOutput(origin);

for (const [index, path] of englishPaths.entries()) {
  test(`${path} preserves English output except the authorized switcher and bilingual SEO`, () => {
    assertEnglishPreservation(actual.pages[path], baseline.pages[path], path);
    assert.equal(actual.pages[path].status, 200);
    assertPairSeo(actual.pages[path], pagePairs[index], "en");
    assertSwitcher(actual.pages[path], pagePairs[index], "en");
  });
  test(`${path} ignores browser-language and remembered-locale preferences`, async () => {
    const response = await fetch(`${origin}${path}`, {
      redirect: "manual",
      headers: { "Accept-Language": "tr-TR,tr;q=0.9", Cookie: "NEXT_LOCALE=tr" },
    });
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("location"), null);
    assert.equal(response.headers.get("set-cookie"), null);
    assert.deepEqual(inspectHtml(await response.text()), inspectHtml(await (await fetch(`${origin}${path}`)).text()));
  });
}

test("unknown English routes retain the original recovery document and real 404", () => {
  assertEnglishPreservation(actual.pages["/phase-2a-missing"], baseline.pages["/phase-2a-missing"], "/phase-2a-missing");
  assert.equal(actual.pages["/phase-2a-missing"].status, 404);
  assert.ok(actual.pages["/phase-2a-missing"].metadata.some((tag) => tag.name === "robots" && tag.content.includes("noindex")));
});

test("all four authorized Turkish routes return complete localized documents", async () => {
  for (const pair of pagePairs) {
    const response = await fetch(`${origin}${pair.tr}`, { redirect: "manual" });
    assert.equal(response.status, 200, pair.tr);
    const html = inspectHtml(await response.text());
    assertPairSeo(html, pair, "tr");
    assertSwitcher(html, pair, "tr");
    assert.match(html.body, /Yazılım Mühendisi/);
  }
});

test("robots and manifest remain byte-for-byte equivalent; sitemap becomes bilingual", () => {
  for (const path of ["/robots.txt", "/manifest.webmanifest"]) assert.deepEqual(actual.documents[path], baseline.documents[path]);
  assert.equal(actual.documents["/sitemap.xml"].status, 200);
  assert.equal([...actual.documents["/sitemap.xml"].body.matchAll(/<loc>/g)].length, 8);
});

test("CV response and every approved public screenshot retain their bytes", async () => {
  assert.deepEqual(actual.cv, baseline.cv);
  assert.deepEqual(actual.assets, baseline.assets);
  for (const [path, hash] of Object.entries(baseline.assets)) {
    const response = await fetch(`${origin}${path}`, { redirect: "manual" });
    assert.equal(response.status, 200, path);
    assert.equal(sha256(Buffer.from(await response.arrayBuffer())), hash, path);
  }
});

test("existing social-preview and icon URLs retain their PNG/SVG output", () => {
  assert.deepEqual(actual.social, baseline.social);
  for (const response of Object.values(actual.social)) assert.equal(response.status, 200);
});

test("the shared stylesheet remains unchanged", () => {
  assert.equal(actual.cssHash, baseline.cssHash);
});

test("Next Image requests used by existing pages still succeed", async () => {
  const imagePaths = new Set(Object.values(actual.pages).flatMap(({ body }) =>
    [...body.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(([, src]) => src.replaceAll("&amp;", "&")),
  ));
  assert.ok(imagePaths.size >= 7);
  for (const path of imagePaths) {
    const response = await fetch(`${origin}${path}`);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type"), /^image\//, path);
  }
});
