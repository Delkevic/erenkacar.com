import { createSocialImage } from "@/components/metadata/social-card";
import { turkish } from "@/i18n/tr";

export const dynamic = "force-static";

export function GET() {
  return createSocialImage({
    locale: "tr",
    copy: turkish.social,
    title: turkish.social["home"].title,
    label: turkish.social["home"].label,
  });
}
