import Link from "next/link";
import { DocPage } from "@/components/DocPage";

export default function NotFound() {
  return (
    <DocPage eyebrow="404" title="Page not found" description="This page doesn't exist or has moved." toc={false}>
      <div className="prose" style={{ marginTop: 32 }}>
        <p>
          Try the search (<kbd className="kbd">/</kbd>) or go back to the <Link href="/">overview</Link>.
        </p>
      </div>
    </DocPage>
  );
}
