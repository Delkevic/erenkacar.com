import type { DictionaryProps } from "@/i18n/schema";
import Link from "next/link";
import { ProductWalkthroughRow } from "@/components/case-study/product-walkthrough-row";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { InterfaceIcon } from "@/components/ui/interface-icon";
import { ScreenshotFigure } from "@/components/ui/screenshot-figure";

export function NexoraView({ dictionary }: DictionaryProps) {
  const copy = dictionary.caseStudies.nexora;
  const common = dictionary.caseStudies.common;
  const { nexoraCaseStudy, nexoraImages, nexoraArchitecture } = dictionary.content;

  return (
    <>
      <SiteHeader dictionary={dictionary} page="nexora" />
      <main
        id="main-content"
        className="case-study case-study--nexora nexora-case"
      >
        <Container>
          <header className="case-hero">
            <Link className="text-link back-link" href={dictionary.links.work}>
              <span aria-hidden="true">←</span>
              {common.back}
            </Link>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.name}</h1>
            <p className="case-hero__intro">{copy.introduction}</p>
            <ul className="case-facts" aria-label={common.facts}>
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
              <h2>{common.overview}</h2>
              <div className="case-section__content">
                <p>{nexoraCaseStudy.overview}</p>
              </div>
            </section>

            <section className="case-section">
              <h2>{common.role}</h2>
              <div className="case-section__content">
                <p>{nexoraCaseStudy.role}</p>
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>{common.capabilities}</h2>
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
                <h2>{copy.walkthrough}</h2>
                <p className="case-section__intro">{copy.walkthroughIntro}</p>
              </div>
              <div className="case-section__content walkthrough-list">
                <ProductWalkthroughRow
                  heading={copy.authentication.heading}
                  text={copy.authentication.text}
                  image={nexoraImages.authentication}
                  imagePosition="left"
                />
                <ProductWalkthroughRow
                  heading={copy.messaging.heading}
                  text={copy.messaging.text}
                  image={nexoraImages.messaging}
                  imagePosition="right"
                />
              </div>
            </section>

            <section className="case-section">
              <h2>{copy.architecture}</h2>
              <div className="case-section__content nexora-architecture">
                <ol
                  className="nexora-architecture__core"
                  aria-label={copy.architectureLabel}
                >
                  <li>
                    <span>
                      <InterfaceIcon name="desktop" />
                      {`${nexoraArchitecture.client} ${copy.client}`}
                    </span>
                    <span aria-hidden="true">→</span>
                  </li>
                  <li>
                    <span>
                      <InterfaceIcon name="server" />
                      {`${nexoraArchitecture.api} ${copy.api}`}
                    </span>
                    <span aria-hidden="true">→</span>
                  </li>
                  <li>
                    <span>
                      <InterfaceIcon name="database" />
                      {nexoraArchitecture.database}
                    </span>
                  </li>
                </ol>
                <div className="nexora-architecture__services">
                  <article>
                    <h3>{nexoraArchitecture.firebase}</h3>
                    <p>{copy.firebaseDescription}</p>
                  </article>
                  <article>
                    <h3>{nexoraArchitecture.gemini}</h3>
                    <p>{copy.geminiDescription}</p>
                  </article>
                </div>
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>{common.decisions}</h2>
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
              <h2>{copy.closing}</h2>
              <div className="case-section__content">
                <p>{nexoraCaseStudy.closing}</p>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
