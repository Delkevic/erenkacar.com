import type { DictionaryProps } from "@/i18n/schema";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AutomationFlow } from "@/components/ui/automation-flow";
import { Container } from "@/components/ui/container";

export function GradeWatcherView({ dictionary }: DictionaryProps) {
  const copy = dictionary.caseStudies.gradeWatcher;
  const common = dictionary.caseStudies.common;
  const { gradeWatcherCaseStudy } = dictionary.content;

  return (
    <>
      <SiteHeader dictionary={dictionary} page="grade-watcher" />
      <main
        id="main-content"
        className="case-study case-study--grade-watcher"
      >
        <Container>
          <header className="case-hero">
            <Link className="text-link back-link" href={dictionary.links.work}>
              <span aria-hidden="true">←</span>
              {common.back}
            </Link>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.name}</h1>
            <p className="case-hero__intro">{copy.introduction}</p>
            <ul className="case-facts" aria-label={common.facts}>
              {gradeWatcherCaseStudy.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </header>

          <AutomationFlow
            stages={gradeWatcherCaseStudy.architecture}
            label={copy.architectureLabel}
          />

          <div className="case-sections grade-watcher-sections">
            <section className="case-section">
              <h2>{common.overview}</h2>
              <div className="case-section__content">
                <p>{gradeWatcherCaseStudy.overview}</p>
              </div>
            </section>

            <section className="case-section">
              <h2>{common.role}</h2>
              <div className="case-section__content">
                <p>{gradeWatcherCaseStudy.role}</p>
              </div>
            </section>

            <section className="case-section case-section--full">
              <h2>{copy.workflow}</h2>
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
              <h2>{common.decisions}</h2>
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
              <h2>{copy.status}</h2>
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
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
