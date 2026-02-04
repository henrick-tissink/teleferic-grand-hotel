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
    title: t('summer'),
    description: t('summerSubtitle'),
  }
}

const activities = [
  {
    name: {
      ro: 'Ciclism',
      en: 'Cycling',
      de: 'Radfahren',
    },
    subtitle: {
      ro: 'Închiriază o Bicicletă',
      en: 'Rent a Bike',
      de: 'Fahrrad Mieten',
    },
    description: {
      ro: 'Explorați traseele forestiere sinuoase și drumurile montane pitorești din jurul Poianei Brașov pe două roți. Serviciul nostru de închiriere de biciclete oferă biciclete montane de calitate și biciclete electrice pentru cicliști de toate nivelurile, cu hărți de traseu și echipament inclus.',
      en: 'Explore the winding forest trails and scenic mountain roads around Poiana Brasov on two wheels. Our bike rental service offers quality mountain bikes and e-bikes for riders of all abilities, with route maps and gear included.',
      de: 'Erkunden Sie die gewundenen Waldwege und malerischen Bergstraßen rund um Poiana Brasov auf zwei Rädern. Unser Fahrradverleih bietet hochwertige Mountainbikes und E-Bikes für Fahrer aller Leistungsstufen, inklusive Routenkarten und Ausrüstung.',
    },
    details: {
      ro: 'Sezon: Mai – Septembrie | Program: 10:00 – 17:00',
      en: 'Season: May – September | Hours: 10:00 – 17:00',
      de: 'Saison: Mai – September | Öffnungszeiten: 10:00 – 17:00',
    },
    image: '/images/destination/summer-sports/bike-rental.jpg',
  },
  {
    name: {
      ro: 'Trasee de Drumeție',
      en: 'Hiking Trails',
      de: 'Wanderwege',
    },
    subtitle: {
      ro: 'Postavarul Massif',
      en: 'Postavarul Massif',
      de: 'Postavarul Massif',
    },
    description: {
      ro: 'De la plimbări ușoare prin pădure până la ascensiuni provocatoare spre vârf, traseele masivului Postăvarul oferă experiențe de neuitat. Urcați pe Vârful Postăvarul la 1.799 m pentru panorame ce se întind de la platoul Transilvaniei până la Munții Bucegi.',
      en: 'From gentle forest walks to challenging summit ascents, the trails of the Postavarul massif offer unforgettable experiences. Hike to the Postavarul Peak at 1,799m for panoramic views spanning the Transylvanian plateau and the Bucegi mountains.',
      de: 'Von gemütlichen Waldspaziergängen bis hin zu anspruchsvollen Gipfelaufstiegen bieten die Wege des Postavarul-Massivs unvergessliche Erlebnisse. Wandern Sie zum Postavarul-Gipfel auf 1.799 m für Panoramablicke über das Siebenbürgische Plateau und das Bucegi-Gebirge.',
    },
    details: {
      ro: 'Trasee de la 1 la 6 ore | Drumeții ghidate disponibile',
      en: 'Trails range from 1–6 hours | Guided hikes available',
      de: 'Wanderungen von 1–6 Stunden | Geführte Wanderungen verfügbar',
    },
    image: '/images/destination/summer-sports/hiking.jpg',
  },
  {
    name: {
      ro: 'Echitație',
      en: 'Horse Riding',
      de: 'Reiten',
    },
    subtitle: {
      ro: 'Excursii Ghidate',
      en: 'Guided Excursions',
      de: 'Geführte Ausritte',
    },
    description: {
      ro: 'Descoperiți frumusețea dealurilor Carpaților în șa, cu excursii ghidate prin pajiști și poteci forestiere. Potrivit atât pentru începători, cât și pentru călăreți experimentați, cu cai bine antrenați și ghizi profesioniști.',
      en: 'Discover the beauty of the Carpathian foothills on horseback with guided excursions through meadows and forest paths. Suitable for beginners and experienced riders alike, with well-trained horses and professional guides.',
      de: 'Entdecken Sie die Schönheit der Karpatenausläufer zu Pferd mit geführten Ausritten durch Wiesen und Waldpfade. Geeignet für Anfänger und erfahrene Reiter gleichermaßen, mit gut ausgebildeten Pferden und professionellen Führern.',
    },
    details: {
      ro: 'Sesiuni de la 1 oră | Toate nivelurile de experiență',
      en: 'Sessions from 1 hour | All experience levels',
      de: 'Sitzungen ab 1 Stunde | Alle Erfahrungsstufen',
    },
    image: '/images/destination/summer-sports/horse-riding.jpg',
  },
  {
    name: {
      ro: 'Tururi ATV',
      en: 'ATV Tours',
      de: 'ATV-Touren',
    },
    subtitle: {
      ro: 'Aventură Off-Road',
      en: 'Off-Road Adventure',
      de: 'Offroad-Abenteuer',
    },
    description: {
      ro: 'Trăiți emoția conducerii ATV-ului off-road pe trasee montane și poteci forestiere. Tururile noastre ghidate vă poartă prin unele dintre cele mai pitorești și sălbatice terenuri din jurul Poianei Brașov, cu opțiuni pentru toate nivelurile de experiență.',
      en: 'Experience the thrill of off-road ATV riding along mountain trails and forest paths. Our guided tours take you through some of the most scenic and rugged terrain around Poiana Brasov, with options for all experience levels.',
      de: 'Erleben Sie den Nervenkitzel des Offroad-ATV-Fahrens auf Bergpfaden und Waldwegen. Unsere geführten Touren führen Sie durch einige der schönsten und wildesten Gelände rund um Poiana Brasov, mit Optionen für alle Erfahrungsstufen.',
    },
    details: {
      ro: 'Disponibil tot anul | Tururi ghidate',
      en: 'Year-round availability | Guided tours',
      de: 'Ganzjährig verfügbar | Geführte Touren',
    },
    image: '/images/destination/summer-sports/atv.jpg',
  },
  {
    name: {
      ro: 'Parapantă',
      en: 'Paragliding',
      de: 'Paragliding',
    },
    subtitle: {
      ro: 'Zboară Peste Munți',
      en: 'Fly Over the Mountains',
      de: 'Über die Berge Fliegen',
    },
    description: {
      ro: 'Înălțați-vă în ceruri cu un zbor tandem cu parapanta de pe vârful Postăvarului. Planați deasupra pădurilor și pajiștilor cu priveliști aeriene uimitoare ale Carpaților, ghidați de instructori certificați pentru o experiență sigură și captivantă.',
      en: 'Take to the skies with a tandem paragliding flight from the summit of Postavarul. Soar above the forests and meadows with stunning aerial views of the Carpathians, guided by certified instructors for a safe and exhilarating experience.',
      de: 'Erobern Sie die Lüfte mit einem Tandem-Paragliding-Flug vom Gipfel des Postavarul. Schweben Sie über Wälder und Wiesen mit atemberaubenden Luftaufnahmen der Karpaten, begleitet von zertifizierten Fluglehrern für ein sicheres und aufregendes Erlebnis.',
    },
    details: {
      ro: 'În funcție de vreme | Zboruri tandem cu instructor',
      en: 'Weather dependent | Tandem flights with instructor',
      de: 'Wetterabhängig | Tandemflüge mit Fluglehrer',
    },
    image: '/images/destination/summer-sports/paragliding.jpg',
  },
]

export default async function SummerActivitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'activities' })
  const tc = await getTranslations({ locale, namespace: 'common' })

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px]">
        <Image
          src="/images/destination/summer/postavarul.jpg"
          alt={t('summer')}
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
              {t('summer')}
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              {t('summerSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding">
        <div className="container-custom space-y-24">
          {activities.map((activity, index) => {
            const isReversed = index % 2 !== 0
            return (
              <AnimateIn key={activity.name.en} delay={index * 0.1}>
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`relative aspect-[4/3] overflow-hidden shadow-sm ${isReversed ? 'order-2' : ''}`}>
                  <Image
                    src={activity.image}
                    alt={activity.name[locale as Locale]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </div>
                <div className={isReversed ? 'order-1' : ''}>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold mb-4">
                    {activity.subtitle[locale as Locale]}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-navy mb-4">
                    {activity.name[locale as Locale]}
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    {activity.description[locale as Locale]}
                  </p>
                  <div className="bg-cream p-4 inline-flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold shrink-0" />
                    <span className="text-charcoal/70 text-sm">{activity.details[locale as Locale]}</span>
                  </div>
                </div>
              </div>
              </AnimateIn>
            )
          })}
        </div>
      </section>

      {/* Back Link */}
      <section className="py-10 bg-cream">
        <div className="container-custom text-center">
          <Button as="link" href="/activities" variant="outline" size="lg">
            &larr; {tc('backTo', { page: t('title') })}
          </Button>
        </div>
      </section>
    </>
  )
}
