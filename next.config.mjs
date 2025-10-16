const isProd = process.env.NODE_ENV === 'production';

const repoName = 'v0-unique-portfolio-website'; // 🔁 replace this with your repo name

module.exports = {
  output: 'export', // needed for static export
  images: {
    unoptimized: true, // since GitHub Pages doesn’t support Image Optimization
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
