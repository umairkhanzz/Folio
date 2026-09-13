import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://muhammadumairk.dev", // TODO: Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
