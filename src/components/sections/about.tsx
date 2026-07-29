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
            I approach software as a connected system: interface, backend,
            performance, security, and deployment all shape the final product.
          </p>
          <p>
            This portfolio will grow into a practical record of that work, with
            reviewed case studies that focus on decisions, trade-offs, and what
            was actually built.
          </p>
        </div>
      </Container>
    </section>
  );
}
