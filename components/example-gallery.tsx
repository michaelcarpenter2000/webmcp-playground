import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CalendarDaysIcon,
  ChartColumnIncreasingIcon,
  FileInputIcon,
  Message02Icon,
  Search01Icon,
  ShoppingBag02Icon,
  ShoppingCart01Icon,
  Task01Icon,
} from "@hugeicons/core-free-icons";

const examples = [
  {
    title: "Todo",
    description: "Create, complete, and review a simple task list.",
    icon: Task01Icon,
    tone: "blue",
    href: "/playground/todo",
  },
  {
    title: "Shopping",
    description: "Find products and add the right item to a cart.",
    icon: ShoppingBag02Icon,
    tone: "dark",
  },
  {
    title: "Booking",
    description: "Check available times and prepare a reservation.",
    icon: CalendarDaysIcon,
    tone: "muted",
  },
  {
    title: "Forms",
    description: "Fill in clear fields and submit structured information.",
    icon: FileInputIcon,
    tone: "outline",
  },
  {
    title: "Search",
    description: "Search a catalog and return useful matches.",
    icon: Search01Icon,
    tone: "outline",
  },
  {
    title: "Dashboard",
    description: "Read filters, numbers, and the current page state.",
    icon: ChartColumnIncreasingIcon,
    tone: "muted",
  },
  {
    title: "Checkout",
    description: "Review a cart and prepare an order for confirmation.",
    icon: ShoppingCart01Icon,
    tone: "dark",
  },
  {
    title: "Messages",
    description: "Write, send, and review messages on a webpage.",
    icon: Message02Icon,
    tone: "blue",
  },
];

export function ExampleGallery({
  limit,
  headingLevel = "h3",
}: {
  limit?: number;
  headingLevel?: "h2" | "h3";
}) {
  const visibleExamples = typeof limit === "number" ? examples.slice(0, limit) : examples;
  const Heading = headingLevel;

  return (
    <div className="examples-card-grid">
      {visibleExamples.map((example) => {
        const content = (
          <>
            <div className={`example-cover cover-${example.tone}`} aria-hidden="true">
              <HugeiconsIcon icon={example.icon} size={48} strokeWidth={1.45} />
            </div>
            <div className="example-card-copy">
              <Heading>{example.title}</Heading>
              <p>{example.description}</p>
            </div>
          </>
        );

        return example.href ? (
          <Link
            className="example-gallery-card is-link"
            href={example.href}
            key={example.title}
            aria-label={`Open the ${example.title} example`}
          >
            {content}
          </Link>
        ) : (
          <article className="example-gallery-card" key={example.title}>
            {content}
          </article>
        );
      })}
    </div>
  );
}
