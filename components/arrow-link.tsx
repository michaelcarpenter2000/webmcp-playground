import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="arrow-link" href={href}>
      <span>{children}</span>
      <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} strokeWidth={1.8} aria-hidden="true" />
    </Link>
  );
}
