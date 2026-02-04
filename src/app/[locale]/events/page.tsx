import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { Button } from '@/components/ui/Button'
import type { Locale } from '@/i18n/config'
import { Heart, Users, Camera, Scissors, Flower2, Music, Car, ChefHat, UserCheck } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'events' })
  return {
    title: `${t('title')} | Teleferic Grand Hotel`,
    description: t('subtitle'),
  }
}

interface Venue {
  name: string
  capacity: string
  image: string
}

const venues: Venue[] = [
  {
    name: 'Brasovia Ballroom',
    capacity: '50 - 100',
    image: '/images/conference/brasovia-landscape.jpg',
  },
  {
    name: '4 Anotimpuri',
    capacity: '100 - 160',
    image: '/images/restaurants/4-anotimpuri/1.jpg',
  },
  {
    name: 'Coroana',
    capacity: '50 - 80',
    image: '/images/restaurants/coroana/1.jpg',
  },
]

const extraServices: Record<Locale, { icon: React.ComponentType<{ size?: number; className?: string }>; label: string }[]> = {
  ro: [
    { icon: Camera, label: 'Fotografiere profesională' },
    { icon: Scissors, label: 'Coafură și styling' },
    { icon: Flower2, label: 'Aranjamente florale' },
    { icon: Music, label: 'Formații și artiști' },
    { icon: Car, label: 'Transport' },
  ],
  en: [
    { icon: Camera, label: 'Professional Photography' },
    { icon: Scissors, label: 'Hair Styling' },
    { icon: Flower2, label: 'Floral Arrangements' },
    { icon: Music, label: 'Bands & Performers' },
    { icon: Car, label: 'Transport' },
  ],
  de: [
    { icon: Camera, label: 'Professionelle Fotografie' },
    { icon: Scissors, label: 'Frisur & Styling' },
    { icon: Flower2, label: 'Blumenarrangements' },
    { icon: Music, label: 'Bands & Künstler' },
    { icon: Car, label: 'Transport' },
  ],
}

const heroContent: Record<Locale, { tagline: string; description: string; chefTitle: string; chefDesc: string; coordinatorTitle: string; coordinatorDesc: string }> = {
  ro: {
    tagline: 'Nunți, Botezuri și Celebrări',
    description: 'Creați momente de neuitat într-un cadru de poveste, cu servicii impecabile și atenție la fiecare detaliu. Echipa noastră vă stă la dispoziție pentru a transforma fiecare eveniment personal într-o experiență memorabilă.',
    chefTitle: 'Asistență Chef',
    chefDesc: 'Meniuri personalizate create de bucătarul nostru executiv pentru evenimentul dumneavoastră.',
    coordinatorTitle: 'Coordonator Dedicat',
    coordinatorDesc: 'Un coordonator de evenimente dedicat vă ghidează prin fiecare etapă a planificării.',
  },
  en: {
    tagline: 'Weddings, Christenings & Celebrations',
    description: 'Create unforgettable moments in a fairy-tale setting, with impeccable services and attention to every detail. Our team is at your disposal to transform each personal event into a memorable experience.',
    chefTitle: 'Chef Assistance',
    chefDesc: 'Custom menus created by our executive chef for your event.',
    coordinatorTitle: 'Dedicated Coordinator',
    coordinatorDesc: 'A dedicated event coordinator guides you through every stage of planning.',
  },
  de: {
    tagline: 'Hochzeiten, Taufen & Feiern',
    description: 'Schaffen Sie unvergessliche Momente in einer märchenhaften Umgebung, mit tadellosem Service und Liebe zum Detail. Unser Team steht Ihnen zur Verfügung, um jedes persönliche Event zu einem unvergesslichen Erlebnis zu machen.',
    chefTitle: 'Chef-Unterstützung',
    chefDesc: 'Individuelle Menüs, kreiert von unserem Küchenchef für Ihr Event.',
    coordinatorTitle: 'Dedizierter Koordinator',
    coordinatorDesc: 'Ein dedizierter Eventkoordinator begleitet Sie durch jede Planungsphase.',
  },
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'events' })
  const content = heroContent[locale as Locale]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/images/conference/events.jpg"
          alt={t('title')}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-6">
            <Heart size={48} className="mx-auto mb-6 text-gold" />
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-white/80 mb-2">{content.tagline}</p>
            <p className="text-base text-white/70 max-w-2xl mx-auto mt-4">{content.description}</p>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-12 text-center">
            {t('venues')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <div
                key={venue.name}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-[family-name:var(--font-heading)] text-navy font-bold mb-2">
                    {venue.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Users size={16} className="text-gold" />
                    <span>{venue.capacity} {t('guests')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-navy mb-12 text-center">
            {t('services')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {extraServices[locale as Locale].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-white p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Icon size={32} className="mx-auto mb-3 text-gold" />
                <p className="text-sm font-semibold text-navy">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef & Coordinator */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-navy p-8 text-white">
              <ChefHat size={36} className="text-gold mb-4" />
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold mb-3 text-gold">
                {content.chefTitle}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{content.chefDesc}</p>
            </div>
            <div className="bg-navy p-8 text-white">
              <UserCheck size={36} className="text-gold mb-4" />
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold mb-3 text-gold">
                {content.coordinatorTitle}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{content.coordinatorDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] font-bold mb-6">
            {t('contactUs')}
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10">{content.description}</p>
          <Button as="link" href="/contact" size="lg">
            {t('contactUs')}
          </Button>
        </div>
      </section>
    </>
  )
}
