import type { DictionaryProps } from "@/i18n/schema";

type DocumentShellProps = DictionaryProps & { children: React.ReactNode };

export function DocumentShell({ dictionary, children }: DocumentShellProps) {
  return (
    <html lang={dictionary.locale}>
      <body>
        <a className="skip-link" href="#main-content">
          {dictionary.shared.skipLink}
        </a>
        {children}
      </body>
    </html>
  );
}
