import { Container } from "@/components/ui/container";
import { InterfaceIcon } from "@/components/ui/interface-icon";

export function Contact() {
  return (
    <section
      className="section section--bordered"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Container className="contact-panel">
        <div>
          <p className="eyebrow eyebrow--with-icon">
            <InterfaceIcon name="mail" />
            06 / Contact
          </p>
          <h2 id="contact-title">Let’s build something useful.</h2>
        </div>
        <p className="contact-panel__note">
          I’m interested in software engineering roles and collaborations
          involving desktop products, full-stack systems, automation and
          real-time applications.
        </p>
      </Container>
    </section>
  );
}
