import type { Metadata } from "next";
import { LegalContact, LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Use"
      summary="These terms set the ground rules for using WebMCP Playground and its experimental examples."
    >
      <section>
        <h2>Accepting these terms</h2>
        <p>
          By accessing or using WebMCP Playground, you agree to these Terms of Use. If you do not
          agree, please do not use the site.
        </p>
      </section>

      <section>
        <h2>Educational and experimental use</h2>
        <p>
          The site provides educational material and demonstrations of emerging browser technology.
          It is not a production service, professional advice, or a promise that a feature will work
          in every browser or with every agent. You are responsible for evaluating any example before
          adapting it for another purpose.
        </p>
      </section>

      <section>
        <h2>Allowed use</h2>
        <p>
          You may browse, test, and learn from the site for lawful personal, educational, or internal
          evaluation purposes. Any separate license shown with source code or third-party material
          controls your use of that material.
        </p>
      </section>

      <section>
        <h2>Prohibited use</h2>
        <p>You may not use the site to:</p>
        <ul>
          <li>break the law, violate another person’s rights, or misrepresent your identity;</li>
          <li>introduce malware, probe for vulnerabilities, or disrupt the site or its providers;</li>
          <li>automate abusive traffic or attempt to bypass access, security, or usage controls; or</li>
          <li>use demonstrations to process sensitive, confidential, or production information.</li>
        </ul>
      </section>

      <section>
        <h2>Availability and changes</h2>
        <p>
          We may change, suspend, or discontinue any part of the site at any time. Experimental APIs,
          browser behavior, examples, and third-party services may also change without notice.
        </p>
      </section>

      <section>
        <h2>No warranties</h2>
        <p>
          To the fullest extent permitted by law, the site is provided “as is” and “as available,”
          without warranties of accuracy, reliability, availability, fitness for a particular purpose,
          non-infringement, or compatibility.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, WebMCP Playground and its operators will not be
          liable for indirect, incidental, special, consequential, or exemplary damages, or for loss
          of data, profits, goodwill, or business arising from use of or inability to use the site.
          Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.
        </p>
      </section>

      <section>
        <h2>Contact and changes</h2>
        <p>
          We may update these terms as the site evolves. Continued use after an update means you accept
          the revised terms. The date at the top identifies the current version.
        </p>
        <LegalContact />
      </section>
    </LegalDocument>
  );
}
