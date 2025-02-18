/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    unoptimized: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]
    return config
  },
}

module.exports = nextConfig

