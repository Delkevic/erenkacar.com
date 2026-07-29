import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    name: "GuitarSense",
    summary:
      "The flagship project: an end-to-end product spanning desktop, web, and real-time engineering. The full case study and verified technical details are in review.",
    tags: ["Flagship product", "Case study in progress"],
    href: "/projects/guitarsense",
    featured: true,
    needsReview: true,
  },
  {
    name: "Nexora",
    summary:
      "Project context, responsibilities, technical decisions, and supporting visuals will be added after content review.",
    tags: ["Details in review"],
    href: null,
    featured: false,
    needsReview: true,
  },
  {
    name: "Grade Watcher",
    summary:
      "Project context, responsibilities, technical decisions, and supporting visuals will be added after content review.",
    tags: ["Details in review"],
    href: null,
    featured: false,
    needsReview: true,
  },
];

export const featuredProject = projects.find((project) => project.featured)!;
export const selectedProjects = projects.filter((project) => !project.featured);
