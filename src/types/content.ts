export type Project = {
  name: string;
  summary: string;
  tags: string[];
  href: string | null;
  featured: boolean;
  needsReview: boolean;
};

export type ExperienceEntry = {
  organization: string;
  role: string;
  summary: string;
  technologies: string[];
  needsReview: boolean;
};

export type ToolkitGroup = {
  title: string;
  items: string[];
};
