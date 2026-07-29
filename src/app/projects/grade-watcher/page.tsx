import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AutomationFlow } from "@/components/ui/automation-flow";
import { Container } from "@/components/ui/container";
import { gradeWatcherCaseStudy } from "@/data/grade-watcher";

const description =
  "A private Playwright automation project for monitoring academic result changes and sending Telegram notifications.";

export const metadata: Metadata = {
  title: "Grade Watcher",
  description,
  alternates: {
    canonical: "/projects/grade-watcher",
  },
  openGraph: {
    title: "Grade Watcher — Eren Kaçar",
    description,
    url: "/projects/grade-watcher",
  },
};

export default function GradeWatcherPage() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="case-study case-study--grade-watcher"
      >
        <Container>
          <header className="case-hero">
            <Link className="text-link back-link" href="/#work">
              <span aria-hidden="true">←</span>
              Back to selected work
            </Link>
            <p className="eyebrow">BROWSER AUTOMATION</p>
            <h1>Grade Watcher</h1>
            <p className="case-hero__intro">
              A private automation tool that monitors changes in academic
              results and sends Telegram notifications when new results are
              detected.
            </p>
            <ul className="case-facts" aria-label="Project facts">
              {gradeWatcherCaseStudy.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </header>

          <AutomationFlow
            stages={gradeWatcherCaseStudy.architecture}
            label="Grade Watcher automation architecture"
          />

          <div className="case-sections grade-watcher-sections">
            <section className="case-section">
              <h2>Overview</h2>
              <div className="case-section__content">
                <p>{gradeWatcherCaseStudy.overview}</p>
              </div>
            </section>

            <section className="case-section">
              <h2>My role</h2>
              <div className="case-section__content">
                <p>{gradeWatcherCaseStudy.role}</p>
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>How it works</h2>
              <ol className="grade-process">
                {gradeWatcherCaseStudy.workflow.map((step, index) => (
                  <li key={step.title}>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="case-section case-section--full">
              <h2>Engineering decisions</h2>
              <div className="case-section__content challenge-grid">
                {gradeWatcherCaseStudy.decisions.map((decision) => (
                  <article className="challenge-card" key={decision.title}>
                    <h3>{decision.title}</h3>
                    <p>{decision.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="case-section">
              <h2>Current status</h2>
              <div className="case-section__content grade-status">
                <ul className="results-list">
                  {gradeWatcherCaseStudy.status.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>{gradeWatcherCaseStudy.statusSummary}</p>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
