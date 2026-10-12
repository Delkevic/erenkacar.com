import Link from "next/link";
import { AutomationFlow } from "@/components/ui/automation-flow";
import { InterfaceIcon } from "@/components/ui/interface-icon";
import { ScreenshotFigure } from "@/components/ui/screenshot-figure";
import { labelWithName } from "@/i18n/format";
import type { DictionaryProps } from "@/i18n/schema";

type ProjectCardProps = DictionaryProps & {
  project: DictionaryProps["dictionary"]["content"]["selectedProjects"][number];
  index: number;
};

export function ProjectCard({ dictionary, project, index }: ProjectCardProps) {
  const image = "image" in project ? project.image : undefined;
  const visual = "visual" in project ? project.visual : undefined;
  return (
    <article
      className={`project-card${
        image || visual ? " project-card--with-visual" : ""
      }`}
    >
      <span className="project-card__index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      {image ? (
        <ScreenshotFigure
          image={image}
          className="project-card__visual"
          sizes="(max-width: 780px) calc(100vw - 4.7rem), 34rem"
        />
      ) : null}
      {visual === "automation-flow" ? (
        <AutomationFlow
          stages={dictionary.content.gradeWatcherCaseStudy.homepageFlow}
          label={dictionary.shared.homepageAutomationLabel}
          variant="compact"
        />
      ) : null}
      <p className="project-kicker">
        <InterfaceIcon name={image ? "layers" : "automation"} />
        {project.eyebrow}
      </p>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <ul className="proof-list" aria-label={labelWithName(dictionary.shared.featurePoints, project.name)}>
        {project.proofPoints.map((proofPoint) => (
          <li key={proofPoint}>{proofPoint}</li>
        ))}
      </ul>
      <ul className="tag-list" aria-label={labelWithName(dictionary.shared.technologies, project.name)}>
        {project.tags.map((tag) => (
          <li className="tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      {project.href ? (
        <Link className="text-link project-card__link" href={project.href}>
          {dictionary.shared.viewProject}
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </article>
  );
}
