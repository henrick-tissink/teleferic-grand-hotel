import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { Link } from '@/i18n/routing'
import { Gallery } from '@/components/ui/Gallery'
import { conferenceRooms } from '@/content/conference'
import { locales, type Locale } from '@/i18n/config'
import { notFound } from 'next/navigation'
import { Users, Monitor, ChevronLeft } from 'lucide-react'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Button } from '@/components/ui/Button'

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    conferenceRooms.map((room) => ({
      locale,
      slug: room.slug[locale],
    }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'conference' })
  const room = conferenceRooms.find((r) => r.slug[locale as Locale] === slug)

  if (!room) {
    return { title: 'Not Found' }
  }

  return {
    title: `${room.name} | ${t('title')} | Teleferic Grand Hotel`,
    description: room.description[locale as Locale],
  }
}

export default async function ConferenceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'conference' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const typedLocale = locale as Locale

  const room = conferenceRooms.find((r) => r.slug[typedLocale] === slug)

  if (!room) {
    notFound()
  }

  const galleryImages = room.images.map((src) => ({
    src,
    alt: room.name,
  }))

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-6">
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] font-bold mb-4">
              {room.name}
            </h1>
            <p className="text-lg text-white/80">{room.description[typedLocale]}</p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="container-custom pt-8">
        <Link
          href="/conference"
          className="inline-flex items-center gap-1.5 text-sm text-charcoal/70 hover:text-navy transition-colors"
        >
          <ChevronLeft size={16} />
          {tCommon('backTo', { page: t('title') })}
        </Link>
      </div>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Capacity Table */}
              <AnimateIn>
              <div>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-navy mb-6 flex items-center gap-3">
                  <Users size={24} className="text-gold" />
                  {t('capacity')}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-gold">
                        <th className="py-3 pr-6 text-sm font-semibold text-navy uppercase tracking-wider">
                          {t('theatre')}
                        </th>
                        <th className="py-3 pr-6 text-sm font-semibold text-navy uppercase tracking-wider">
                          {t('banquet')}
                        </th>
                        <th className="py-3 pr-6 text-sm font-semibold text-navy uppercase tracking-wider">
                          {t('classroom')}
                        </th>
                        <th className="py-3 text-sm font-semibold text-navy uppercase tracking-wider">
                          {t('ushape')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-cream-dark">
                        <td className="py-4 pr-6 text-2xl font-bold text-navy">
                          {room.capacity.theatre}
                        </td>
                        <td className="py-4 pr-6 text-2xl font-bold text-navy">
                          {room.capacity.banquet}
                        </td>
                        <td className="py-4 pr-6 text-2xl font-bold text-navy">
                          {room.capacity.classroom}
                        </td>
                        <td className="py-4 text-2xl font-bold text-navy">
                          {room.capacity.ushape}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              </AnimateIn>

              {/* Equipment */}
              <AnimateIn delay={0.1}>
              <div>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-navy mb-6 flex items-center gap-3">
                  <Monitor size={24} className="text-gold" />
                  {t('equipment')}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {room.equipment[typedLocale].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 bg-cream p-4"
                    >
                      <span className="text-gold mt-0.5 font-bold">&#10003;</span>
                      <span className="text-charcoal/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </AnimateIn>

              {/* Event Equipment */}
              {room.eventEquipment && (
                <AnimateIn delay={0.2}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-navy mb-6">
                    {t('eventEquipment')}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {room.eventEquipment[typedLocale].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 bg-cream p-4"
                      >
                        <span className="text-gold mt-0.5 font-bold">&#9834;</span>
                        <span className="text-charcoal/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                </AnimateIn>
              )}

              {/* Gallery */}
              {galleryImages.length > 1 && (
                <AnimateIn delay={0.3}>
                <div>
                  <Gallery images={galleryImages} />
                </div>
                </AnimateIn>
              )}
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-navy p-8 text-white">
                <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold mb-4 text-gold">
                  {room.name}
                </h3>
                <p className="text-white/70 text-sm mb-6">{room.description[typedLocale]}</p>

                <div className="space-y-3 mb-8 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">{t('theatre')}</span>
                    <span className="font-bold">{room.capacity.theatre}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">{t('banquet')}</span>
                    <span className="font-bold">{room.capacity.banquet}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">{t('classroom')}</span>
                    <span className="font-bold">{room.capacity.classroom}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">{t('ushape')}</span>
                    <span className="font-bold">{room.capacity.ushape}</span>
                  </div>
                </div>

                <Button as="link" href="/contact" size="lg" className="w-full">
                  {t('requestQuote')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
