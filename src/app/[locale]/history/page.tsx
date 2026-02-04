import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'history' })
  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default async function HistoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'history' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  const eras = [
    {
      key: 'legendBegins' as const,
      period: '1970s',
      image: '/images/hero/hero-winter-night.jpg',
      descriptions: {
        ro: 'Construit in stil clasic european de hotel montan, Teleferic Grand Hotel a ap\u0103rut ca un simbol al elegan\u021bei alpine \u00een inima Poianei Bra\u0219ov. Arhitectura sa impun\u0103toare \u0219i loca\u021bia privilegiat\u0103 la poalele mun\u021bilor Post\u0103varu au definit un nou standard de ospitalitate \u00een Rom\u00e2nia.',
        en: 'Built in the classical European mountain hotel style, Teleferic Grand Hotel emerged as a symbol of alpine elegance in the heart of Poiana Bra\u0219ov. Its imposing architecture and privileged location at the foot of the Post\u0103varu Mountains defined a new standard of hospitality in Romania.',
        de: 'Im klassischen europ\u00e4ischen Berghotelstil erbaut, wurde das Teleferic Grand Hotel zum Symbol alpiner Eleganz im Herzen von Poiana Bra\u0219ov. Seine imposante Architektur und die privilegierte Lage am Fu\u00dfe des Post\u0103varu-Gebirges setzten einen neuen Ma\u00dfstab f\u00fcr Gastfreundschaft in Rum\u00e4nien.',
      },
    },
    {
      key: 'goldenEra' as const,
      period: '1970s \u2014 1992',
      image: '/images/hero/hero-coroana-restaurant.jpg',
      descriptions: {
        ro: 'Timp de dou\u0103 decenii, hotelul a fost destina\u021bia preferat\u0103 a celebrit\u0103\u021bilor, diploma\u021bilor \u0219i familiilor aristocratice. Confortul rafinat, serviciile impecabile \u0219i atmosfera exclusivist\u0103 au transformat Teleferic \u00eentr-o legend\u0103 a ospitalit\u0103\u021bii rom\u00e2ne\u0219ti.',
        en: 'For two decades, the hotel was the preferred destination of celebrities, diplomats, and aristocratic families. Refined comfort, impeccable service, and an exclusive atmosphere transformed Teleferic into a legend of Romanian hospitality.',
        de: 'Zwei Jahrzehnte lang war das Hotel das bevorzugte Ziel von Prominenten, Diplomaten und aristokratischen Familien. Raffinierter Komfort, tadelloser Service und eine exklusive Atmosph\u00e4re machten das Teleferic zur Legende der rum\u00e4nischen Gastfreundschaft.',
      },
    },
    {
      key: 'silentYears' as const,
      period: '1992 \u2014 2012',
      image: '/images/hero/hero-fireplace.jpg',
      descriptions: {
        ro: 'Dou\u0103 decenii de t\u0103cere au \u00eenv\u0103luit hotelul. U\u0219ile s-au \u00eenchis, iar legenda a adormit \u00een a\u0219teptarea unei noi ere. Cl\u0103direa a r\u0103mas un monument t\u0103cut al gloriei de alt\u0103dat\u0103, p\u0103str\u00e2nd \u00een zidurile sale amintirea vremurilor de aur.',
        en: 'Two decades of silence enveloped the hotel. The doors closed, and the legend lay dormant, awaiting a new era. The building remained a silent monument to former glory, preserving within its walls the memory of golden times.',
        de: 'Zwei Jahrzehnte der Stille h\u00fcllten das Hotel ein. Die T\u00fcren schlossen sich, und die Legende schlummerte in Erwartung einer neuen \u00c4ra. Das Geb\u00e4ude blieb ein stilles Denkmal vergangener Herrlichkeit und bewahrte in seinen Mauern die Erinnerung an goldene Zeiten.',
      },
    },
    {
      key: 'revival' as const,
      period: '2012',
      image: '/images/hero/hero-reception.jpg',
      descriptions: {
        ro: 'Un vizionar pasionat a preluat destinul hotelului, ini\u021biind o transformare radical\u0103. Fiecare detaliu a fost reg\u00e2ndit, fiecare spa\u021biu reimaginat \u2014 p\u0103str\u00e2nd sufletul original al cl\u0103dirii, dar ridic\u00e2nd standardele la nivelul luxului contemporan interna\u021bional.',
        en: 'A passionate visionary took over the hotel\'s destiny, initiating a radical transformation. Every detail was rethought, every space reimagined \u2014 preserving the building\'s original soul while elevating standards to the level of contemporary international luxury.',
        de: 'Ein leidenschaftlicher Vision\u00e4r \u00fcbernahm das Schicksal des Hotels und leitete eine radikale Transformation ein. Jedes Detail wurde neu durchdacht, jeder Raum neu konzipiert \u2014 die urspr\u00fcngliche Seele des Geb\u00e4udes bewahrend, aber die Standards auf das Niveau zeitgen\u00f6ssischen internationalen Luxus anhebend.',
      },
    },
    {
      key: 'newLegend' as const,
      period: `2012 \u2014 ${tCommon('present')}`,
      image: '/images/hero/hero-summer-entrance.jpg',
      descriptions: {
        ro: 'Ast\u0103zi, Teleferic Grand Hotel str\u0103luce\u0219te din nou ca o destina\u021bie de lux de referin\u021b\u0103, cu peste 15 premii interna\u021bionale care \u00eei confirm\u0103 excelen\u021ba. O nou\u0103 legend\u0103 se scrie \u00een fiecare zi, pentru fiecare oaspete care trece pragul hotelului.',
        en: 'Today, Teleferic Grand Hotel shines again as a benchmark luxury destination, with over 15 international awards confirming its excellence. A new legend is written every day, for every guest who crosses the hotel\'s threshold.',
        de: 'Heute erstrahlt das Teleferic Grand Hotel erneut als Referenz-Luxusdestination, mit \u00fcber 15 internationalen Auszeichnungen, die seine Exzellenz best\u00e4tigen. Jeden Tag wird eine neue Legende geschrieben, f\u00fcr jeden Gast, der die Schwelle des Hotels \u00fcberschreitet.',
      },
    },
  ]

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/hero-winter-day.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
        <div className="relative container-custom text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Teleferic Grand Hotel
          </p>
          <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-heading)] text-white mb-4">
            {t('subtitle')}
          </h1>
          <p className="text-xl text-white/70 italic font-[family-name:var(--font-heading)]">
            {t('title')}
          </p>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-8" />
        </div>
      </section>

      {/* Timeline */}
      <section className="relative">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

        {eras.map((era, index) => {
          const isEven = index % 2 === 0

          return (
            <AnimateIn key={era.key} delay={0.1 * index}>
            <div className="relative">
              {/* Full-width atmospheric background */}
              <div className="relative min-h-[70vh] flex items-center">
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={era.image}
                    alt={t(era.key)}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                  <div className="absolute inset-0 bg-navy/70" />
                </div>

                {/* Content */}
                <div className="relative container-custom py-20 md:py-28">
                  <div
                    className={`max-w-2xl ${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}
                  >
                    {/* Period badge */}
                    <div className="inline-block bg-gold/90 px-4 py-2 mb-6">
                      <span className="text-navy text-sm font-bold uppercase tracking-wider">
                        {era.period}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-white mb-6">
                      {t(era.key)}
                    </h2>

                    <p className="text-lg text-white/80 leading-relaxed">
                      {era.descriptions[locale as keyof typeof era.descriptions]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </AnimateIn>
          )
        })}
      </section>
    </div>
  )
}
