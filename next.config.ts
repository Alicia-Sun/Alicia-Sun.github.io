// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for static HTML export (next export)
  images: {
    unoptimized: true, // Required for next export to work with images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
