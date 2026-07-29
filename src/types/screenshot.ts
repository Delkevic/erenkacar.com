export type ScreenshotFrame = "contain" | "natural" | "taskbar-crop";

export type ScreenshotImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string | null;
  frame: ScreenshotFrame;
};
