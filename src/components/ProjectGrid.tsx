"use client";

import { useState } from "react";
import type { Project } from "@/content/types";
import { ProjectCard } from "./ProjectCard";
import s from "./Cards.module.css";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className={s.filters} role="group" aria-label="Filter by category">
        {categories.map((c) => (
          <button key={c} type="button" className={s.filter} aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}
            <span className={s.count}>{c === "All" ? projects.length : projects.filter((p) => p.category === c).length}</span>
          </button>
        ))}
      </div>
      <div className={s.projectGrid}>
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
