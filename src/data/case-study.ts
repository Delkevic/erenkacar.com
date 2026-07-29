import type {
  CaseStudyChallenge,
  CaseStudyFeature,
} from "@/types/content";

export const guitarSenseCaseStudy = {
  facts: [
    "Desktop application",
    "TÜBİTAK 2209-A supported",
    "Windows beta",
    "Electron + Python",
  ],
  role:
    "I designed and implemented the application’s core software systems, including the Electron interface, Python audio-engine integration, practice tooling, runtime packaging, performance work and security hardening.",
  overview:
    "Guitar practice often requires separate tools for tablature, amplification, effects, metronome control, media playback and performance feedback. GuitarSense combines these workflows in a desktop application designed around active practice.",
  problem:
    "Practice workflows were fragmented across multiple applications. Real-time guitar audio and synchronized tablature needed to coexist without making the interface feel delayed, desktop distribution required Python and native audio dependencies to work outside the development environment, and imported media and project files required clear trust boundaries.",
  solution: [
    "Electron and React desktop interface",
    "Python audio engine",
    "ZMQ communication between application layers",
    "Real-time amp and effects workflow",
    "Tablature playback and editing",
    "Pitch-aware note validation and practice scoring",
    "Tempo and offset alignment",
    "Local and YouTube media-import workflows",
    "Modular runtime packaging",
  ],
  features: [
    {
      title: "Real-time guitar audio",
      description:
        "Amp and effects processing through the Python audio engine.",
    },
    {
      title: "Tablature workspace",
      description:
        "Playback, editing, tempo control, offset handling and count-in workflows.",
    },
    {
      title: "Practice feedback",
      description:
        "Pitch-aware note validation, accuracy, score and streak tracking.",
    },
    {
      title: "Media importing",
      description: "Local media and YouTube-oriented import workflows.",
    },
    {
      title: "Desktop packaging",
      description:
        "Packaged Windows beta with separated runtime responsibilities.",
    },
    {
      title: "Safety and recovery",
      description:
        "Runtime validation, constrained project-file access and rollback-aware installation.",
    },
  ] satisfies CaseStudyFeature[],
  architecture: [
    "React Renderer",
    "Electron Main Process",
    "ZMQ IPC",
    "Python Audio Engine",
    "PortAudio / ASIO / WASAPI",
  ],
  runtimes: ["Core Python", "Live Runtime", "AI Runtime Pack"],
  challenges: [
    {
      title: "Real-time audio and latency",
      body:
        "Audio behavior was evaluated across multiple backend and buffer configurations. In a tested 64-sample configuration, the backend reported approximately 6 ms with ASIO and approximately 46 ms with WASAPI.",
      qualification:
        "These are backend-reported values from tested configurations, not laboratory-measured end-to-end round-trip latency.",
    },
    {
      title: "Practice-view performance",
      body:
        "High-frequency playback and accuracy updates initially caused unnecessary rendering work. The practice view was moved toward event-driven updates, throttled realtime data and transform-focused visual movement.",
    },
    {
      title: "Packaging and runtime management",
      body:
        "The desktop build separates core, live-audio and AI runtime responsibilities. Runtime installation includes validation, staging, backup and rollback behavior rather than assuming development-machine dependencies exist.",
    },
    {
      title: "Security hardening",
      body:
        "Navigation, project-media access, runtime resolution and imported files were constrained with fail-closed policies, path validation, containment checks and safer child-process environments.",
    },
  ] satisfies CaseStudyChallenge[],
  results: [
    "Packaged Windows beta produced",
    "TÜBİTAK 2209-A support received",
    "Library navigation measured at approximately 35–80 ms after capability caching and duplicate-request reduction",
    "Backend-reported audio values of approximately 6 ms with ASIO and 46 ms with WASAPI in tested 64-sample configurations",
    "Runtime installation supports validation, backup and rollback behavior",
  ],
} as const;
