/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
reactStrictMode: true,
  experimental: {
    reactRefresh: false,
  },
images: {
    unoptimized: true,
  },
};

export default nextConfig;
