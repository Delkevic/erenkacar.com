import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div>
          <p className="eyebrow">Software Engineer</p>
          <h1 id="hero-title">
            Building end-to-end desktop, web and real-time products.
          </h1>
          <p className="hero__lead">
            I turn ideas into working software, from user interfaces and backend
            systems to performance, security and deployment.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/#work">
              Explore selected work
            </Link>
            <Link className="button" href="/#about">
              About me
            </Link>
          </div>
        </div>
        <aside className="hero__note" aria-label="Portfolio status">
          <strong>Current focus</strong>
          Product-first case studies that explain the engineering decisions
          behind working software.
        </aside>
      </Container>
    </section>
  );
}
