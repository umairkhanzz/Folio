import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1440],
    imageSizes: [64, 128, 256, 320],
  },
};

export default nextConfig;
