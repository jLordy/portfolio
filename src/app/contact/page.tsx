import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Callout } from "@/components/Blocks";
import s from "@/components/Blocks.module.css";
import { CopyButton } from "@/components/CopyButton";
import { DocPage } from "@/components/DocPage";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <DocPage
      href="/contact/"
      eyebrow="Reach"
      title="Contact"
      description="Feel free to reach out by email or through any of the links below."
      crumbs={[{ label: "Overview", href: "/" }, { label: "Contact" }]}
      toc={false}
    >
      <ul className={s.contactList} style={{ marginTop: 32 }}>
        <li className={s.contactRow}>
          <span className="label">Email</span>
          <a href={`mailto:${site.email}`} className={`link ${s.contactValue}`}>
            {site.email}
          </a>
          <CopyButton value={site.email} className="btn" />
        </li>
        {site.profiles.map((p) => (
          <li key={p.label} className={s.contactRow}>
            <span className="label">{p.label}</span>
            <span className={s.contactValue}>{p.handle}</span>
            <a href={p.href} target="_blank" rel="noreferrer" className="btn" aria-label={`${p.label} profile`}>
              Open <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden />
            </a>
          </li>
        ))}
        <li className={s.contactRow}>
          <span className="label">Location</span>
          <span className={s.contactValue}>
            {site.location} · {site.timezone}
          </span>
          <span />
        </li>
      </ul>

      <div style={{ marginTop: 32 }}>
        <Callout>
          <strong>Hiring?</strong> Include the role, team size and whether it&apos;s remote. A{" "}
          {site.resume ? (
            <a href={site.resume} className="link" download>
              PDF resume
            </a>
          ) : (
            "resume"
          )}{" "}
          is available.
        </Callout>
      </div>
    </DocPage>
  );
}
