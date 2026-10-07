import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { isLocale, ui, localize as l } from "@/data/global";
import { AboutPage } from "@/components/pages";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(
    locale,
    "/about",
    l(ui.aboutTitle, locale),
    l(ui.aboutIntro, locale),
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <AboutPage locale={locale} />;
}
