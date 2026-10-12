import { createSocialImage } from "@/components/metadata/social-card";
import { turkish } from "@/i18n/tr";

export const dynamic = "force-static";

export function GET() {
  return createSocialImage({
    locale: "tr",
    copy: turkish.social,
    title: turkish.social["guitarsense"].title,
    label: turkish.social["guitarsense"].label,
    accent: "#c6a064",
  });
}
