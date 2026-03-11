/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages often works better with trailing slashes for directory-style URLs
  trailingSlash: true,
  // Ensure the base path is empty for custom domains
  basePath: '',
  headers: async () => [
    {
      source: '/projects/:slug/images/:image*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ]
};

export default nextConfig;