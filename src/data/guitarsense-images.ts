export type GuitarSenseImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string | null;
  placement: "homepage" | "case-primary" | "capabilities";
  frame: "contain" | "natural" | "taskbar-crop";
  replaceBeforeLaunch: boolean;
};

export const guitarSenseImages = {
  library: {
    src: "/images/projects/guitarsense/library.png",
    width: 1876,
    height: 952,
    alt: "GuitarSense Library showing saved practice projects",
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
    alt: "GuitarSense Preset Editor with guitar tone and effects controls",
    caption: "Guitar tone and effects controls.",
    placement: "capabilities",
    frame: "natural",
    replaceBeforeLaunch: false,
  },
} as const satisfies Record<string, GuitarSenseImage>;
