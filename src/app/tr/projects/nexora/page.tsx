import { NexoraView } from "@/components/views/nexora";
import { turkish } from "@/i18n/tr";
import { createProjectMetadata } from "@/i18n/metadata";

export const metadata = createProjectMetadata("nexora", "tr", turkish);

export default function Page() {
  return <NexoraView dictionary={turkish} />;
}
