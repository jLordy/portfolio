import type { Metadata } from "next";
import { DocPage } from "@/components/DocPage";
import { Timeline } from "@/components/Timeline";
import { experience } from "@/content/experience";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <DocPage
      href="/experience/"
      eyebrow="Work"
      title="Experience"
      description="What I've worked on so far and what I did on each one."
      crumbs={[{ label: "Overview", href: "/" }, { label: "Experience" }]}
    >
      <div style={{ marginTop: 40 }}>
        <Timeline entries={experience} />
      </div>
    </DocPage>
  );
}
