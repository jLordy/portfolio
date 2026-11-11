"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import s from "./Blocks.module.css";

type Props = { open: boolean; onClose: () => void; title: string; children: React.ReactNode };

/** Native <dialog>: focus trapping, Esc to close and inert background come for free. */
export function Modal({ open, onClose, title, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog ref={ref} className={s.modal} aria-label={title} onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
      {open && (
        <>
          <div className={s.modalHead}>
            <span className={s.modalTitle}>{title}</span>
            <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
              <X size={16} strokeWidth={1.75} />
            </button>
          </div>
          <div className={s.modalBody}>{children}</div>
        </>
      )}
    </dialog>
  );
}
