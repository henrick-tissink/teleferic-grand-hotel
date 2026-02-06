import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { notFound } from 'next/navigation'
import { diningVenues } from '@/content/dining'
import type { Locale } from '@/i18n/config'
import { locales } from '@/i18n/config'
import { CigaretteOff } from 'lucide-react'
import { AnimateIn } from '@/components/ui/AnimateIn'

function getVenueBySlug(slug: string) {
  return diningVenues.find(
    (venue) =>
      venue.slug.ro === slug || venue.slug.en === slug || venue.slug.de === slug
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const venue = getVenueBySlug(slug)
  if (!venue) return { title: 'Venue Not Found' }
  const t = await getTranslations({ locale, namespace: 'dining' })
  return {
    title: `${venue.name} | ${t('title')} | Teleferic Grand Hotel`,
    description: venue.description[locale as Locale],
  }
}

export function generateStaticParams() {
  const params: { slug: string }[] = []
  for (const venue of diningVenues) {
    for (const loc of locales) {
      params.push({ slug: venue.slug[loc] })
    }
  }
  return params
}

export default async function DiningDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const venue = getVenueBySlug(slug)
  if (!venue) notFound()

  const t = await getTranslations({ locale, namespace: 'dining' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={venue.images[0]}
          alt={venue.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-white font-bold mb-2">
              {venue.name}
            </h1>
            <p className="text-lg text-gold font-medium">
              {venue.style[locale as Locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Venue Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/dining"
              className="inline-flex items-center text-gold text-sm font-semibold uppercase tracking-wider mb-8 hover:text-gold-light transition-colors"
            >
              &larr; {tCommon('backTo', { page: t('title') })}
            </Link>

            {/* Description */}
            <AnimateIn>
            <p className="text-lg text-charcoal/70 mb-10 leading-relaxed">
              {venue.description[locale as Locale]}
            </p>
            </AnimateIn>

            {/* Details Grid */}
            <AnimateIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 p-8 bg-cream">
              <div>
                <p className="text-sm text-charcoal/70 uppercase tracking-wider mb-1">
                  {t('hours')}
                </p>
                <p className="text-navy font-medium">{venue.hours[locale as Locale]}</p>
              </div>
              <div>
                <p className="text-sm text-charcoal/70 uppercase tracking-wider mb-1">
                  {t('dressCode')}
                </p>
                <p className="text-navy font-medium">
                  {venue.dressCode[locale as Locale]}
                </p>
              </div>
              <div>
                <p className="text-sm text-charcoal/70 uppercase tracking-wider mb-1">
                  {t('menu')}
                </p>
                <p className="text-navy font-medium">
                  {venue.menuType[locale as Locale]}
                </p>
              </div>
              {(venue.capacity.interior > 0 || venue.capacity.terrace > 0) && (
                <div>
                  <p className="text-sm text-charcoal/70 uppercase tracking-wider mb-1">
                    {t('capacity')}
                  </p>
                  <div className="text-navy font-medium">
                    {venue.capacity.interior > 0 && (
                      <span>{t('interior')}: {venue.capacity.interior} {t('seats')}</span>
                    )}
                    {venue.capacity.interior > 0 && venue.capacity.terrace > 0 && (
                      <span className="mx-2 text-charcoal/70">|</span>
                    )}
                    {venue.capacity.terrace > 0 && (
                      <span>{t('terrace')}: {venue.capacity.terrace} {t('seats')}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
            </AnimateIn>

            {/* Non-smoking Badge */}
            <AnimateIn delay={0.2}>
            <div className="flex items-center gap-3 mb-12 p-4 bg-white border border-cream inline-flex">
              <CigaretteOff className="w-5 h-5 text-gold" />
              <span className="text-sm text-charcoal font-medium">
                {t('nonSmoking')}
              </span>
            </div>
            </AnimateIn>

            {/* Photo Gallery */}
            {venue.images.length > 1 && (
              <AnimateIn delay={0.3}>
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {venue.images.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image}
                        alt={`${venue.name} - ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                    </div>
                  ))}
                </div>
              </div>
              </AnimateIn>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
