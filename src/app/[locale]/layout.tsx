import { notFound } from "next/navigation";
import { isLocale, locales, portfolio, localize as l } from "@/data/global";
import { Shell } from "@/components/portfolio-shell";
import type { Metadata } from "next";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    description: l(portfolio.site.description, locale),
    openGraph: {
      title: `${portfolio.profile.name} | ${l(portfolio.profile.role, locale)}`,
      description: l(portfolio.site.description, locale),
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
    },
  };
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Shell locale={locale}>{children}</Shell>;
}
