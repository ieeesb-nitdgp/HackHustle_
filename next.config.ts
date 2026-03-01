import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c1.staticflickr.com',
      },
    ],
  },
};

export default nextConfig;
