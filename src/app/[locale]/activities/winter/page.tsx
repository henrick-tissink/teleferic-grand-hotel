import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { Locale } from '@/i18n/config'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'activities' })
  return {
    title: t('winter'),
    description: t('winterSubtitle'),
  }
}

type Difficulty = 'easy' | 'intermediate' | 'advanced'

const difficultyLabels: Record<Difficulty, Record<Locale, string>> = {
  easy: { ro: 'U\u0219or', en: 'Easy', de: 'Leicht' },
  intermediate: { ro: 'Mediu', en: 'Intermediate', de: 'Mittel' },
  advanced: { ro: 'Avansat', en: 'Advanced', de: 'Fortgeschritten' },
}

const dropLabel: Record<Locale, string> = {
  ro: 'diferen\u021b\u0103 de nivel',
  en: 'drop',
  de: 'H\u00f6henunterschied',
}

const slopes = [
  { name: 'Bradul', difficulty: 'intermediate' as Difficulty, length: '2,860m', elevation: '775m' },
  { name: 'Sulinar', difficulty: 'easy' as Difficulty, length: '2,441m', elevation: '629m' },
  { name: 'Lupului', difficulty: 'advanced' as Difficulty, length: '2,860m', elevation: '775m' },
  { name: 'Stadion', difficulty: 'easy' as Difficulty, length: '300m', elevation: '50m' },
  { name: 'Ruia', difficulty: 'intermediate' as Difficulty, length: '580m', elevation: '120m' },
  { name: 'Subteleferic', difficulty: 'easy' as Difficulty, length: '1,000m', elevation: '250m' },
  { name: 'Drumul Rosu', difficulty: 'intermediate' as Difficulty, length: '4,660m', elevation: '775m' },
]

const otherActivities: Array<{
  name: Record<Locale, string>
  description: Record<Locale, string>
  image: string
}> = [
  {
    name: {
      ro: 'Tururi cu Snowmobilul',
      en: 'Snowmobile Tours',
      de: 'Schneemobiltouren',
    },
    description: {
      ro: 'Excursii ghidate cu snowmobilul pe traseele forestiere din jurul Poienei Bra\u0219ov.',
      en: 'Guided snowmobile excursions through the forested mountain trails surrounding Poiana Brasov.',
      de: 'Gef\u00fchrte Schneemobilausfl\u00fcge durch die bewaldeten Bergpfade rund um Poiana Brasov.',
    },
    image: '/images/destination/winter-sports/snowmobile.jpg',
  },
  {
    name: {
      ro: 'Tururi cu ATV-ul',
      en: 'ATV Tours',
      de: 'ATV-Touren',
    },
    description: {
      ro: 'Aventuri off-road cu ATV-ul pe trasee montane pitore\u0219ti, disponibile tot anul cu ghizi experimenta\u021bi.',
      en: 'Off-road ATV adventures along scenic mountain paths, available year-round with experienced guides.',
      de: 'Offroad-ATV-Abenteuer auf malerischen Bergpfaden, ganzj\u00e4hrig verf\u00fcgbar mit erfahrenen Guides.',
    },
    image: '/images/destination/winter-sports/atv.jpg',
  },
  {
    name: {
      ro: 'Snow Tubing',
      en: 'Snow Tubing',
      de: 'Snow Tubing',
    },
    description: {
      ro: 'Distrac\u021bie pe piste dedicate de tubing, perfect\u0103 pentru familii \u0219i iubitorii de adrenalin\u0103 de toate v\u00e2rstele.',
      en: 'Fun-filled tubing runs on dedicated tracks, perfect for families and thrill-seekers of all ages.',
      de: 'Spa\u00dfige Tubing-Abfahrten auf speziellen Pisten, perfekt f\u00fcr Familien und Abenteuerlustige jeden Alters.',
    },
    image: '/images/destination/winter-sports/tubing.jpg',
  },
  {
    name: {
      ro: 'Parapant\u0103',
      en: 'Paragliding',
      de: 'Paragliding',
    },
    description: {
      ro: 'Zbura\u021bi deasupra v\u00e2rfurilor acoperite de z\u0103pad\u0103 cu zboruri tandem de parapant\u0103 \u0219i priveli\u0219ti spectaculoase ale Carpa\u021bilor.',
      en: 'Soar above the snow-covered peaks with tandem paragliding flights offering spectacular Carpathian views.',
      de: 'Schweben Sie \u00fcber die schneebedeckten Gipfel mit Tandem-Paragliding-Fl\u00fcgen und spektakul\u00e4rer Aussicht auf die Karpaten.',
    },
    image: '/images/destination/winter-sports/paragliding.jpg',
  },
]

const skiSlopesHeading: Record<Locale, string> = {
  ro: 'P\u00e2rtii de Schi',
  en: 'Ski Slopes',
  de: 'Skipisten',
}

const skiSlopesDescription: Record<Locale, string> = {
  ro: 'Poiana Bra\u0219ov dispune de 7 p\u00e2rtii de schi pentru toate nivelurile de experien\u021b\u0103, de la cobor\u00e2ri u\u0219oare pentru \u00eencep\u0103tori p\u00e2n\u0103 la trasee avansate provocatoare pe masivul Post\u0103varul.',
  en: 'Poiana Brasov features 7 ski slopes catering to all skill levels, from gentle beginner runs to challenging advanced descents on the Postavarul massif.',
  de: 'Poiana Brasov bietet 7 Skipisten f\u00fcr alle K\u00f6nnensstufen, von sanften Anf\u00e4ngerabfahrten bis hin zu anspruchsvollen Fortgeschrittenenpisten am Postavarul-Massiv.',
}

const skiSchoolHeading: Record<Locale, string> = {
  ro: '\u0218coal\u0103 de Schi',
  en: 'Ski School',
  de: 'Skischule',
}

const skiSchoolParagraph1: Record<Locale, string> = {
  ro: '\u0218coala noastr\u0103 profesional\u0103 de schi ofer\u0103 instruc\u021bie de specialitate pentru schiori \u0219i snowboarderi de toate nivelurile. Fie c\u0103 p\u0103\u0219i\u021bi pentru prima dat\u0103 pe z\u0103pad\u0103 sau v\u0103 rafina\u021bi tehnicile avansate, instructorii no\u0219tri certifica\u021bi adapteaz\u0103 fiecare lec\u021bie obiectivelor dumneavoastr\u0103.',
  en: 'Our professional ski school provides expert instruction for skiers and snowboarders of every level. Whether you are stepping onto the snow for the first time or refining advanced techniques, our certified instructors tailor every lesson to your goals.',
  de: 'Unsere professionelle Skischule bietet fachkundigen Unterricht f\u00fcr Skifahrer und Snowboarder aller Leistungsstufen. Ob Sie zum ersten Mal auf dem Schnee stehen oder fortgeschrittene Techniken verfeinern m\u00f6chten \u2013 unsere zertifizierten Instruktoren passen jede Lektion an Ihre Ziele an.',
}

const skiSchoolParagraph2: Record<Locale, string> = {
  ro: 'Oferim at\u00e2t sesiuni private, c\u00e2t \u0219i de grup pentru copii \u0219i adul\u021bi, cu lec\u021bii disponibile \u00een rom\u00e2n\u0103, englez\u0103 \u0219i german\u0103. Copiii de la v\u00e2rsta de 3 ani pot \u00eencepe aventura pe schiuri pe p\u00e2rtiile noastre dedicate \u00eencep\u0103torilor.',
  en: 'We offer both private and group sessions for children and adults, with lessons available in Romanian, English, and German. Children as young as 3 years old can start their ski journey on our dedicated beginner slopes.',
  de: 'Wir bieten sowohl Privat- als auch Gruppenstunden f\u00fcr Kinder und Erwachsene an, mit Unterricht auf Rum\u00e4nisch, Englisch und Deutsch. Kinder ab 3 Jahren k\u00f6nnen auf unseren speziellen Anf\u00e4ngerpisten ihre ersten Skiversuche machen.',
}

const skiSchoolBullets: Record<Locale, string[]> = {
  ro: [
    'Instructori profesioni\u0219ti certifica\u021bi',
    'Lec\u021bii pentru copii (de la 3 ani)',
    'Sesiuni de grup \u0219i private pentru adul\u021bi',
    'Instruc\u021bie multilingv\u0103 (RO, EN, DE)',
  ],
  en: [
    'Professional certified instructors',
    'Children\u2019s lessons (ages 3+)',
    'Adult group & private sessions',
    'Multilingual instruction (RO, EN, DE)',
  ],
  de: [
    'Professionelle zertifizierte Instruktoren',
    'Kinderskikurse (ab 3 Jahren)',
    'Gruppen- & Privatstunden f\u00fcr Erwachsene',
    'Mehrsprachiger Unterricht (RO, EN, DE)',
  ],
}

const equipmentRentalHeading: Record<Locale, string> = {
  ro: '\u00cenchiriere Echipament',
  en: 'Equipment Rental',
  de: 'Ausr\u00fcstungsverleih',
}

const equipmentRentalDescription: Record<Locale, string> = {
  ro: 'Centrul nostru complet echipat de \u00eenchiriere dispune de peste 300 de perechi de schiuri, 50 de snowboard-uri, bocanci, c\u0103\u0219ti \u0219i tot echipamentul necesar pentru o zi perfect\u0103 pe p\u00e2rtie. Personalul profesionist asigur\u0103 o potrivire precis\u0103 pentru confort \u0219i siguran\u021b\u0103.',
  en: 'Our fully equipped rental center stocks over 300 pairs of skis, 50 snowboards, boots, helmets and all the gear you need for a perfect day on the slopes. Professional staff ensure a precise fit for comfort and safety.',
  de: 'Unser voll ausgestattetes Verleihzentrum verf\u00fcgt \u00fcber mehr als 300 Paar Ski, 50 Snowboards, Schuhe, Helme und die gesamte Ausr\u00fcstung, die Sie f\u00fcr einen perfekten Tag auf der Piste ben\u00f6tigen. Professionelles Personal sorgt f\u00fcr eine pr\u00e4zise Anpassung f\u00fcr Komfort und Sicherheit.',
}

const pairsOfSkisLabel: Record<Locale, string> = {
  ro: 'Perechi de schiuri',
  en: 'Pairs of Skis',
  de: 'Paar Ski',
}

const snowboardsLabel: Record<Locale, string> = {
  ro: 'Snowboard-uri',
  en: 'Snowboards',
  de: 'Snowboards',
}

const hoursLabel: Record<Locale, string> = {
  ro: 'Program',
  en: 'Hours',
  de: '\u00d6ffnungszeiten',
}

const hoursValue: Record<Locale, string> = {
  ro: '08:00 \u2013 17:00, Decembrie \u2013 Aprilie',
  en: '08:00 \u2013 17:00, December \u2013 April',
  de: '08:00 \u2013 17:00, Dezember \u2013 April',
}

const moreWinterAdventuresHeading: Record<Locale, string> = {
  ro: 'Mai Multe Aventuri de Iarn\u0103',
  en: 'More Winter Adventures',
  de: 'Weitere Winterabenteuer',
}

function difficultyColor(difficulty: Difficulty) {
  switch (difficulty) {
    case 'easy':
      return 'bg-forest/10 text-forest'
    case 'intermediate':
      return 'bg-gold/10 text-gold-dark'
    case 'advanced':
      return 'bg-navy text-white'
    default:
      return 'bg-navy/10 text-navy'
  }
}

export default async function WinterActivitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'activities' })
  const tc = await getTranslations({ locale, namespace: 'common' })
  const l = locale as Locale

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px]">
        <Image
          src="/images/destination/winter-sports/skier.jpg"
          alt={t('winter')}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-6">
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] font-bold mb-4">
              {t('winter')}
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              {t('winterSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Ski Slopes */}
      <AnimateIn>
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-4">
              {skiSlopesHeading[l]}
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              {skiSlopesDescription[l]}
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
            <div className="relative aspect-[4/3] overflow-hidden shadow-sm">
              <Image
                src="/images/destination/winter-sports/slope-map.jpg"
                alt={t('slopeMapAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>

            <div className="space-y-3">
              {slopes.map((slope) => (
                <div
                  key={slope.name}
                  className="bg-white p-4 shadow-sm flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-navy text-lg font-semibold">
                      {slope.name}
                    </h3>
                    <p className="text-charcoal/70 text-sm">
                      {slope.length} &middot; {slope.elevation} {dropLabel[l]}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider ${difficultyColor(slope.difficulty)}`}
                  >
                    {difficultyLabels[slope.difficulty][l]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </AnimateIn>

      {/* Ski School */}
      <AnimateIn delay={0.1}>
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-navy mb-6">
                {skiSchoolHeading[l]}
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  {skiSchoolParagraph1[l]}
                </p>
                <p>
                  {skiSchoolParagraph2[l]}
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                {skiSchoolBullets[l].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal/80">
                    <span className="mt-1 w-2 h-2 bg-gold shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden shadow-sm">
              <Image
                src="/images/destination/winter-sports/ski-school.jpg"
                alt={skiSchoolHeading[l]}
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

      {/* Equipment Rental */}
      <AnimateIn delay={0.2}>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden shadow-sm order-2 lg:order-1">
              <Image
                src="/images/destination/winter-sports/snowboard.jpg"
                alt={equipmentRentalHeading[l]}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-navy mb-6">
                {equipmentRentalHeading[l]}
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  {equipmentRentalDescription[l]}
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-cream p-4">
                  <span className="block text-2xl font-[family-name:var(--font-heading)] text-gold font-bold">300+</span>
                  <span className="text-charcoal/70 text-sm">{pairsOfSkisLabel[l]}</span>
                </div>
                <div className="bg-cream p-4">
                  <span className="block text-2xl font-[family-name:var(--font-heading)] text-gold font-bold">50</span>
                  <span className="text-charcoal/70 text-sm">{snowboardsLabel[l]}</span>
                </div>
              </div>
              <div className="mt-6 bg-cream p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 bg-gold shrink-0" />
                  <span className="text-navy font-semibold">{hoursLabel[l]}</span>
                </div>
                <p className="text-charcoal/80 ml-5">{hoursValue[l]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimateIn>

      {/* Other Winter Activities */}
      <AnimateIn delay={0.3}>
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-4">
              {moreWinterAdventuresHeading[l]}
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherActivities.map((activity) => (
              <div
                key={activity.name[l]}
                className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.name[l]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-heading)] text-navy text-lg mb-2">
                    {activity.name[l]}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {activity.description[l]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateIn>

      {/* Back Link */}
      <section className="py-10">
        <div className="container-custom text-center">
          <Button as="link" href="/activities" variant="outline" size="lg">
            &larr; {tc('backTo', { page: t('title') })}
          </Button>
        </div>
      </section>
    </>
  )
}
