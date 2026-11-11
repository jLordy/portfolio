import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { NavCard, ProjectRows } from "@/components/Cards";
import { DocPage } from "@/components/DocPage";
import { Heading } from "@/components/Heading";
import { flatNav } from "@/content/navigation";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import s from "./page.module.css";

export default function OverviewPage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <DocPage
      href="/"
      eyebrow="Introduction"
      title={site.name}
      description={`${site.title}. ${site.intro}`}
      meta={
        <ul className={s.facts}>
          <li>
            <span className="label">Role</span>
            {site.title}
          </li>
          <li>
            <span className="label">Based in</span>
            {site.location}
          </li>
          <li>
            <span className="label">Status</span>
            <span className={s.available}>
              <span className={s.square} aria-hidden /> Available for work
            </span>
          </li>
        </ul>
      }
    >
      <section className="section">
        <Heading id="summary">Summary</Heading>
        <div className="prose section-body">
          <p>{site.summary}</p>
        </div>
      </section>

      <section className="section">
        <Heading id="start-here">Start here</Heading>
        <div className="grid-2 section-body">
          {flatNav
            .filter((n) => n.href !== "/")
            .map((n) => (
              <NavCard key={n.href} item={n} />
            ))}
        </div>
      </section>

      <section className="section">
        <div className={s.sectionHead}>
          <Heading id="selected-projects">Selected projects</Heading>
          <Link href="/projects/" className={s.more}>
            All projects <ArrowRight size={13} strokeWidth={1.75} aria-hidden />
          </Link>
        </div>
        <div className="section-body">
          <ProjectRows projects={featured} />
        </div>
      </section>

      <section className="section">
        <Heading id="contact">Contact</Heading>
        <p className="section-lead">Have a question or an opportunity? Send me an email.</p>
        <div className={`section-body ${s.contact}`}>
          <a className="btn btn-solid" href={`mailto:${site.email}`}>
            <Mail size={14} strokeWidth={1.75} aria-hidden /> {site.email}
          </a>
          <a className="btn" href={site.socials.github} target="_blank" rel="noreferrer">
            <GithubIcon size={14} /> GitHub
          </a>
          <a className="btn" href={site.socials.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon size={14} /> LinkedIn
          </a>
        </div>
      </section>
    </DocPage>
  );
}
