import { Container } from "@/components/ui/container";

export function OtherWork() {
  return (
    <section className="section" aria-labelledby="other-work-title">
      <Container>
        <div className="other-work">
          <div>
            <h2 id="other-work-title">Other work</h2>
            <p>
              Additional engineering work and smaller experiments will be added
              here after the project list and supporting material are reviewed.
            </p>
          </div>
          <span className="other-work__status">Archive in preparation</span>
        </div>
      </Container>
    </section>
  );
}
