"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Download, Menu, Search, X } from "lucide-react";
import { flatNav } from "@/content/navigation";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { SearchPalette } from "./SearchPalette";
import { SidebarNav } from "./SidebarNav";
import { ThemeToggle } from "./ThemeToggle";
import s from "./Header.module.css";

const initials = site.name
  .split(" ")
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toLowerCase();

function useSectionTitle() {
  const pathname = usePathname() ?? "/";
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const project = projects.find((p) => path === `/projects/${p.slug}/`);
  if (project) return `Projects / ${project.name}`;
  return flatNav.find((n) => n.href === path)?.title ?? "";
}

export function Header() {
  const pathname = usePathname();
  const section = useSectionTitle();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shortcut, setShortcut] = useState("⌘K");
  const drawerRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!/Mac|iPhone|iPad/.test(navigator.platform)) setShortcut("Ctrl K");

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setMenuOpen(false);
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;
    if (menuOpen && !drawer.open) drawer.showModal();
    if (!menuOpen && drawer.open) drawer.close();
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={s.header}>
      <div className={s.brandCol}>
        <button type="button" className={`icon-btn ${s.menuBtn}`} aria-label="Open navigation" onClick={() => setMenuOpen(true)}>
          <Menu size={18} strokeWidth={1.75} />
        </button>
        <Link href="/" className={s.brand}>
          <span className={s.mark} aria-hidden>
            {initials}
          </span>
          <span className={s.name}>{site.name}</span>
        </Link>
      </div>

      <div className={s.context} aria-hidden>
        {section}
      </div>

      <div className={s.actions}>
        <button type="button" className={s.search} onClick={() => setSearchOpen(true)} aria-label="Search">
          <Search size={14} strokeWidth={1.75} aria-hidden />
          <span className={s.searchText}>Search</span>
          <kbd className={`kbd ${s.searchKbd}`}>{shortcut}</kbd>
        </button>
        <a className={`icon-btn ${s.social}`} href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon />
        </a>
        <a className={`icon-btn ${s.social}`} href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinIcon />
        </a>
        <ThemeToggle />
        {site.resume && (
          <a className={`btn ${s.resume}`} href={site.resume} download>
            <Download size={14} strokeWidth={1.75} aria-hidden />
            Resume
          </a>
        )}
      </div>

      <dialog ref={drawerRef} className={s.drawer} aria-label="Navigation" onClose={() => setMenuOpen(false)} onClick={(e) => e.target === drawerRef.current && setMenuOpen(false)}>
        <div className={s.drawerPanel}>
          <div className={s.drawerHead}>
            <Link href="/" className={s.brand} onClick={() => setMenuOpen(false)}>
              <span className={s.mark} aria-hidden>
                {initials}
              </span>
              <span className={s.name}>{site.name}</span>
            </Link>
            <button type="button" className="icon-btn" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
              <X size={18} strokeWidth={1.75} />
            </button>
          </div>
          <SidebarNav onNavigate={() => setMenuOpen(false)} />
          <div className={s.drawerLinks}>
            <a className="btn" href={site.socials.github} target="_blank" rel="noreferrer">
              <GithubIcon size={14} /> GitHub
            </a>
            <a className="btn" href={site.socials.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon size={14} /> LinkedIn
            </a>
            {site.resume && (
              <a className="btn" href={site.resume} download>
                <Download size={14} strokeWidth={1.75} aria-hidden /> Resume
              </a>
            )}
          </div>
        </div>
      </dialog>

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
