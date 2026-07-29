import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { InterfaceIcon } from "@/components/ui/interface-icon";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section
      className="section section--bordered"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Container className="contact-panel">
        <div className="contact-panel__intro">
          <p className="eyebrow eyebrow--with-icon">
            <InterfaceIcon name="mail" />
            06 / Contact
          </p>
          <h2 id="contact-title">Let’s build something useful.</h2>
          <a
            className="contact-panel__email"
            href={siteConfig.contactUrl}
            aria-label="Email Eren Kaçar"
          >
            {siteConfig.email}
          </a>
        </div>
        <div className="contact-panel__details">
          <p className="contact-panel__note">
            I’m interested in software engineering roles and collaborations
            involving desktop products, full-stack systems, automation and
            real-time applications.
          </p>
          <nav className="contact-actions" aria-label="Contact and profile links">
            <a href={siteConfig.contactUrl}>
              <InterfaceIcon name="mail" />
              Email me
            </a>
            <ExternalLink href={siteConfig.githubUrl}>
              <InterfaceIcon name="github" />
              GitHub
              <span aria-hidden="true">↗</span>
            </ExternalLink>
            <ExternalLink href={siteConfig.linkedinUrl}>
              <InterfaceIcon name="linkedin" />
              LinkedIn
              <span aria-hidden="true">↗</span>
            </ExternalLink>
            <a
              href={siteConfig.resumePath}
              download
              aria-label="Download Eren Kaçar’s CV as PDF"
            >
              <InterfaceIcon name="download" />
              Download CV
            </a>
          </nav>
        </div>
      </Container>
    </section>
  );
}
