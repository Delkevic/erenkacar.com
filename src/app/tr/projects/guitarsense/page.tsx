import { GuitarSenseView } from "@/components/views/guitarsense";
import { turkish } from "@/i18n/tr";
import { createProjectMetadata } from "@/i18n/metadata";

export const metadata = createProjectMetadata("guitarsense", "tr", turkish);

export default function Page() {
  return <GuitarSenseView dictionary={turkish} />;
}
