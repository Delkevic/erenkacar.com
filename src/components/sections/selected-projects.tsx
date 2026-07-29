import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "@/components/ui/section-header";
import { selectedProjects } from "@/data/projects";

export function SelectedProjects() {
  return (
    <section className="section" aria-labelledby="selected-projects-title">
      <Container>
        <div id="selected-projects-title">
          <SectionHeader
            eyebrow="02 / Selected projects"
            title="Selected work across full-stack systems and automation."
          />
        </div>
        <div className="project-grid">
          {selectedProjects.map((project, index) => (
            <ProjectCard project={project} index={index + 2} key={project.name} />
          ))}
        </div>
      </Container>
    </section>
  );
}
