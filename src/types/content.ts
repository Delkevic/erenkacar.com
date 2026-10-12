import type { ScreenshotImage } from "@/types/screenshot";

export type Project = {
  id: "guitarsense" | "nexora" | "grade-watcher";
  name: string;
  eyebrow: string;
  summary: string;
  tags: readonly string[];
  proofPoints: readonly string[];
  href: string | null;
  featured: boolean;
  image?: ScreenshotImage;
  visual?: "automation-flow";
};

export type ExperienceEntry = {
  organization: string;
  role: string;
  date: string | null;
  summary: string;
  highlights: readonly string[];
  technologies: readonly string[];
};

export type ToolkitGroup = {
  id: "languages" | "frontend" | "backend-data" | "desktop-systems" | "audio-automation";
  title: string;
  items: readonly string[];
};

export type OtherWorkItem = {
  name: string;
  summary: string;
  tags: readonly string[];
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
