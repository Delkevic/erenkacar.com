import type { DictionaryProps } from "@/i18n/schema";
import Link from "next/link";
import { ExternalLink } from "@/components/ui/external-link";
import { InterfaceIcon } from "@/components/ui/interface-icon";
import { Container } from "@/components/ui/container";
import { DecorativeIllustration } from "@/components/ui/decorative-illustration";
import { siteConfig } from "@/config/site";

export function Hero({ dictionary }: DictionaryProps) {
  const copy = dictionary.home.hero;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <DecorativeIllustration variant="headstock" />
      <Container className="hero__inner">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 id="hero-title">{copy.title}</h1>
          <p className="hero__lead">{copy.lead}</p>
          <div className="hero__actions">
            <Link className="button button--primary" href={dictionary.links.work}>
              {copy.explore}
            </Link>
            <Link className="button" href={dictionary.links.about}>
              {copy.about}
            </Link>
          </div>
          <nav className="profile-links" aria-label={copy.profileLinks}>
            <ExternalLink href={siteConfig.githubUrl}>
              <InterfaceIcon name="github" />
              {dictionary.shared.github}
              <span aria-hidden="true">↗</span>
            </ExternalLink>
            <ExternalLink href={siteConfig.linkedinUrl}>
              <InterfaceIcon name="linkedin" />
              {dictionary.shared.linkedin}
              <span aria-hidden="true">↗</span>
            </ExternalLink>
            <a
              href={siteConfig.resumePath}
              download
              aria-label={dictionary.shared.downloadCvLabel}
            >
              <InterfaceIcon name="download" />
              {dictionary.shared.downloadCv}
            </a>
          </nav>
        </div>
        <aside className="hero__note" aria-label={copy.focusTitle}>
          <strong>{copy.focusTitle}</strong>
          {copy.focus}
        </aside>
      </Container>
    </section>
  );
}
