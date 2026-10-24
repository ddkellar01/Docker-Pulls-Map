/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
