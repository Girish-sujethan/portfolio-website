/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Enable static exports for Cloudflare Pages
  output: 'export',
}

module.exports = nextConfig

