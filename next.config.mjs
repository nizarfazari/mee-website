/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a minimal runtime bundle for the Docker image.
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
