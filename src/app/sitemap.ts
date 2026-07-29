import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  "/",
  "/projects/guitarsense",
  "/projects/nexora",
  "/projects/grade-watcher",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteConfig.siteUrl).toString(),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
