import { NotFoundView } from "@/components/views/not-found";
import { english } from "@/i18n/en";

export default function NotFound() {
  return <NotFoundView dictionary={english} />;
}
