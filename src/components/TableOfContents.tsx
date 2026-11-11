"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import s from "./Doc.module.css";

type Entry = { id: string; text: string; level: number };

export function TableOfContents() {
  const pathname = usePathname();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>("main [data-toc]"));
    setEntries(
      headings.map((h) => ({
        id: h.id,
        text: h.firstChild?.textContent ?? h.textContent ?? "",
        level: h.tagName === "H3" ? 3 : 2,
      })),
    );
    if (!headings.length) return;

    // The active heading is the last one that has scrolled past the top band.
    const update = () => {
      const offset = 120;
      let current = headings[0].id;
      for (const h of headings) {
        if (h.getBoundingClientRect().top - offset <= 0) current = h.id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActive(atBottom ? headings[headings.length - 1].id : current);
    };

    const observer = new IntersectionObserver(update, { rootMargin: "-100px 0px -60% 0px" });
    headings.forEach((h) => observer.observe(h));
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [pathname]);

  if (!entries.length) return null;

  return (
    <nav aria-label="On this page" className={s.toc}>
      <p className="label">On this page</p>
      <ul>
        {entries.map((e) => (
          <li key={e.id} data-level={e.level}>
            <a href={`#${e.id}`} data-active={active === e.id || undefined}>
              {e.text}
            </a>
          </li>
        ))}
      </ul>
      <a href="#top" className={s.top} onClick={(e) => (e.preventDefault(), window.scrollTo({ top: 0 }))}>
        <ArrowUp size={12} strokeWidth={1.75} aria-hidden /> Back to top
      </a>
    </nav>
  );
}
