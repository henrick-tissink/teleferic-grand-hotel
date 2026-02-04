import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { rooms } from '@/content/rooms'
import type { Locale } from '@/i18n/config'
import BookingForm from '@/components/forms/BookingForm'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'booking' })
  return { title: `${t('title')} | Teleferic Grand Hotel` }
}

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { locale } = await params
  const sp = await searchParams
  const t = await getTranslations({ locale, namespace: 'booking' })

  const sortedRooms = [...rooms].sort((a, b) => a.order - b.order)
  const roomOptions = sortedRooms.map((room) => ({
    id: room.id,
    name: room.name[locale as Locale],
  }))

  const translations = {
    checkIn: t('checkIn'),
    checkOut: t('checkOut'),
    adults: t('adults'),
    children: t('children'),
    roomType: t('roomType'),
    name: t('name'),
    email: t('email'),
    phone: t('phone'),
    specialRequests: t('specialRequests'),
    discountInfo: t('discountInfo', { percent: 18 }),
    submit: t('submit'),
    submitting: t('submitting'),
    successMessage: t('successMessage'),
    weWillConfirm: t('weWillConfirm'),
    makeAnother: t('makeAnother'),
    nameRequired: t('nameRequired'),
    emailInvalid: t('emailInvalid'),
    checkinRequired: t('checkinRequired'),
    checkoutRequired: t('checkoutRequired'),
    adultsRequired: t('adultsRequired'),
    phoneInvalid: t('phoneInvalid'),
  }

  const defaults = {
    checkin: typeof sp.checkin === 'string' ? sp.checkin : undefined,
    checkout: typeof sp.checkout === 'string' ? sp.checkout : undefined,
    adults: typeof sp.adults === 'string' ? sp.adults : undefined,
    children: typeof sp.children === 'string' ? sp.children : undefined,
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36">
        <Image
          src="/images/hero/hero-summer-entrance.jpg"
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

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <AnimateIn>
          <BookingForm translations={translations} roomOptions={roomOptions} defaults={defaults} />
          </AnimateIn>

          {/* Contact Info */}
          <AnimateIn delay={0.1}>
          <div className="mt-12 text-center text-charcoal/70">
            <p className="mb-2">
              {t('bookByPhone')}{' '}
              <a href="tel:+40368100200" className="text-gold hover:underline">0368 100 200</a>
            </p>
            <p>
              {t('orEmail')}{' '}
              <a href="mailto:rezervari@telefericgrandhotel.ro" className="text-gold hover:underline">rezervari@telefericgrandhotel.ro</a>
            </p>
          </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
