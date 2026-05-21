import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mundo-magico-theta.vercel.app";

  const staticRoutes = [
    { url: "", changeFrequency: "daily" as const, priority: 1.0 },
    { url: "/servicos", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/artefactos", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/sobre", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/contactos", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/politica-privacidade", changeFrequency: "monthly" as const, priority: 0.3 },
    { url: "/politica-cookies", changeFrequency: "monthly" as const, priority: 0.3 },
    { url: "/termos-servico", changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  const productRoutes = PRODUCTS.map((product) => ({
    url: `/artefactos/${product.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const allRoutes = [...staticRoutes, ...productRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
