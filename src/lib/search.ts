import { certificates } from "@/content/certificates";
import { experience } from "@/content/experience";
import { flatNav } from "@/content/navigation";
import { projects } from "@/content/projects";
import { stack } from "@/content/stack";
import { slugify } from "./format";

export type SearchEntry = {
  title: string;
  section: string;
  href: string;
  text: string;
};

export const searchIndex: SearchEntry[] = [
  ...flatNav.map((n) => ({ title: n.title, section: "Pages", href: n.href, text: n.description })),
  ...projects.map((p) => ({
    title: p.name,
    section: "Projects",
    href: `/projects/${p.slug}/`,
    text: `${p.summary} ${p.category} ${p.stack.join(" ")}`,
  })),
  ...experience.map((e) => ({
    title: `${e.role}, ${e.org}`,
    section: "Experience",
    href: `/experience/#${slugify(e.org)}`,
    text: `${e.summary} ${e.stack.join(" ")}`,
  })),
  ...stack.map((c) => ({
    title: c.title,
    section: "Tech Stack",
    href: `/stack/#${c.id}`,
    text: c.items.map((i) => i.name).join(" "),
  })),
  ...certificates.map((c) => ({
    title: c.title,
    section: "Certificates",
    href: `/certificates/#${c.id}`,
    text: `${c.issuer} ${c.skills.join(" ")}`,
  })),
];

/** Title matches outrank body matches; each query word must appear somewhere. */
export function search(query: string): SearchEntry[] {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!words.length) return searchIndex.filter((e) => e.section === "Pages");

  return searchIndex
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const hay = `${title} ${entry.section.toLowerCase()} ${entry.text.toLowerCase()}`;
      let score = 0;
      for (const w of words) {
        if (!hay.includes(w)) return null;
        if (title.startsWith(w)) score += 3;
        else if (title.includes(w)) score += 2;
        else score += 1;
      }
      return { entry, score };
    })
    .filter((r): r is { entry: SearchEntry; score: number } => r !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((r) => r.entry);
}
