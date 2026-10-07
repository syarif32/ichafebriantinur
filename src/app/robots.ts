import type { MetadataRoute } from "next";
import { portfolio } from "@/data/global";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(portfolio.site.url
      ? { sitemap: `${portfolio.site.url}/sitemap.xml` }
      : {}),
  };
}
