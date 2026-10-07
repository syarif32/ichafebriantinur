"use client";
import Link from "next/link";
import { useState } from "react";
import {
  portfolio,
  ui,
  localize as l,
  type Locale,
  type Project,
} from "@/data/global";

export function ProjectVisual({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const preview = portfolio.projectPreview;
  const format = new Intl.NumberFormat(locale === "id" ? "id-ID" : "en-US", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
  const profit =
    preview.ledger[0].value - preview.ledger[1].value - preview.ledger[2].value;
  return (
    <div className={`project-visual visual-${project.visual}`}>
      <div className="sheet-top">
        <span>{l(ui.example, locale)}</span>
        <span>{project.year}</span>
      </div>
      {project.visual === "ledger" ? (
        <>
          <div className="sheet-heading">
            <small>{l(preview.business, locale)}</small>
            <h3>{l(ui.incomeStatement, locale)}</h3>
            <p>{l(preview.period, locale)}</p>
          </div>
          <div className="ledger-lines">
            {preview.ledger.map((row) => (
              <div key={row.label.en}>
                <span>{l(row.label, locale)}</span>
                <span>{format.format(row.value)}</span>
              </div>
            ))}
            <div className="ledger-total">
              <strong>{l(ui.netProfit, locale)}</strong>
              <strong>{format.format(profit)}</strong>
            </div>
          </div>
        </>
      ) : project.visual === "budget" ? (
        <>
          <div className="sheet-heading">
            <h3>{l(ui.budgetTitle, locale)}</h3>
            <p>{l(ui.unitThousands, locale)}</p>
          </div>
          <div
            className="budget-chart"
            role="img"
            aria-label={preview.budget
              .map(
                (row) =>
                  `${l(row.label, locale)}: ${l(ui.planned, locale)} ${row.planned}, ${l(ui.actual, locale)} ${row.actual}`,
              )
              .join("; ")}
          >
            {preview.budget.map((row) => (
              <div className="budget-row" key={row.label.en}>
                <span>{l(row.label, locale)}</span>
                <div className="bar-pair">
                  <div
                    className="bar planned"
                    style={{ width: `${(row.planned / 600) * 100}%` }}
                  />
                  <div
                    className="bar actual"
                    style={{ width: `${(row.actual / 600) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="chart-legend">
            <span>
              <i className="legend-planned" />
              {l(ui.planned, locale)}
            </span>
            <span>
              <i className="legend-actual" />
              {l(ui.actual, locale)}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="sheet-heading">
            <h3>{l(ui.ratioTitle, locale)}</h3>
            <p>
              {preview.years[0]} — {preview.years.at(-1)}
            </p>
          </div>
          <div className="ratio-table">
            <div className="ratio-years">
              <span />
              {preview.years.map((y) => (
                <span key={y}>{y}</span>
              ))}
            </div>
            {preview.ratios.map((row) => (
              <div key={row.label.en}>
                <span>{l(row.label, locale)}</span>
                {row.values.map((n, i) => (
                  <strong key={i}>
                    {n}
                    {row.unit}
                  </strong>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
      <div className="sheet-bottom">{project.tools.join(" / ")}</div>
    </div>
  );
}

export function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  return (
    <article className="project-card">
      <Link
        className="visual-link"
        href={`/${locale}/projects/${project.slug}`}
        aria-label={l(project.title, locale)}
      >
        <ProjectVisual project={project} locale={locale} />
      </Link>
      <div className="project-card-body">
        <div className="project-meta">
          <span>
            {project.number} / {l(project.category, locale)}
          </span>
          <span>{project.year}</span>
        </div>
        <h3>
          <Link href={`/${locale}/projects/${project.slug}`}>
            {l(project.title, locale)}
          </Link>
        </h3>
        <p>{l(project.description, locale)}</p>
        <div className="project-tools">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <Link
          className="text-link"
          href={`/${locale}/projects/${project.slug}`}
        >
          {l(ui.viewDetails, locale)}
        </Link>
      </div>
    </article>
  );
}
export function ProjectsGrid({ locale }: { locale: Locale }) {
  const [category, setCategory] = useState("all");
  const categories = Array.from(
    new Map(
      portfolio.projects.map((p) => [p.category.en, p.category]),
    ).entries(),
  );
  const filtered = portfolio.projects.filter(
    (p) => category === "all" || p.category.en === category,
  );
  return (
    <>
      <div className="project-filters">
        <div
          className="filter-options"
          role="group"
          aria-label={l(ui.projectsTitle, locale)}
        >
          <button
            onClick={() => setCategory("all")}
            aria-pressed={category === "all"}
          >
            {l(ui.all, locale)}
          </button>
          {categories.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCategory(key)}
              aria-pressed={category === key}
            >
              {l(label, locale)}
            </button>
          ))}
        </div>
        <span aria-live="polite">
          {filtered.length} {l(ui.results, locale)}
        </span>
      </div>
      <div className="projects-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} locale={locale} />
        ))}
      </div>
      {!filtered.length && <p>{l(ui.noProjects, locale)}</p>}
    </>
  );
}
