import {
  createSocialImage,
  socialImageSize,
} from "@/components/metadata/social-card";

export const alt = "Nexora — Full-stack social platform";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage({
    title: "Nexora",
    label: "Full-stack social platform",
    accent: "#70b9ae",
  });
}
