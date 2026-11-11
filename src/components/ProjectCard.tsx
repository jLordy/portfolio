import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project, ProjectStatus } from "@/content/types";
import { GithubIcon } from "./BrandIcons";
import s from "./Cards.module.css";

// Kept free of TechIcon so client components can render these without shipping the icon set.
export function TechBadges({ items, label = "Technologies" }: { items: string[]; label?: string }) {
  return (
    <ul className={s.badges} aria-label={label}>
      {items.map((t) => (
        <li key={t} className={s.badge}>
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Status({ status }: { status: ProjectStatus }) {
  return (
    <span className={s.status}>
      <span className={s.statusGlyph} data-status={status} aria-hidden />
      {status}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.slug}/`;
  return (
    <article className={s.projectCard}>
      <div className={s.projectCardTop}>
        <span className="label">{project.category}</span>
        <Status status={project.status} />
      </div>
      <h3 className={s.projectName}>
        <Link href={href}>{project.name}</Link>
      </h3>
      <p className={s.projectSummary}>{project.summary}</p>
      <TechBadges items={project.stack.slice(0, 5)} />
      <div className={s.projectFoot}>
        <div className={s.projectFootInner}>
          {project.repo && (
            <a className={s.extLink} href={project.repo} target="_blank" rel="noreferrer">
              <GithubIcon size={13} /> Source
            </a>
          )}
          {project.demo && (
            <a className={s.extLink} href={project.demo} target="_blank" rel="noreferrer">
              <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden /> Live
            </a>
          )}
          <span className={s.readMore} aria-hidden>
            Details <ArrowRight size={13} strokeWidth={1.75} />
          </span>
        </div>
      </div>
    </article>
  );
}
