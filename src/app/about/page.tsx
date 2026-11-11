import type { Metadata } from "next";
import { Callout, DataList } from "@/components/Blocks";
import { DocPage } from "@/components/DocPage";
import { Heading } from "@/components/Heading";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "About Me" };

// TODO: rewrite these paragraphs in your own words.
export default function AboutPage() {
  return (
    <DocPage
      href="/about/"
      eyebrow="Introduction"
      title="About Me"
      description="A little more about me and what I'm looking for."
      crumbs={[{ label: "Overview", href: "/" }, { label: "About Me" }]}
    >
      <DataList
        items={[
          { label: "Name", value: site.name },
          { label: "Role", value: site.title },
          { label: "Location", value: `${site.location} (${site.timezone})` },
          { label: "Focus", value: "Web applications, APIs, data modelling" },
          { label: "Languages", value: "English, Filipino" },
          { label: "Availability", value: "Open to full-time roles" },
        ]}
      />

      <section className="section">
        <Heading id="background">Background</Heading>
        <div className="prose section-body">
          {/* TODO: add your education and how you got into development. */}
          <p>
            My recent work is two full stack projects. On <a href="/projects/spark/">Spark</a>, a smart parking
            system, I built a PERN application with a greedy-algorithm routing engine and QR-code entry and exit, and
            ran delivery through Azure DevOps.
          </p>
          <p>
            On <a href="/projects/agapay/">Agapay</a>, a mobile medical companion, I designed the FastAPI services
            behind it, deployed them as serverless functions on Azure, and modelled patient health data in a NoSQL
            store.
          </p>
        </div>
      </section>

      <section className="section">
        <Heading id="how-i-work">How I work</Heading>
        <div className="prose section-body">
          <ul>
            <li>
              <strong>Start from the data model.</strong> Most UI and API problems become simpler once the tables are
              right.
            </li>
            <li>
              <strong>Types at the boundaries.</strong> Validated input, typed responses and a schema that is the single
              source of truth.
            </li>
            <li>
              <strong>Small, reviewable changes.</strong> I would rather ship five pull requests in a week than one in
              a fortnight.
            </li>
            <li>
              <strong>Measure before optimising.</strong> A query plan or a profiler trace beats intuition.
            </li>
            <li>
              <strong>Write it down.</strong> A short design note before a large change saves a long meeting after it.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <Heading id="specialization">Areas of specialization</Heading>
        <div className="section-body">
          <DataList
            items={[
              { label: "Backend", value: "REST APIs with Python/FastAPI and Node/Express, serverless microservices on Azure Functions" },
              { label: "Frontend", value: "React web apps and Flutter mobile clients" },
              { label: "Data", value: "PostgreSQL and NoSQL schema design" },
              { label: "Delivery", value: "Azure DevOps: Boards, sprint tracking, branch policies" },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <Heading id="goals">What I&apos;m looking for</Heading>
        <div className="prose section-body">
          <p>
            A product team where engineers own features from schema to screen, code review is taken seriously and
            there&apos;s room to grow toward system design and mentoring. I&apos;m most interested in B2B tools,
            logistics and developer tooling.
          </p>
        </div>
        <div className="section-body">
          <Callout>
            <strong>Open to work.</strong> Full-time roles, remote or in Metro Manila. See{" "}
            <a href="/contact/" className="link">
              Contact
            </a>{" "}
            for the best way to reach me.
          </Callout>
        </div>
      </section>
    </DocPage>
  );
}
