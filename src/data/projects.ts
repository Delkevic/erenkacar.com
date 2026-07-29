import type { OtherWorkItem, Project } from "@/types/content";

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
      "A full-stack social platform with secure authentication, two-factor verification, real-time messaging, personalized content discovery and AI-assisted content tagging.",
    tags: ["React", "Go", "Gin", "MySQL", "WebSocket", "Gemini API"],
    proofPoints: [
      "Real-time messaging",
      "Two-factor authentication",
      "Personalized feed and discovery",
    ],
    href: null,
    featured: false,
  },
  {
    name: "Grade Watcher",
    eyebrow: "Browser automation",
    summary:
      "A private automation system that monitors academic result changes and sends Telegram notifications when new results are detected.",
    tags: ["Python", "Playwright", "Telegram Bot API", "Automation"],
    proofPoints: [
      "Authenticated session handling",
      "Change detection",
      "Telegram notifications",
    ],
    href: null,
    featured: false,
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
