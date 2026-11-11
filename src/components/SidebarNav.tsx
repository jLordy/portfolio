"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { navigation } from "@/content/navigation";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { formatDate } from "@/lib/format";
import s from "./Sidebar.module.css";

const normalize = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = normalize(usePathname() ?? "/");
  const inProjects = pathname.startsWith("/projects/");
  const [showProjects, setProjectsOpen] = useState(inProjects);

  // Open the list when arriving at a projects page; after that the toggle is in charge.
  useEffect(() => {
    if (inProjects) setProjectsOpen(true);
  }, [pathname, inProjects]);

  return (
    <nav aria-label="Primary" className={s.nav}>
      {navigation.map((group) => (
        <div key={group.label} className={s.group}>
          <p className="label">{group.label}</p>
          <ul className={s.list}>
            {group.items.map((item) => {
              const active = pathname === item.href;
              const isProjects = item.href === "/projects/";
              return (
                <li key={item.href}>
                  <div className={s.row}>
                    <Link
                      href={item.href}
                      className={s.link}
                      data-active={active || undefined}
                      data-ancestor={(isProjects && inProjects && !active) || undefined}
                      aria-current={active ? "page" : undefined}
                      onClick={onNavigate}
                    >
                      {item.title}
                    </Link>
                    {isProjects && (
                      <button
                        type="button"
                        className={s.toggle}
                        aria-expanded={showProjects}
                        aria-controls="nav-projects"
                        aria-label={showProjects ? "Collapse projects" : "Expand projects"}
                        onClick={() => setProjectsOpen(!showProjects)}
                      >
                        <ChevronRight size={14} strokeWidth={1.75} data-open={showProjects || undefined} />
                      </button>
                    )}
                  </div>
                  {isProjects && showProjects && (
                    <ul id="nav-projects" className={s.sublist}>
                      {projects.map((p) => {
                        const href = `/projects/${p.slug}/`;
                        const current = pathname === href;
                        return (
                          <li key={p.slug}>
                            <Link
                              href={href}
                              className={s.sublink}
                              data-active={current || undefined}
                              aria-current={current ? "page" : undefined}
                              onClick={onNavigate}
                            >
                              {p.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className={s.meta}>
        <p>
          {site.location} · {site.timezone}
        </p>
        <p>Updated {formatDate(site.lastUpdated)}</p>
      </div>
    </nav>
  );
}
