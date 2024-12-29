import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint checks during build
  },
  /* Add other Next.js config options here */
};

export default nextConfig;
