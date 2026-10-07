import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { isLocale, ui, localize as l } from "@/data/global";
import { ProjectsPage } from "@/components/pages";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(
    locale,
    "/projects",
    l(ui.projectsTitle, locale),
    l(ui.projectsIntro, locale),
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ProjectsPage locale={locale} />;
}
