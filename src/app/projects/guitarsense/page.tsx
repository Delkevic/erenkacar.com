import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { ScreenshotFigure } from "@/components/ui/screenshot-figure";
import { guitarSenseCaseStudy } from "@/data/case-study";
import { guitarSenseImages } from "@/data/guitarsense-images";

export const metadata: Metadata = {
  title: "GuitarSense",
  description: guitarSenseCaseStudy.introduction,
  alternates: {
    canonical: "/projects/guitarsense",
  },
  openGraph: {
    title: "GuitarSense — Eren Kaçar",
    description: guitarSenseCaseStudy.introduction,
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
              {guitarSenseCaseStudy.introduction}
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
              <h2>Overview</h2>
              <div className="case-section__content">
                <p>{guitarSenseCaseStudy.overview}</p>
              </div>
            </section>

            <section className="case-section">
              <h2>My role</h2>
              <div className="case-section__content">
                <p>{guitarSenseCaseStudy.role}</p>
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>Core capabilities</h2>
              <div className="case-section__content guitarsense-capabilities">
                <div className="guitarsense-capabilities__cards">
                  {guitarSenseCaseStudy.capabilities.map((capability) => (
                    <article className="feature-card" key={capability.title}>
                      <h3>{capability.title}</h3>
                      <p>{capability.description}</p>
                    </article>
                  ))}
                </div>
                <ScreenshotFigure
                  image={guitarSenseImages.presetEditor}
                  className="guitarsense-preset-visual"
                  sizes="(max-width: 780px) calc(100vw - 1.5rem), 27rem"
                />
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>Engineering highlights</h2>
              <div className="case-section__content challenge-grid">
                {guitarSenseCaseStudy.highlights.map((highlight) => (
                  <article className="challenge-card" key={highlight.title}>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.body}</p>
                    {highlight.qualification ? (
                      <p className="challenge-card__qualification">
                        {highlight.qualification}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <section className="case-section">
              <h2>Technologies</h2>
              <div className="case-section__content">
                <ul className="tag-list" aria-label="GuitarSense technologies">
                  {guitarSenseCaseStudy.technologies.map((technology) => (
                    <li className="tag" key={technology}>{technology}</li>
                  ))}
                </ul>
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
