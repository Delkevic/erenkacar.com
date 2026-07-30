type DecorativeIllustrationProps = {
  variant: "headstock" | "cable";
};

export function DecorativeIllustration({
  variant,
}: DecorativeIllustrationProps) {
  const illustration =
    variant === "headstock" ? (
      <>
        <path d="M94 355 119 190l15-25 24-106c6-25 25-42 49-43 15-1 29 4 40 14-2 26-8 52-14 79l-15 67-69 14-10 165Z" />
        <path d="m119 190 30 0M116 211l31 3M113 233l32 3M110 255l33 3M107 277l34 3" />
        <path d="M105 355 128 190 194 51M116 355l19-165 69-100M128 355l14-165 63-79" />
        <circle cx="194" cy="51" r="4" />
        <circle cx="200" cy="70" r="4" />
        <circle cx="204" cy="90" r="4" />
        <circle cx="205" cy="111" r="4" />
        <circle cx="203" cy="132" r="4" />
        <circle cx="199" cy="153" r="4" />
        <path d="m198 51 39-3m-33 22 34-1m-30 21 28 1m-27 20 23 2m-25 19 20 3m-24 18 19 4" />
        <rect x="237" y="43" width="10" height="10" rx="3" />
        <rect x="238" y="64" width="10" height="10" rx="3" />
        <rect x="236" y="86" width="10" height="10" rx="3" />
        <rect x="232" y="108" width="10" height="10" rx="3" />
        <rect x="227" y="130" width="10" height="10" rx="3" />
        <rect x="222" y="152" width="10" height="10" rx="3" />
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
