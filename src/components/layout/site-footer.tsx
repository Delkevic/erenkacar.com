import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__identity">
          <span>{siteConfig.name} — Software Engineer</span>
          <span>Desktop · Web · Real-time systems</span>
        </div>
        <nav className="site-footer__links" aria-label="Footer profile links">
          <ExternalLink href={siteConfig.githubUrl}>GitHub</ExternalLink>
          <ExternalLink href={siteConfig.linkedinUrl}>LinkedIn</ExternalLink>
          <a href={siteConfig.contactUrl}>Email</a>
        </nav>
      </Container>
    </footer>
  );
}
