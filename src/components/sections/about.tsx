import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section
      className="section section--bordered"
      id="about"
      aria-labelledby="about-title"
    >
      <Container className="prose-grid">
        <header>
          <p className="eyebrow">05 / About</p>
          <h2 className="section-title" id="about-title">
            Product thinking grounded in implementation.
          </h2>
        </header>
        <div className="prose-grid__body">
          <p>
            I’m a Computer Engineering graduate based in Istanbul. I enjoy
            turning complex ideas into software people can actually use,
            especially across desktop, web and real-time systems. My work spans
            interface development, backend services, workflow automation, audio
            processing, packaging and deployment.
          </p>
          <p>
            I care about more than getting a feature to work. I measure
            performance, design for failure and pay attention to security,
            usability and the path from a development build to a reliable
            product.
          </p>
        </div>
      </Container>
    </section>
  );
}
