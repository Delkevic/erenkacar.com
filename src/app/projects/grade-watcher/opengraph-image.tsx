import {
  createSocialImage,
  socialImageSize,
} from "@/components/metadata/social-card";

export const alt = "Grade Watcher — Private browser automation";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage({
    title: "Grade Watcher",
    label: "Private browser automation",
    accent: "#99cfc7",
  });
}
