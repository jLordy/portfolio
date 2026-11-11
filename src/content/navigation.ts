import type { NavGroup, NavItem } from "./types";

export const navigation: NavGroup[] = [
  {
    label: "Introduction",
    items: [
      { title: "Overview", href: "/", description: "Start here.", icon: "book" },
      { title: "About Me", href: "/about/", description: "My background and goals.", icon: "user" },
    ],
  },
  {
    label: "Work",
    items: [
      { title: "Experience", href: "/experience/", description: "What I've worked on.", icon: "briefcase" },
      { title: "Projects", href: "/projects/", description: "Things I've built.", icon: "folder" },
      { title: "Tech Stack", href: "/stack/", description: "Languages and tools I use.", icon: "layers" },
      { title: "Certificates", href: "/certificates/", description: "Certifications I've earned.", icon: "award" },
    ],
  },
  {
    label: "Reach",
    items: [{ title: "Contact", href: "/contact/", description: "How to reach me.", icon: "at" }],
  },
];

export const flatNav: NavItem[] = navigation.flatMap((g) => g.items);
