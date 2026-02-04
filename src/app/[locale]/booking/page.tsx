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
    stayDates: t('stayDates'),
    guestsAndRoom: t('guestsAndRoom'),
    yourDetails: t('yourDetails'),
    confirmationTitle: t('confirmationTitle'),
    stayLabel: t('stayLabel'),
    guestsLabel: t('guestsLabel'),
    roomLabel: t('roomLabel'),
    contactLabel: t('contactLabel'),
  }

  const defaults = {
    checkin: typeof sp.checkin === 'string' ? sp.checkin : undefined,
    checkout: typeof sp.checkout === 'string' ? sp.checkout : undefined,
    adults: typeof sp.adults === 'string' ? sp.adults : undefined,
    children: typeof sp.children === 'string' ? sp.children : undefined,
  }

  return (
    <section className="bg-cream min-h-screen">
      <div className="container-custom max-w-6xl py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left photo panel — hidden on mobile */}
          <div className="hidden lg:block lg:col-span-5 relative min-h-[600px]">
            <Image
              src="/images/hero/hero-summer-entrance.jpg"
              alt={t('title')}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 0px"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
            <div className="absolute inset-0 bg-navy/70" />
            <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-10">
              {/* Top: badge + hotel name */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h1 className="text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-white font-bold leading-tight">
                  Teleferic<br />Grand Hotel
                </h1>
                <div className="w-12 h-0.5 bg-gold mt-4" />
                <p className="text-white/60 text-sm mt-3">Poiana Brașov, Romania</p>
              </div>

              {/* Bottom: contact info */}
              <div className="space-y-2 text-sm">
                <a href="tel:+40368100200" className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  0368 100 200
                </a>
                <a href="mailto:rezervari@telefericgrandhotel.ro" className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  rezervari@telefericgrandhotel.ro
                </a>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="lg:col-span-7">
            <div className="bg-white shadow-2xl p-8 md:p-12 lg:p-14">
              {/* Mobile-only title */}
              <div className="lg:hidden mb-8 text-center">
                <h1 className="text-3xl font-[family-name:var(--font-heading)] text-navy font-bold mb-2">
                  {t('title')}
                </h1>
                <p className="text-sm text-charcoal/60">{t('subtitle')}</p>
                <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
              </div>

              {/* Desktop title */}
              <div className="hidden lg:block mb-10">
                <h2 className="text-2xl font-[family-name:var(--font-heading)] text-navy font-bold mb-2">
                  {t('title')}
                </h2>
                <p className="text-sm text-charcoal/60">{t('subtitle')}</p>
              </div>

              <AnimateIn>
                <BookingForm translations={translations} roomOptions={roomOptions} defaults={defaults} />
              </AnimateIn>
            </div>
          </div>
        </div>

        {/* Mobile contact info */}
        <AnimateIn delay={0.1}>
          <div className="lg:hidden mt-8 text-center text-charcoal/70">
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
  )
}
