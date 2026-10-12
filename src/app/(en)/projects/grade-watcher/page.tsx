import { GradeWatcherView } from "@/components/views/grade-watcher";
import { english } from "@/i18n/en";
import { createProjectMetadata } from "@/i18n/metadata";

export const metadata = createProjectMetadata("grade-watcher", "en", english);

export default function Page() {
  return <GradeWatcherView dictionary={english} />;
}
