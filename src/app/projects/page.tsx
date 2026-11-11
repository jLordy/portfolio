import type { Metadata } from "next";
import { DocPage } from "@/components/DocPage";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <DocPage
      href="/projects/"
      eyebrow="Work"
      title="Projects"
      description="Some of the things I've built."
      crumbs={[{ label: "Overview", href: "/" }, { label: "Projects" }]}
      toc={false}
    >
      <div style={{ marginTop: 32 }}>
        <ProjectGrid projects={projects} />
      </div>
    </DocPage>
  );
}
