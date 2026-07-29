type ArchitectureFlowProps = {
  steps: readonly string[];
  runtimes: readonly string[];
};

export function ArchitectureFlow({
  steps,
  runtimes,
}: ArchitectureFlowProps) {
  return (
    <div className="architecture">
      <ol className="architecture__flow" aria-label="Application architecture">
        {steps.map((step, index) => (
          <li className="architecture__step" key={step}>
            <span>{step}</span>
            {index < steps.length - 1 ? (
              <span className="architecture__arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <section
        className="architecture__runtimes"
        aria-labelledby="runtime-groups-title"
      >
        <h3 id="runtime-groups-title">Runtime separation</h3>
        <ul>
          {runtimes.map((runtime) => (
            <li key={runtime}>{runtime}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
