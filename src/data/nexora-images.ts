import type { ScreenshotImage } from "@/types/screenshot";

export type NexoraImage = ScreenshotImage & {
  placement: "homepage" | "case-primary" | "walkthrough";
  replaceBeforeLaunch: boolean;
  replacementReason: string | null;
};

export const nexoraImages = {
  homeFeed: {
    src: "/images/projects/nexora/ana-ekran.png",
    width: 1881,
    height: 856,
    alt: "Nexora home feed with AI-assisted content analysis and a Reels preview",
    caption: null,
    placement: "homepage",
    frame: "contain",
    replaceBeforeLaunch: false,
    replacementReason: null,
  },
  explore: {
    src: "/images/projects/nexora/feed.png",
    width: 1882,
    height: 848,
    alt: "Nexora Explore interface with filters, popular tags and content grid",
    caption:
      "Filters and popular tags provide multiple entry points into content browsing.",
    placement: "case-primary",
    frame: "natural",
    replaceBeforeLaunch: false,
    replacementReason: null,
  },
  authentication: {
    src: "/images/projects/nexora/2fa.png",
    width: 1333,
    height: 769,
    alt: "Nexora email verification interface requesting a six-digit code",
    caption: "Verification makes account activation an explicit user step.",
    placement: "walkthrough",
    frame: "natural",
    replaceBeforeLaunch: false,
    replacementReason: null,
  },
  messaging: {
    src: "/images/projects/nexora/messaging.png",
    width: 1262,
    height: 855,
    alt: "Nexora direct-message interface showing an online demo conversation and realtime message updates",
    caption:
      "Firebase-backed direct messaging with presence, delivery state and realtime conversation updates.",
    placement: "walkthrough",
    frame: "natural",
    replaceBeforeLaunch: false,
    replacementReason: null,
  },
} as const satisfies Record<string, NexoraImage>;
