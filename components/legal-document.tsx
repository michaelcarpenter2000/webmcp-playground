import Link from "next/link";
import type { ReactNode } from "react";

export const LEGAL_EMAIL = "legal@webmcpplayground.com";
export const LEGAL_UPDATED = "August 26, 2026";

type LegalDocumentProps = {
  title: string;
  summary: string;
  children: ReactNode;
};

export function LegalDocument({ title, summary, children }: LegalDocumentProps) {
  return (
    <article className="legal-document page-enter">
      <header className="legal-document-header">
        <Link className="legal-back-link" href="/legal">
          Legal overview
        </Link>
        <h1>{title}</h1>
        <p className="legal-summary">{summary}</p>
        <p className="legal-updated">Last updated: {LEGAL_UPDATED}</p>
      </header>

      <div className="legal-copy">{children}</div>
    </article>
  );
}

export function LegalContact() {
  return (
    <p>
      Email <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a> with questions or requests.
    </p>
  );
}
