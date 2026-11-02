/** @type {import('next').NextConfig} */
const isStaticExport = process.env.BUILD_TARGET === "static"

const nextConfig = {
  // Docker uses the minimal Node.js bundle; Cloudflare Pages uses static files.
  output: isStaticExport ? "export" : "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
