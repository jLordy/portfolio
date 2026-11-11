import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import s from "./Doc.module.css";

export type PageLink = { title: string; href: string };

export function PrevNext({ prev, next }: { prev?: PageLink; next?: PageLink }) {
  if (!prev && !next) return null;
  return (
    <nav aria-label="Pagination" className={s.pager}>
      {prev ? (
        <Link href={prev.href} className={s.pagerLink}>
          <span className="label">
            <ArrowLeft size={11} strokeWidth={2} aria-hidden /> Previous
          </span>
          <span className={s.pagerTitle}>{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={next.href} className={`${s.pagerLink} ${s.pagerNext}`}>
          <span className="label">
            Next <ArrowRight size={11} strokeWidth={2} aria-hidden />
          </span>
          <span className={s.pagerTitle}>{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
