import { Container } from "@/components/ui/container";
import { otherWork } from "@/data/projects";

export function OtherWork() {
  return (
    <section className="section" aria-labelledby="other-work-title">
      <Container>
        <header className="other-work__header">
          <p className="eyebrow">Additional projects</p>
          <h2 id="other-work-title">Other work</h2>
        </header>
        <div className="other-work-grid">
          {otherWork.map((project) => (
            <article className="other-work-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul
                className="tag-list"
                aria-label={`${project.name} technologies`}
              >
                {project.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
