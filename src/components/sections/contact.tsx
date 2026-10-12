import type { DictionaryProps } from "@/i18n/schema";
import { Container } from "@/components/ui/container";
import { DecorativeIllustration } from "@/components/ui/decorative-illustration";
import { ExternalLink } from "@/components/ui/external-link";
import { InterfaceIcon } from "@/components/ui/interface-icon";
import { siteConfig } from "@/config/site";

export function Contact({ dictionary }: DictionaryProps) {
  const copy = dictionary.home.contact;

  return (
    <section
      className="section section--bordered"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Container className="contact-panel">
        <DecorativeIllustration variant="cable" />
        <div className="contact-panel__intro">
          <p className="eyebrow eyebrow--with-icon">
            <InterfaceIcon name="mail" />
            {copy.eyebrow}
          </p>
          <h2 id="contact-title">{copy.title}</h2>
          <a
            className="contact-panel__email"
            href={siteConfig.contactUrl}
            aria-label={copy.emailLabel}
          >
            {siteConfig.email}
          </a>
        </div>
        <div className="contact-panel__details">
          <p className="contact-panel__note">{copy.note}</p>
          <nav className="contact-actions" aria-label={copy.linksLabel}>
            <a href={siteConfig.contactUrl}>
              <InterfaceIcon name="mail" />
              {copy.emailMe}
            </a>
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
      </Container>
    </section>
  );
}
