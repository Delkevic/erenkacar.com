import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const read = (path) => readFileSync(path, "utf8");
const loadData = (path) => {
  const { outputText } = ts.transpileModule(read(path), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  const context = {
    exports: {},
    require: (name) => {
      assert.equal(name, "@/data/nexora-images");
      return loadData("src/data/nexora-images.ts");
    },
  };
  runInNewContext(outputText, context, { filename: path });
  return context.exports;
};

const approvedTechnologies = [
  "Electron", "React", "TypeScript", "Python", "ZMQ", "PortAudio", "ASIO", "WASAPI",
];
const forbiddenDetails = /AI Runtime Pack|AI Practice Import|Quick Import|YouTube|stem separation|media import|import workflow|runtime (?:separation|pack|installation|resolution|state|readiness|responsibilit)|separated runtime|core, live|rollback|staging|path (?:validation|containment)|containment checks|fail.closed|child.process|pitch.aware|pitch detection|note.match|scor(?:e|ing)|streak|tempo|offset|capability caching|duplicate.request|throttl|event.driven|transform.focused|React Renderer|Electron Main Process|ZMQ IPC/i;

test("GuitarSense stays the flagship with approved homepage evidence and technologies", () => {
  const { featuredProject } = loadData("src/data/projects.ts");
  assert.equal(featuredProject.name, "GuitarSense");
  assert.equal(featuredProject.featured, true);
  assert.equal(featuredProject.href, "/projects/guitarsense");
  assert.deepEqual(Array.from(featuredProject.tags), approvedTechnologies.slice(0, 6));
  assert.deepEqual(Array.from(featuredProject.proofPoints), [
    "TÜBİTAK 2209-A supported", "Packaged Windows beta", "Real-time audio processing",
  ]);
  assert.match(featuredProject.summary, /guitar effects and interactive practice tools/);
  assert.doesNotMatch(featuredProject.summary, forbiddenDetails);
  assert.doesNotMatch(read("src/components/sections/featured-project.tsx"), /runtime safety|runtime architecture/i);
});

test("GuitarSense retains three capabilities, four engineering highlights and only verified results", () => {
  const { guitarSenseCaseStudy: content } = loadData("src/data/case-study.ts");
  assert.equal(content.capabilities.length, 3);
  assert.equal(content.highlights.length, 4);
  assert.deepEqual(Array.from(content.technologies), approvedTechnologies);
  assert.deepEqual(Array.from(content.facts), [
    "Desktop application", "TÜBİTAK 2209-A supported", "Windows beta", "Electron + Python",
  ]);
  assert.equal(content.results.length, 3);
  assert.match(content.results.join(" "), /TÜBİTAK 2209-A support/);
  assert.match(content.results.join(" "), /Packaged Windows beta/);
  const performance = content.highlights.find((item) => item.title === "Real-time audio performance");
  assert.ok(performance);
  for (const evidence of [performance.body, content.results.join(" ")]) {
    assert.match(evidence, /64-sample/);
    assert.match(evidence, /6 ms with ASIO/);
    assert.match(evidence, /46 ms with WASAPI/);
    assert.match(evidence, /backend-reported/i);
  }
  assert.match(performance.qualification, /backend-reported/);
  assert.match(performance.qualification, /not independently measured end-to-end round-trip latency/);
});

test("GuitarSense public copy, metadata and image descriptions omit unreleased implementation details", () => {
  const { featuredProject } = loadData("src/data/projects.ts");
  const publicSource = [
    JSON.stringify(featuredProject),
    read("src/data/case-study.ts"),
    read("src/data/guitarsense-images.ts"),
    read("src/app/projects/guitarsense/page.tsx"),
    read("src/app/projects/guitarsense/opengraph-image.tsx"),
    read("src/components/sections/featured-project.tsx"),
  ].join("\n");
  assert.doesNotMatch(publicSource, forbiddenDetails);
  assert.doesNotMatch(publicSource, /href=["']#["']|["']use client["']/);
  const page = read("src/app/projects/guitarsense/page.tsx");
  assert.match(page, /export default function GuitarSensePage/);
  assert.match(page, /canonical:\s*"\/projects\/guitarsense"/);
  assert.match(page, /guitarSenseCaseStudy\.technologies\.map/);
});

test("only approved GuitarSense screenshots remain public with valid references and unchanged binaries", () => {
  const { guitarSenseImages: images } = loadData("src/data/guitarsense-images.ts");
  const expectedHashes = {
    "library.png": "a5b19c1329ae0bf78b727302b412ee40236f3c8cf6632b86ce9493f97264dfde",
    "practice-view.png": "5021b885e055a3cd11f9238d8f53eb9f8b3df6ceaca20ed868f359594f269d64",
    "preset-editor.png": "fc3c1244830b809c14d78024ee010f3732bc56bd5e4ecedc63a9b73c8aa3174d",
  };
  assert.deepEqual(readdirSync("public/images/projects/guitarsense").sort(), Object.keys(expectedHashes).sort());
  assert.deepEqual(Object.keys(images).sort(), ["library", "practiceView", "presetEditor"].sort());
  for (const image of Object.values(images)) {
    assert.ok(existsSync(`public${image.src}`), image.src);
    const binary = readFileSync(`public${image.src}`);
    assert.equal(binary.readUInt32BE(16), image.width);
    assert.equal(binary.readUInt32BE(20), image.height);
    assert.equal(createHash("sha256").update(binary).digest("hex"), expectedHashes[image.src.split("/").at(-1)]);
    assert.ok(image.alt.trim());
  }
  const source = [read("src/components/sections/featured-project.tsx"), read("src/app/projects/guitarsense/page.tsx")].join("\n");
  for (const [, key] of source.matchAll(/guitarSenseImages\.(\w+)/g)) {
    assert.ok(images[key], `${key} must be registered`);
  }
  for (const file of ["import-workflow.png", "audio-settings.png"]) {
    assert.equal(existsSync(`public/images/projects/guitarsense/${file}`), false);
  }
});
