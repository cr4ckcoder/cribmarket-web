import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "/",
  "/about",
  "/contact",
  "/products",
  "/forex",
  "/indices",
  "/commodities",
  "/crypto",
  "/accounts",
  "/accounts/standard",
  "/accounts/growth",
  "/accounts/edge",
  "/platforms",
  "/terms",
  "/privacy-policy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/accounts") ? 0.8 : 0.7,
  }));
}
