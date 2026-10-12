import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";

export const englishPaths = [
  "/", "/projects/guitarsense", "/projects/nexora", "/projects/grade-watcher",
];

const unversioned = (value) => value.replace(
  /((?:opengraph-image|twitter-image|icon\.svg|apple-icon))\?[^"\s<>]*/g,
  "$1",
);
const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)]
    .map(([, key, value]) => [key.toLowerCase() === "hreflang" ? "hreflang" : key, unversioned(value)])
    .sort(([left], [right]) => left.localeCompare(right)),
);

export function inspectHtml(html) {
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/)?.[1] ?? "";
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)?.[1] ?? "";
  return {
    lang: html.match(/<html[^>]*lang="([^"]+)"/)?.[1] ?? null,
    title: head.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? null,
    metadata: [...head.matchAll(/<(meta|link)\b[^>]*>/g)]
      .map(([tag, element]) => ({ element, ...attributes(tag) }))
      .filter((tag) => tag.element === "meta" || ["canonical", "alternate", "icon", "apple-touch-icon", "manifest"].includes(tag.rel)),
    jsonLd: [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map(([, data]) => JSON.parse(data)),
    body: body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
      .replace(/<!--[^]*?-->/g, ""),
  };
}

export const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

export function publicAssetHashes() {
  return Object.fromEntries(readdirSync("public", { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.(png|pdf)$/.test(entry.name))
    .map((entry) => {
      const path = `${entry.parentPath}/${entry.name}`.replaceAll("\\", "/");
      const relative = path.slice(path.lastIndexOf("public/") + "public".length);
      return [relative, sha256(readFileSync(path))];
    }).sort(([left], [right]) => left.localeCompare(right)));
}

export async function captureEnglishOutput(origin) {
  const pages = {};
  for (const path of [...englishPaths, "/phase-2a-missing", "/tr", "/tr/projects/guitarsense"]) {
    const response = await fetch(`${origin}${path}`, { redirect: "manual" });
    pages[path] = { status: response.status, ...inspectHtml(await response.text()) };
  }
  const documents = {};
  for (const path of ["/sitemap.xml", "/robots.txt", "/manifest.webmanifest"]) {
    const response = await fetch(`${origin}${path}`, { redirect: "manual" });
    documents[path] = { status: response.status, body: await response.text() };
  }
  const cvResponse = await fetch(`${origin}/cv`, { redirect: "manual" });
  const cv = {
    status: cvResponse.status,
    contentType: cvResponse.headers.get("content-type"),
    disposition: cvResponse.headers.get("content-disposition"),
    hash: sha256(Buffer.from(await cvResponse.arrayBuffer())),
  };
  const social = {};
  for (const path of ["/opengraph-image", "/twitter-image", "/apple-icon", "/icon.svg", ...englishPaths.slice(1).map((path) => `${path}/opengraph-image`)]) {
    const response = await fetch(`${origin}${path}`, { redirect: "manual" });
    social[path] = { status: response.status, contentType: response.headers.get("content-type"), hash: sha256(Buffer.from(await response.arrayBuffer())) };
  }
  return { pages, documents, cv, social, assets: publicAssetHashes(), cssHash: sha256(readFileSync("src/app/globals.css")) };
}
