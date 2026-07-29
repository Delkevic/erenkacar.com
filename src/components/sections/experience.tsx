import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      className="section section--bordered"
      id="experience"
      aria-labelledby="experience-title"
    >
      <Container>
        <div id="experience-title">
          <SectionHeader
            eyebrow="03 / Experience"
            title="Building workflows and learning systems from the inside."
            intro="Dates, expanded responsibilities, and final role descriptions will be added after review."
          />
        </div>
        <ol className="timeline">
          {experience.map((entry) => (
            <li className="timeline__item" key={entry.organization}>
              <div>
                <h3>{entry.organization}</h3>
                <p className="timeline__role">{entry.role}</p>
              </div>
              <div>
                <p className="timeline__summary">{entry.summary}</p>
                <ul
                  className="tag-list"
                  aria-label={`Technologies used at ${entry.organization}`}
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
