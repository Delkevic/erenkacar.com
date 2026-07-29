export type Project = {
  name: string;
  eyebrow: string;
  summary: string;
  tags: string[];
  proofPoints: string[];
  href: string | null;
  featured: boolean;
};

export type ExperienceEntry = {
  organization: string;
  role: string;
  date: string | null;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export type ToolkitGroup = {
  title: string;
  items: string[];
};

export type OtherWorkItem = {
  name: string;
  summary: string;
  tags: string[];
};

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type CaseStudyChallenge = {
  title: string;
  body: string;
  qualification?: string;
};
