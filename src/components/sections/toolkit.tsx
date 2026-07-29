import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { toolkit } from "@/data/toolkit";

export function Toolkit() {
  return (
    <section className="section" id="skills" aria-labelledby="toolkit-title">
      <Container>
        <div id="toolkit-title">
          <SectionHeader
            eyebrow="04 / Technical toolkit"
            title="Tools chosen to move a product forward."
            intro="Technologies used across interface, backend, desktop, audio and automation work."
          />
        </div>
        <div className="toolkit-grid">
          {toolkit.map((group) => (
            <section className="toolkit-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
