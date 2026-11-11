import { Database } from "lucide-react";
import * as icons from "simple-icons";
import { customIcons } from "./customIcons";

type SimpleIcon = { slug: string; path: string; title: string };

// Server-only lookup: the full icon set never reaches the client bundle.
const bySlug = new Map<string, SimpleIcon>(
  (Object.values(icons) as SimpleIcon[]).map((icon) => [icon.slug, icon]),
);

type Props = { slug?: string; name: string; size?: number };

export function TechIcon({ slug, name, size = 18 }: Props) {
  if (slug === "database") {
    return <Database size={size} strokeWidth={1.5} aria-hidden style={{ flexShrink: 0 }} />;
  }

  const custom = slug ? customIcons[slug] : undefined;
  if (custom) {
    return (
      <svg aria-hidden viewBox={custom.viewBox} width={size} height={size} fill="currentColor" style={{ flexShrink: 0 }}>
        {custom.paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    );
  }

  const icon = slug ? bySlug.get(slug) : undefined;

  if (!icon) {
    // Monogram fallback for tools without a published mark.
    return (
      <span
        aria-hidden
        style={{
          width: size,
          height: size,
          display: "inline-grid",
          placeItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: Math.round(size * 0.5),
          fontWeight: 500,
          border: "1px solid currentColor",
          borderRadius: 2,
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        {name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <svg role="img" aria-hidden viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ flexShrink: 0 }}>
      <path d={icon.path} />
    </svg>
  );
}
