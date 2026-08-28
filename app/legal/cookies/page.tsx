import type { Metadata } from "next";
import { LegalContact, LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = { title: "Cookies & Analytics" };

export default function CookiesPage() {
  return (
    <LegalDocument
      title="Cookies & Analytics"
      summary="WebMCP Playground does not currently use advertising cookies or an analytics product."
    >
      <section>
        <h2>Current approach</h2>
        <p>
          The site does not currently set cookies for advertising, cross-site tracking, or analytics.
          It also does not currently use pixels or similar technologies to build advertising profiles
          or recognize visitors across unrelated websites.
        </p>
      </section>

      <section>
        <h2>What cookies do</h2>
        <p>
          Cookies are small files a website or service can ask a browser to store. They can remember
          preferences, keep a session working, measure traffic, or recognize a device over time. Some
          cookies are necessary for a requested service; others support analytics or advertising.
        </p>
      </section>

      <section>
        <h2>Third-party requests</h2>
        <p>
          The site currently requests a font from Google Fonts, and hosting providers process normal
          web requests. Those providers may use their own technical mechanisms under their policies.
          A browser, extension, or agent you choose to use may also store information independently of us.
        </p>
      </section>

      <section>
        <h2>Your controls</h2>
        <p>
          Most browsers let you view, block, or delete cookies and site data. Blocking some storage
          can affect how websites function. Because this site does not currently use an analytics or
          advertising cookie system, it does not display a cookie-consent banner.
        </p>
      </section>

      <section>
        <h2>If tracking is added later</h2>
        <p>
          If we add analytics, advertising, or other non-essential tracking, we will update this notice
          and add consent controls where required before relying on those technologies.
        </p>
        <LegalContact />
      </section>
    </LegalDocument>
  );
}
