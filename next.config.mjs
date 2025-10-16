const isProd = process.env.NODE_ENV === 'production';
const repoName = 'v0-unique-portfolio-website'; // 🔁 your repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // needed for static export
  images: {
    unoptimized: true, // GitHub Pages doesn’t support image optimization
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  // ✅ Optional: ignore build-time lint/type errors (useful in CI)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
