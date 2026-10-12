import { NexoraView } from "@/components/views/nexora";
import { english } from "@/i18n/en";
import { createProjectMetadata } from "@/i18n/metadata";

export const metadata = createProjectMetadata("nexora", "en", english);

export default function Page() {
  return <NexoraView dictionary={english} />;
}
