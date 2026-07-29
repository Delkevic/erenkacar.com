import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { featuredProject } from "@/data/projects";

export function FeaturedProject() {
  return (
    <section
      className="section section--bordered"
      id="work"
      aria-labelledby="featured-project-title"
    >
      <Container>
        <SectionHeader
          eyebrow="01 / Featured project"
          title="Engineering the full product, not just one layer."
          intro="A desktop product spanning interface design, audio processing, practice tooling, packaging and runtime safety."
        />
        <article className="project-feature">
          <div
            className="project-visual"
            role="img"
            aria-label="GuitarSense interface preview"
          >
            <span className="project-visual__label">
              GuitarSense interface preview
            </span>
          </div>
          <div className="project-feature__content">
            <div>
              <p className="project-kicker">{featuredProject.eyebrow}</p>
              <h3 className="project-title" id="featured-project-title">
                {featuredProject.name}
              </h3>
              <p className="project-summary">{featuredProject.summary}</p>
              <ul
                className="proof-list"
                aria-label={`${featuredProject.name} proof points`}
              >
                {featuredProject.proofPoints.map((proofPoint) => (
                  <li key={proofPoint}>{proofPoint}</li>
                ))}
              </ul>
              <ul
                className="tag-list"
                aria-label={`${featuredProject.name} technologies`}
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
                Read the case study
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </article>
      </Container>
    </section>
  );
}
