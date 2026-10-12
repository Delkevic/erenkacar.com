import type { Locale, PageId } from "@/i18n/routes";

// Social endpoints are explicit assets, independent of localized HTML routes.
const socialImagePaths = {
  en: {
    home: "/opengraph-image",
    twitter: "/twitter-image",
    guitarsense: "/projects/guitarsense/opengraph-image",
    nexora: "/projects/nexora/opengraph-image",
    "grade-watcher": "/projects/grade-watcher/opengraph-image",
  },
  tr: {
    home: "/social/tr/home",
    twitter: "/social/tr/twitter",
    guitarsense: "/social/tr/guitarsense",
    nexora: "/social/tr/nexora",
    "grade-watcher": "/social/tr/grade-watcher",
  },
} as const satisfies Record<Locale, Record<PageId | "twitter", string>>;

export function getSocialImagePath(page: PageId | "twitter", locale: Locale) {
  return socialImagePaths[locale][page];
}
