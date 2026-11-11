import s from "./Doc.module.css";

type Props = {
  id: string;
  level?: 2 | 3;
  children: React.ReactNode;
};

/** Section heading with a hover anchor. Picked up by the table of contents. */
export function Heading({ id, level = 2, children }: Props) {
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <Tag id={id} className={level === 2 ? s.h2 : s.h3} data-toc>
      {children}
      <a href={`#${id}`} className={s.anchor} aria-label="Link to this section">
        #
      </a>
    </Tag>
  );
}
