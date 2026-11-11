"use client";

import { useState } from "react";
import type { Screenshot } from "@/content/types";
import { Modal } from "./Modal";
import s from "./Blocks.module.css";

export function Screenshots({ items }: { items: Screenshot[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const current = open === null ? null : items[open];

  return (
    <>
      <div className={s.shots}>
        {items.map((shot, i) => (
          <figure key={shot.src}>
            <button type="button" className={s.shot} onClick={() => setOpen(i)} aria-label={`Enlarge: ${shot.alt}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={shot.src} alt={shot.alt} className="wire" loading="lazy" width={1200} height={750} />
            </button>
            <figcaption className={s.caption}>
              <span>{shot.caption}</span>
              <span className={s.captionIndex}>
                Fig. {i + 1}/{items.length}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <Modal open={current !== null} onClose={() => setOpen(null)} title={current?.caption ?? ""}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {current && <img src={current.src} alt={current.alt} className="wire" />}
      </Modal>
    </>
  );
}
