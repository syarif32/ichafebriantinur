import type { Metadata } from "next";
import { portfolio, type Locale } from "@/data/global";
/** Canonical and language alternates always refer to the same page. */
export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = portfolio.site.url.replace(/\/$/, "");
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      ...(url ? { url: `${url}/${locale}${path}` } : {}),
    },
    ...(url
      ? {
          alternates: {
            canonical: `${url}/${locale}${path}`,
            languages: { id: `${url}/id${path}`, en: `${url}/en${path}` },
          },
        }
      : {}),
  };
}
