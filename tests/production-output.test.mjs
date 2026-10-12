import assert from "node:assert/strict";
import test from "node:test";
import { inspectHtml } from "./helpers/english-output.mjs";

test("production inspection recognizes React's hrefLang spelling without changing metadata values", () => {
  const page = inspectHtml('<html lang="tr"><head><meta charSet="utf-8"/><link rel="alternate" hrefLang="tr" href="https://www.erenkacar.com/tr"/></head><body><main>Türkçe</main></body></html>');
  assert.equal(page.metadata.find((tag) => tag.rel === "alternate").hreflang, "tr");
  assert.equal(page.metadata.find((tag) => tag.rel === "alternate").href, "https://www.erenkacar.com/tr");
  assert.equal(page.metadata[0].charSet, "utf-8");
  assert.equal(page.lang, "tr");
  assert.equal(page.body, "<main>Türkçe</main>");
});
