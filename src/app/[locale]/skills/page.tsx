import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { isLocale, ui, localize as l } from "@/data/global";
import { SkillsPage } from "@/components/pages";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(
    locale,
    "/skills",
    l(ui.skillsTitle, locale),
    l(ui.skillsIntro, locale),
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SkillsPage locale={locale} />;
}
