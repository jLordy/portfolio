import type { Metadata } from "next";
import { TechTiles } from "@/components/Cards";
import { DocPage } from "@/components/DocPage";
import { Heading } from "@/components/Heading";
import { stack } from "@/content/stack";

export const metadata: Metadata = { title: "Tech Stack" };

export default function StackPage() {
  return (
    <DocPage
      href="/stack/"
      eyebrow="Work"
      title="Tech Stack"
      description="Languages, frameworks and tools I've worked with."
      crumbs={[{ label: "Overview", href: "/" }, { label: "Tech Stack" }]}
    >
      {stack.map((category) => (
        <section key={category.id} className="section">
          <Heading id={category.id}>{category.title}</Heading>
          <div className="section-body">
            <TechTiles items={category.items} />
          </div>
        </section>
      ))}
    </DocPage>
  );
}
