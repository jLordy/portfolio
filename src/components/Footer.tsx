import { site } from "@/content/site";
import { formatDate } from "@/lib/format";
import s from "./Doc.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <p>
        Last updated <time dateTime={site.lastUpdated}>{formatDate(site.lastUpdated)}</time>
      </p>
    </footer>
  );
}
