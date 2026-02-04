import type { Metadata, Viewport } from 'next'
import './globals.css'

const BASE_URL = 'https://telefericgrandhotel.ro'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Teleferic Grand Hotel | Poiana Brașov',
    template: '%s | Teleferic Grand Hotel',
  },
  description:
    'Teleferic Grand Hotel - Poiana Brașov \u2605\u2605\u2605\u2605\u2605',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Teleferic Grand Hotel',
    title: 'Teleferic Grand Hotel | Poiana Brașov',
    description:
      'Teleferic Grand Hotel - Poiana Brașov \u2605\u2605\u2605\u2605\u2605',
    url: BASE_URL,
    locale: 'ro_RO',
    alternateLocale: ['en_GB', 'de_DE'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teleferic Grand Hotel | Poiana Brașov',
    description:
      'Teleferic Grand Hotel - Poiana Brașov \u2605\u2605\u2605\u2605\u2605',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
