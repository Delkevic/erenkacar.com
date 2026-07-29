import Link from "next/link";
import { ExternalLink } from "@/components/ui/external-link";
import { InterfaceIcon } from "@/components/ui/interface-icon";
import { Container } from "@/components/ui/container";
import { DecorativeIllustration } from "@/components/ui/decorative-illustration";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <DecorativeIllustration variant="headstock" />
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
          <nav className="profile-links" aria-label="Profile and CV links">
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
        <aside className="hero__note" aria-label="Current focus">
          <strong>Current focus</strong>
          Building GuitarSense and documenting the engineering decisions behind
          a real-time desktop product.
        </aside>
      </Container>
    </section>
  );
}
