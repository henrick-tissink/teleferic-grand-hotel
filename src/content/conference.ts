import type { Locale } from '@/i18n/config'

export interface ConferenceData {
  id: string
  slug: Record<Locale, string>
  name: string
  description: Record<Locale, string>
  capacity: { theatre: number; banquet: number; classroom: number; ushape: number }
  equipment: Record<Locale, string[]>
  eventEquipment?: Record<Locale, string[]>
  images: string[]
  order: number
}

export const conferenceRooms: ConferenceData[] = [
  {
    id: 'brasovia',
    slug: { ro: 'brasovia', en: 'brasovia', de: 'brasovia' },
    name: 'Sala Brașovia',
    description: {
      ro: 'Sala de bal principală, perfectă pentru conferințe mari, gale și evenimente corporate de prestigiu.',
      en: 'The grand ballroom, perfect for large conferences, galas and prestigious corporate events.',
      de: 'Der große Ballsaal, perfekt für große Konferenzen, Galas und prestigeträchtige Firmenveranstaltungen.',
    },
    capacity: { theatre: 250, banquet: 100, classroom: 100, ushape: 60 },
    equipment: {
      ro: [
        'Proiector Full HD (3000 ANSI)',
        'Ecran retractabil (195x121.5cm, 16:10)',
        '6 microfoane wireless de mână',
        '2 microfoane lavalier headset',
        'Sistem BOSE cu 6 difuzoare',
        '2 televizoare LED (150cm)',
        'Scaler de imagine Kramer',
      ],
      en: [
        'Full HD projector (3000 ANSI)',
        'Retractable screen (195x121.5cm, 16:10)',
        '6 wireless handheld microphones',
        '2 lavalier headset microphones',
        'BOSE 6-speaker system',
        '2 LED TVs (150cm)',
        'Kramer image scaler',
      ],
      de: [
        'Full-HD-Projektor (3000 ANSI)',
        'Einziehbare Leinwand (195x121,5cm, 16:10)',
        '6 kabellose Handmikrofone',
        '2 Lavalier-Headset-Mikrofone',
        'BOSE 6-Lautsprecher-System',
        '2 LED-Fernseher (150cm)',
        'Kramer Bildskalierer',
      ],
    },
    eventEquipment: {
      ro: [
        'Difuzoare TANNOY VX15 HP',
        'Bass VSX15 DR',
        'Mixer DJ Allen&Heath',
        'Mixer instrumente Allen&Heath ZED-12FX',
        'Amplificare LAB GRUPPEN',
      ],
      en: [
        'TANNOY VX15 HP speakers',
        'VSX15 DR bass',
        'Allen&Heath DJ mixer',
        'Allen&Heath ZED-12FX instrument mixer',
        'LAB GRUPPEN amplification',
      ],
      de: [
        'TANNOY VX15 HP Lautsprecher',
        'VSX15 DR Bass',
        'Allen&Heath DJ-Mixer',
        'Allen&Heath ZED-12FX Instrumentenmixer',
        'LAB GRUPPEN Verstärkung',
      ],
    },
    images: ['/images/conference/brasovia-landscape.jpg', '/images/conference/brasovia-square.jpg'],
    order: 1,
  },
  {
    id: 'coroana',
    slug: { ro: 'coroana', en: 'coroana', de: 'coroana' },
    name: 'Sala Coroana',
    description: {
      ro: 'Sală elegantă pentru conferințe de dimensiuni medii și banchete.',
      en: 'Elegant hall for medium-sized conferences and banquets.',
      de: 'Eleganter Saal für mittelgroße Konferenzen und Bankette.',
    },
    capacity: { theatre: 100, banquet: 50, classroom: 75, ushape: 35 },
    equipment: {
      ro: [
        'Proiector video Full HD (1920x1080)',
        'Ecran de proiecție Ligra (342x221cm)',
        'Sunet fix LAB GRUPPEN cu 8 difuzoare TANNOY',
        'Flipchart',
      ],
      en: [
        'Full HD video projector (1920x1080)',
        'Ligra projection screen (342x221cm)',
        'Fixed LAB GRUPPEN sound with 8 TANNOY speakers',
        'Flipchart',
      ],
      de: [
        'Full-HD-Videoprojektor (1920x1080)',
        'Ligra Projektionsleinwand (342x221cm)',
        'Festes LAB GRUPPEN Soundsystem mit 8 TANNOY Lautsprechern',
        'Flipchart',
      ],
    },
    images: ['/images/conference/coroana.jpg'],
    order: 2,
  },
  {
    id: 'postavaru',
    slug: { ro: 'postavaru', en: 'postavaru', de: 'postavaru' },
    name: 'Sala Postăvaru',
    description: {
      ro: 'Sală versatilă pentru întâlniri de afaceri și workshop-uri.',
      en: 'Versatile room for business meetings and workshops.',
      de: 'Vielseitiger Raum für Geschäftstreffen und Workshops.',
    },
    capacity: { theatre: 40, banquet: 24, classroom: 25, ushape: 20 },
    equipment: {
      ro: [
        'Proiector Full HD (3000 ANSI)',
        'Ecran retractabil (195x121.5cm, 16:10)',
        'Sunet amplificat cu 2 difuzoare',
      ],
      en: [
        'Full HD projector (3000 ANSI)',
        'Retractable screen (195x121.5cm, 16:10)',
        'Amplified sound with 2 speakers',
      ],
      de: [
        'Full-HD-Projektor (3000 ANSI)',
        'Einziehbare Leinwand (195x121,5cm, 16:10)',
        'Verstärkter Sound mit 2 Lautsprechern',
      ],
    },
    images: ['/images/conference/postavaru.jpg'],
    order: 3,
  },
  {
    id: 'cetatuia',
    slug: { ro: 'cetatuia', en: 'cetatuia', de: 'cetatuia' },
    name: 'Sala Cetățuia',
    description: {
      ro: 'Sală intimă pentru întâlniri și prezentări.',
      en: 'Intimate room for meetings and presentations.',
      de: 'Intimer Raum für Meetings und Präsentationen.',
    },
    capacity: { theatre: 45, banquet: 24, classroom: 25, ushape: 20 },
    equipment: {
      ro: ['Televizor LED 150cm', 'Sunet amplificat cu 2 difuzoare'],
      en: ['150cm LED TV', 'Amplified sound with 2 speakers'],
      de: ['150cm LED-Fernseher', 'Verstärkter Sound mit 2 Lautsprechern'],
    },
    images: ['/images/conference/cetatuia.jpg'],
    order: 4,
  },
  {
    id: 'poiana',
    slug: { ro: 'poiana', en: 'poiana', de: 'poiana' },
    name: 'Sala Poiana',
    description: {
      ro: 'Sală compactă, ideală pentru întâlniri în format U-Shape.',
      en: 'Compact room, ideal for U-Shape format meetings.',
      de: 'Kompakter Raum, ideal für Meetings im U-Format.',
    },
    capacity: { theatre: 30, banquet: 20, classroom: 20, ushape: 20 },
    equipment: {
      ro: [
        'Proiector Full HD (3000 ANSI)',
        'Ecran retractabil (195x121.5cm, 16:10)',
        'Sunet amplificat cu 2 difuzoare',
      ],
      en: [
        'Full HD projector (3000 ANSI)',
        'Retractable screen (195x121.5cm, 16:10)',
        'Amplified sound with 2 speakers',
      ],
      de: [
        'Full-HD-Projektor (3000 ANSI)',
        'Einziehbare Leinwand (195x121,5cm, 16:10)',
        'Verstärkter Sound mit 2 Lautsprechern',
      ],
    },
    images: ['/images/conference/poiana.jpg'],
    order: 5,
  },
]
