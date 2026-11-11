"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Props = { value: string; className?: string; label?: string };

export function CopyButton({ value, className, label = "Copy" }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <button type="button" className={className} onClick={copy} aria-live="polite">
      {copied ? <Check size={13} strokeWidth={1.75} aria-hidden /> : <Copy size={13} strokeWidth={1.75} aria-hidden />}
      {copied ? "Copied" : label}
    </button>
  );
}
