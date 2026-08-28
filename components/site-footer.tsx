import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© 2026 WebMCP Playground</p>
      <div>
        <Link href="/docs">Documentation</Link>
        <Link href="/legal">Legal</Link>
      </div>
    </footer>
  );
}
