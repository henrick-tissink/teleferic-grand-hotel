import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { Locale } from '@/i18n/config'
import { AnimateIn } from '@/components/ui/AnimateIn'

const content: Record<Locale, {
  hairStudioSubtitle: string
  hairStudioDescription: string
  hairStudioBullet1: string
  hairStudioBullet2: string
  hairStudioBullet3: string
  hoursLabel: string
  byReservation: string
  contactLabel: string
  equipmentSubtitle: string
  equipmentDescription: string
  winterEquipmentHeading: string
  winterEquipmentDescription: string
  winterMonths: string
  summerEquipmentHeading: string
  summerEquipmentDescription: string
  summerMonths: string
  parkingDescription: string
  parkingNote: string
  evDescription: string
  evStations: string
  evProvider: string
}> = {
  en: {
    hairStudioSubtitle: 'Beauty & Grooming',
    hairStudioDescription:
      'Our on-site Hair Studio offers a full range of professional beauty services including cosmetics, makeup, and hairdressing. Whether preparing for a special event or simply indulging in some self-care, our skilled stylists ensure you leave looking and feeling your best.',
    hairStudioBullet1: 'Cosmetics & skincare treatments',
    hairStudioBullet2: 'Professional makeup services',
    hairStudioBullet3: 'Hairdressing & styling',
    hoursLabel: 'Hours',
    byReservation: 'By reservation',
    contactLabel: 'Contact',
    equipmentSubtitle: 'Sport & Leisure',
    equipmentDescription:
      "Our rental center provides top-quality sports equipment for every season. Professional staff will help you find the perfect fit so you can make the most of Poiana Brașov’s outdoor adventures.",
    winterEquipmentHeading: 'Winter Equipment',
    winterEquipmentDescription:
      'Skis, snowboards, boots, helmets and poles for all skill levels.',
    winterMonths: 'December – April',
    summerEquipmentHeading: 'Summer Equipment',
    summerEquipmentDescription:
      'Mountain bikes and e-bikes with helmets and route maps included.',
    summerMonths: 'May – September',
    parkingDescription:
      'Complimentary outdoor parking is available to all hotel guests. Our spacious parking area is conveniently located adjacent to the hotel entrance, providing easy access at any time.',
    parkingNote: 'Free outdoor parking for guests',
    evDescription:
      'We are committed to sustainable travel. Our hotel features 3 electric vehicle charging stations, each delivering 21kW of power, making it easy to charge your EV while you enjoy your stay.',
    evStations: '3 x 21kW charging stations',
    evProvider: 'Provider: Plugpoint',
  },
  ro: {
    hairStudioSubtitle: 'Frumusețe și Îngrijire',
    hairStudioDescription:
      'Studioul nostru de coafură oferă o gamă completă de servicii profesionale de frumusețe, inclusiv cosmetică, machiaj și coafură. Fie că vă pregătiți pentru un eveniment special sau pur și simplu vă răsfățați, stiliștii noștri experimentați vă asigură că veți pleca arătând și simțindu-vă excelent.',
    hairStudioBullet1: 'Tratamente cosmetice și de îngrijire a pielii',
    hairStudioBullet2: 'Servicii profesionale de machiaj',
    hairStudioBullet3: 'Coafură și styling',
    hoursLabel: 'Program',
    byReservation: 'Cu programare',
    contactLabel: 'Contact',
    equipmentSubtitle: 'Sport și Leisure',
    equipmentDescription:
      'Centrul nostru de închiriere oferă echipament sportiv de cea mai bună calitate pentru fiecare sezon. Personalul profesionist vă va ajuta să găsiți potrivirea perfectă pentru a profita la maximum de aventurile în aer liber din Poiana Brașov.',
    winterEquipmentHeading: 'Echipament de Iarnă',
    winterEquipmentDescription:
      'Schiuri, snowboarduri, bocanci, căști și bețe pentru toate nivelurile de experiență.',
    winterMonths: 'Decembrie – Aprilie',
    summerEquipmentHeading: 'Echipament de Vară',
    summerEquipmentDescription:
      'Biciclete de munte și biciclete electrice cu căști și hărți de traseu incluse.',
    summerMonths: 'Mai – Septembrie',
    parkingDescription:
      'Parcarea exterioară gratuită este disponibilă pentru toți oaspeții hotelului. Zona noastră spațioasă de parcare este situată convenabil lângă intrarea hotelului, oferind acces facil în orice moment.',
    parkingNote: 'Parcare exterioară gratuită pentru oaspeți',
    evDescription:
      'Suntem dedicați călătoriilor sustenabile. Hotelul nostru dispune de 3 stații de încărcare pentru vehicule electrice, fiecare oferind o putere de 21kW, facilitând încărcarea vehiculului electric în timp ce vă bucurați de sejur.',
    evStations: '3 x stații de încărcare de 21kW',
    evProvider: 'Furnizor: Plugpoint',
  },
  de: {
    hairStudioSubtitle: 'Beauty & Pflege',
    hairStudioDescription:
      'Unser hauseigenes Hairstudio bietet eine umfassende Palette professioneller Beauty-Dienstleistungen, darunter Kosmetik, Make-up und Friseurservice. Ob Sie sich auf ein besonderes Event vorbereiten oder sich einfach etwas Gutes tun möchten – unsere erfahrenen Stylisten sorgen dafür, dass Sie bestens aussehen und sich wohlfühlen.',
    hairStudioBullet1: 'Kosmetik- und Hautpflegebehandlungen',
    hairStudioBullet2: 'Professionelle Make-up-Services',
    hairStudioBullet3: 'Friseur und Styling',
    hoursLabel: 'Öffnungszeiten',
    byReservation: 'Nach Vereinbarung',
    contactLabel: 'Kontakt',
    equipmentSubtitle: 'Sport & Freizeit',
    equipmentDescription:
      'Unser Verleihzentrum bietet hochwertige Sportausrüstung für jede Jahreszeit. Unser professionelles Team hilft Ihnen, die perfekte Ausrüstung zu finden, damit Sie die Outdoor-Abenteuer in Poiana Brașov in vollen Zügen genießen können.',
    winterEquipmentHeading: 'Winterausrüstung',
    winterEquipmentDescription:
      'Skier, Snowboards, Stiefel, Helme und Stöcke für alle Könnensstufen.',
    winterMonths: 'Dezember – April',
    summerEquipmentHeading: 'Sommerausrüstung',
    summerEquipmentDescription:
      'Mountainbikes und E-Bikes inklusive Helme und Routenkarten.',
    summerMonths: 'Mai – September',
    parkingDescription:
      'Kostenlose Außenparkplätze stehen allen Hotelgästen zur Verfügung. Unser großzügiger Parkbereich befindet sich direkt neben dem Hoteleingang und bietet jederzeit einfachen Zugang.',
    parkingNote: 'Kostenlose Außenparkplätze für Gäste',
    evDescription:
      'Wir setzen uns für nachhaltiges Reisen ein. Unser Hotel verfügt über 3 Ladestationen für Elektrofahrzeuge mit jeweils 21kW Leistung, sodass Sie Ihr Elektrofahrzeug bequem während Ihres Aufenthalts aufladen können.',
    evStations: '3 x 21kW Ladestationen',
    evProvider: 'Anbieter: Plugpoint',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'facilities' })
  return {
    title: `${t('title')} | Teleferic Grand Hotel`,
    description: t('subtitle'),
  }
}

export default async function FacilitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'facilities' })
  const c = content[locale as Locale]

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36">
        <Image
          src="/images/facilities/hair-studio/1.jpg"
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

      {/* Hair Studio */}
      <AnimateIn delay={0}>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden shadow-sm">
              <Image
                src="/images/facilities/hair-studio/1.jpg"
                alt={t('hairStudio')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold mb-4">
                {c.hairStudioSubtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-navy mb-4">
                {t('hairStudio')}
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                {c.hairStudioDescription}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-charcoal/80">
                  <span className="mt-1.5 w-2 h-2 bg-gold shrink-0" />
                  {c.hairStudioBullet1}
                </li>
                <li className="flex items-start gap-3 text-charcoal/80">
                  <span className="mt-1.5 w-2 h-2 bg-gold shrink-0" />
                  {c.hairStudioBullet2}
                </li>
                <li className="flex items-start gap-3 text-charcoal/80">
                  <span className="mt-1.5 w-2 h-2 bg-gold shrink-0" />
                  {c.hairStudioBullet3}
                </li>
              </ul>
              <div className="bg-cream p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold shrink-0" />
                  <span className="text-navy font-semibold">{c.hoursLabel}</span>
                </div>
                <p className="text-charcoal/70 text-sm ml-5">{c.byReservation}</p>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold shrink-0" />
                  <span className="text-navy font-semibold">{c.contactLabel}</span>
                </div>
                <p className="text-charcoal/70 text-sm ml-5">
                  <a href="tel:0368100206" className="text-gold hover:text-gold-dark transition-colors">
                    0368 100 206
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimateIn>

      {/* Equipment Rental */}
      <AnimateIn delay={0.1}>
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold mb-4">
                {c.equipmentSubtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-navy mb-4">
                {t('equipmentRental')}
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                {c.equipmentDescription}
              </p>

              <div className="space-y-4">
                {/* Winter */}
                <div className="bg-white p-5 shadow-sm">
                  <h3 className="font-[family-name:var(--font-heading)] text-navy text-lg font-semibold mb-2">
                    {c.winterEquipmentHeading}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-3">
                    {c.winterEquipmentDescription}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-charcoal/70">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                      08:00 &ndash; 17:00
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                      {c.winterMonths}
                    </span>
                  </div>
                </div>

                {/* Summer */}
                <div className="bg-white p-5 shadow-sm">
                  <h3 className="font-[family-name:var(--font-heading)] text-navy text-lg font-semibold mb-2">
                    {c.summerEquipmentHeading}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-3">
                    {c.summerEquipmentDescription}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-charcoal/70">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                      10:00 &ndash; 17:00
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                      {c.summerMonths}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden shadow-sm order-1 lg:order-2">
              <Image
                src="/images/facilities/equipment-rental/1.jpg"
                alt={t('equipmentRental')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
          </div>
        </div>
      </section>
      </AnimateIn>

      {/* Parking & EV Charging */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Parking */}
            <AnimateIn delay={0.2}>
            <div className="bg-white p-8 shadow-sm border-t-4 border-gold">
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h-.75a1.5 1.5 0 0 1-1.5-1.5v-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v3a1.5 1.5 0 0 1-1.5 1.5h-.75m-17.25 0h17.25"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-navy mb-4">
                {t('parking')}
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                {c.parkingDescription}
              </p>
              <div className="bg-cream px-4 py-3 inline-flex items-center gap-3">
                <span className="w-2 h-2 bg-gold shrink-0" />
                <span className="text-charcoal/70 text-sm font-medium">{c.parkingNote}</span>
              </div>
            </div>
            </AnimateIn>

            {/* EV Charging */}
            <AnimateIn delay={0.3}>
            <div className="bg-white p-8 shadow-sm border-t-4 border-gold">
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-navy mb-4">
                {t('evCharging')}
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                {c.evDescription}
              </p>
              <div className="space-y-3">
                <div className="bg-cream px-4 py-3 flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold shrink-0" />
                  <span className="text-charcoal/70 text-sm">{c.evStations}</span>
                </div>
                <div className="bg-cream px-4 py-3 flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold shrink-0" />
                  <span className="text-charcoal/70 text-sm">
                    {c.evProvider} &mdash;{' '}
                    <a href="tel:0744518024" className="text-gold hover:text-gold-dark transition-colors">
                      0744 518 024
                    </a>
                  </span>
                </div>
              </div>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
