import { labelWithName } from "@/i18n/format";
import type { DictionaryProps } from "@/i18n/schema";
import { Container } from "@/components/ui/container";
import { InterfaceIcon } from "@/components/ui/interface-icon";
import { SectionHeader } from "@/components/ui/section-header";

export function Experience({ dictionary }: DictionaryProps) {
  const copy = dictionary.home.experience;
  const { experience } = dictionary.content;

  return (
    <section
      className="section section--bordered"
      id="experience"
      aria-labelledby="experience-title"
    >
      <Container>
        <div id="experience-title">
          <SectionHeader
            eyebrow={copy.eyebrow}
            title={copy.title}
          />
        </div>
        <ol className="timeline">
          {experience.map((entry) => (
            <li className="timeline__item" key={entry.organization}>
              <div>
                <h3 className="timeline__heading">
                  <InterfaceIcon name="workflow" />
                  {entry.organization}
                </h3>
                <p className="timeline__role">{entry.role}</p>
                {entry.date ? (
                  <p className="timeline__date">{entry.date}</p>
                ) : null}
              </div>
              <div>
                <p className="timeline__summary">{entry.summary}</p>
                <ul className="detail-list">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <ul
                  className="tag-list"
                  aria-label={labelWithName(dictionary.shared.experienceTechnologies, entry.organization)}
                >
                  {entry.technologies.map((technology) => (
                    <li className="tag" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
