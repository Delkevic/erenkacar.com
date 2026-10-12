import type { DictionaryProps } from "@/i18n/schema";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { siteConfig } from "@/config/site";

export function SiteFooter({ dictionary }: DictionaryProps) {
  const copy = dictionary.shared;

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__identity">
          <span>{copy.footerIdentity}</span>
          <span>{copy.systems}</span>
        </div>
        <nav className="site-footer__links" aria-label={copy.footerLinks}>
          <ExternalLink href={siteConfig.githubUrl}>{copy.github}</ExternalLink>
          <ExternalLink href={siteConfig.linkedinUrl}>{copy.linkedin}</ExternalLink>
          <a href={siteConfig.contactUrl}>{copy.email}</a>
        </nav>
      </Container>
    </footer>
  );
}
