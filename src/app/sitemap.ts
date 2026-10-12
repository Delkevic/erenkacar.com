import type { MetadataRoute } from "next";
import { enabledLocales, pageIds } from "@/i18n/routes";
import { createLanguageAlternates } from "@/i18n/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageIds.flatMap((page) => enabledLocales.map((locale) => ({
    url: createLanguageAlternates(page)[locale],
    changeFrequency: page === "home" ? "monthly" as const : "yearly" as const,
    priority: page === "home" ? 1 : 0.7,
    alternates: { languages: createLanguageAlternates(page) },
  })));
}
