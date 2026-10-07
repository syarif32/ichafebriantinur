import Link from "next/link";
import { portfolio, ui, localize as l } from "@/data/global";
export default function NotFound() {
  const locale = portfolio.site.defaultLocale;
  return (
    <main className="container not-found">
      <span className="eyebrow">404</span>
      <h1>{l(ui.notFound, locale)}</h1>
      <Link className="button button-primary" href={`/${locale}`}>
        {l(ui.backHome, locale)}
      </Link>
    </main>
  );
}
