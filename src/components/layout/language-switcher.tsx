import { enabledLocales, getPublicPath, type PageId } from "@/i18n/routes";
import type { DictionaryProps } from "@/i18n/schema";

type LanguageSwitcherProps = DictionaryProps & { page: PageId };

export function LanguageSwitcher({ dictionary, page }: LanguageSwitcherProps) {
  return (
    <nav className="language-switcher" aria-label={dictionary.shared.languageNavigation}>
      {enabledLocales.map((locale, index) => (
        <span key={locale}>
          {index > 0 && <span className="language-switcher__separator" aria-hidden="true">{"|"}</span>}
          <a
            href={getPublicPath(page, locale)}
            lang={locale}
            hrefLang={locale}
            aria-label={locale === "en" ? dictionary.shared.englishVersion : dictionary.shared.turkishVersion}
            aria-current={dictionary.locale === locale ? "page" : undefined}
          >
            {locale.toUpperCase()}
          </a>
        </span>
      ))}
    </nav>
  );
}
