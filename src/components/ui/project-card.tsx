import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card">
      <span className="project-card__index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <ul className="tag-list" aria-label={`${project.name} status`}>
        {project.tags.map((tag) => (
          <li className="tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
