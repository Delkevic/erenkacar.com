import { HomeView } from "@/components/views/home";
import { turkish } from "@/i18n/tr";

export default function Page() {
  return <HomeView dictionary={turkish} />;
}
