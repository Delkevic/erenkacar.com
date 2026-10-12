import { NotFoundView } from "@/components/views/not-found";
import { turkish } from "@/i18n/tr";

export default function NotFound() {
  return <NotFoundView dictionary={turkish} />;
}
