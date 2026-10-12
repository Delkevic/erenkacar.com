import {
  createSocialImage,
  socialImageSize,
} from "@/components/metadata/social-card";
import { english } from "@/i18n/en";

export const alt = english.social.nexora.alt;
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage({
    copy: english.social,
    title: english.social.nexora.title,
    label: english.social.nexora.label,
    accent: "#70b9ae",
  });
}
