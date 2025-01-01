import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint checks during build
  },
  output: 'export',
  /* Add other Next.js config options here */
};

export default nextConfig;
