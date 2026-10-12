import type { ToolkitGroup } from "@/types/content";

export const toolkit = [
  {
    id: "languages",
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "Kotlin", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Responsive UI"],
  },
  {
    id: "backend-data",
    title: "Backend and data",
    items: ["Go", "Gin", "REST APIs", "MySQL", "GORM"],
  },
  {
    id: "desktop-systems",
    title: "Desktop and systems",
    items: ["Electron", "IPC", "ZMQ", "Linux", "Windows Packaging"],
  },
  {
    id: "audio-automation",
    title: "Audio and automation",
    items: ["PortAudio", "WASAPI", "ASIO", "Playwright", "Telegram Bot API"],
  },
] as const satisfies readonly ToolkitGroup[];
