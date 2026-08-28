import type { Metadata } from "next";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = { title: "Documentation" };

export default function DocsPage() {
  return (
    <section className="content-page docs-page page-enter">
      <div className="page-intro">
        <h1>WebMCP Documentation</h1>
        <p>A browser API for turning the useful parts of a webpage into structured agent tools.</p>
      </div>

      <div className="docs-layout">
        <nav className="docs-nav" aria-label="On this page">
          <a href="#what">What it is</a>
          <a href="#why">Why it matters</a>
          <a href="#project">This project</a>
          <a href="#status">Current status</a>
        </nav>

        <div className="prose">
          <section id="what">
            <h2>What it is</h2>
            <p>
              WebMCP is an emerging JavaScript API that lets a webpage register named tools with
              descriptions, input schemas, and functions. A browser agent can discover those tools
              and invoke them while the person and the agent share the same page state.
            </p>
          </section>
          <section id="why">
            <h2>Why it matters</h2>
            <p>
              Agents usually have to interpret pixels, inspect the page, and simulate clicks. A
              clear tool gives them a direct route to an action the site already knows how to do.
              That can make common tasks more predictable without replacing the interface.
            </p>
          </section>
          <section id="project">
            <h2>Why this project exists</h2>
            <p>
              Specifications are easier to understand when you can touch them. This playground is a
              home for focused examples—small enough to read, test, and adapt without first learning
              a large demo application.
            </p>
          </section>
          <section id="status">
            <h2>Current status</h2>
            <p>
              WebMCP is a Draft Community Group Report. It is experimental and is not currently a
              W3C Standard. The examples here use feature detection so their regular interfaces keep
              working in browsers that do not expose the API.
            </p>
            <a className="text-link" href="https://webmachinelearning.github.io/webmcp/" target="_blank" rel="noreferrer">
              Read the draft specification <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} aria-hidden="true" />
            </a>
          </section>
        </div>
      </div>
    </section>
  );
}
