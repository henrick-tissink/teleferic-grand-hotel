import { getTranslations } from 'next-intl/server'
import { HeroSlider } from '@/components/sections/HeroSlider'
import { AwardsStrip } from '@/components/sections/AwardsStrip'
import { AppDownload } from '@/components/sections/AppDownload'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { rooms } from '@/content/rooms'
import { diningVenues as allDiningVenues } from '@/content/dining'
import type { Locale } from '@/i18n/config'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

const featuredRoomIds = ['deluxe', 'junior-suite-premium', 'junior-suite', 'double-superior']
const featuredDiningIds = ['4-anotimpuri', 'coroana', 'lobby-bar']

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const t = await getTranslations({ locale, namespace: 'home' })
  const tRooms = await getTranslations({ locale, namespace: 'rooms' })

  const featuredRooms = featuredRoomIds
    .map((id) => rooms.find((r) => r.id === id)!)
    .filter(Boolean)

  const diningVenues = featuredDiningIds
    .map((id) => allDiningVenues.find((v) => v.id === id)!)
    .filter(Boolean)

  return (
    <>
      <HeroSlider
        translations={{
          tagline: t('tagline'),
          subtitle: t('subtitle'),
          exploreRooms: t('exploreRooms'),
          bookYourStay: t('bookYourStay'),
          heroSubtitle: t('heroSubtitle'),
          heroImageAlt: t('heroImageAlt'),
          goToSlide: t.raw('goToSlide'),
          slideNavigation: t('slideNavigation'),
        }}
      />

      {/* Rooms Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-4">
              {t('roomsTitle')}
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              {t('roomsSubtitle')}
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRooms.map((room, index) => (
              <AnimateIn key={room.id} delay={0.1 * index}>
                <Link
                  href={{ pathname: '/rooms/[slug]', params: { slug: room.slug[l] } }}
                  className="group block overflow-hidden"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={room.images[0]}
                      alt={room.name[l]}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] text-white font-bold mb-1">
                        {room.name[l]}
                      </h3>
                      <p className="text-white/70 text-sm">{tRooms('size', { size: room.size })}</p>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn className="text-center mt-10" delay={0.4}>
            <Button as="link" href="/rooms" variant="outline" size="lg">
              {t('viewAll')}
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* Dining Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-4">
              {t('diningTitle')}
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              {t('diningSubtitle')}
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diningVenues.map((venue, index) => (
              <AnimateIn key={venue.id} delay={0.15 * index}>
                <Link
                  href={{ pathname: '/dining/[slug]', params: { slug: venue.slug[l] } }}
                  className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={venue.images[0]}
                      alt={venue.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-[family-name:var(--font-heading)] text-navy mb-1">{venue.name}</h3>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn className="text-center mt-10" delay={0.3}>
            <Button as="link" href="/dining" variant="outline" size="lg">
              {t('viewAll')}
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* Spa Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/images/spa/pool1.jpg"
          alt={t('spaAlt')}
          fill
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimateIn className="text-center text-white max-w-3xl px-6">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] font-bold mb-4">
              {t('spaTitle')}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {t('spaSubtitle')}
            </p>
            <Button as="link" href="/spa" size="lg">
              {t('learnMore')}
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-12 text-center">
              {t('activitiesTitle')}
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateIn delay={0.1}>
              <Link href="/activities/winter" className="group relative h-80 overflow-hidden block">
                <Image
                  src="/images/destination/winter/slope-1.jpg"
                  alt={t('winter')}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-[family-name:var(--font-heading)] font-bold mb-2">{t('winter')}</h3>
                    <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                      {t('learnMore')} &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <Link href="/activities/summer" className="group relative h-80 overflow-hidden block">
                <Image
                  src="/images/destination/summer/hiking-trail.jpg"
                  alt={t('summer')}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-[family-name:var(--font-heading)] font-bold mb-2">{t('summer')}</h3>
                    <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                      {t('learnMore')} &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      <AwardsStrip title={t('awardsTitle')} />

      {/* Video Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-10 text-center">
              {t('videoTitle')}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2} className="max-w-4xl mx-auto">
            <YouTubeEmbed videoId="SfXSuTTgEKQ" title={t('videoEmbedTitle')} />
          </AnimateIn>
        </div>
      </section>

      <AppDownload
        translations={{
          appTitle: t('appTitle'),
          appSubtitle: t('appSubtitle'),
          directBooking: t('directBooking'),
          directBookingDesc: t('directBookingDesc'),
          nonRefundableWeb: t('nonRefundableWeb'),
          nonRefundableWebDesc: t('nonRefundableWebDesc'),
          nonRefundableApp: t('nonRefundableApp'),
          nonRefundableAppDesc: t('nonRefundableAppDesc'),
        }}
      />
    </>
  )
}
