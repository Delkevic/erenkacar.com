import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { publicAssetHashes, sha256 } from "./helpers/english-output.mjs";

const baseline = JSON.parse(readFileSync(new URL("./fixtures/english-baseline.json", import.meta.url), "utf8"));

test("all seven reviewed screenshots and the English CV retain baseline SHA-256 hashes", () => {
  assert.deepEqual(publicAssetHashes(), baseline.assets);
  assert.equal(Object.keys(baseline.assets).length, 8);
});

test("the existing global stylesheet retains its baseline bytes", () => {
  assert.equal(sha256(readFileSync("src/app/globals.css")), baseline.cssHash);
});
