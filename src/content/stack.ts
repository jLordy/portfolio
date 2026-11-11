import type { TechCategory } from "./types";

// `icon` is a simple-icons slug (https://simpleicons.org), a key in components/customIcons.ts,
// or "database" for a generic icon. Leave it out to show a monogram instead.
// `note` is optional small text under the name.
export const stack: TechCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "C#", icon: "csharp" },
      { name: "Dart", icon: "dart" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    items: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    items: [{ name: "Node.js", icon: "nodedotjs" }],
  },
  {
    id: "databases",
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "NoSQL", icon: "database" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks and Libraries",
    items: [
      { name: "React", icon: "react", note: "Web UI" },
      { name: "Flutter", icon: "flutter", note: "Mobile" },
      { name: "Ionic", icon: "ionic", note: "Mobile" },
      { name: "Express", icon: "express", note: "Node.js APIs" },
      { name: "FastAPI", icon: "fastapi", note: "Python APIs" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    items: [
      { name: "GitHub", icon: "github" },
      { name: "Azure DevOps", icon: "azuredevops" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
      { name: "Canva", icon: "canva" },
      { name: "GitBook", icon: "gitbook" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud and Deployment",
    items: [
      { name: "Azure Functions", icon: "azurefunctions", note: "Serverless" },
      { name: "Cloudflare", icon: "cloudflare" },
    ],
  },
];
