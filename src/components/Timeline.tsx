import type { ExperienceEntry } from "@/content/types";
import { formatDate, formatDuration, slugify } from "@/lib/format";
import { TechBadges } from "./ProjectCard";
import s from "./Timeline.module.css";

export function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className={s.timeline}>
      {entries.map((e) => (
        <TimelineItem key={`${e.org}-${e.start}`} entry={e} />
      ))}
    </ol>
  );
}

function TimelineItem({ entry: e }: { entry: ExperienceEntry }) {
  const id = slugify(e.org);
  return (
    <li className={s.item}>
      <div className={s.when}>
        <time dateTime={e.start}>{formatDate(e.start)}</time>
        <span aria-hidden> — </span>
        {e.end ? <time dateTime={e.end}>{formatDate(e.end)}</time> : <span>Present</span>}
        <span className={s.duration}>{formatDuration(e.start, e.end)}</span>
      </div>

      <div className={s.rail} aria-hidden>
        <span className={s.node} data-current={!e.end || undefined} />
      </div>

      <div className={s.body}>
        <h2 id={id} className={s.role} data-toc>
          {e.role}
        </h2>
        <p className={s.org}>
          {e.orgUrl ? (
            <a href={e.orgUrl} className="link" target="_blank" rel="noreferrer">
              {e.org}
            </a>
          ) : (
            e.org
          )}
          <span className={s.dot}>·</span>
          {e.type}
          {e.location && (
            <>
              <span className={s.dot}>·</span>
              {e.location}
            </>
          )}
        </p>
        <p className={s.summary}>{e.summary}</p>

        <p className={`label ${s.subhead}`}>Responsibilities</p>
        <ul className="list">
          {e.responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>

        <p className={`label ${s.subhead}`}>Key contributions</p>
        <ul className="list">
          {e.contributions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <div className={s.stack}>
          <TechBadges items={e.stack} />
        </div>
      </div>
    </li>
  );
}
