export type Link = { label: string; href: string };

export type Site = {
  name: string;
  shortName: string;
  title: string;
  location: string;
  timezone: string;
  intro: string;
  summary: string;
  email: string;
  resume: string | null;
  socials: { github: string; linkedin: string } & Partial<Record<string, string>>;
  profiles: (Link & { handle: string })[];
  lastUpdated: string;
};

export type NavItem = {
  title: string;
  href: string;
  description: string;
  icon: "book" | "user" | "briefcase" | "folder" | "layers" | "award" | "at";
};

export type NavGroup = { label: string; items: NavItem[] };

export type ProjectStatus = "Live" | "Completed" | "In development" | "Maintained" | "Archived";

export type Screenshot = { src: string; alt: string; caption: string };

export type Project = {
  slug: string;
  name: string;
  summary: string;
  category: string;
  status: ProjectStatus;
  year: string;
  role: string;
  featured: boolean;
  stack: string[];
  repo?: string;
  demo?: string;
  overview: string[];
  problem: string[];
  solution: string[];
  features: { title: string; body: string }[];
  implementation: {
    intro: string;
    points: string[];
    code?: { filename: string; language: string; content: string };
  };
  screenshots: Screenshot[];
  challenges: { title: string; body: string }[];
  links?: Link[];
};

export type ExperienceEntry = {
  role: string;
  org: string;
  orgUrl?: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance" | "Project";
  location?: string;
  start: string;
  end: string | null;
  summary: string;
  responsibilities: string[];
  contributions: string[];
  stack: string[];
};

export type TechItem = { name: string; icon?: string; note?: string };

export type TechCategory = { id: string; title: string; items: TechItem[] };

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  description?: string;
  verifyUrl?: string;
  preview: string;
  skills: string[];
};
