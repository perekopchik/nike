/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/nikestore',
  assetPrefix: '/nikestore',
  images: {
    loader: "akamai",
    path: ""
  }
}

module.exports = nextConfig
