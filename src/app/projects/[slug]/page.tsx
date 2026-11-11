import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { CodeBlock, FeatureList, MetaStrip } from "@/components/Blocks";
import { GithubIcon } from "@/components/BrandIcons";
import { TechTiles } from "@/components/Cards";
import { DocPage } from "@/components/DocPage";
import { Heading } from "@/components/Heading";
import { Status } from "@/components/ProjectCard";
import { Screenshots } from "@/components/Screenshots";
import { getProject, projects } from "@/content/projects";
import { stack } from "@/content/stack";
import { hostname } from "@/lib/format";
import s from "./project.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.name, description: project.summary } : {};
}

// Reuse icons from the tech stack when a project lists a tool that's there.
const knownTech = new Map(stack.flatMap((c) => c.items).map((i) => [i.name.toLowerCase(), i]));

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.indexOf(project);
  const prev = projects[i - 1];
  const next = projects[i + 1];
  const tech = project.stack.map((name) => knownTech.get(name.toLowerCase()) ?? { name });

  const links = [
    project.repo && { label: "Source code", href: project.repo },
    project.demo && { label: "Live", href: project.demo },
    ...(project.links ?? []),
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <DocPage
      eyebrow={project.category}
      title={project.name}
      description={project.summary}
      crumbs={[{ label: "Overview", href: "/" }, { label: "Projects", href: "/projects/" }, { label: project.name }]}
      prev={prev ? { title: prev.name, href: `/projects/${prev.slug}/` } : { title: "All projects", href: "/projects/" }}
      next={next ? { title: next.name, href: `/projects/${next.slug}/` } : { title: "Tech Stack", href: "/stack/" }}
      meta={
        <>
          <MetaStrip
            items={[
              { label: "Status", value: <Status status={project.status} /> },
              { label: "Year", value: project.year },
              { label: "Role", value: project.role },
            ]}
          />
          <div className={s.actions}>
            {project.repo && (
              <a className="btn" href={project.repo} target="_blank" rel="noreferrer">
                <GithubIcon size={14} /> Source
              </a>
            )}
            {project.demo && (
              <a className="btn btn-solid" href={project.demo} target="_blank" rel="noreferrer">
                Live demo <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
              </a>
            )}
          </div>
        </>
      }
    >
      <section className="section">
        <Heading id="overview">Overview</Heading>
        <div className="prose section-body">
          {project.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {project.problem.length > 0 && (
      <section className="section">
        <Heading id="problem">Problem</Heading>
        <div className="prose section-body">
          {project.problem.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      )}

      {project.solution.length > 0 && (
      <section className="section">
        <Heading id="solution">Solution</Heading>
        <div className="prose section-body">
          {project.solution.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      )}

      <section className="section">
        <Heading id="features">Key features</Heading>
        <div className="section-body">
          <FeatureList items={project.features} />
        </div>
      </section>

      <section className="section">
        <Heading id="implementation">Technical implementation</Heading>
        <div className="prose section-body">
          <p>{project.implementation.intro}</p>
          <ul>
            {project.implementation.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        {project.implementation.code && (
          <div className="section-body">
            <CodeBlock {...project.implementation.code} />
          </div>
        )}
      </section>

      <section className="section">
        <Heading id="stack">Tech stack</Heading>
        <div className="section-body">
          <TechTiles items={tech} />
        </div>
      </section>

      {project.screenshots.length > 0 && (
        <section className="section">
          <Heading id="screenshots">Screenshots</Heading>
          <div className="section-body">
            <Screenshots items={project.screenshots} />
          </div>
        </section>
      )}

      {project.challenges.length > 0 && (
      <section className="section">
        <Heading id="learnings">Challenges and learnings</Heading>
        <div className="section-body">
          {project.challenges.map((c) => (
            <div key={c.title} className={s.challenge}>
              <h3 className={s.challengeTitle}>{c.title}</h3>
              <p className={s.challengeBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>
      )}

      {links.length > 0 && (
        <section className="section">
          <Heading id="links">Links</Heading>
          <ul className={`section-body ${s.links}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer" className={s.linkRow}>
                  <span>{l.label}</span>
                  <span className={s.linkHost}>
                    {hostname(l.href)} <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </DocPage>
  );
}
