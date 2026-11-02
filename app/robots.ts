import type { MetadataRoute } from 'next'

// Required for static export builds such as Cloudflare Pages.
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' } }
}
