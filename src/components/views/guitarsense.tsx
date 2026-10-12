import type { DictionaryProps } from "@/i18n/schema";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { ScreenshotFigure } from "@/components/ui/screenshot-figure";

export function GuitarSenseView({ dictionary }: DictionaryProps) {
  const copy = dictionary.caseStudies.guitarsense;
  const common = dictionary.caseStudies.common;
  const { guitarSenseCaseStudy, guitarSenseImages } = dictionary.content;

  return (
    <>
      <SiteHeader dictionary={dictionary} page="guitarsense" />
      <main
        id="main-content"
        className="case-study case-study--guitarsense"
      >
        <Container>
          <header className="case-hero">
            <Link className="text-link back-link" href={dictionary.links.work}>
              <span aria-hidden="true">←</span>
              {common.back}
            </Link>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.name}</h1>
            <p className="case-hero__intro">
              {guitarSenseCaseStudy.introduction}
            </p>
            <ul className="case-facts" aria-label={common.facts}>
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
              <h2>{common.overview}</h2>
              <div className="case-section__content">
                <p>{guitarSenseCaseStudy.overview}</p>
              </div>
            </section>

            <section className="case-section">
              <h2>{common.role}</h2>
              <div className="case-section__content">
                <p>{guitarSenseCaseStudy.role}</p>
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>{common.capabilities}</h2>
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
              <h2>{copy.highlights}</h2>
              <div className="case-section__content challenge-grid">
                {guitarSenseCaseStudy.highlights.map((highlight) => (
                  <article className="challenge-card" key={highlight.title}>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.body}</p>
                    {"qualification" in highlight && highlight.qualification ? (
                      <p className="challenge-card__qualification">
                        {highlight.qualification}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <section className="case-section">
              <h2>{copy.technologies}</h2>
              <div className="case-section__content">
                <ul className="tag-list" aria-label={copy.technologiesLabel}>
                  {guitarSenseCaseStudy.technologies.map((technology) => (
                    <li className="tag" key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="case-section">
              <h2>{copy.results}</h2>
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
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
