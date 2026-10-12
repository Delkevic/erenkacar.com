import type { OtherWorkItem, Project } from "@/types/content";
import { nexoraImages } from "@/data/nexora-images";

export const projects = [
  {
    id: "guitarsense",
    name: "GuitarSense",
    eyebrow: "Flagship project",
    summary:
      "A desktop guitar practice application combining real-time audio processing, guitar effects and interactive practice tools.",
    tags: ["Electron", "React", "TypeScript", "Python", "ZMQ", "PortAudio"],
    proofPoints: [
      "TÜBİTAK 2209-A supported",
      "Packaged Windows beta",
      "Real-time audio processing",
    ],
    href: "/projects/guitarsense",
    featured: true,
  },
  {
    id: "nexora",
    name: "Nexora",
    eyebrow: "Full-stack social platform",
    summary:
      "A full-stack social platform with secure account flows, Firebase realtime messaging, social discovery and AI-assisted content analysis.",
    tags: ["React", "Go", "Gin", "MySQL", "Firebase", "Gemini API"],
    proofPoints: [
      "Secure account flows",
      "Firebase realtime messaging",
      "AI-assisted content analysis and discovery",
    ],
    href: "/projects/nexora",
    featured: false,
    image: nexoraImages.homeFeed,
  },
  {
    id: "grade-watcher",
    name: "Grade Watcher",
    eyebrow: "Browser automation",
    summary:
      "A private browser automation system that monitors academic result changes and sends Telegram notifications when new results are detected.",
    tags: ["Python", "Playwright", "Telegram Bot API", "Automation"],
    proofPoints: [
      "Authenticated session handling",
      "Result change detection",
      "Duplicate-safe notifications",
    ],
    href: "/projects/grade-watcher",
    featured: false,
    visual: "automation-flow",
  },
] as const satisfies readonly Project[];

export const featuredProject = projects[0];
export const selectedProjects = [projects[1], projects[2]] as const;

export const otherWork = [
  {
    name: "Medipan Medical Center",
    summary: "A responsive corporate website created for a local medical center.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    name: "Cleaning Tracking System",
    summary:
      "A role-based internal application for assigning, tracking and managing cleaning operations.",
    tags: ["React", "Go", "MySQL"],
  },
  {
    name: "Android Sleep Alarm",
    summary:
      "An Android prototype that evaluates microphone-level windows and resets monitoring behavior after device unlock events.",
    tags: ["Kotlin", "Android", "Audio Monitoring"],
  },
] as const satisfies readonly OtherWorkItem[];
