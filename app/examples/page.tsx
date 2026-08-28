import type { Metadata } from "next";
import { ExampleGallery } from "@/components/example-gallery";

export const metadata: Metadata = { title: "Playground" };

export default function ExamplesPage() {
  return (
    <section className="content-page examples-page page-enter">
      <div className="page-intro examples-page-intro">
        <h1>See What’s Possible</h1>
      </div>

      <ExampleGallery headingLevel="h2" />
    </section>
  );
}
