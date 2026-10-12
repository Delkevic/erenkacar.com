import { DocumentShell } from "@/components/layout/document-shell";
import { NotFoundView } from "@/components/views/not-found";
import { english } from "@/i18n/en";
import { createRootMetadata, siteViewport } from "@/i18n/metadata";
import "./globals.css";
import "./localization.css";

export const metadata = createRootMetadata(english);
export const viewport = siteViewport;

export default function GlobalNotFound() {
  return (
    <DocumentShell dictionary={english}>
      <NotFoundView dictionary={english} />
    </DocumentShell>
  );
}
