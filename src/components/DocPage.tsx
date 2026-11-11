import { flatNav } from "@/content/navigation";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Footer } from "./Footer";
import { PrevNext, type PageLink } from "./PrevNext";
import { TableOfContents } from "./TableOfContents";
import s from "./Doc.module.css";

type Props = {
  /** Route of this page in the sidebar, used to derive previous/next links. */
  href?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode;
  crumbs?: Crumb[];
  prev?: PageLink;
  next?: PageLink;
  toc?: boolean;
  children: React.ReactNode;
};

function siblings(href?: string) {
  const i = flatNav.findIndex((n) => n.href === href);
  if (i === -1) return {};
  const toLink = (n?: (typeof flatNav)[number]) => (n ? { title: n.title, href: n.href } : undefined);
  return { prev: toLink(flatNav[i - 1]), next: toLink(flatNav[i + 1]) };
}

export function DocPage({ href, eyebrow, title, description, meta, crumbs, prev, next, toc = true, children }: Props) {
  const auto = siblings(href);
  return (
    <div className={s.page} data-toc-visible={toc || undefined}>
      <article className={s.article} id="top">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <header className={s.pageHeader}>
          {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
          <h1 className={s.h1}>{title}</h1>
          {description && <p className={s.description}>{description}</p>}
          {meta && <div className={s.meta}>{meta}</div>}
        </header>
        <div className={s.body}>{children}</div>
        <PrevNext prev={prev ?? auto.prev} next={next ?? auto.next} />
        <Footer />
      </article>
      {toc && (
        <aside className={s.tocCol}>
          <TableOfContents />
        </aside>
      )}
    </div>
  );
}
