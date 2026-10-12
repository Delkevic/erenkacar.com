import { GradeWatcherView } from "@/components/views/grade-watcher";
import { turkish } from "@/i18n/tr";
import { createProjectMetadata } from "@/i18n/metadata";

export const metadata = createProjectMetadata("grade-watcher", "tr", turkish);

export default function Page() {
  return <GradeWatcherView dictionary={turkish} />;
}
