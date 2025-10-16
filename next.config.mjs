const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // for static export
  images: {
    unoptimized: true, // required for GitHub Pages or static hosting
  },

  // 🚫 Removed basePath and assetPrefix for custom domain deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
