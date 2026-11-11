"use client";

import { Moon, Sun } from "lucide-react";

// Both icons render on the server; CSS shows the right one for the active theme,
// so there is no hydration mismatch and no flash.
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button type="button" className="icon-btn theme-toggle" onClick={toggle} aria-label="Toggle dark theme">
      <Sun size={16} strokeWidth={1.75} className="show-when-dark" />
      <Moon size={16} strokeWidth={1.75} className="show-when-light" />
    </button>
  );
}

export const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`;
