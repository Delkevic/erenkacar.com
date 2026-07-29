import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureFlow } from "@/components/case-study/architecture-flow";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { guitarSenseCaseStudy } from "@/data/case-study";

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
      <main id="main-content">
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

          <div
            className="case-placeholder"
            role="img"
            aria-label="GuitarSense interface preview"
          >
            GuitarSense interface preview
          </div>

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

            <section className="case-section">
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

            <section className="case-section">
              <h2>Architecture</h2>
              <div className="case-section__content">
                <ArchitectureFlow
                  steps={guitarSenseCaseStudy.architecture}
                  runtimes={guitarSenseCaseStudy.runtimes}
                />
              </div>
            </section>

            <section className="case-section">
              <h2>Engineering challenges</h2>
              <div className="case-section__content challenge-grid">
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
            </section>

            <section className="case-section">
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
