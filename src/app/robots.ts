import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/students/" },
    sitemap: "https://udeoberistain.edu.gt/sitemap.xml",
  };
}
