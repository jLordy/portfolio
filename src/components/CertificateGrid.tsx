"use client";

import { useState } from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import type { Certificate } from "@/content/types";
import { formatDate } from "@/lib/format";
import { Modal } from "./Modal";
import s from "./Certificates.module.css";

export function CertificateGrid({ certificates }: { certificates: Certificate[] }) {
  const [open, setOpen] = useState<Certificate | null>(null);

  return (
    <>
      <ul className={s.grid}>
        {certificates.map((c) => (
          <li key={c.id} id={c.id} className={s.card}>
            <button type="button" className={s.preview} onClick={() => setOpen(c)} aria-label={`View certificate: ${c.title}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.preview} alt="" loading="lazy" />
              <span className={s.zoom} aria-hidden>
                <Maximize2 size={13} strokeWidth={1.75} />
              </span>
            </button>
            <div className={s.body}>
              <p className="label">{c.issuer}</p>
              <h2 className={s.title}>{c.title}</h2>
              <dl className={s.meta}>
                <div>
                  <dt>Issued</dt>
                  <dd>{formatDate(c.issued)}</dd>
                </div>
                {c.credentialId && (
                  <div>
                    <dt>Credential</dt>
                    <dd className={s.mono}>{c.credentialId}</dd>
                  </div>
                )}
              </dl>
              <div className={s.actions}>
                <button type="button" className={s.action} onClick={() => setOpen(c)}>
                  View
                </button>
                {c.verifyUrl && (
                  <a className={s.action} href={c.verifyUrl} target="_blank" rel="noreferrer">
                    Verify <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal open={open !== null} onClose={() => setOpen(null)} title={open?.title ?? ""}>
        {open && (
          <div className={s.detail}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={open.preview} alt={`${open.title} certificate`} />
            <div className={s.detailSide}>
              {open.description && <p className={s.description}>{open.description}</p>}
              <dl className={s.detailMeta}>
                <dt>Issuer</dt>
                <dd>{open.issuer}</dd>
                <dt>Issued</dt>
                <dd>{formatDate(open.issued)}</dd>
                {open.expires && (
                  <>
                    <dt>Expires</dt>
                    <dd>{formatDate(open.expires)}</dd>
                  </>
                )}
                {open.credentialId && (
                  <>
                    <dt>Credential ID</dt>
                    <dd className={s.mono}>{open.credentialId}</dd>
                  </>
                )}
                <dt>Skills</dt>
                <dd>{open.skills.join(", ")}</dd>
              </dl>
              {open.verifyUrl && (
                <a className="btn btn-solid" href={open.verifyUrl} target="_blank" rel="noreferrer">
                  Verify credential <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
