import type { english } from "@/i18n/en";
import type { EnabledLocale, Locale, PageId, RoutePath } from "@/i18n/routes";

type LocalizedPagePath<Path extends string, L extends Locale> = {
  [P in PageId]: Path extends RoutePath<P, "en"> ? RoutePath<P, L> : never;
}[PageId];

// Registry destinations change with locale; external URLs and unknown paths do not.
type LocalizedDestination<T, L extends Locale> = T extends string
  ? T extends `${infer Path}#${infer Anchor}`
    ? [LocalizedPagePath<Path, L>] extends [never]
      ? T
      : `${LocalizedPagePath<Path, L>}#${Anchor}`
    : [LocalizedPagePath<T, L>] extends [never] ? T : LocalizedPagePath<T, L>
  : T;

type InvariantName =
  | typeof english.content.featuredProject.name
  | typeof english.content.selectedProjects[number]["name"]
  | typeof english.social.home.title;

// These source-owned labels describe skills rather than software identities.
type DescriptiveTechnology =
  | typeof english.content.selectedProjects[1]["tags"][3]
  | typeof english.content.experience[0]["technologies"][1]
  | typeof english.content.experience[1]["technologies"][1 | 2 | 3]
  | typeof english.content.toolkit[1]["items"][4]
  | typeof english.content.toolkit[3]["items"][4]
  | typeof english.content.otherWork[0]["tags"][3]
  | typeof english.content.otherWork[2]["tags"][2];

type InvariantTechnology = Exclude<
  | typeof english.content.featuredProject.tags[number]
  | typeof english.content.selectedProjects[number]["tags"][number]
  | typeof english.content.otherWork[number]["tags"][number]
  | typeof english.content.guitarSenseCaseStudy.technologies[number]
  | typeof english.content.experience[number]["technologies"][number]
  | typeof english.content.toolkit[number]["items"][number],
  DescriptiveTechnology
>;

// Require every English key, including prose, accessibility text and image copy.
// Widen string values so translations are checked for shape, not English text.
type TranslationShape<T, L extends Locale> = T extends string
  ? T extends InvariantName | InvariantTechnology ? T : string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: TranslationShape<T[K], L> }
    : T extends object
      ? {
          readonly [K in keyof T]: K extends "href"
            ? LocalizedDestination<T[K], L>
            : K extends "links"
              ? { readonly [D in keyof T[K]]: LocalizedDestination<T[K][D], L> }
              : K extends
            | "name" | "id" | "icon" | "frame" | "placement" | "socialTitle" | "titleTemplate"
            | "src" | "width" | "height" | "visual" | "nexoraArchitecture"
            ? T[K]
            : TranslationShape<T[K], L>;
        }
      : T;

export type DictionaryFor<L extends Locale> = Omit<TranslationShape<typeof english, L>, "locale"> & { readonly locale: L };
export type Dictionary = { [L in Locale]: DictionaryFor<L> }[Locale];
export type CompleteDictionaries = { [L in Locale]: DictionaryFor<L> };
export type PublishedDictionaries = { [L in EnabledLocale]: DictionaryFor<L> };

export type DictionaryProps = { dictionary: Dictionary };
