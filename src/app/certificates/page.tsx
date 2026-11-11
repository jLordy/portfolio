import type { Metadata } from "next";
import { CertificateGrid } from "@/components/CertificateGrid";
import { DocPage } from "@/components/DocPage";
import { certificates } from "@/content/certificates";

export const metadata: Metadata = { title: "Certificates" };

export default function CertificatesPage() {
  return (
    <DocPage
      href="/certificates/"
      eyebrow="Work"
      title="Certificates"
      description="Certifications I've earned."
      crumbs={[{ label: "Overview", href: "/" }, { label: "Certificates" }]}
      toc={false}
    >
      <div style={{ marginTop: 32 }}>
        <CertificateGrid certificates={certificates} />
      </div>
    </DocPage>
  );
}
