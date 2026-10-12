import { labelWithName } from "@/i18n/format";
import type { DictionaryProps } from "@/i18n/schema";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { InterfaceIcon } from "@/components/ui/interface-icon";
import { ScreenshotFigure } from "@/components/ui/screenshot-figure";
import { SectionHeader } from "@/components/ui/section-header";

export function FeaturedProject({ dictionary }: DictionaryProps) {
  const copy = dictionary.home.featured;
  const { guitarSenseImages, featuredProject } = dictionary.content;

  return (
    <section
      className="section section--bordered"
      id="work"
      aria-labelledby="featured-project-title"
    >
      <Container>
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          intro={copy.intro}
        />
        <article className="project-feature">
          <ScreenshotFigure
            image={guitarSenseImages.library}
            className="project-visual"
            sizes="(max-width: 780px) calc(100vw - 1.5rem), 39rem"
            eager
          />
          <div className="project-feature__content">
            <div>
              <p className="project-kicker">
                <InterfaceIcon name="desktop" />
                {featuredProject.eyebrow}
              </p>
              <h3 className="project-title" id="featured-project-title">
                {featuredProject.name}
              </h3>
              <p className="project-summary">{featuredProject.summary}</p>
              <ul
                className="proof-list"
                aria-label={labelWithName(dictionary.shared.proofPoints, featuredProject.name)}
              >
                {featuredProject.proofPoints.map((proofPoint) => (
                  <li key={proofPoint}>{proofPoint}</li>
                ))}
              </ul>
              <ul
                className="tag-list"
                aria-label={labelWithName(dictionary.shared.technologies, featuredProject.name)}
              >
                {featuredProject.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            {featuredProject.href ? (
              <Link className="text-link" href={featuredProject.href}>
                {dictionary.shared.readCaseStudy}
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </article>
      </Container>
    </section>
  );
}
