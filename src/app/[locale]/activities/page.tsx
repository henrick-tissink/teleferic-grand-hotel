import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import type { Locale } from '@/i18n/config'
import { AnimateIn } from '@/components/ui/AnimateIn'

const poianaDescription: Record<Locale, { p1: string; p2: string }> = {
  en: {
    p1: 'Nestled at an altitude of 1,020 meters in the Carpathian Mountains, Poiana Brasov is Romania\u2019s premier mountain resort. Surrounded by ancient spruce forests and commanding breathtaking views of the Postavarul massif, it offers an unparalleled setting for year-round mountain experiences.',
    p2: 'From world-class skiing in winter to hiking and cycling in summer, the resort provides a gateway to some of Transylvania\u2019s most iconic landmarks and natural wonders. Teleferic Grand Hotel sits at the very heart of it all, steps away from the cable car and main ski slopes.',
  },
  ro: {
    p1: 'Situată la o altitudine de 1.020 de metri în Munții Carpați, Poiana Brașov este cea mai importantă stațiune montană din România. Înconjurată de păduri seculare de molid și oferind priveliști spectaculoase asupra masivului Postăvarul, aceasta reprezintă cadrul ideal pentru experiențe montane pe tot parcursul anului.',
    p2: 'De la schi de clasă mondială iarna, la drumeții și ciclism vara, stațiunea oferă acces la unele dintre cele mai emblematice obiective și minuni naturale ale Transilvaniei. Teleferic Grand Hotel se află chiar în inima acesteia, la câțiva pași de telecabină și de pârtiile principale de schi.',
  },
  de: {
    p1: 'Eingebettet auf einer Höhe von 1.020 Metern in den Karpaten ist Poiana Brașov Rumäniens führender Bergort. Umgeben von uralten Fichtenwäldern und mit atemberaubendem Blick auf das Postăvarul-Massiv bietet er eine unvergleichliche Kulisse für ganzjährige Bergerlebnisse.',
    p2: 'Von erstklassigem Skifahren im Winter bis hin zu Wandern und Radfahren im Sommer bietet der Ort Zugang zu einigen der ikonischsten Wahrzeichen und Naturwunder Siebenbürgens. Das Teleferic Grand Hotel liegt im Herzen des Geschehens, nur wenige Schritte von der Seilbahn und den Hauptskipisten entfernt.',
  },
}

const statLabels: Record<Locale, { altitude: string; skiSlopes: string; toBrasov: string }> = {
  en: { altitude: 'Altitude', skiSlopes: 'Ski Slopes', toBrasov: 'To Brasov' },
  ro: { altitude: 'Altitudine', skiSlopes: 'Pârtii de schi', toBrasov: 'Până la Brașov' },
  de: { altitude: 'Höhenlage', skiSlopes: 'Skipisten', toBrasov: 'Nach Brașov' },
}

const nearbyAttractionsHeading: Record<Locale, string> = {
  en: 'Nearby Attractions',
  ro: 'Atracții în Apropiere',
  de: 'Sehenswürdigkeiten in der Nähe',
}

const attractionsData: Record<Locale, { name: string; description: string }[]> = {
  en: [
    {
      name: 'Bran Castle',
      description: 'The legendary Dracula\'s Castle, a Gothic fortress perched above Bran village. Just 25 km from Poiana Brasov.',
    },
    {
      name: 'Brasov Old Town',
      description: 'Medieval architecture, the famous Black Church, Council Square and charming cobblestone streets. 12 km away.',
    },
    {
      name: 'Rasnov Citadel',
      description: 'A remarkably preserved medieval peasant fortress overlooking the Barsa valley. 20 km from the hotel.',
    },
    {
      name: 'Peles Castle',
      description: 'One of the most beautiful castles in Europe, a Neo-Renaissance masterpiece in Sinaia. 60 km drive.',
    },
    {
      name: 'Bear Sanctuary',
      description: 'Europe\'s largest brown bear sanctuary in Zarnesti, home to over 100 rescued bears. 30 km away.',
    },
  ],
  ro: [
    {
      name: 'Castelul Bran',
      description: 'Legendarul Castel al lui Dracula, o fortăreață gotică situată deasupra satului Bran. La doar 25 km de Poiana Brașov.',
    },
    {
      name: 'Centrul Vechi Brașov',
      description: 'Arhitectură medievală, celebra Biserică Neagră, Piața Sfatului și străzi pavate cu piatră cubică pline de farmec. La 12 km distanță.',
    },
    {
      name: 'Cetatea Râșnov',
      description: 'O cetate medievală țărănească remarcabil conservată, cu vedere asupra Văii Bârsei. La 20 km de hotel.',
    },
    {
      name: 'Castelul Peleș',
      description: 'Unul dintre cele mai frumoase castele din Europa, o capodoperă neorenascentistă în Sinaia. La 60 km distanță.',
    },
    {
      name: 'Sanctuarul de Urși',
      description: 'Cel mai mare sanctuar de urși bruni din Europa, situat în Zărnești, adăpostind peste 100 de urși salvați. La 30 km distanță.',
    },
  ],
  de: [
    {
      name: 'Schloss Bran',
      description: 'Das legendäre Dracula-Schloss, eine gotische Festung über dem Dorf Bran. Nur 25 km von Poiana Brașov entfernt.',
    },
    {
      name: 'Brașover Altstadt',
      description: 'Mittelalterliche Architektur, die berühmte Schwarze Kirche, der Rathausplatz und bezaubernde Kopfsteinpflasterstraßen. 12 km entfernt.',
    },
    {
      name: 'Festung Râșnov',
      description: 'Eine bemerkenswert erhaltene mittelalterliche Bauernfestung mit Blick auf das Burzenland. 20 km vom Hotel entfernt.',
    },
    {
      name: 'Schloss Peleș',
      description: 'Eines der schönsten Schlösser Europas, ein Neo-Renaissance-Meisterwerk in Sinaia. 60 km Fahrt.',
    },
    {
      name: 'Bärenschutzgebiet',
      description: 'Europas größtes Braunbärenschutzgebiet in Zărnești, Heimat von über 100 geretteten Bären. 30 km entfernt.',
    },
  ],
}

const attractionImages = [
  '/images/destination/attractions/bran-castle.jpg',
  '/images/destination/attractions/brasov-promenade.jpg',
  '/images/destination/attractions/rasnov-fortress.jpg',
  '/images/destination/attractions/evening-viewpoint.jpg',
  '/images/destination/attractions/viscri.jpg',
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'activities' })
  return {
    title: `${t('title')} | Teleferic Grand Hotel`,
    description: t('subtitle'),
  }
}

export default async function ActivitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'activities' })
  const tc = await getTranslations({ locale, namespace: 'common' })

  const categories = [
    {
      title: t('winter'),
      subtitle: t('winterSubtitle'),
      href: '/activities/winter' as const,
      image: '/images/destination/winter/slope-1.jpg',
    },
    {
      title: t('summer'),
      subtitle: t('summerSubtitle'),
      href: '/activities/summer' as const,
      image: '/images/destination/summer/hiking-trail.jpg',
    },
    {
      title: t('kids'),
      subtitle: t('kidsSubtitle'),
      href: '/activities/kids' as const,
      image: '/images/facilities/kids-club/1.png',
    },
  ]

  const content = poianaDescription[locale as Locale]
  const stats = statLabels[locale as Locale]
  const attractions = attractionsData[locale as Locale].map((a, i) => ({
    ...a,
    image: attractionImages[i],
  }))

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/destination/winter/brasov.jpg"
          alt={t('title')}
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
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Activity Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <AnimateIn key={category.href} delay={0.1 * index}>
              <Link
                href={category.href}
                className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-[family-name:var(--font-heading)] text-navy mb-2">
                    {category.title}
                  </h2>
                  <p className="text-charcoal/70 text-sm mb-4">
                    {category.subtitle}
                  </p>
                  <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                    {tc('readMore')} &rarr;
                  </span>
                </div>
              </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Destination - Poiana Brasov */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-4">
              {t('destination')}
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/destination/summer/destination-view.jpg"
                alt={t('poianaBrasovAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-navy mb-6">
                {t('poianaBrasov')}
              </h3>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>{content.p1}</p>
                <p>{content.p2}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white px-5 py-3 shadow-sm">
                  <span className="block text-2xl font-[family-name:var(--font-heading)] text-gold font-bold">1,020m</span>
                  <span className="text-charcoal/70 text-sm">{stats.altitude}</span>
                </div>
                <div className="bg-white px-5 py-3 shadow-sm">
                  <span className="block text-2xl font-[family-name:var(--font-heading)] text-gold font-bold">7</span>
                  <span className="text-charcoal/70 text-sm">{stats.skiSlopes}</span>
                </div>
                <div className="bg-white px-5 py-3 shadow-sm">
                  <span className="block text-2xl font-[family-name:var(--font-heading)] text-gold font-bold">12 km</span>
                  <span className="text-charcoal/70 text-sm">{stats.toBrasov}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Attractions */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-navy mb-2">
              {nearbyAttractionsHeading[locale as Locale]}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <AnimateIn key={attraction.name} delay={0.1 * index}>
              <div
                className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-[family-name:var(--font-heading)] text-navy mb-2">
                    {attraction.name}
                  </h4>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
