import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { isLocale, portfolio, localize as l } from "@/data/global";
import { ProjectDetailPage } from "@/components/pages";
export function generateStaticParams() {
  return portfolio.projects.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = portfolio.projects.find((p) => p.slug === slug);
  if (!isLocale(locale) || !project) return {};
  return pageMetadata(
    locale,
    `/projects/${slug}`,
    l(project.title, locale),
    l(project.description, locale),
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = portfolio.projects.find((p) => p.slug === slug);
  if (!isLocale(locale) || !project) notFound();
  return <ProjectDetailPage locale={locale} project={project} />;
}
