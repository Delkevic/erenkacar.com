import { GuitarSenseView } from "@/components/views/guitarsense";
import { english } from "@/i18n/en";
import { createProjectMetadata } from "@/i18n/metadata";

export const metadata = createProjectMetadata("guitarsense", "en", english);

export default function Page() {
  return <GuitarSenseView dictionary={english} />;
}
