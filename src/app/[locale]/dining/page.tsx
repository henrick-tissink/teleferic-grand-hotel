import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { diningVenues } from '@/content/dining'
import type { Locale } from '@/i18n/config'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'dining' })
  return {
    title: `${t('title')} | Teleferic Grand Hotel`,
    description: t('subtitle'),
  }
}

export default async function DiningPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'dining' })
  const sortedVenues = [...diningVenues].sort((a, b) => a.order - b.order)

  return (
    <>
      {/* Page Header */}
      <section className="relative py-28 md:py-36">
        <Image
          src={sortedVenues[0].images[0]}
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

      {/* Venues Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedVenues.map((venue, index) => (
              <AnimateIn key={venue.id} delay={0.1 * index}>
              <Link
                href={{ pathname: '/dining/[slug]', params: { slug: venue.slug[locale as Locale] } }}
                className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={venue.images[0]}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-[family-name:var(--font-heading)] text-navy font-bold mb-2">
                    {venue.name}
                  </h2>
                  <p className="text-sm text-charcoal/70 mb-3">
                    {venue.style[locale as Locale]}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-charcoal/70">
                    <span className="flex items-center gap-1">
                      {t('hours')}: {venue.hours}
                    </span>
                  </div>
                  {(venue.capacity.interior > 0 || venue.capacity.terrace > 0) && (
                    <div className="flex items-center gap-3 text-sm text-charcoal/70 mt-2">
                      {venue.capacity.interior > 0 && (
                        <span>{t('interior')}: {venue.capacity.interior} {t('seats')}</span>
                      )}
                      {venue.capacity.interior > 0 && venue.capacity.terrace > 0 && (
                        <span className="w-1 h-1 rounded-full bg-gold" />
                      )}
                      {venue.capacity.terrace > 0 && (
                        <span>{t('terrace')}: {venue.capacity.terrace} {t('seats')}</span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
