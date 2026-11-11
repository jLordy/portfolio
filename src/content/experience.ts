import type { ExperienceEntry } from "./types";

// Most recent first. Use end: null for a current role.
export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack Developer",
    org: "Agapay (Mobile Medical Companion)",
    type: "Project",
    start: "2026-03",
    end: "2026-05",
    summary: "Mobile medical companion app for recording and reviewing patient-reported health metrics.",
    responsibilities: [
      "Collaborated with stakeholders to assess user needs, ensuring the software met their requirements.",
      "Provided clear instructions and support to the project team on API functionality, improving communication across the team.",
    ],
    contributions: [
      "Designed and deployed RESTful APIs using Python and FastAPI, orchestrating serverless microservices via Azure Functions.",
      "Configured network request handling with the Dio package to keep data transmission reliable on unstable networks.",
      "Architected NoSQL database schemas to securely store and parse patient-reported telemetry and health metrics, making data retrieval more efficient.",
    ],
    stack: ["Python", "FastAPI", "Azure Functions", "Flutter", "Dart", "Dio", "NoSQL"],
  },
  {
    role: "Full Stack Developer",
    org: "Spark (Smart Parking Management System)",
    type: "Project",
    start: "2025-09",
    end: "2025-11",
    summary: "Parking management web application with optimised spot routing and QR-based entry and exit.",
    responsibilities: [
      "Managed the end-to-end software development life cycle in Azure DevOps, tracking sprint deliverables through Azure Boards.",
      "Enforced code quality through branch policies, reaching a 95% adherence rate across the development team.",
    ],
    contributions: [
      "Architected and deployed a scalable parking management web application on the PERN stack, increasing user engagement by ~40%.",
      "Engineered a spatial routing engine using a greedy algorithm, reducing driver wait times by ~30% and maximising lot capacity.",
      "Implemented a secure, low-latency entry/exit workflow with automated QR code verification, improving access speed by ~20%.",
    ],
    stack: ["PostgreSQL", "Express", "React", "Node.js", "Azure DevOps"],
  },
];
