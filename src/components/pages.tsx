import Link from "next/link";
import Image from "next/image";
import {
  Download,
  FileText,
  GraduationCap,
  MapPin,
  Mail,
  ExternalLink,
} from "lucide-react";
import {
  portfolio as p,
  ui,
  localize as l,
  type Locale,
  type Project,
} from "@/data/global";
import { CvActions, ContactActions, SocialIcon } from "./portfolio-shell";
import { ProjectCard, ProjectsGrid, ProjectVisual } from "./projects";

export function PageHeading({
  locale,
  number,
  title,
  intro,
}: {
  locale: Locale;
  number: string;
  title: keyof typeof ui;
  intro: keyof typeof ui;
}) {
  return (
    <div className="page-heading">
      <div className="eyebrow page-index">
        {number} / {l(ui.portfolio, locale)}
      </div>
      <h1>{l(ui[title], locale)}</h1>
      <p>{l(ui[intro], locale)}</p>
    </div>
  );
}
function ContactStrip({ locale }: { locale: Locale }) {
  return (
    <section className="contact-strip">
      <div>
        <span className="eyebrow">{l(ui.contactMe, locale)}</span>
        <h2>{l(ui.connectTitle, locale)}</h2>
        <p>{l(ui.connectIntro, locale)}</p>
      </div>
      <Link className="button button-primary" href={`/${locale}/contact`}>
        <Mail size={18} />
        {l(ui.contactMe, locale)}
      </Link>
    </section>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const university = p.education[0];
  return (
    <div className="container home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="short-line" />
            {l(p.profile.role, locale)}
          </div>
          <h1>
            {p.profile.name}
            <span>
              {l(p.profile.degree, locale)} · {p.profile.university}
            </span>
          </h1>
          <p className="hero-intro">{l(p.profile.intro, locale)}</p>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              href={`/${locale}/projects`}
            >
              {l(ui.viewProjects, locale)}
            </Link>
            <CvActions locale={locale} compact />
          </div>
          <div className="availability">
            <span className="availability-dot" />
            {l(p.profile.availability, locale)}
          </div>
        </div>
        <figure className="hero-portrait">
          <Image className="profile-logo-light"
            src={p.profile.photo}
            alt={l(p.profile.photoAlt, locale)}
            width={640}
            height={660}
            sizes="(max-width: 720px) 90vw, 40vw"
            priority
          />
          <Image className="profile-logo-dark"
            src={p.profile.photoDark}
            alt={l(p.profile.photoAlt, locale)}
            width={640}
            height={660}
            sizes="(max-width: 720px) 90vw, 40vw"
            priority
          />
          <figcaption>
            <span>{l(ui.basedIn, locale)}</span>
            <strong>
              <MapPin size={14} />
              {p.profile.location}
            </strong>
          </figcaption>
        </figure>
      </section>
      <dl className="profile-facts">
        <div>
          <dt>{l(ui.study, locale)}</dt>
          <dd>
            {p.profile.university}
            <small>{l(p.profile.degree, locale)}</small>
          </dd>
        </div>
        {university?.showGpa && (
          <div>
            <dt>{l(ui.gpa, locale)}</dt>
            <dd>
              {university.gpa}
              <span className="gpa-denominator"> / {university.gpaMax}</span>
              <small>{l(university.period, locale)}</small>
            </dd>
          </div>
        )}
        <div>
          <dt>{l(ui.focus, locale)}</dt>
          <dd>{l(ui.focusValue, locale)}</dd>
        </div>
      </dl>
      <section className="selected-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / {l(ui.selectedWork, locale)}</span>
            <h2>{l(ui.selectedWork, locale)}</h2>
            <p>{l(ui.selectedIntro, locale)}</p>
          </div>
          <Link className="text-link" href={`/${locale}/projects`}>
            {l(ui.allProjects, locale)}
          </Link>
        </div>
        <div className="projects-grid">
          {p.projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
              />
            ))}
        </div>
      </section>
      <ContactStrip locale={locale} />
    </div>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  return (
    <div className="container page-content">
      <PageHeading
        locale={locale}
        number="01"
        title="aboutTitle"
        intro="aboutIntro"
      />
      <section className="about-overview">
        <div className="about-photo">
          <Image className="profile-logo-light"
            src={p.profile.photo}
            alt={l(p.profile.photoAlt, locale)}
            width={640}
            height={660}
            sizes="(max-width: 720px) 90vw, 30vw"
          />
          <Image className="profile-logo-dark"
            src={p.profile.photoDark}
            alt={l(p.profile.photoAlt, locale)}
            width={640}
            height={660}
            sizes="(max-width: 720px) 90vw, 30vw"
          />
        </div>
        <div className="about-copy">
          <span className="eyebrow">{p.profile.name}</span>
          <h2>{l(p.profile.role, locale)}</h2>
          <p className="lead-text">{l(p.profile.summary, locale)}</p>
          {p.profile.about.map((para, i) => (
            <p key={i}>{l(para, locale)}</p>
          ))}
          <CvActions locale={locale} />
        </div>
      </section>
      <section className="split-section">
        <div className="section-side">
          <span className="eyebrow">01.1</span>
          <h2>{l(ui.education, locale)}</h2>
        </div>
        <div className="education-list">
          {p.education.map((education) => (
            <article className="education-item" key={education.id}>
              <div className="entry-top">
                <span className="entry-icon">
                  <GraduationCap size={20} />
                </span>
                <span>{l(education.period, locale)}</span>
              </div>
              <h3>{education.institution}</h3>
              <p className="entry-role">{l(education.qualification, locale)}</p>
              <p>{l(education.detail, locale)}</p>
              {education.showGpa && (
                <p className="education-gpa">
                  {l(ui.gpa, locale)}{" "}
                  <strong>
                    {education.gpa} / {education.gpaMax}
                  </strong>
                </p>
              )}
              {education.courses.length > 0 && (
                <div className="course-list">
                  <span>{l(ui.relevantCourses, locale)}</span>
                  <div>
                    {education.courses.map((course) => (
                      <span key={course.en}>{l(course, locale)}</span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
      {p.achievements.length > 0 && (
        <section className="split-section">
          <div className="section-side">
            <span className="eyebrow">01.2</span>
            <h2>{l(ui.achievements, locale)}</h2>
          </div>
          <div>
            {p.achievements.map((a, i) => (
              <article className="achievement-item" key={i}>
                <span className="entry-date">{a.year}</span>
                <h3>{l(a.title, locale)}</h3>
                <p>{l(a.detail, locale)}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      <ContactStrip locale={locale} />
    </div>
  );
}

export function ExperiencePage({ locale }: { locale: Locale }) {
  return (
    <div className="container page-content">
      <PageHeading
        locale={locale}
        number="02"
        title="experienceTitle"
        intro="experienceIntro"
      />
      {["work", "organization"].map((kind, i) => (
        <section className="split-section experience-section" key={kind}>
          <div className="section-side">
            <span className="eyebrow">02.{i + 1}</span>
            <h2>{l(kind === "work" ? ui.work : ui.organization, locale)}</h2>
          </div>
          <div className="timeline">
            {p.experience
              .filter((e) => e.kind === kind)
              .map((e) => (
                <article className="experience-item" key={e.id}>
                  <div className="entry-top">
                    <span className="eyebrow">{l(e.period, locale)}</span>
                    <span>{e.location}</span>
                  </div>
                  <h3>{l(e.role, locale)}</h3>
                  <p className="entry-company">{e.organization}</p>
                  <p>{l(e.description, locale)}</p>
                  <ul>
                    {e.bullets.map((bullet, i) => (
                      <li key={i}>{l(bullet, locale)}</li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>
        </section>
      ))}
      <ContactStrip locale={locale} />
    </div>
  );
}

export function SkillsPage({ locale }: { locale: Locale }) {
  return (
    <div className="container page-content">
      <PageHeading
        locale={locale}
        number="03"
        title="skillsTitle"
        intro="skillsIntro"
      />
      {p.skills.map((category, i) => (
        <section
          className="split-section skill-section"
          key={category.category.en}
        >
          <div className="section-side">
            <span className="eyebrow">03.{i + 1}</span>
            <h2>{l(category.category, locale)}</h2>
          </div>
          <div>
            {category.items.map((skill) => (
              <article className="skill-item" key={skill.name.en}>
                <div>
                  <h3>{l(skill.name, locale)}</h3>
                  <p>{l(skill.detail, locale)}</p>
                </div>
                <span className="skill-level">{l(skill.level, locale)}</span>
              </article>
            ))}
          </div>
        </section>
      ))}
      <section className="split-section">
        <div className="section-side">
          <span className="eyebrow">03.4</span>
          <h2>{l(ui.certifications, locale)}</h2>
        </div>
        <div>
          {p.certifications.map((certificate, i) => (
            <article className="certificate-item" key={i}>
              <FileText size={21} />
              <div>
                <h3>{l(certificate.title, locale)}</h3>
                <p>
                  {certificate.issuer} · {certificate.year}
                </p>
                {certificate.credentialUrl && (
                  <a
                    className="text-link"
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l(ui.credential, locale)}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactStrip locale={locale} />
    </div>
  );
}

export function ProjectsPage({ locale }: { locale: Locale }) {
  return (
    <div className="container page-content">
      <PageHeading
        locale={locale}
        number="04"
        title="projectsTitle"
        intro="projectsIntro"
      />
      <ProjectsGrid locale={locale} />
      <ContactStrip locale={locale} />
    </div>
  );
}

export function ProjectDetailPage({
  locale,
  project,
}: {
  locale: Locale;
  project: Project;
}) {
  return (
    <div className="container page-content project-detail">
      <Link className="text-link back-link" href={`/${locale}/projects`}>
        {l(ui.backProjects, locale)}
      </Link>
      <div className="project-detail-heading">
        <span className="eyebrow">
          {project.number} / {l(project.category, locale)}
        </span>
        <h1>{l(project.title, locale)}</h1>
        <p>{l(project.description, locale)}</p>
      </div>
      <div className="project-detail-grid">
        <div className="project-detail-visual">
          <ProjectVisual project={project} locale={locale} />
        </div>
        <aside className="project-sidebar">
          <dl>
            <div>
              <dt>{l(ui.year, locale)}</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>{l(ui.tools, locale)}</dt>
              <dd>{project.tools.join(", ")}</dd>
            </div>
          </dl>
          {project.fileUrl && (
            <a
              className="button button-primary"
              href={project.fileUrl}
              download
            >
              <Download size={17} />
              {l(ui.downloadProject, locale)}
            </a>
          )}
          {project.liveUrl && (
            <a
              className="button button-secondary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={17} />
              {l(ui.liveProject, locale)}
            </a>
          )}
        </aside>
      </div>
      <div className="case-study">
        <section>
          <span className="eyebrow">01</span>
          <h2>{l(ui.projectBrief, locale)}</h2>
          <p>{l(project.brief, locale)}</p>
        </section>
        <section>
          <span className="eyebrow">02</span>
          <h2>{l(ui.process, locale)}</h2>
          <ol>
            {project.steps.map((step, i) => (
              <li key={i}>{l(step, locale)}</li>
            ))}
          </ol>
        </section>
        <section>
          <span className="eyebrow">03</span>
          <h2>{l(ui.outcome, locale)}</h2>
          <p>{l(project.outcome, locale)}</p>
        </section>
      </div>
      <ContactStrip locale={locale} />
    </div>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <div className="container page-content">
      <PageHeading
        locale={locale}
        number="05"
        title="contactTitle"
        intro="contactIntro"
      />
      <section className="contact-layout">
        <div className="contact-primary">
          <span className="eyebrow">{l(ui.email, locale)}</span>
          <a className="large-email" href={`mailto:${p.profile.email}`}>
            {p.profile.email}
          </a>
          <ContactActions locale={locale} />
          <div className="contact-location">
            <MapPin size={19} />
            <div>
              <span>{l(ui.basedIn, locale)}</span>
              <p>{p.profile.location}</p>
            </div>
          </div>
          <p className="availability">
            <span className="availability-dot" />
            {l(p.profile.availability, locale)}
          </p>
        </div>
        <aside className="contact-aside">
          <div className="social-section">
            <h2>{l(ui.social, locale)}</h2>
            {p.profile.socials.map((s) => (
              <a
                className="social-row"
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name={s.icon} />
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.handle}</span>
                </div>
                <ExternalLink size={17} />
              </a>
            ))}
          </div>
          <div className="contact-cv">
            <FileText size={24} />
            <h2>{l(ui.cvTitle, locale)}</h2>
            <p>{l(ui.cvDescription, locale)}</p>
            <CvActions locale={locale} />
          </div>
        </aside>
      </section>
    </div>
  );
}
