import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <span>{siteConfig.name} — Software Engineer</span>
        <span>Desktop · Web · Real-time systems</span>
      </Container>
    </footer>
  );
}
