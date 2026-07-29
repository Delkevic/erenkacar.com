type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
}: SectionHeaderProps) {
  return (
    <header className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}
