import Link from "next/link";
import { InterfaceIcon } from "@/components/ui/interface-icon";
import { ScreenshotFigure } from "@/components/ui/screenshot-figure";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className={`project-card${project.image ? " project-card--with-image" : ""}`}
    >
      <span className="project-card__index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      {project.image ? (
        <ScreenshotFigure
          image={project.image}
          className="project-card__visual"
          sizes="(max-width: 780px) calc(100vw - 4.7rem), 34rem"
        />
      ) : null}
      <p className="project-kicker">
        <InterfaceIcon name={project.image ? "layers" : "automation"} />
        {project.eyebrow}
      </p>
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
      {project.href ? (
        <Link className="text-link project-card__link" href={project.href}>
          View project
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </article>
  );
}
