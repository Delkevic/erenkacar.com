export type InterfaceIconName =
  | "automation"
  | "code"
  | "database"
  | "desktop"
  | "layers"
  | "mail"
  | "server"
  | "waveform"
  | "workflow";

type InterfaceIconProps = {
  name: InterfaceIconName;
  className?: string;
};

const iconPaths: Record<InterfaceIconName, React.ReactNode> = {
  automation: (
    <>
      <path d="M7.2 7.2a4 4 0 1 1-.7 5.7" />
      <path d="M7.2 3.8v3.4H3.8M12.8 20.2v-3.4h3.4" />
    </>
  ),
  code: <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-3.5-9-1 12" />,
  database: (
    <>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
    </>
  ),
  desktop: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8m-4-4v4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3-9 5 9 5 9-5-9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  server: (
    <>
      <rect x="4" y="3" width="16" height="7" rx="2" />
      <rect x="4" y="14" width="16" height="7" rx="2" />
      <path d="M8 6.5h.01M8 17.5h.01M12 6.5h5M12 17.5h5" />
    </>
  ),
  waveform: (
    <path d="M3 12h3l2-6 3 12 3-10 2 4h5" />
  ),
  workflow: (
    <>
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="14" width="6" height="6" rx="1.5" />
      <path d="M9 7h4a4 4 0 0 1 4 4v3M15 17h-4a4 4 0 0 1-4-4v-3" />
    </>
  ),
};

export function InterfaceIcon({ name, className }: InterfaceIconProps) {
  const iconClassName = ["interface-icon", className].filter(Boolean).join(" ");

  return (
    <svg
      className={iconClassName}
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconPaths[name]}
    </svg>
  );
}
