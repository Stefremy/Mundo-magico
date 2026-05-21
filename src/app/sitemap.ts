import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mundo-magico-theta.vercel.app";

  const routes = [
    { url: "", changeFrequency: "daily" as const, priority: 1.0 },
    { url: "/servicos", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/artefactos", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/sobre", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/contactos", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/politica-privacidade", changeFrequency: "monthly" as const, priority: 0.3 },
    { url: "/politica-cookies", changeFrequency: "monthly" as const, priority: 0.3 },
    { url: "/termos-servico", changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
