import {
  createSocialImage,
  socialImageSize,
} from "@/components/metadata/social-card";
import { english } from "@/i18n/en";

export const alt = english.social.guitarsense.alt;
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage({
    copy: english.social,
    title: english.social.guitarsense.title,
    label: english.social.guitarsense.label,
    accent: "#c6a064",
  });
}
