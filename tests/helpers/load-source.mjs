import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const sourceCache = new Map();

// Load the actual typed source, including its local imports, without a build.
export function loadSource(path, cache = sourceCache) {
  const filename = resolve(path);
  if (cache.has(filename)) return cache.get(filename).exports;
  const loadedModule = { exports: {} };
  cache.set(filename, loadedModule);
  const source = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
    fileName: filename,
  }).outputText;
  const localRequire = (specifier) => {
    if (specifier.endsWith(".css")) return {};
    if (specifier.startsWith("@/") || specifier.startsWith(".")) {
      const target = specifier.startsWith("@/")
        ? resolve("src", specifier.slice(2))
        : resolve(dirname(filename), specifier);
      for (const extension of [".ts", ".tsx"]) {
        try { readFileSync(`${target}${extension}`); }
        catch { continue; }
        return loadSource(`${target}${extension}`, cache);
      }
    }
    return require(specifier);
  };
  new Function("require", "module", "exports", source)(localRequire, loadedModule, loadedModule.exports);
  return loadedModule.exports;
}

export function renderSource(path, exportName, props = {}) {
  const React = require("react");
  const { renderToStaticMarkup } = require("react-dom/server");
  const { english } = loadSource("src/i18n/en.ts");
  return renderToStaticMarkup(React.createElement(loadSource(path)[exportName], { dictionary: english, ...props }));
}
