import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteName = 'Nizar Fazari — Software Engineer'
const description = 'Portfolio Nizar Fazari, Software Engineer yang membangun produk digital, interface, API, dan sistem yang reliable.'

export const metadata: Metadata = {
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  applicationName: 'Meadow.dev Portfolio',
  keywords: ['Nizar Fazari', 'Software Engineer', 'Full-stack Developer', 'Frontend Developer', 'Next.js', 'TypeScript', 'Indonesia'],
  authors: [{ name: 'Nizar Fazari' }],
  creator: 'Nizar Fazari',
  publisher: 'Nizar Fazari',
  referrer: 'origin-when-cross-origin',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: { title: siteName, description, type: 'website', locale: 'id_ID', siteName: 'Meadow.dev Portfolio' },
  twitter: { card: 'summary', title: siteName, description },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' }, { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = { themeColor: '#fff9eb', colorScheme: 'light' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
