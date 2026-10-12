import { labelWithName } from "@/i18n/format";
import type { DictionaryProps } from "@/i18n/schema";
import { Container } from "@/components/ui/container";

export function OtherWork({ dictionary }: DictionaryProps) {
  const copy = dictionary.home.otherWork;
  const { otherWork } = dictionary.content;

  return (
    <section className="section" aria-labelledby="other-work-title">
      <Container>
        <header className="other-work__header">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="other-work-title">{copy.title}</h2>
        </header>
        <div className="other-work-grid">
          {otherWork.map((project) => (
            <article className="other-work-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul
                className="tag-list"
                aria-label={labelWithName(dictionary.shared.technologies, project.name)}
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
