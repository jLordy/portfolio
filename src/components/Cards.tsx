import Link from "next/link";
import { ArrowUpRight, Award, BookOpen, Briefcase, FolderGit2, Layers, AtSign, User } from "lucide-react";
import type { NavItem, Project, TechItem } from "@/content/types";
import { TechIcon } from "./TechIcon";
import s from "./Cards.module.css";

const navIcons = { book: BookOpen, user: User, briefcase: Briefcase, folder: FolderGit2, layers: Layers, award: Award, at: AtSign };

export function NavCard({ item }: { item: NavItem }) {
  const Icon = navIcons[item.icon];
  return (
    <Link href={item.href} className={s.navCard}>
      <span className={s.navCardHead}>
        <Icon size={16} strokeWidth={1.5} aria-hidden />
        <ArrowUpRight size={14} strokeWidth={1.75} className={s.navArrow} aria-hidden />
      </span>
      <span className={s.navCardTitle}>{item.title}</span>
      <span className={s.navCardText}>{item.description}</span>
    </Link>
  );
}

export function ProjectRows({ projects }: { projects: Project[] }) {
  return (
    <ul className={s.rows}>
      {projects.map((p) => (
        <li key={p.slug} className={s.rowItem}>
          <Link href={`/projects/${p.slug}/`} className={s.rowLink}>
            <span className={s.rowName}>{p.name}</span>
            <span className={s.rowSummary}>{p.summary}</span>
            <span className={s.rowMeta}>{p.year}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function TechTiles({ items }: { items: TechItem[] }) {
  return (
    <ul className={s.tiles}>
      {items.map((item) => (
        <li key={item.name} className={s.tile}>
          <span className={s.tileIcon}>
            <TechIcon slug={item.icon} name={item.name} size={20} />
          </span>
          <span className={s.tileText}>
            <span className={s.tileName}>{item.name}</span>
            {item.note && <span className={s.tileNote}>{item.note}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}
