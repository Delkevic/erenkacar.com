import type { DictionaryProps } from "@/i18n/schema";
import { Container } from "@/components/ui/container";
import {
  InterfaceIcon,
  type InterfaceIconName,
} from "@/components/ui/interface-icon";
import { SectionHeader } from "@/components/ui/section-header";

const toolkitIcons: Record<DictionaryProps["dictionary"]["content"]["toolkit"][number]["id"], InterfaceIconName> = {
  languages: "code",
  frontend: "layers",
  "backend-data": "database",
  "desktop-systems": "desktop",
  "audio-automation": "waveform",
};

export function Toolkit({ dictionary }: DictionaryProps) {
  const copy = dictionary.home.toolkit;
  const { toolkit } = dictionary.content;

  return (
    <section className="section" id="skills" aria-labelledby="toolkit-title">
      <Container>
        <div id="toolkit-title">
          <SectionHeader
            eyebrow={copy.eyebrow}
            title={copy.title}
            intro={copy.intro}
          />
        </div>
        <div className="toolkit-grid">
          {toolkit.map((group) => (
            <section className="toolkit-group" key={group.id}>
              <h3>
                <InterfaceIcon name={toolkitIcons[group.id]} />
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
