import type { Metadata } from "next";
import Link from "next/link";
import { ProductWalkthroughRow } from "@/components/case-study/product-walkthrough-row";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { InterfaceIcon } from "@/components/ui/interface-icon";
import { ScreenshotFigure } from "@/components/ui/screenshot-figure";
import { nexoraCaseStudy } from "@/data/nexora-case-study";
import { nexoraImages } from "@/data/nexora-images";

const description =
  "A full-stack social platform built with React, Go, MySQL, Firebase and Gemini-assisted content experiences.";

export const metadata: Metadata = {
  title: "Nexora",
  description,
  alternates: {
    canonical: "/projects/nexora",
  },
  openGraph: {
    title: "Nexora — Eren Kaçar",
    description,
    url: "/projects/nexora",
  },
};

export default function NexoraPage() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="case-study case-study--nexora nexora-case"
      >
        <Container>
          <header className="case-hero">
            <Link className="text-link back-link" href="/#work">
              <span aria-hidden="true">←</span>
              Back to selected work
            </Link>
            <p className="eyebrow">FULL-STACK SOCIAL PLATFORM</p>
            <h1>Nexora</h1>
            <p className="case-hero__intro">
              A full-stack social platform combining secure account flows,
              realtime messaging, content discovery, short-form media and
              Gemini-assisted content experiences.
            </p>
            <ul className="case-facts" aria-label="Project facts">
              {nexoraCaseStudy.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </header>

          <ScreenshotFigure
            image={nexoraImages.explore}
            className="case-primary-visual nexora-primary-visual"
            sizes="(max-width: 780px) calc(100vw - 1.5rem), 60.8rem"
            eager
          />

          <div className="case-sections">
            <section className="case-section">
              <h2>Overview</h2>
              <div className="case-section__content">
                <p>{nexoraCaseStudy.overview}</p>
              </div>
            </section>

            <section className="case-section">
              <h2>My role</h2>
              <div className="case-section__content">
                <p>{nexoraCaseStudy.role}</p>
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>Core capabilities</h2>
              <div className="case-section__content feature-grid">
                {nexoraCaseStudy.capabilities.map((capability) => (
                  <article className="feature-card" key={capability.title}>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="case-section case-section--full">
              <div className="case-section__header">
                <h2>Product walkthrough</h2>
                <p className="case-section__intro">
                  Selected interfaces showing account protection and realtime
                  communication inside the wider social platform.
                </p>
              </div>
              <div className="case-section__content walkthrough-list">
                <ProductWalkthroughRow
                  heading="Protect account access"
                  text="Email verification and two-factor authentication add explicit checkpoints to account creation and sign-in workflows."
                  image={nexoraImages.authentication}
                  imagePosition="left"
                />
                <ProductWalkthroughRow
                  heading="Keep conversations realtime"
                  text="Firebase-backed messaging connects conversation lists, presence state and direct-message updates in a dedicated interface."
                  image={nexoraImages.messaging}
                  imagePosition="right"
                />
              </div>
            </section>

            <section className="case-section">
              <h2>Technical architecture</h2>
              <div className="case-section__content nexora-architecture">
                <ol
                  className="nexora-architecture__core"
                  aria-label="Core application architecture"
                >
                  <li>
                    <span>
                      <InterfaceIcon name="desktop" />
                      React Client
                    </span>
                    <span aria-hidden="true">→</span>
                  </li>
                  <li>
                    <span>
                      <InterfaceIcon name="server" />
                      Go / Gin API
                    </span>
                    <span aria-hidden="true">→</span>
                  </li>
                  <li>
                    <span>
                      <InterfaceIcon name="database" />
                      MySQL
                    </span>
                  </li>
                </ol>
                <div className="nexora-architecture__services">
                  <article>
                    <h3>Firebase</h3>
                    <p>Realtime messaging</p>
                  </article>
                  <article>
                    <h3>Gemini API</h3>
                    <p>Content analysis and conversational assistance</p>
                  </article>
                </div>
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>Engineering decisions</h2>
              <div className="case-section__content challenge-grid">
                {nexoraCaseStudy.decisions.map((decision) => (
                  <article className="challenge-card" key={decision.title}>
                    <h3>{decision.title}</h3>
                    <p>{decision.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="case-section">
              <h2>Closing summary</h2>
              <div className="case-section__content">
                <p>{nexoraCaseStudy.closing}</p>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
