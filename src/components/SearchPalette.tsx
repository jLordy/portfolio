"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { CornerDownLeft, Search } from "lucide-react";
import { search } from "@/lib/search";
import s from "./SearchPalette.module.css";

type Props = { open: boolean; onClose: () => void };

export function SearchPalette({ open, onClose }: Props) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const results = useMemo(() => search(query), [query]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setQuery("");
      setIndex(0);
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[index]) {
      e.preventDefault();
      go(results[index].href);
    }
  };

  useEffect(() => {
    document.getElementById(`${listId}-${index}`)?.scrollIntoView({ block: "nearest" });
  }, [index, listId]);

  return (
    <dialog
      ref={dialogRef}
      className={s.dialog}
      aria-label="Search"
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
    >
      <div className={s.panel}>
        <div className={s.field}>
          <Search size={16} strokeWidth={1.75} aria-hidden />
          <input
            ref={inputRef}
            className={s.input}
            type="text"
            placeholder="Search pages, projects, tools…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={results[index] ? `${listId}-${index}` : undefined}
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="kbd">Esc</kbd>
        </div>

        <ul id={listId} role="listbox" className={s.results} aria-label="Results">
          {results.length === 0 && <li className={s.empty}>No results for “{query}”</li>}
          {results.map((r, i) => (
            <li
              key={r.href + r.title}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === index}
              className={s.result}
              onMouseMove={() => setIndex(i)}
              onClick={() => go(r.href)}
            >
              <span className={s.section}>{r.section}</span>
              <span className={s.title}>{r.title}</span>
              {i === index && <CornerDownLeft size={14} strokeWidth={1.75} className={s.enter} aria-hidden />}
            </li>
          ))}
        </ul>

        <div className={s.footer}>
          <span>
            <kbd className="kbd">↑</kbd> <kbd className="kbd">↓</kbd> to move
          </span>
          <span>
            <kbd className="kbd">Enter</kbd> to open
          </span>
        </div>
      </div>
    </dialog>
  );
}
