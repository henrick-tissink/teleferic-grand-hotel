import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { notFound } from 'next/navigation'
import { rooms, getRoomBySlug } from '@/content/rooms'
import type { Locale } from '@/i18n/config'
import { locales } from '@/i18n/config'
import {
  Wifi,
  Thermometer,
  Wine,
  Tv,
  Bath,
  Shirt,
  Coffee,
  Sunrise,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { BookingBar } from '@/components/sections/BookingBar'
import { Gallery } from '@/components/ui/Gallery'
import { AnimateIn } from '@/components/ui/AnimateIn'

const amenityIcons: Record<string, React.ElementType> = {
  wifi: Wifi,
  'air-conditioning': Thermometer,
  minibar: Wine,
  'flat-screen-tv': Tv,
  bathrobe: Shirt,
  'coffee-machine': Coffee,
  'mountain-view': Sunrise,
  'hair-dryer': Bath,
}



export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'rooms' })
  const room = getRoomBySlug(slug)
  if (!room) return { title: t('notFound') }
  return {
    title: `${room.name[locale as Locale]} | ${t('title')} | Teleferic Grand Hotel`,
    description: room.description[locale as Locale],
  }
}

export function generateStaticParams() {
  const params: { slug: string }[] = []
  for (const room of rooms) {
    for (const loc of locales) {
      params.push({ slug: room.slug[loc] })
    }
  }
  return params
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const room = getRoomBySlug(slug)
  if (!room) notFound()

  const t = await getTranslations({ locale, namespace: 'rooms' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const tAmenities = await getTranslations({ locale, namespace: 'amenities' })

  return (
    <>
      {/* Photo Gallery */}
      <section className="bg-navy pt-6 pb-2">
        <div className="container-custom">
          <Gallery
            images={room.images.map((src, i) => ({
              src,
              alt: `${room.name[locale as Locale]} - ${i + 1}`,
            }))}
          />
        </div>
      </section>

      {/* Room Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/rooms"
              className="inline-flex items-center text-gold text-sm font-semibold uppercase tracking-wider mb-8 hover:text-gold-light transition-colors"
            >
              &larr; {tCommon('backTo', { page: t('title') })}
            </Link>

            {/* Title & Description */}
            <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy font-bold mb-4">
              {room.name[locale as Locale]}
            </h1>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              {room.description[locale as Locale]}
            </p>

            {/* Key Details */}
            <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 p-8 bg-cream">
              <div>
                <p className="text-sm text-charcoal/70 uppercase tracking-wider mb-1">
                  {t('size', { size: room.size })}
                </p>
                <p className="text-2xl font-[family-name:var(--font-heading)] text-navy font-bold">
                  {room.size} m&sup2;
                </p>
              </div>
              <div>
                <p className="text-sm text-charcoal/70 uppercase tracking-wider mb-1">
                  {t('bedType')}
                </p>
                <p className="text-navy font-medium">
                  {room.bedType[locale as Locale]}
                </p>
              </div>
              <div>
                <p className="text-sm text-charcoal/70 uppercase tracking-wider mb-1">
                  {t('occupancy')}
                </p>
                <p className="text-navy font-medium">
                  {room.capacity.childAgeLimit
                    ? t('adultsAndChild', {
                        adults: room.capacity.adults,
                        children: room.capacity.children,
                        age: room.capacity.childAgeLimit,
                      })
                    : room.capacity.hasSofaBed
                      ? t('maxGuests', { count: room.capacity.maxOccupancy })
                      : t('maxAdults', { count: room.capacity.adults })}
                </p>
                {room.capacity.childSleepsWithParents && (
                  <p className="text-sm text-charcoal/60 mt-1">
                    {t('childInParentsBed')}
                  </p>
                )}
                {room.capacity.hasSofaBed && (
                  <p className="text-sm text-charcoal/60 mt-1">
                    {t('sofaBedAvailable')}
                  </p>
                )}
                <p className="text-sm text-charcoal/60 mt-1">
                  {t('noExtraBed')}
                </p>
              </div>
            </div>
            </AnimateIn>

            {/* Amenities */}
            <AnimateIn delay={0.1}>
            <div className="mb-12">
              <h2 className="text-2xl font-[family-name:var(--font-heading)] text-navy font-bold mb-6">
                {t('amenities')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {room.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity]
                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 p-3 bg-cream/50 border border-cream"
                    >
                      {Icon && <Icon className="w-5 h-5 text-gold flex-shrink-0" />}
                      <span className="text-sm text-charcoal">
                        {tAmenities(amenity)}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
            </AnimateIn>

            {/* Floor Plan */}
            {room.floorPlan && (
              <AnimateIn delay={0.2}>
              <div className="mb-12">
                <h2 className="text-2xl font-[family-name:var(--font-heading)] text-navy font-bold mb-6">
                  {t('floorPlan')}
                </h2>
                <div className="bg-white border border-cream p-6">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={room.floorPlan}
                      alt={`${room.name[locale as Locale]} - ${t('floorPlan')}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 800px"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </div>
                </div>
              </div>
              </AnimateIn>
            )}

            {/* CTA */}
            <div className="text-center py-8 border-t border-cream">
              <Button as="link" href="/booking" size="lg">
                {t('bookThisRoom')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Bar */}
      <BookingBar />
    </>
  )
}
