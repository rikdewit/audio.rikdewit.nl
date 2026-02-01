/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Indien je op een subpad host (bijv. gebruikersnaam.github.io/repo-naam/), 
  // voeg dan basePath toe. Voor audio.rikdewit.nl (custom domein) is '/' correct.
  basePath: '',
};

export default nextConfig;