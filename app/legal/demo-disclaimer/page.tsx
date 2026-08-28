import type { Metadata } from "next";
import { LegalContact, LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = { title: "Demo Disclaimer" };

export default function DemoDisclaimerPage() {
  return (
    <LegalDocument
      title="Demo Disclaimer"
      summary="The examples on this site are small demonstrations—not production systems or professional guidance."
    >
      <section>
        <h2>Demonstration only</h2>
        <p>
          WebMCP Playground is designed to make experimental browser concepts easier to understand.
          Examples may simplify validation, permissions, error handling, accessibility, security,
          scalability, and other requirements that a production application would need.
        </p>
      </section>

      <section>
        <h2>Test and simulated data</h2>
        <p>
          Names, tasks, tool results, prompts, and other example content may be invented, simulated,
          or temporary. Do not enter passwords, payment details, health information, confidential
          business information, or other sensitive data into a demonstration.
        </p>
      </section>

      <section>
        <h2>Experimental behavior</h2>
        <p>
          WebMCP is experimental. Browser support, agent behavior, tool registration, and the draft
          specification can change. A demonstration may behave differently across browsers, devices,
          agents, extensions, or provider configurations.
        </p>
      </section>

      <section>
        <h2>Evaluate before reuse</h2>
        <p>
          Examples should not be treated as production-ready code or relied on for legal, financial,
          medical, security, or other high-impact decisions. Review, test, secure, and adapt any idea
          for your own environment before using it in a real product.
        </p>
      </section>

      <section>
        <h2>Questions</h2>
        <LegalContact />
      </section>
    </LegalDocument>
  );
}
