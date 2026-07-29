import {
  createSocialImage,
  socialImageSize,
} from "@/components/metadata/social-card";

export const alt = "Eren Kaçar — Software Engineer";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage({
    title: "Eren Kaçar",
    label: "Software Engineer",
  });
}
