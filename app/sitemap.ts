import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://audio.rikdewit.nl';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Since it's a single page app with anchors, we technically only have the root URL indexed.
    // However, if we add blog posts or subpages later, they would go here.
  ];
}