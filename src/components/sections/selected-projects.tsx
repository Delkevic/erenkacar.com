import type { DictionaryProps } from "@/i18n/schema";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "@/components/ui/section-header";

export function SelectedProjects({ dictionary }: DictionaryProps) {
  const copy = dictionary.home.selected;
  const { selectedProjects } = dictionary.content;

  return (
    <section className="section" aria-labelledby="selected-projects-title">
      <Container>
        <div id="selected-projects-title">
          <SectionHeader
            eyebrow={copy.eyebrow}
            title={copy.title}
          />
        </div>
        <div className="project-grid">
          {selectedProjects.map((project, index) => (
            <ProjectCard dictionary={dictionary} project={project} index={index + 2} key={project.name} />
          ))}
        </div>
      </Container>
    </section>
  );
}
