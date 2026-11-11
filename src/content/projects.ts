import type { Project } from "./types";

// Sections left empty ([] or omitted) are hidden on the project page.
// TODO: add repo links, problem, solution, challenges and screenshots (put images in /public/projects).
export const projects: Project[] = [
  {
    slug: "agapay",
    name: "Agapay",
    summary: "Mobile medical companion for recording patient-reported health metrics, backed by serverless FastAPI services on Azure.",
    category: "Mobile App",
    status: "Completed",
    year: "2026",
    role: "Full Stack Developer",
    featured: true,
    stack: ["Python", "FastAPI", "Azure Functions", "Flutter", "Dart", "Dio", "NoSQL"],
    demo: "https://agapayapp.online/",
    overview: [
      "Agapay is a mobile medical companion. Patients record health metrics on their phone, and a set of FastAPI services running on Azure Functions stores, parses and serves that data.",
      "I worked across the stack: the REST API and serverless deployment, the NoSQL data model for health telemetry, and the mobile networking layer.",
    ],
    problem: [],
    solution: [],
    features: [
      { title: "Health metric tracking", body: "Patients submit health metrics and telemetry from the app, stored in a schema designed for secure, efficient retrieval." },
      { title: "Reliable on poor networks", body: "Requests go through a configured Dio client so data still arrives intact on unstable mobile connections." },
      { title: "Serverless API", body: "RESTful FastAPI endpoints deployed as microservices on Azure Functions." },
    ],
    implementation: {
      intro: "A Flutter client talking to a Python backend split into serverless microservices.",
      points: [
        "RESTful APIs built with Python and FastAPI, orchestrated as serverless microservices via Azure Functions.",
        "Network request handling configured with the Dio package for reliable transmission across unstable network conditions.",
        "NoSQL schemas architected to securely manage and parse patient-reported telemetry and health metrics.",
      ],
    },
    screenshots: [],
    challenges: [],
  },
  {
    slug: "spark",
    name: "Spark",
    summary: "Smart parking management system with greedy-algorithm spot routing and QR-code entry and exit.",
    category: "Web App",
    status: "Completed",
    year: "2025",
    role: "Full Stack Developer",
    featured: true,
    stack: ["PostgreSQL", "Express", "React", "Node.js", "Azure DevOps"],
    demo: "https://spark-0lbx.onrender.com/",
    overview: [
      "Spark is a parking management web application built on the PERN stack. It routes drivers to open spots and handles entry and exit through automated QR code verification.",
      "After launch, user engagement rose by about 40%.",
    ],
    problem: [],
    solution: [],
    features: [
      { title: "Spot routing", body: "A greedy-algorithm routing engine assigns drivers to spots, cutting wait times by ~30% and maximising lot capacity." },
      { title: "QR entry and exit", body: "Automated QR code verification makes entry and exit secure and low-latency, with ~20% faster access." },
      { title: "Managed delivery", body: "Sprints tracked in Azure Boards, with branch policies enforcing code quality across the team." },
    ],
    implementation: {
      intro: "A PERN application (PostgreSQL, Express, React, Node.js) delivered through Azure DevOps.",
      points: [
        "Spatial routing engine based on a greedy algorithm to reduce driver wait times and use lot capacity fully.",
        "Entry/exit workflow built around automated QR code verification.",
        "End-to-end SDLC managed in Azure DevOps, with sprint deliverables tracked through Azure Boards.",
        "Branch policies enforced code quality, with 95% adherence across the development team.",
      ],
    },
    screenshots: [],
    challenges: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
