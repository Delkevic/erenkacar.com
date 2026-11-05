import assert from "node:assert/strict";
import test from "node:test";
import { inspectHtml } from "./helpers/english-output.mjs";

test("production inspection ignores the empty Analytics Suspense bailout marker while preserving visible content", () => {
  const body = '<main>Portfolio</main><template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"></template>';
  assert.equal(inspectHtml(`<html><head></head><body>${body}</body></html>`).body, "<main>Portfolio</main>");
});

test("production inspection recognizes React's hrefLang spelling without changing metadata values", () => {
  const page = inspectHtml('<html lang="tr"><head><meta charSet="utf-8"/><link rel="alternate" hrefLang="tr" href="https://www.erenkacar.com/tr"/></head><body><main>Türkçe</main></body></html>');
  assert.equal(page.metadata.find((tag) => tag.rel === "alternate").hreflang, "tr");
  assert.equal(page.metadata.find((tag) => tag.rel === "alternate").href, "https://www.erenkacar.com/tr");
  assert.equal(page.metadata[0].charSet, "utf-8");
  assert.equal(page.lang, "tr");
  assert.equal(page.body, "<main>Türkçe</main>");
});
