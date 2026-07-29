import {
  createSocialImage,
  socialImageSize,
} from "@/components/metadata/social-card";

export const alt =
  "GuitarSense — Real-time desktop guitar practice platform";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage({
    title: "GuitarSense",
    label: "Real-time desktop guitar practice platform",
    accent: "#c6a064",
  });
}
