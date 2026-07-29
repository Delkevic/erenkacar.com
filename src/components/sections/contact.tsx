import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section
      className="section section--bordered"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Container className="contact-panel">
        <div>
          <p className="eyebrow">06 / Contact</p>
          <h2 id="contact-title">Let’s build something that works.</h2>
        </div>
        {siteConfig.contactUrl ? (
          <a className="button button--primary" href={siteConfig.contactUrl}>
            Start a conversation
          </a>
        ) : (
          <p className="contact-panel__note">
            Contact and external profile links will appear here once their final
            destinations are confirmed.
          </p>
        )}
      </Container>
    </section>
  );
}
