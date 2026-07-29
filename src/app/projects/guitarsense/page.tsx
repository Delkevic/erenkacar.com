import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureFlow } from "@/components/case-study/architecture-flow";
import { ProductWalkthroughRow } from "@/components/case-study/product-walkthrough-row";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { ScreenshotFigure } from "@/components/ui/screenshot-figure";
import { guitarSenseCaseStudy } from "@/data/case-study";
import { guitarSenseImages } from "@/data/guitarsense-images";

export const metadata: Metadata = {
  title: "GuitarSense",
  description:
    "An engineering case study of GuitarSense, an end-to-end desktop guitar practice platform.",
  alternates: {
    canonical: "/projects/guitarsense",
  },
  openGraph: {
    title: "GuitarSense — Eren Kaçar",
    description:
      "An engineering case study of GuitarSense, an end-to-end desktop guitar practice platform.",
    url: "/projects/guitarsense",
  },
};

export default function GuitarSensePage() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="case-study case-study--guitarsense"
      >
        <Container>
          <header className="case-hero">
            <Link className="text-link back-link" href="/#work">
              <span aria-hidden="true">←</span>
              Back to selected work
            </Link>
            <p className="eyebrow">Flagship project</p>
            <h1>GuitarSense</h1>
            <p className="case-hero__intro">
              An end-to-end desktop guitar practice platform that brings
              real-time audio processing, tablature, practice feedback and
              media workflows into a single application.
            </p>
            <ul className="case-facts" aria-label="Project facts">
              {guitarSenseCaseStudy.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </header>

          <ScreenshotFigure
            image={guitarSenseImages.practiceView}
            className="case-primary-visual"
            sizes="(max-width: 780px) calc(100vw - 1.5rem), 60.8rem"
            eager
          />

          <div className="case-sections">
            <section className="case-section">
              <h2>My role</h2>
              <div className="case-section__content">
                <p>{guitarSenseCaseStudy.role}</p>
              </div>
            </section>

            <section className="case-section">
              <h2>Overview</h2>
              <div className="case-section__content">
                <p>{guitarSenseCaseStudy.overview}</p>
              </div>
            </section>

            <section className="case-section">
              <h2>The problem</h2>
              <div className="case-section__content">
                <p>{guitarSenseCaseStudy.problem}</p>
              </div>
            </section>

            <section className="case-section">
              <h2>The solution</h2>
              <div className="case-section__content">
                <ul className="case-bullet-grid">
                  {guitarSenseCaseStudy.solution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>Key features</h2>
              <div className="case-section__content feature-grid">
                {guitarSenseCaseStudy.features.map((feature) => (
                  <article className="feature-card" key={feature.title}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="case-section case-section--full">
              <div className="case-section__header">
                <h2>Product walkthrough</h2>
                <p className="case-section__intro">
                  Selected interfaces showing how GuitarSense brings audio,
                  practice and media workflows into one desktop application.
                </p>
              </div>
              <div className="case-section__content walkthrough-list">
                <ProductWalkthroughRow
                  heading="Build and save guitar tones"
                  text="Custom presets combine output control, tone-analysis settings and an editable effects chain that can be reused during practice."
                  image={guitarSenseImages.presetEditor}
                  imagePosition="left"
                />
                <ProductWalkthroughRow
                  heading="Import without hiding runtime state"
                  text="Local and YouTube-oriented workflows expose core, live-audio and AI runtime readiness instead of assuming every dependency is already installed."
                  image={guitarSenseImages.importWorkflow}
                  imagePosition="right"
                />
              </div>
            </section>

            <section className="case-section">
              <h2>Architecture</h2>
              <div className="case-section__content">
                <ArchitectureFlow
                  steps={guitarSenseCaseStudy.architecture}
                  runtimes={guitarSenseCaseStudy.runtimes}
                />
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>Engineering challenges</h2>
              <div className="case-section__content challenge-content">
                <div className="challenge-grid">
                  {guitarSenseCaseStudy.challenges.map((challenge) => (
                    <article className="challenge-card" key={challenge.title}>
                      <h3>{challenge.title}</h3>
                      <p>{challenge.body}</p>
                      {challenge.qualification ? (
                        <p className="challenge-card__qualification">
                          {challenge.qualification}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
                <div className="challenge-evidence">
                  <p className="challenge-evidence__label">
                    Test configuration interface
                  </p>
                  <ScreenshotFigure
                    image={guitarSenseImages.audioSettings}
                    className="challenge-evidence__figure"
                    sizes="(max-width: 780px) calc(100vw - 1.5rem), 42rem"
                  />
                </div>
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>Results</h2>
              <div className="case-section__content">
                <ul className="results-list">
                  {guitarSenseCaseStudy.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
