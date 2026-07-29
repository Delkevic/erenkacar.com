import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { guitarSenseSections } from "@/data/case-study";

export const metadata: Metadata = {
  title: "GuitarSense",
  description:
    "A structured placeholder for the forthcoming GuitarSense engineering case study.",
  alternates: {
    canonical: "/projects/guitarsense",
  },
  openGraph: {
    title: "GuitarSense — Eren Kaçar",
    description:
      "A structured placeholder for the forthcoming GuitarSense engineering case study.",
    url: "/projects/guitarsense",
  },
};

export default function GuitarSensePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Container>
          <header className="case-hero">
            <Link className="text-link back-link" href="/#work">
              <span aria-hidden="true">←</span>
              Back to selected work
            </Link>
            <p className="eyebrow">Flagship project · Case study in progress</p>
            <h1>GuitarSense</h1>
            <p className="case-hero__intro">
              This page establishes the case-study structure. Reviewed product
              copy, architecture details, screenshots, and measured results will
              be added in a later sprint.
            </p>
          </header>
          <div
            className="case-placeholder"
            role="img"
            aria-label="Placeholder for future GuitarSense case-study imagery"
          >
            Case-study visual in review
          </div>
          <ol className="case-sections">
            {guitarSenseSections.map((section) => (
              <li className="case-section" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
