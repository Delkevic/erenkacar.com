import type {
  CaseStudyChallenge,
  CaseStudyFeature,
} from "@/types/content";

export const guitarSenseCaseStudy = {
  introduction:
    "A desktop guitar practice application combining real-time audio processing, guitar effects and interactive practice tools.",
  facts: [
    "Desktop application",
    "TÜBİTAK 2209-A supported",
    "Windows beta",
    "Electron + Python",
  ],
  overview:
    "GuitarSense brings guitar audio processing and interactive practice into a desktop application designed for responsive, hands-on use.",
  role:
    "I designed and developed the application's desktop interface, audio-engine integration and core practice workflows, with additional work on performance, packaging and application reliability.",
  capabilities: [
    {
      title: "Real-time guitar audio",
      description: "Guitar audio processing with configurable tones and effects.",
    },
    {
      title: "Interactive practice",
      description: "Tablature-based practice tools with real-time feedback.",
    },
    {
      title: "Desktop application",
      description:
        "A packaged Windows application integrating multiple software components into a consistent user experience.",
    },
  ] satisfies CaseStudyFeature[],
  highlights: [
    {
      title: "Real-time audio performance",
      body:
        "Audio configurations were benchmarked across ASIO and WASAPI backends. In tested 64-sample configurations, backend-reported values were approximately 6 ms with ASIO and 46 ms with WASAPI.",
      qualification:
        "These are backend-reported values, not independently measured end-to-end round-trip latency.",
    },
    {
      title: "Desktop integration",
      body:
        "Integrated an Electron-based interface with a Python audio-processing backend.",
    },
    {
      title: "Interface responsiveness",
      body:
        "Optimized high-frequency UI updates to maintain responsive interactions during active practice.",
    },
    {
      title: "Packaging and reliability",
      body:
        "Prepared and validated a distributable Windows beta with attention to application reliability.",
    },
  ] satisfies CaseStudyChallenge[],
  technologies: [
    "Electron",
    "React",
    "TypeScript",
    "Python",
    "ZMQ",
    "PortAudio",
    "ASIO",
    "WASAPI",
  ],
  results: [
    "TÜBİTAK 2209-A support",
    "Packaged Windows beta",
    "Backend-reported audio values of approximately 6 ms with ASIO and 46 ms with WASAPI in tested 64-sample configurations",
  ],
} as const;
