import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { Link } from '@/i18n/routing'
import { Gallery } from '@/components/ui/Gallery'
import type { Locale } from '@/i18n/config'
import { Clock, Mail, Phone, Droplets, Flame, Wind, Snowflake, Sparkles, ShowerHead } from 'lucide-react'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'spa' })
  return {
    title: `${t('title')} | Teleferic Grand Hotel`,
    description: t('subtitle'),
  }
}

const facilities = [
  { icon: Droplets, key: 'swimmingPool' },
  { icon: Droplets, key: 'jacuzzi' },
  { icon: Flame, key: 'finnishSauna' },
  { icon: Flame, key: 'infraredSauna' },
  { icon: Flame, key: 'herbalSauna' },
  { icon: Wind, key: 'steamBath' },
  { icon: Sparkles, key: 'saltRoom' },
  { icon: Snowflake, key: 'iceFountain' },
  { icon: ShowerHead, key: 'experienceShowers' },
  { icon: Sparkles, key: 'relaxationArea' },
] as const

const facilityNames: Record<string, Record<Locale, string>> = {
  swimmingPool: { ro: 'Piscină', en: 'Swimming Pool', de: 'Schwimmbad' },
  jacuzzi: { ro: 'Jacuzzi', en: 'Jacuzzi', de: 'Whirlpool' },
  finnishSauna: { ro: 'Saună Finlandeză', en: 'Finnish Sauna', de: 'Finnische Sauna' },
  infraredSauna: { ro: 'Saună cu Infraroșu', en: 'Infrared Sauna', de: 'Infrarotsauna' },
  herbalSauna: { ro: 'Saună cu Plante', en: 'Herbal Sauna', de: 'Kräutersauna' },
  steamBath: { ro: 'Baie de Aburi', en: 'Steam Bath', de: 'Dampfbad' },
  saltRoom: { ro: 'Camera de Sare', en: 'Salt Room', de: 'Salzraum' },
  iceFountain: { ro: 'Fântână de Gheață', en: 'Ice Fountain', de: 'Eisbrunnen' },
  experienceShowers: { ro: 'Dușuri Experiențiale', en: 'Experience Showers', de: 'Erlebnisduschen' },
  relaxationArea: { ro: 'Zonă de Relaxare', en: 'Relaxation Area', de: 'Entspannungsbereich' },
}

const massageTypes: Record<Locale, string[]> = {
  ro: [
    'Masaj Clasic',
    'Masaj cu Aromaterapie',
    'Masaj cu Pietre Calde',
    'Masaj Deep Tissue',
    'Masaj pentru Cuplu',
    'Tratamente Faciale',
  ],
  en: [
    'Classic Massage',
    'Aromatherapy Massage',
    'Hot Stone Massage',
    'Deep Tissue Massage',
    'Couples Massage',
    'Facial Treatments',
  ],
  de: [
    'Klassische Massage',
    'Aromatherapie-Massage',
    'Hot-Stone-Massage',
    'Tiefengewebsmassage',
    'Paarmassage',
    'Gesichtsbehandlungen',
  ],
}

const galleryImageAlts: Record<Locale, string[]> = {
  ro: ['Piscină', 'Zona piscinei', 'Jacuzzi', 'Jacuzzi exterior', 'Saună', 'Saună iarna', 'Masaj pentru cuplu', 'Cameră de terapie', 'Zonă de relaxare', 'Pat cu cuarț', 'Fântână piscină', 'Spa Bar'],
  en: ['Swimming Pool', 'Pool Area', 'Jacuzzi', 'Outdoor Jacuzzi', 'Sauna', 'Sauna Winter', 'Couple Massage', 'Therapy Room', 'Relaxation Area', 'Quartz Bed', 'Pool Fountain', 'Spa Bar'],
  de: ['Schwimmbad', 'Poolbereich', 'Whirlpool', 'Außen-Whirlpool', 'Sauna', 'Sauna Winter', 'Paarmassage', 'Therapieraum', 'Entspannungsbereich', 'Quarzbett', 'Pool-Brunnen', 'Spa-Bar'],
}

const galleryImageSrcs = [
  '/images/spa/pool1.jpg',
  '/images/spa/pool2.jpg',
  '/images/spa/jacuzzi-winter-1.jpg',
  '/images/spa/jacuzzi-winter-2.jpg',
  '/images/spa/dry-sauna.jpg',
  '/images/spa/dry-sauna-winter.jpg',
  '/images/spa/couple-massage.jpg',
  '/images/spa/couple-therapy-room.jpg',
  '/images/spa/relaxation-area.jpg',
  '/images/spa/quartz-bed.jpg',
  '/images/spa/pool-fountain.jpg',
  '/images/spa/spa-bar.jpg',
]

const hoursLabels: Record<Locale, { poolSauna: string; massage: string; poolHours: string; massageHours: string }> = {
  ro: {
    poolSauna: 'Piscină & Saune',
    massage: 'Masaj',
    poolHours: '10:00 - 22:00',
    massageHours: 'Cu programare',
  },
  en: {
    poolSauna: 'Pool & Saunas',
    massage: 'Massage',
    poolHours: '10:00 - 22:00',
    massageHours: 'By appointment',
  },
  de: {
    poolSauna: 'Pool & Saunen',
    massage: 'Massage',
    poolHours: '10:00 - 22:00',
    massageHours: 'Nach Vereinbarung',
  },
}

export default async function SpaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = localeParam as Locale
  const t = await getTranslations({ locale, namespace: 'spa' })

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/images/spa/pool1.jpg"
          alt={t('title')}
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
              {t('title')}
            </h1>
            <p className="text-xl text-white/80">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateIn>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-12 text-center">
            {t('facilities')}
          </h2>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {facilities.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="bg-cream p-6 text-center group hover:bg-navy transition-colors duration-300"
              >
                <Icon
                  size={36}
                  className="mx-auto mb-3 text-gold group-hover:text-gold-light transition-colors"
                />
                <p className="text-sm font-semibold text-navy group-hover:text-white transition-colors">
                  {facilityNames[key][locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massages & Treatments */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <AnimateIn>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-12 text-center">
            {t('massages')}
          </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {massageTypes[locale].map((massage) => (
              <div
                key={massage}
                className="bg-white p-6 border-l-4 border-gold hover:shadow-lg transition-shadow duration-300"
              >
                <p className="font-semibold text-navy">{massage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Hours */}
            <div>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] font-bold mb-8 text-gold">
                {t('hours')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">{hoursLabels[locale].poolSauna}</p>
                    <p className="text-white/70">{hoursLabels[locale].poolHours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">{hoursLabels[locale].massage}</p>
                    <p className="text-white/70">{hoursLabels[locale].massageHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] font-bold mb-8 text-gold">
                {t('contact')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-gold shrink-0" />
                  <a
                    href="mailto:spa@telefericgrandhotel.ro"
                    className="hover:text-gold transition-colors"
                  >
                    spa@telefericgrandhotel.ro
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-gold shrink-0" />
                  <a
                    href="tel:+40368100206"
                    className="hover:text-gold transition-colors"
                  >
                    0368 100 206
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <Gallery images={galleryImageSrcs.map((src, i) => ({ src, alt: galleryImageAlts[locale][i] }))} />
        </div>
      </section>
    </>
  )
}
