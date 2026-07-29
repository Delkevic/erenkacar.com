import type { ComponentPropsWithoutRef } from "react";

type ExternalLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "rel" | "target"
> & {
  href: string;
};

export function ExternalLink({
  children,
  href,
  ...props
}: ExternalLinkProps) {
  return (
    <a {...props} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
