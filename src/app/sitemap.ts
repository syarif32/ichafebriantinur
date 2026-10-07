import type { MetadataRoute } from "next";
import { portfolio, locales, navigation } from "@/data/global";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!portfolio.site.url) return [];
  return locales.flatMap((locale) => [
    ...navigation.map((n) => ({
      url: `${portfolio.site.url}/${locale}${n.path ? `/${n.path}` : ""}`,
    })),
    ...portfolio.projects.map((p) => ({
      url: `${portfolio.site.url}/${locale}/projects/${p.slug}`,
    })),
  ]);
}
