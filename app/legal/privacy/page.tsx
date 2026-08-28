import type { Metadata } from "next";
import { LegalContact, LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      summary="This policy explains what information WebMCP Playground may receive and how it is handled."
    >
      <section>
        <h2>Information we collect</h2>
        <p>
          You can browse the site without creating an account. The site does not currently operate
          an account system or contact form. If you email us, we receive your email address and the
          information you choose to include in your message.
        </p>
        <p>
          Our hosting and infrastructure providers may automatically receive technical information
          such as your IP address, browser and device type, requested pages, referring page, and the
          date and time of a request. This information is commonly recorded in server and security logs.
        </p>
      </section>

      <section>
        <h2>Demo data</h2>
        <p>
          Information entered into the current Todo demonstration is held in the page’s temporary
          browser memory. It is not intentionally sent to our servers and is normally cleared when
          the page is refreshed or closed. If you use a compatible browser agent, that agent or its
          provider may process the information you ask it to use.
        </p>
      </section>

      <section>
        <h2>How information is used</h2>
        <p>
          We may use information to operate and secure the site, diagnose errors, understand basic
          traffic, respond to messages, enforce our terms, and comply with legal obligations. We do
          not sell personal information or use it for targeted advertising.
        </p>
      </section>

      <section>
        <h2>Sharing and third parties</h2>
        <p>
          Information may be handled by service providers that support hosting, security, fonts, and
          other site functions. We may also disclose information when required by law, to protect
          rights or safety, or as part of a business transfer. Linked sites and browser-agent services
          have their own privacy practices. See our <a href="/legal/third-party-services">Third-Party Services notice</a>.
        </p>
      </section>

      <section>
        <h2>Retention and security</h2>
        <p>
          We keep correspondence only as long as reasonably needed to respond, maintain records, or
          meet legal obligations. Technical logs are retained according to the practices of our
          infrastructure providers and our operational needs. We use reasonable safeguards, but no
          internet service can promise absolute security.
        </p>
      </section>

      <section>
        <h2>Your choices and requests</h2>
        <p>
          Depending on where you live, you may have rights to request access, correction, or deletion
          of personal information, or to object to certain uses. We may need to verify your identity
          before completing a request. Because the current Todo data stays in temporary browser memory,
          refreshing or closing the page normally removes it.
        </p>
        <LegalContact />
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy as the playground changes. The date at the top will show when the
          latest version took effect.
        </p>
      </section>
    </LegalDocument>
  );
}
