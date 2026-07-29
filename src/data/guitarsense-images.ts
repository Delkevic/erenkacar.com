export type GuitarSenseImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string | null;
  placement: "homepage" | "case-primary" | "walkthrough" | "challenge";
  frame: "contain" | "natural" | "taskbar-crop";
  replaceBeforeLaunch: boolean;
};

export const guitarSenseImages = {
  library: {
    src: "/images/projects/guitarsense/library.png",
    width: 1876,
    height: 952,
    alt: "GuitarSense project library showing saved practice projects and readiness states",
    caption: null,
    placement: "homepage",
    frame: "contain",
    replaceBeforeLaunch: false,
  },
  practiceView: {
    src: "/images/projects/guitarsense/practice-view.png",
    width: 1897,
    height: 943,
    alt: "GuitarSense Practice View with tablature, playback controls and practice feedback",
    caption: null,
    placement: "case-primary",
    frame: "contain",
    replaceBeforeLaunch: false,
  },
  presetEditor: {
    src: "/images/projects/guitarsense/preset-editor.png",
    width: 935,
    height: 904,
    alt: "GuitarSense preset editor with output level and guitar effects chain controls",
    caption:
      "Custom preset creation with output control and an editable effects chain.",
    placement: "walkthrough",
    frame: "natural",
    replaceBeforeLaunch: false,
  },
  importWorkflow: {
    src: "/images/projects/guitarsense/import-workflow.png",
    width: 1478,
    height: 948,
    alt: "GuitarSense import screen showing local, YouTube and AI-assisted import options",
    caption:
      "Local and YouTube-oriented import workflows with separate core, live-audio and AI runtime states.",
    placement: "walkthrough",
    frame: "natural",
    replaceBeforeLaunch: false,
  },
  audioSettings: {
    src: "/images/projects/guitarsense/audio-settings.png",
    width: 673,
    height: 454,
    alt: "GuitarSense advanced audio settings with backend, device and buffer-size controls",
    caption:
      "Audio backend, device, buffer-size and synchronization controls used during backend testing.",
    placement: "challenge",
    frame: "natural",
    replaceBeforeLaunch: false,
  },
  practiceSummary: {
    src: "/images/projects/guitarsense/practice-summary.png",
    width: 1155,
    height: 906,
    alt: "GuitarSense practice summary showing session statistics and recommended practice sections",
    caption:
      "Session summaries surface accuracy, streaks, techniques and recommended practice sections.",
    placement: "walkthrough",
    frame: "natural",
    replaceBeforeLaunch: true,
  },
} as const satisfies Record<string, GuitarSenseImage>;
