import type { NextConfig } from "next";

/* Conditional statement so build can work in production and locally. */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/educational-platform' : '',
  assetPrefix: '/educational-platform',
  publicRuntimeConfig: {
    basePath: '/educational-platform',
  },
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
