import type { DictionaryProps } from "@/i18n/schema";
import { Analytics } from "@vercel/analytics/next";

type DocumentShellProps = DictionaryProps & { children: React.ReactNode };

export function DocumentShell({ dictionary, children }: DocumentShellProps) {
  return (
    <html lang={dictionary.locale}>
      <body>
        <a className="skip-link" href="#main-content">
          {dictionary.shared.skipLink}
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
