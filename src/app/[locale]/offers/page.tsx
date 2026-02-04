import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'offers' })
  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

const discountTiers = [
  {
    percent: 10,
    titleKey: 'directBooking' as const,
    descKey: 'directBookingDesc' as const,
  },
  {
    percent: 15,
    titleKey: 'nonRefundableWeb' as const,
    descKey: 'nonRefundableWebDesc' as const,
  },
  {
    percent: 18,
    titleKey: 'nonRefundableApp' as const,
    descKey: 'nonRefundableAppDesc' as const,
  },
]

export default async function OffersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'offers' })

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative py-28 md:py-36">
        <Image
          src="/images/hero/hero-pool.jpg"
          alt={t('title')}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] text-white font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Discount Tiers */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discountTiers.map((tier, index) => (
              <AnimateIn key={tier.percent} delay={0.1 * index}>
              <div
                className="bg-white text-center p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Large percentage */}
                <div className="mb-6">
                  <span className="text-7xl md:text-8xl font-[family-name:var(--font-heading)] font-bold text-gold leading-none">
                    {tier.percent}
                  </span>
                  <span className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold text-gold">
                    %
                  </span>
                </div>

                <h3 className="text-xl font-[family-name:var(--font-heading)] text-navy mb-3">
                  {t(tier.titleKey)}
                </h3>

                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {t(tier.descKey)}
                </p>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="section-padding bg-navy">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-white mb-4">
            {t('downloadApp')}
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            {t('nonRefundableAppDesc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/ro/app/teleferic-grand-hotel/id6739245894"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-navy px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-cream transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=ro.telefericgrandhotel.telefericgrandhotel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-navy px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-cream transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.57c-.37-.4-.56-1-.56-1.78V2.2c0-.79.19-1.38.56-1.78l.1-.1L14.5 11.5v.25L3.27 23.48l-.09-.09zM18.27 15.33l-3.77-3.77v-.25l3.77-3.77.08.05 4.48 2.54c1.28.72 1.28 1.9 0 2.63l-4.48 2.55-.08.02zM14.5 11.5L3.27.31C3.72-.12 4.4-.2 5.18.23l9.32 5.3-3.77 3.77 3.77 3.77-9.32 5.3c-.78.43-1.46.35-1.91-.08L14.5 11.5z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
