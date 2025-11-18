/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@sanity/client', '@sanity/image-url'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
