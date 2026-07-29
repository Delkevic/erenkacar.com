import type { ScreenshotImage } from "@/types/screenshot";

export type NexoraImage = ScreenshotImage & {
  placement: "homepage" | "case-primary" | "walkthrough";
  replaceBeforeLaunch: boolean;
  replacementReason: string | null;
};

export const nexoraImages = {
  homeFeed: {
    src: "/images/projects/nexora/ana-ekran.jpg",
    width: 1280,
    height: 700,
    alt: "Nexora home feed with AI-assisted content analysis and a Reels preview",
    caption: null,
    placement: "homepage",
    frame: "contain",
    replaceBeforeLaunch: true,
    replacementReason:
      "Contains third-party artwork or media used as test content.",
  },
  explore: {
    src: "/images/projects/nexora/feed.jpg",
    width: 1280,
    height: 604,
    alt: "Nexora Explore interface with filters, popular tags and content grid",
    caption:
      "Filters and popular tags provide multiple entry points into content browsing.",
    placement: "case-primary",
    frame: "natural",
    replaceBeforeLaunch: true,
    replacementReason:
      "Contains third-party artwork or media used as test content.",
  },
  authentication: {
    src: "/images/projects/nexora/2fa.jpg",
    width: 1041,
    height: 727,
    alt: "Nexora email verification interface requesting a six-digit code",
    caption: "Verification makes account activation an explicit user step.",
    placement: "walkthrough",
    frame: "natural",
    replaceBeforeLaunch: true,
    replacementReason:
      "Contains an intentionally unrealistic test email address.",
  },
  messaging: {
    src: "/images/projects/nexora/mesaj.jpg",
    width: 1280,
    height: 700,
    alt: "Nexora messaging interface with conversation list and direct messages",
    caption:
      "Conversation navigation, presence and direct messages share one focused workspace.",
    placement: "walkthrough",
    frame: "natural",
    replaceBeforeLaunch: true,
    replacementReason:
      "Contains identifiable test-user names or profile imagery.",
  },
} as const satisfies Record<string, NexoraImage>;
