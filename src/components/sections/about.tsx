import type { DictionaryProps } from "@/i18n/schema";
import { Container } from "@/components/ui/container";

export function About({ dictionary }: DictionaryProps) {
  const copy = dictionary.home.about;

  return (
    <section
      className="section section--bordered"
      id="about"
      aria-labelledby="about-title"
    >
      <Container className="prose-grid">
        <header>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title" id="about-title">{copy.title}</h2>
        </header>
        <div className="prose-grid__body">
          <p>{copy.introduction}</p>
          <p>{copy.approach}</p>
        </div>
      </Container>
    </section>
  );
}
