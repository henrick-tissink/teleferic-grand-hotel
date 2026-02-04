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
    title: t('kids'),
    description: t('kidsSubtitle'),
  }
}

const sections = [
  {
    title: {
      ro: 'Teleferic Kids Club',
      en: 'Teleferic Kids Club',
      de: 'Teleferic Kids Club',
    },
    subtitle: {
      ro: 'Zonă de Joacă Interioară',
      en: 'Indoor Play Area',
      de: 'Indoor-Spielbereich',
    },
    description: {
      ro: 'Un spațiu de joacă interior vibrant și supravegheat, conceput pentru copiii cu vârste între 3 și 10 ani. Kids Club-ul dispune de structuri de joacă moale, stații creative de arte și meșteșuguri și activități de grup captivante conduse de personal experimentat. Lăsați-i pe cei mici să exploreze, să creeze și să-și facă prieteni noi într-un mediu sigur și stimulant, în timp ce vă bucurați de facilitățile hotelului.',
      en: 'A vibrant, supervised indoor play space designed for children aged 3 to 10. The Kids Club features soft play structures, creative arts and crafts stations, and engaging group activities led by experienced staff. Let the little ones explore, create, and make new friends in a safe and stimulating environment while you enjoy the hotel amenities.',
      de: 'Ein lebhafter, beaufsichtigter Indoor-Spielbereich für Kinder im Alter von 3 bis 10 Jahren. Der Kids Club bietet weiche Spielstrukturen, kreative Bastelstationen und spannende Gruppenaktivitäten unter der Leitung erfahrener Mitarbeiter. Lassen Sie die Kleinen in einer sicheren und anregenden Umgebung entdecken, gestalten und neue Freundschaften schließen, während Sie die Hotelannehmlichkeiten genießen.',
    },
    highlights: {
      ro: [
        'Joacă supravegheată pentru vârste 3–10',
        'Arte, meșteșuguri și ateliere creative',
        'Structuri de joacă moale',
        'Personal experimentat pentru îngrijirea copiilor',
      ],
      en: [
        'Supervised play for ages 3–10',
        'Arts, crafts & creative workshops',
        'Soft play structures',
        'Experienced child-care staff',
      ],
      de: [
        'Beaufsichtigtes Spielen für Kinder von 3–10 Jahren',
        'Kunst, Basteln & kreative Workshops',
        'Weiche Spielstrukturen',
        'Erfahrenes Kinderbetreuungspersonal',
      ],
    },
    image: '/images/facilities/kids-club/5.jpg',
  },
  {
    title: {
      ro: 'Cameră de Jocuri',
      en: 'Indoor Game Room',
      de: 'Spielzimmer',
    },
    subtitle: {
      ro: 'Distracție pentru Toate Vârstele',
      en: 'Fun for All Ages',
      de: 'Spaß für Alle Altersgruppen',
    },
    description: {
      ro: 'Camera noastră de jocuri este plină de distracții pentru copii, adolescenți și adulți deopotrivă. Provocați prietenii și familia la o partidă de air hockey, concurați pe simulatoarele Need for Speed, încercați-vă norocul la flippere clasice sau lăsați copiii mai mici să se bucure de mini-caruseluri. Camera de jocuri este refugiul perfect în zilele ploioase sau după o zi lungă pe pârtii.',
      en: 'Our game room is packed with entertainment for kids, teens, and adults alike. Challenge friends and family to a round of air hockey, race on the Need for Speed simulators, try your hand at classic pinball machines, or let younger children enjoy the kiddie rides. The game room is the perfect retreat on rainy days or after a long day on the slopes.',
      de: 'Unser Spielzimmer bietet Unterhaltung für Kinder, Jugendliche und Erwachsene gleichermaßen. Fordern Sie Freunde und Familie zu einer Runde Airhockey heraus, rasen Sie auf den Need-for-Speed-Simulatoren, versuchen Sie Ihr Glück an klassischen Flipperautomaten oder lassen Sie jüngere Kinder die Kinderfahrgeschäfte genießen. Das Spielzimmer ist der perfekte Rückzugsort an Regentagen oder nach einem langen Tag auf der Piste.',
    },
    highlights: {
      ro: [
        'Flippere',
        'Mese de air hockey',
        'Simulatoare de curse Need for Speed',
        'Mini-caruseluri pentru copiii mai mici',
      ],
      en: [
        'Pinball machines',
        'Air hockey tables',
        'Need for Speed racing simulators',
        'Kiddie rides for younger children',
      ],
      de: [
        'Flipperautomaten',
        'Airhockey-Tische',
        'Need-for-Speed-Rennsimulatoren',
        'Kinderfahrgeschäfte für die Kleineren',
      ],
    },
    image: '/images/facilities/game-room/1.jpg',
  },
  {
    title: {
      ro: 'Loc de Joacă în Aer Liber',
      en: 'Outdoor Playground',
      de: 'Outdoor-Spielplatz',
    },
    subtitle: {
      ro: 'Aventură în Aer Liber',
      en: 'Adventure in the Open Air',
      de: 'Abenteuer im Freien',
    },
    description: {
      ro: 'Situat printre pinii din jurul hotelului, locul nostru de joacă în aer liber oferă aer proaspăt de munte și suficient spațiu pentru alergat și joacă. Echipat cu tobogane moderne, leagăne, structuri de cățărare și echipamente de aventură, oferă ore de distracție activă într-un cadru natural superb. Locul de joacă dispune de suprafețe de siguranță și este potrivit pentru copii de diverse vârste.',
      en: 'Set among the pine trees surrounding the hotel, our outdoor playground offers fresh mountain air and plenty of room to run and play. Equipped with modern slides, swings, climbing frames, and adventure equipment, it provides hours of active fun in a beautiful natural setting. The playground features safety surfaces and is suitable for children of various ages.',
      de: 'Eingebettet zwischen den Kiefern rund um das Hotel bietet unser Outdoor-Spielplatz frische Bergluft und viel Platz zum Toben und Spielen. Ausgestattet mit modernen Rutschen, Schaukeln, Klettergerüsten und Abenteuergeräten sorgt er für stundenlangen aktiven Spaß in einer wunderschönen natürlichen Umgebung. Der Spielplatz verfügt über Sicherheitsbeläge und ist für Kinder verschiedener Altersgruppen geeignet.',
    },
    highlights: {
      ro: [
        'Tobogane și structuri de cățărare',
        'Leagăne',
        'Echipamente de aventură',
        'Suprafețe de siguranță peste tot',
      ],
      en: [
        'Slides & climbing frames',
        'Swings',
        'Adventure equipment',
        'Safety surfaces throughout',
      ],
      de: [
        'Rutschen & Klettergerüste',
        'Schaukeln',
        'Abenteuergeräte',
        'Sicherheitsbeläge durchgehend',
      ],
    },
    image: '/images/facilities/playground/1.jpg',
  },
]

export default async function KidsActivitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'activities' })
  const tc = await getTranslations({ locale, namespace: 'common' })

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/facilities/kids-club/6.jpg"
          alt={t('kids')}
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
              {t('kids')}
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              {t('kidsSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div>
        {sections.map((section, index) => {
          const isEven = index % 2 === 0
          return (
            <AnimateIn key={section.title.en} delay={index * 0.1}>
            <section
              className={`section-padding ${isEven ? '' : 'bg-cream'}`}
            >
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden shadow-sm ${!isEven ? 'order-2' : ''}`}
                  >
                    <Image
                      src={section.image}
                      alt={section.title[locale as Locale]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </div>
                  <div className={!isEven ? 'order-1' : ''}>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold mb-4">
                      {section.subtitle[locale as Locale]}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-navy mb-4">
                      {section.title[locale as Locale]}
                    </h2>
                    <p className="text-charcoal/80 leading-relaxed mb-6">
                      {section.description[locale as Locale]}
                    </p>
                    <ul className="space-y-3">
                      {section.highlights[locale as Locale].map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-charcoal/80">
                          <span className="mt-1.5 w-2 h-2 bg-gold shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            </AnimateIn>
          )
        })}
      </div>

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
