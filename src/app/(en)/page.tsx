import { HomeView } from "@/components/views/home";
import { english } from "@/i18n/en";

export default function Page() {
  return <HomeView dictionary={english} />;
}
