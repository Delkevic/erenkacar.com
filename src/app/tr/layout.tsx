import { DocumentShell } from "@/components/layout/document-shell";
import { turkish } from "@/i18n/tr";
import { createRootMetadata, siteViewport } from "@/i18n/metadata";
import "../globals.css";
import "../localization.css";

export const metadata = createRootMetadata(turkish);
export const viewport = siteViewport;

export default function TurkishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DocumentShell dictionary={turkish}>{children}</DocumentShell>;
}
