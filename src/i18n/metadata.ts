import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { getPublicPath, type Locale, type PageId, type ProjectPageId } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/schema";
import { getSocialImagePath } from "@/i18n/social-images";

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1017",
  colorScheme: "dark",
};

const openGraphLocales = { en: "en_US", tr: "tr_TR" } as const satisfies Record<Locale, string>;

export function createLanguageAlternates(page: PageId) {
  const english = new URL(getPublicPath(page, "en"), siteConfig.siteUrl).href;
  const turkish = new URL(getPublicPath(page, "tr"), siteConfig.siteUrl).href;
  return { en: english, tr: turkish, "x-default": english };
}

function createPageAlternates(page: PageId, locale: Locale) {
  const languages = createLanguageAlternates(page);
  return { canonical: languages[locale], languages };
}

function createOpenGraphLocales(locale: Locale) {
  return {
    locale: openGraphLocales[locale],
    alternateLocale: [openGraphLocales[locale === "en" ? "tr" : "en"]],
  };
}

export function createRootMetadata(dictionary: Dictionary): Metadata {
  const alternates = createPageAlternates("home", dictionary.locale);
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: { default: dictionary.metadata.homeTitle, template: dictionary.metadata.titleTemplate },
    description: dictionary.metadata.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
    creator: siteConfig.name,
    category: "technology",
    alternates,
    openGraph: {
      type: "website",
      ...createOpenGraphLocales(dictionary.locale),
      url: dictionary.locale === "en" ? siteConfig.siteUrl : alternates.canonical,
      siteName: siteConfig.name,
      title: dictionary.metadata.homeTitle,
      description: dictionary.metadata.description,
      images: [{
        url: getSocialImagePath("home", dictionary.locale),
        type: "image/png",
        width: 1200,
        height: 630,
        alt: dictionary.social.home.alt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.homeTitle,
      description: dictionary.metadata.description,
      images: [{
        url: getSocialImagePath("twitter", dictionary.locale),
        type: "image/png",
        width: 1200,
        height: 630,
        alt: dictionary.social.home.alt,
      }],
    },
    robots: { index: true, follow: true },
  };
}

export function createProjectMetadata(page: ProjectPageId, locale: Locale, dictionary: Dictionary): Metadata {
  if (locale !== dictionary.locale) throw new Error("Metadata and dictionary locales must match");
  const path = getPublicPath(page, locale);
  const copy = dictionary.metadata[page];
  return {
    title: copy.title,
    description: copy.description,
    alternates: createPageAlternates(page, locale),
    // Keep the existing shallow English override and inherited homepage Twitter.
    openGraph: {
      ...createOpenGraphLocales(locale),
      title: copy.socialTitle,
      description: copy.description,
      url: path,
      images: [{
        url: getSocialImagePath(page, locale),
        type: "image/png",
        width: 1200,
        height: 630,
        alt: dictionary.social[page].alt,
      }],
    },
    ...(locale === "tr" ? {
      twitter: {
        card: "summary_large_image" as const,
        title: copy.socialTitle,
        description: copy.description,
        images: [{
          url: getSocialImagePath(page, locale),
          type: "image/png",
          width: 1200,
          height: 630,
          alt: dictionary.social[page].alt,
        }],
      },
    } : {}),
  };
}
