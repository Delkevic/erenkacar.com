import {
  createSocialImage,
  socialImageSize,
} from "@/components/metadata/social-card";
import { english } from "@/i18n/en";

export const alt = english.social["grade-watcher"].alt;
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage({
    copy: english.social,
    title: english.social["grade-watcher"].title,
    label: english.social["grade-watcher"].label,
    accent: "#99cfc7",
  });
}
