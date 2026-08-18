import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    qualities: [72, 75, 82],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
