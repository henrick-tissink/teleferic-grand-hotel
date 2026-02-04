import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { Link } from '@/i18n/routing'
import { conferenceRooms } from '@/content/conference'
import type { Locale } from '@/i18n/config'
import { Users } from 'lucide-react'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'conference' })
  return {
    title: `${t('title')} | Teleferic Grand Hotel`,
    description: t('subtitle'),
  }
}

export default async function ConferencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = localeParam as Locale
  const t = await getTranslations({ locale, namespace: 'conference' })

  const sortedRooms = [...conferenceRooms].sort((a, b) => a.order - b.order)

  return (
    <>
      {/* Header */}
      <section className="relative py-28 md:py-36">
        <Image
          src="/images/conference/brasovia-landscape.jpg"
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

      {/* Conference Rooms Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedRooms.map((room, index) => (
              <AnimateIn key={room.id} delay={0.1 * index}>
              <Link
                href={{ pathname: '/conference/[slug]', params: { slug: room.slug[locale] } }}
                className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-[family-name:var(--font-heading)] text-white font-bold">
                      {room.name}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  {/* Description */}
                  <p className="text-charcoal/70 text-sm mb-5 line-clamp-2">
                    {room.description[locale]}
                  </p>

                  {/* Capacity Table */}
                  <div className="mb-5">
                    <h3 className="text-xs font-semibold text-navy uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Users size={14} />
                      {t('capacity')}
                    </h3>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="bg-cream p-2">
                        <p className="text-charcoal/70 mb-1">{t('theatre')}</p>
                        <p className="font-bold text-navy">{room.capacity.theatre}</p>
                      </div>
                      <div className="bg-cream p-2">
                        <p className="text-charcoal/70 mb-1">{t('banquet')}</p>
                        <p className="font-bold text-navy">{room.capacity.banquet}</p>
                      </div>
                      <div className="bg-cream p-2">
                        <p className="text-charcoal/70 mb-1">{t('classroom')}</p>
                        <p className="font-bold text-navy">{room.capacity.classroom}</p>
                      </div>
                      <div className="bg-cream p-2">
                        <p className="text-charcoal/70 mb-1">{t('ushape')}</p>
                        <p className="font-bold text-navy">{room.capacity.ushape}</p>
                      </div>
                    </div>
                  </div>

                  {/* Equipment preview */}
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                      {t('equipment')}
                    </h3>
                    <ul className="space-y-1">
                      {room.equipment[locale].slice(0, 3).map((item) => (
                        <li key={item} className="text-xs text-charcoal/70 flex items-start gap-1.5">
                          <span className="text-gold mt-0.5">&#8226;</span>
                          {item}
                        </li>
                      ))}
                      {room.equipment[locale].length > 3 && (
                        <li className="text-xs text-gold font-semibold">
                          +{room.equipment[locale].length - 3}...
                        </li>
                      )}
                    </ul>
                  </div>

                  <span className="text-gold text-sm font-semibold uppercase tracking-wider group-hover:underline">
                    {t('requestQuote')} &rarr;
                  </span>
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
