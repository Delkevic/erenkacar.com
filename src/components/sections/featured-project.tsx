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
          intro="GuitarSense is the flagship case study. Verified architecture, screenshots, and results will be added as the product story is reviewed."
        />
        <article className="project-feature">
          <div
            className="project-visual"
            role="img"
            aria-label="Placeholder for a future GuitarSense product screenshot"
          >
            <span className="project-visual__label">
              Product visual in review
            </span>
          </div>
          <div className="project-feature__content">
            <div>
              <p className="project-kicker">Flagship case study</p>
              <h3 className="project-title" id="featured-project-title">
                {featuredProject.name}
              </h3>
              <p className="project-summary">{featuredProject.summary}</p>
              <ul
                className="tag-list"
                aria-label={`${featuredProject.name} status`}
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
                View case-study foundation
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </article>
      </Container>
    </section>
  );
}
