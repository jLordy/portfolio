import { Info } from "lucide-react";
import { CopyButton } from "./CopyButton";
import s from "./Blocks.module.css";

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.callout} role="note">
      <Info size={16} strokeWidth={1.75} aria-hidden style={{ flexShrink: 0, marginTop: 3, color: "var(--fg)" }} />
      <div>{children}</div>
    </div>
  );
}

export function DataList({ items }: { items: { label: string; value: React.ReactNode }[] }) {
  return (
    <dl className={s.dl}>
      {items.map((i) => (
        <div key={i.label} style={{ display: "contents" }}>
          <dt>{i.label}</dt>
          <dd>{i.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function MetaStrip({ items }: { items: { label: string; value: React.ReactNode }[] }) {
  return (
    <dl className={s.metaStrip}>
      {items.map((i) => (
        <div key={i.label} className={s.metaCell}>
          <dt className="label">{i.label}</dt>
          <dd>{i.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CodeBlock({ filename, language, content }: { filename: string; language: string; content: string }) {
  return (
    <figure className={s.code}>
      <figcaption className={s.codeHead}>
        <span>
          {filename}
          <span className={s.codeLang}>{language}</span>
        </span>
        <CopyButton value={content} className={s.copy} />
      </figcaption>
      <pre>
        <code>{content}</code>
      </pre>
    </figure>
  );
}

export function FeatureList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className={s.features}>
      {items.map((f, i) => (
        <li key={f.title} className={s.feature}>
          <span className={s.featureIndex}>{String(i + 1).padStart(2, "0")}</span>
          <p className={s.featureTitle}>{f.title}</p>
          <p className={s.featureBody}>{f.body}</p>
        </li>
      ))}
    </ul>
  );
}
