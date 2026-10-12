export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];

// Public destinations are selected only by their explicit URL locale.
export const enabledLocales = ["en", "tr"] as const;
export type EnabledLocale = (typeof enabledLocales)[number];

export const pageIds = ["home", "guitarsense", "nexora", "grade-watcher"] as const;
export type PageId = (typeof pageIds)[number];
export type ProjectPageId = Exclude<PageId, "home">;

export const routeRegistry = {
  home: { en: "/", tr: "/tr" },
  guitarsense: { en: "/projects/guitarsense", tr: "/tr/projects/guitarsense" },
  nexora: { en: "/projects/nexora", tr: "/tr/projects/nexora" },
  "grade-watcher": { en: "/projects/grade-watcher", tr: "/tr/projects/grade-watcher" },
} as const satisfies Record<PageId, Record<Locale, string>>;

export type RoutePath<P extends PageId, L extends Locale> = (typeof routeRegistry)[P][L];

export function isEnabledLocale(locale: Locale): locale is EnabledLocale {
  return enabledLocales.some((enabled) => enabled === locale);
}

export function getPublicPath<P extends PageId, L extends Locale>(page: P, locale: L): RoutePath<P, L> {
  if (!isEnabledLocale(locale)) {
    throw new Error(`Locale ${locale} is not enabled`);
  }
  return routeRegistry[page][locale];
}
