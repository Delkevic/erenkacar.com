import {
  createSocialImage,
  socialImageSize,
} from "@/components/metadata/social-card";

export const alt =
  "GuitarSense — Desktop guitar practice application";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage({
    title: "GuitarSense",
    label: "Desktop guitar practice application",
    accent: "#c6a064",
  });
}
