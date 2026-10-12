import { english } from "@/i18n/en";
import { turkish } from "@/i18n/tr";
import { isEnabledLocale, type Locale } from "@/i18n/routes";
import type { Dictionary, PublishedDictionaries } from "@/i18n/schema";

const dictionaries = { en: english, tr: turkish } satisfies PublishedDictionaries;

export function getDictionary(locale: Locale): Dictionary {
  if (!isEnabledLocale(locale)) throw new Error(`Locale ${locale} is not enabled`);
  return dictionaries[locale];
}
