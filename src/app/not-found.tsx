import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found-page" id="main-content">
        <Container>
          <div className="not-found-panel">
            <p className="eyebrow">Route unavailable</p>
            <h1>
              <span>404</span>
              Page not found
            </h1>
            <p>
              The page you requested does not exist. Return home or continue
              with the selected project case studies.
            </p>
            <div className="not-found-actions">
              <Link className="button button--primary" href="/">
                Back to homepage
              </Link>
              <Link className="button" href="/#work">
                View selected work
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
