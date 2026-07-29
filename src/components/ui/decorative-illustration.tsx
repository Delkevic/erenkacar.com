type DecorativeIllustrationProps = {
  variant: "headstock" | "cable";
};

export function DecorativeIllustration({
  variant,
}: DecorativeIllustrationProps) {
  const illustration =
    variant === "headstock" ? (
      <>
        <path d="M115 354 132 166l56-94c10-17 31-24 50-15l12 6-11 118-70 16-18 157" />
        <path d="m132 166 37 31M151 354l-36-4M177 183l48-107" />
        <circle cx="202" cy="85" r="5" />
        <circle cx="218" cy="110" r="5" />
        <circle cx="226" cy="139" r="5" />
        <path d="m198 84-24-8m40 34-25-4m33 31-25 1" />
        <path d="m174 76-18-6m33 36-19-3m27 35-19 2" />
        <path d="M137 184h36M135 205h34M133 226h33M131 247h33" />
      </>
    ) : (
      <>
        <path d="M14 210c76-43 153-36 207-11 25 12 44 13 68 3" />
        <path d="m286 204 24-20 28 32-24 20z" />
        <path d="m310 184 15-13 28 32-15 13M325 171l10-8 13 15-10 8" />
        <path d="m335 163 8-7M343 156l10 11M294 197l21 24" />
      </>
    );

  return (
    <svg
      className={`decorative-illustration decorative-illustration--${variant}`}
      aria-hidden="true"
      focusable="false"
      viewBox={variant === "headstock" ? "0 0 280 360" : "0 0 370 230"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {illustration}
    </svg>
  );
}
