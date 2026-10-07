import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { isLocale, portfolio, localize as l } from "@/data/global";
import { HomePage } from "@/components/pages";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    ...pageMetadata(
      locale,
      "",
      `${portfolio.profile.name} | ${l(portfolio.profile.role, locale)}`,
      l(portfolio.site.description, locale),
    ),
    title: {
      absolute: `${portfolio.profile.name} | ${l(portfolio.profile.role, locale)}`,
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomePage locale={locale} />;
}
