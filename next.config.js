const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }] // required to make Recharts work
    return config
  },
}

module.exports = nextConfig

