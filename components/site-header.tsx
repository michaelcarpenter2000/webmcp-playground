import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { McpServerIcon } from "@hugeicons/core-free-icons";

const links = [
  { href: "/docs", label: "Documentation" },
  { href: "/examples", label: "Playground", primary: true },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="WebMCP Playground home">
        <span className="brand-mark" aria-hidden="true">
          <HugeiconsIcon icon={McpServerIcon} size={21} strokeWidth={1.8} />
        </span>
        <span>WebMCP Playground</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <Link className={link.primary ? "nav-primary" : undefined} key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
