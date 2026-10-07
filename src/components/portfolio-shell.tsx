"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Download,
  Eye,
  Menu,
  X,
  Moon,
  Sun,
  Monitor,
  Mail,
  Link2,
  Camera,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import {
  portfolio,
  navigation,
  ui,
  localize as l,
  type Locale,
} from "@/data/global";

type Theme = "light" | "dark" | "system";
export function Shell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  const [ready, setReady] = useState(false);
  const otherLocale = locale === "id" ? "en" : "id";
  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark" || saved === "system")
        setTheme(saved);
    } catch {
      /* System preference remains available without browser storage. */
    }
    setReady(true);
  }, [locale]);
  useEffect(() => {
    if (!ready) return;
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      document.documentElement.dataset.theme =
        theme === "system" ? (preference.matches ? "dark" : "light") : theme;
    };
    apply();
    preference.addEventListener("change", apply);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* Theme still works for this visit. */
    }
    return () => preference.removeEventListener("change", apply);
  }, [theme, ready]);
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  const switchedPath = pathname.replace(
    /^\/(id|en)(?=\/|$)/,
    `/${otherLocale}`,
  );
  return (
    <>
      <a className="skip-link" href="#main">
        {l(ui.skip, locale)}
      </a>
      <header className="site-header">
        <div className="header-inner container">
          <Link
            className="brand"
            href={`/${locale}`}
            aria-label={portfolio.profile.name}
          >
            <span className="monogram">{portfolio.profile.initials}</span>
            <span className="brand-copy">
              <strong>{portfolio.profile.name}</strong>
              <span>
                {l(ui.portfolio, locale)} / {l(portfolio.profile.role, locale)}
              </span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label={l(ui.portfolio, locale)}>
            {navigation.map((item) => {
              const href = `/${locale}${item.path ? `/${item.path}` : ""}`;
              const active = item.path
                ? pathname.startsWith(href)
                : pathname === href;
              return (
                <Link
                  key={item.path}
                  href={href}
                  className={active ? "active" : ""}
                  aria-current={active ? "page" : undefined}
                >
                  {l(item.label, locale)}
                </Link>
              );
            })}
          </nav>
          <div className="header-controls">
            <Link
              className="language-control"
              href={switchedPath}
              aria-label={l(ui.switchLanguage, locale)}
            >
              <span className={locale === "id" ? "selected" : ""}>ID</span>
              <span className="language-divider">/</span>
              <span className={locale === "en" ? "selected" : ""}>EN</span>
            </Link>
            <div className="theme-control">
              {theme === "dark" ? (
                <Moon size={17} />
              ) : theme === "light" ? (
                <Sun size={17} />
              ) : (
                <Monitor size={17} />
              )}
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as Theme)}
                aria-label={l(ui.switchTheme, locale)}
              >
                <option value="system">{l(ui.system, locale)}</option>
                <option value="light">{l(ui.light, locale)}</option>
                <option value="dark">{l(ui.dark, locale)}</option>
              </select>
            </div>
            <button
              className="icon-button mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={l(menuOpen ? ui.closeMenu : ui.openMenu, locale)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav container"
          aria-label={l(ui.portfolio, locale)}
          hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <Link
              key={item.path}
              href={`/${locale}${item.path ? `/${item.path}` : ""}`}
              aria-current={
                pathname === `/${locale}${item.path ? `/${item.path}` : ""}`
                  ? "page"
                  : undefined
              }
            >
              {l(item.label, locale)}
            </Link>
          ))}
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-main">
            <div className="footer-intro">
              <div className="footer-availability">
                <span className="availability-dot" />
                {l(portfolio.profile.availability, locale)}
              </div>
              <h2>{l(ui.footerHeadline, locale)}</h2>
              <p>{l(ui.footerIntro, locale)}</p>
              <a
                className="footer-email"
                href={`mailto:${portfolio.profile.email}`}
              >
                <span>
                  <Mail size={17} />
                  {portfolio.profile.email}
                </span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
            <div className="footer-profile">
              <Link
                className="footer-monogram"
                href={`/${locale}`}
                aria-label={portfolio.profile.name}
              >
                {portfolio.profile.initials}
              </Link>
              <h3>{portfolio.profile.name}</h3>
              <p>{l(portfolio.profile.role, locale)}</p>
              <p>{portfolio.profile.university}</p>
              <span className="footer-location">
                <MapPin size={15} />
                {portfolio.profile.location}
              </span>
            </div>
          </div>
          <div className="footer-directory">
            <div>
              <span className="footer-label">{l(ui.explore, locale)}</span>
              <nav aria-label={l(ui.explore, locale)}>
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    href={`/${locale}${item.path ? `/${item.path}` : ""}`}
                  >
                    {l(item.label, locale)}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <span className="footer-label">{l(ui.social, locale)}</span>
              <div className="footer-socials">
                {portfolio.profile.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {portfolio.profile.name}.{" "}
              {l(ui.copyright, locale)}
            </span>
            <span>{l(portfolio.profile.degree, locale)}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export function CvActions({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const url = portfolio.profile.cv[locale];
  const titleId = `cv-title-${compact ? "compact" : "full"}`;
  return (
    <>
      <div className={`cv-actions ${compact ? "compact" : ""}`}>
        <button
          className="button button-secondary"
          onClick={() => ref.current?.showModal()}
        >
          <Eye size={17} />
          {l(ui.previewCv, locale)}
        </button>
        <a
          className="button button-quiet"
          href={url}
          download={portfolio.profile.cv.filename}
        >
          <Download size={17} />
          {l(ui.downloadCv, locale)}
        </a>
      </div>
      <dialog
        ref={ref}
        className="cv-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) ref.current?.close();
        }}
      >
        <div className="dialog-head">
          <div>
            <span className="eyebrow">{portfolio.profile.name}</span>
            <h2 id={titleId}>{l(ui.cvTitle, locale)}</h2>
          </div>
          <button
            autoFocus
            className="icon-button"
            onClick={() => ref.current?.close()}
            aria-label={l(ui.close, locale)}
          >
            <X size={22} />
          </button>
        </div>
        <iframe
          title={l(ui.cvTitle, locale)}
          src={`${url}#toolbar=0`}
          className="pdf-preview"
        />
        <div className="dialog-foot">
          <p>
            {l(ui.cvFallback, locale)}{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {l(ui.openPdf, locale)}
            </a>
          </p>
          <a
            className="button button-primary"
            href={url}
            download={portfolio.profile.cv.filename}
          >
            <Download size={17} />
            {l(ui.downloadCv, locale)}
          </a>
        </div>
      </dialog>
    </>
  );
}

export function ContactActions({ locale }: { locale: Locale }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.profile.email);
      setState("copied");
    } catch {
      setState("error");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 4000);
  };
  return (
    <div className="contact-actions">
      <a
        className="button button-primary"
        href={`mailto:${portfolio.profile.email}`}
      >
        <Mail size={18} />
        {l(ui.sendEmail, locale)}
      </a>
      <button className="button button-secondary" onClick={copy}>
        {state === "copied" ? <Check size={18} /> : <Copy size={18} />}
        <span aria-live="polite">
          {l(state === "copied" ? ui.copied : ui.copy, locale)}
        </span>
      </button>
      {state === "error" && <p role="status">{l(ui.copyError, locale)}</p>}
    </div>
  );
}
export function SocialIcon({ name }: { name: string }) {
  return name === "linkedin" ? <Link2 size={20} /> : <Camera size={20} />;
}
