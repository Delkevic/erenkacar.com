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
            I build usable software across desktop and web, with a focus on
            real-time systems, product architecture, performance, security and
            the path from prototype to distributable product.
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
        <aside className="hero__note" aria-label="Current focus">
          <strong>Current focus</strong>
          Building GuitarSense and documenting the engineering decisions behind
          a real-time desktop product.
        </aside>
      </Container>
    </section>
  );
}
