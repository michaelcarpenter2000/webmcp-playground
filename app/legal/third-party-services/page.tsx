import type { Metadata } from "next";
import { LegalContact, LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = { title: "Third-Party Services" };

export default function ThirdPartyServicesPage() {
  return (
    <LegalDocument
      title="Third-Party Services"
      summary="Some parts of the site depend on outside services that operate under their own terms and privacy practices."
    >
      <section>
        <h2>Hosting and infrastructure</h2>
        <p>
          Hosting, content delivery, domain, and security providers may process technical request data
          such as IP addresses, device and browser details, requested pages, and timestamps to deliver
          and protect the site.
        </p>
      </section>

      <section>
        <h2>Google Fonts</h2>
        <p>
          The site currently loads Google Sans Flex from Google Fonts. When your browser requests that
          font, Google may receive technical information including your IP address, browser details,
          and the referring page. Google controls its own processing of that information.
        </p>
      </section>

      <section>
        <h2>Browsers and agent providers</h2>
        <p>
          WebMCP demonstrations can expose structured actions to a compatible browser agent. If you
          use an agent, browser extension, or AI provider with the site, that third party may receive
          page context, prompts, tool inputs, and tool results according to its own settings and policies.
          Review those policies before sharing information with an agent.
        </p>
      </section>

      <section>
        <h2>External links</h2>
        <p>
          Links may take you to specifications, documentation, or other websites we do not control.
          A link does not mean we endorse every statement, product, or practice on the destination site.
          Your use of an external service is governed by that service’s own terms and privacy policy.
        </p>
      </section>

      <section>
        <h2>Changes and questions</h2>
        <p>
          Providers may be added, removed, or changed as the playground evolves. We will update this
          notice when those changes materially affect how the site works.
        </p>
        <LegalContact />
      </section>
    </LegalDocument>
  );
}
