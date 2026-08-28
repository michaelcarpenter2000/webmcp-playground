import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_EMAIL, LEGAL_UPDATED } from "@/components/legal-document";

export const metadata: Metadata = { title: "Legal" };

const notices = [
  {
    href: "/legal/privacy",
    title: "Privacy Policy",
    description: "What information may be collected, why it is used, and the choices available to you.",
  },
  {
    href: "/legal/terms",
    title: "Terms of Use",
    description: "The rules for using this educational and experimental website.",
  },
  {
    href: "/legal/demo-disclaimer",
    title: "Demo Disclaimer",
    description: "Important context about examples, simulated data, and experimental behavior.",
  },
  {
    href: "/legal/third-party-services",
    title: "Third-Party Services",
    description: "How hosting, fonts, browser agents, and linked services may handle information.",
  },
  {
    href: "/legal/cookies",
    title: "Cookies & Analytics",
    description: "A plain-language explanation of the site’s current approach to cookies and tracking.",
  },
];

export default function LegalPage() {
  return (
    <section className="legal-hub page-enter">
      <header className="legal-hub-intro">
        <h1>Legal</h1>
        <span>Last updated: {LEGAL_UPDATED}</span>
      </header>

      <div className="legal-link-list">
        {notices.map((notice) => (
          <Link className="legal-link-row" href={notice.href} key={notice.href}>
            <div>
              <h2>{notice.title}</h2>
              <p>{notice.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="legal-contact" aria-labelledby="legal-contact-title">
        <h2 id="legal-contact-title">Questions or requests?</h2>
        <p>
          For privacy, legal, access, correction, or deletion requests, email{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
        </p>
      </section>
    </section>
  );
}
