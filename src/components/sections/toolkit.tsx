import { Container } from "@/components/ui/container";
import {
  InterfaceIcon,
  type InterfaceIconName,
} from "@/components/ui/interface-icon";
import { SectionHeader } from "@/components/ui/section-header";
import { toolkit } from "@/data/toolkit";

const toolkitIcons: Record<string, InterfaceIconName> = {
  Languages: "code",
  Frontend: "layers",
  "Backend and data": "database",
  "Desktop and systems": "desktop",
  "Audio and automation": "waveform",
};

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
              <h3>
                <InterfaceIcon name={toolkitIcons[group.title] ?? "code"} />
                {group.title}
              </h3>
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
