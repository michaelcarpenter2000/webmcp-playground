import Link from "next/link";
import Image from "next/image";
import { ExampleGallery } from "@/components/example-gallery";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy page-enter">
          <h1>See how<br /><span>WebMCP</span> works.</h1>
          <p>Explore real examples, interact with live demos,<br className="hero-subheadline-break" /> and see how each one is built.</p>
          <div className="hero-actions">
            <Link className="hero-primary" href="/examples">Open Playground</Link>
            <Link className="hero-secondary" href="#what-is-webmcp">What is WebMCP</Link>
          </div>
        </div>
      </section>

      <div className="protocol-name" id="what-is-webmcp">Model Context Protocol</div>

      <section className="comparison-section" aria-label="Model Context Protocol and WebMCP explained">
        <article className="comparison-panel comparison-mcp">
          <h2>MCP</h2>
          <p>A universal tool interface for AI agents.</p>
          <a
            className="comparison-image-link"
            href="/images/mcp-diagram.png"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the MCP diagram at full size"
          >
            <Image
              className="comparison-image"
              src="/images/mcp-diagram.png"
              alt="Diagram showing an AI agent using MCP to discover tools, call them, and read results from calendars, files, databases, email, and customer management systems."
              width={1672}
              height={941}
              sizes="(max-width: 680px) calc(100vw - 40px), 50vw"
            />
          </a>
        </article>
        <article className="comparison-panel comparison-webmcp">
          <h2>WebMCP</h2>
          <p>A universal tool interface that lets AI agents use websites directly.</p>
          <a
            className="comparison-image-link"
            href="/images/webmcp-diagram.png"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the WebMCP diagram at full size"
          >
            <Image
              className="comparison-image"
              src="/images/webmcp-diagram.png"
              alt="Diagram showing an AI agent using WebMCP to navigate, fill forms, click, and select on websites."
              width={1672}
              height={941}
              sizes="(max-width: 680px) calc(100vw - 40px), 50vw"
            />
          </a>
        </article>
      </section>

      <section className="section-block examples-showcase">
        <div className="section-heading section-heading-centered">
          <h2>See What’s Possible</h2>
        </div>
        <ExampleGallery limit={8} />
        <div className="examples-showcase-footer">
          <Link className="examples-more-button" href="/examples">See More Examples</Link>
        </div>
      </section>

    </>
  );
}
