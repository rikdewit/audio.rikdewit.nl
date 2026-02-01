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
};

export default nextConfig;