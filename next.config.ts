import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // todo set up the image remote patterns
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
