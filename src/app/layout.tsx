import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { themeScript } from "@/components/ThemeToggle";
import { site } from "@/content/site";
import "@/styles/globals.css";
import s from "./layout.module.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.title}`, template: `%s · ${site.name}` },
  description: site.intro,
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        {/* Runs before first paint to apply the saved theme. Kept out of a manual <head>, which React 19 hydrates itself. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <div className={s.shell}>
          <aside className={s.sidebar}>
            <SidebarNav />
          </aside>
          <main id="content" className={s.main} tabIndex={-1}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
