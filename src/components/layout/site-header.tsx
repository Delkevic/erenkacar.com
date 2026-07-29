import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link className="brand" href="/" aria-label="Eren Kaçar, home">
          <span className="brand__mark" aria-hidden="true">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 40 46"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 2.5C30.8 2.5 37 6.9 37 15.2c0 9.7-8.8 21.2-17 28.3C11.8 36.4 3 24.9 3 15.2 3 6.9 9.2 2.5 20 2.5Z" />
            </svg>
            <span>EK</span>
          </span>
          <span>Eren Kaçar</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <ul>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
