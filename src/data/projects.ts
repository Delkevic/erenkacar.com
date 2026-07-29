import type { OtherWorkItem, Project } from "@/types/content";
import { nexoraImages } from "@/data/nexora-images";

export const projects: Project[] = [
  {
    name: "GuitarSense",
    eyebrow: "Flagship project",
    summary:
      "A desktop guitar practice platform combining real-time audio processing, tablature playback, pitch-aware practice feedback, media importing and a distributable Windows runtime.",
    tags: ["Electron", "React", "TypeScript", "Python", "ZMQ", "PortAudio"],
    proofPoints: [
      "TÜBİTAK 2209-A supported",
      "Packaged Windows beta",
      "Real-time audio and practice engine",
    ],
    href: "/projects/guitarsense",
    featured: true,
  },
  {
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
];

export const featuredProject = projects.find((project) => project.featured)!;
export const selectedProjects = projects.filter((project) => !project.featured);

export const otherWork: OtherWorkItem[] = [
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
];
