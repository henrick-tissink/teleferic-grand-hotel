import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Playfair_Display, Inter } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { BackToTop } from '@/components/ui/BackToTop'
import type { Metadata } from 'next'

const BASE_URL = 'https://telefericgrandhotel.ro'

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'ro': `${BASE_URL}/ro`,
        'en': `${BASE_URL}/en`,
        'de': `${BASE_URL}/de`,
        'x-default': `${BASE_URL}/ro`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Teleferic Grand Hotel',
      locale: locale,
      images: [
        {
          url: '/images/hero/hero-summer-entrance.jpg',
          width: 1200,
          height: 630,
          alt: 'Teleferic Grand Hotel - Poiana Brașov',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/hero/hero-summer-entrance.jpg'],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  const messages = await getMessages()
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const tMeta = await getTranslations({ locale, namespace: 'meta' })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Teleferic Grand Hotel',
    description: tMeta('description'),
    url: `${BASE_URL}/${locale}`,
    telephone: '+40368100200',
    email: 'rezervari@telefericgrandhotel.ro',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Str. Poiana Soarelui 243',
      addressLocality: 'Poiana Brașov',
      addressRegion: 'Brașov',
      postalCode: '500001',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.5926,
      longitude: 25.4548,
    },
    starRating: {
      '@type': 'Rating',
      ratingValue: '5',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Pool', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Conference', value: true },
    ],
    priceRange: '$$$$',
  }

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[family-name:var(--font-body)] antialiased bg-white text-charcoal">
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:bg-gold focus-visible:text-navy focus-visible:px-4 focus-visible:py-2 focus-visible:font-semibold">
            {tCommon('skipToContent')}
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
