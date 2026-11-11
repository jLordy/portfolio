const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2024-06" → "Jun 2024", "2026-11-11" → "Nov 11, 2026" */
export function formatDate(value: string): string {
  const [y, m, d] = value.split("-").map(Number);
  if (!m) return String(y);
  return d ? `${MONTHS[m - 1]} ${d}, ${y}` : `${MONTHS[m - 1]} ${y}`;
}

/** Inclusive month span between two "YYYY-MM" values, e.g. "1 yr 5 mo". */
export function formatDuration(start: string, end: string | null): string {
  const [sy, sm] = start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years && `${years} yr`, rest && `${rest} mo`].filter(Boolean).join(" ");
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
