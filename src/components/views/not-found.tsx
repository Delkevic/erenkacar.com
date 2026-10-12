import type { DictionaryProps } from "@/i18n/schema";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";

export function NotFoundView({ dictionary }: DictionaryProps) {
  const copy = dictionary.notFound;

  return (
    <>
      <SiteHeader dictionary={dictionary} page="home" />
      <main className="not-found-page" id="main-content">
        <Container>
          <div className="not-found-panel">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>
              <span>{copy.code}</span>
              {copy.title}
            </h1>
            <p>{copy.description}</p>
            <div className="not-found-actions">
              <Link className="button button--primary" href={dictionary.links.home}>
                {copy.home}
              </Link>
              <Link className="button" href={dictionary.links.work}>
                {copy.work}
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
