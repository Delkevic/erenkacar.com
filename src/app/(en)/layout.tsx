import { DocumentShell } from "@/components/layout/document-shell";
import { english } from "@/i18n/en";
import { createRootMetadata, siteViewport } from "@/i18n/metadata";
import "../globals.css";
import "../localization.css";

export const metadata = createRootMetadata(english);

export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DocumentShell dictionary={english}>{children}</DocumentShell>
  );
}
