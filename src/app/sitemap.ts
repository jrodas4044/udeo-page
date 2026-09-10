import type { MetadataRoute } from "next";
import { programs } from "@/components/programCard";

const base = "https://udeoberistain.edu.gt";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/oferta-academica", "/about", "/blog/modos-operandis-objetivos"];
  return [...staticRoutes, ...programs.map((p) => p.url)].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/blog") ? 0.4 : 0.8,
  }));
}
