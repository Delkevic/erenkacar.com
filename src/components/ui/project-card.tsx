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
      <p className="project-kicker">{project.eyebrow}</p>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <ul className="proof-list" aria-label={`${project.name} feature points`}>
        {project.proofPoints.map((proofPoint) => (
          <li key={proofPoint}>{proofPoint}</li>
        ))}
      </ul>
      <ul className="tag-list" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <li className="tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
