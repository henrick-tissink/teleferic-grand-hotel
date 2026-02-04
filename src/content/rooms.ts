import type { Locale } from '@/i18n/config'

export interface RoomData {
  id: string
  slug: Record<Locale, string>
  name: Record<Locale, string>
  description: Record<Locale, string>
  size: number
  capacity: { adults: number; children: number; maxAdults: number }
  bedType: Record<Locale, string>
  amenities: string[]
  images: string[]
  floorPlan: string
  order: number
}

export const rooms: RoomData[] = [
  {
    id: 'deluxe',
    slug: {
      ro: 'apartament-deluxe',
      en: 'deluxe-apartment',
      de: 'deluxe-apartment',
    },
    name: {
      ro: 'Apartament Deluxe',
      en: 'Deluxe Apartment',
      de: 'Deluxe Apartment',
    },
    description: {
      ro: 'Optzeci de metri pătrați de grandoare alpină — zonă de living completă, bucătărie privată și priveliști de pe balcon spre vârfuri.',
      en: 'Eighty square metres of alpine grandeur — a full living area, private kitchenette, and balcony views of the peaks.',
      de: 'Achtzig Quadratmeter alpiner Grandeur — Wohnbereich, eigene Küchenzeile und Balkonblick auf die Gipfel.',
    },
    size: 80,
    capacity: { adults: 2, children: 2, maxAdults: 3 },
    bedType: {
      ro: 'Pat king 200x200 + canapea extensibilă',
      en: 'King bed 200x200 + sofa bed',
      de: 'Kingsize-Bett 200x200 + Schlafsofa',
    },
    amenities: [
      'wifi',
      'air-conditioning',
      'minibar',
      'safe',
      'flat-screen-tv',
      'balcony',
      'bathrobe',
      'slippers',
      'hair-dryer',
      'coffee-machine',
      'room-service',
      'living-area',
      'kitchenette',
      'mountain-view',
    ],
    images: [
      '/images/rooms/deluxe/1.jpg',
      '/images/rooms/deluxe/1_1.jpg',
      '/images/rooms/deluxe/2.jpg',
      '/images/rooms/deluxe/4.jpg',
      '/images/rooms/deluxe/5.jpg',
      '/images/rooms/deluxe/6.jpg',
      '/images/rooms/deluxe/7.jpg',
      '/images/rooms/deluxe/9.jpg',
    ],
    floorPlan: '/images/rooms/deluxe/floorplan.png',
    order: 1,
  },
  {
    id: 'junior-suite-premium',
    slug: {
      ro: 'junior-suite-premium',
      en: 'junior-suite-premium',
      de: 'junior-suite-premium',
    },
    name: {
      ro: 'Junior Suite Premium',
      en: 'Junior Suite Premium',
      de: 'Junior Suite Premium',
    },
    description: {
      ro: 'Spațiu generos și finisaje rafinate — pat king, zonă de living dedicată și priveliști montane spectaculoase.',
      en: 'Generous space and refined finishes — king bed, dedicated living area, and sweeping mountain views.',
      de: 'Großzügiger Raum und edle Ausstattung — Kingsize-Bett, eigener Wohnbereich und weiter Blick auf die Berge.',
    },
    size: 50,
    capacity: { adults: 2, children: 2, maxAdults: 3 },
    bedType: {
      ro: 'Pat king 200x200 + canapea extensibilă',
      en: 'King bed 200x200 + sofa bed',
      de: 'Kingsize-Bett 200x200 + Schlafsofa',
    },
    amenities: [
      'wifi',
      'air-conditioning',
      'minibar',
      'safe',
      'flat-screen-tv',
      'balcony',
      'bathrobe',
      'slippers',
      'hair-dryer',
      'coffee-machine',
      'room-service',
      'mountain-view',
    ],
    images: [
      '/images/rooms/junior-suite-premium/bed.jpg',
      '/images/rooms/junior-suite-premium/bed-view.jpg',
      '/images/rooms/junior-suite-premium/couch-view.jpg',
      '/images/rooms/junior-suite-premium/desk.jpg',
      '/images/rooms/junior-suite-premium/room-5.jpg',
    ],
    floorPlan: '/images/rooms/junior-suite-premium/floorplan.png',
    order: 2,
  },
  {
    id: 'junior-suite',
    slug: {
      ro: 'junior-suite',
      en: 'junior-suite',
      de: 'junior-suite',
    },
    name: {
      ro: 'Junior Suite',
      en: 'Junior Suite',
      de: 'Junior Suite',
    },
    description: {
      ro: 'Un refugiu montan rafinat — spațios, luminat, cu pat king și canapea pentru seri lungi și fără grabă.',
      en: 'A refined mountain retreat — spacious, light-filled, with king bed and sofa for long, unhurried evenings.',
      de: 'Ein alpiner Rückzugsort mit Stil — geräumig, lichtdurchflutet, mit Kingsize-Bett und Sofa für lange, unbeschwerte Abende.',
    },
    size: 45,
    capacity: { adults: 2, children: 2, maxAdults: 3 },
    bedType: {
      ro: 'Pat king 200x200 + canapea extensibilă',
      en: 'King bed 200x200 + sofa bed',
      de: 'Kingsize-Bett 200x200 + Schlafsofa',
    },
    amenities: [
      'wifi',
      'air-conditioning',
      'minibar',
      'safe',
      'flat-screen-tv',
      'balcony',
      'bathrobe',
      'slippers',
      'hair-dryer',
      'coffee-machine',
      'room-service',
    ],
    images: [
      '/images/rooms/junior-suite/button-desktop.jpg',
    ],
    floorPlan: '/images/rooms/junior-suite/floorplan.png',
    order: 3,
  },
  {
    id: 'junior-suite-economy',
    slug: {
      ro: 'junior-suite-economy',
      en: 'junior-suite-economy',
      de: 'junior-suite-economy',
    },
    name: {
      ro: 'Junior Suite Economy',
      en: 'Junior Suite Economy',
      de: 'Junior Suite Economy',
    },
    description: {
      ro: 'Confortul unui suite, la scară gândită — pat king, canapea și tot ce trebuie, într-un cadru cald și intim.',
      en: 'Suite comfort, thoughtfully scaled — king bed, sofa, and all the essentials in a warm, intimate setting.',
      de: 'Suite-Komfort, durchdacht dimensioniert — Kingsize-Bett, Sofa und alles Wesentliche in warmem, behaglichem Ambiente.',
    },
    size: 35,
    capacity: { adults: 2, children: 1, maxAdults: 2 },
    bedType: {
      ro: 'Pat king 200x200 + canapea extensibilă',
      en: 'King bed 200x200 + sofa bed',
      de: 'Kingsize-Bett 200x200 + Schlafsofa',
    },
    amenities: [
      'wifi',
      'air-conditioning',
      'minibar',
      'safe',
      'flat-screen-tv',
      'balcony',
      'bathrobe',
      'slippers',
      'hair-dryer',
      'coffee-machine',
    ],
    images: [
      '/images/rooms/junior-suite-economy/button-desktop.jpg',
    ],
    floorPlan: '/images/rooms/junior-suite-economy/floorplan.png',
    order: 4,
  },
  {
    id: 'double-superior',
    slug: {
      ro: 'dubla-superior',
      en: 'double-superior',
      de: 'doppel-superior',
    },
    name: {
      ro: 'Cameră Dublă Superior',
      en: 'Double Superior Room',
      de: 'Doppelzimmer Superior',
    },
    description: {
      ro: 'King sau twin, cu balcon privat și loc de respirat — cea mai spațioasă cameră dublă a noastră.',
      en: 'King or twin, with a private balcony and room to breathe — our most spacious double.',
      de: 'King- oder Einzelbetten, eigener Balkon und Raum zum Durchatmen — unser geräumigstes Doppelzimmer.',
    },
    size: 30,
    capacity: { adults: 2, children: 1, maxAdults: 2 },
    bedType: {
      ro: 'Pat king 200x180 sau 2 paturi twin',
      en: 'King bed 200x180 or 2 twin beds',
      de: 'Kingsize-Bett 200x180 oder 2 Einzelbetten',
    },
    amenities: [
      'wifi',
      'air-conditioning',
      'minibar',
      'safe',
      'flat-screen-tv',
      'balcony',
      'bathrobe',
      'slippers',
      'hair-dryer',
    ],
    images: [
      '/images/rooms/double-superior/button-desktop.jpg',
    ],
    floorPlan: '/images/rooms/double-superior/floorplan.png',
    order: 5,
  },
  {
    id: 'double-standard',
    slug: {
      ro: 'dubla-standard',
      en: 'double-standard',
      de: 'doppel-standard',
    },
    name: {
      ro: 'Cameră Dublă Standard',
      en: 'Double Standard Room',
      de: 'Doppelzimmer Standard',
    },
    description: {
      ro: 'Stil alpin clasic cu tot confortul modern — baza ta pentru pârtii, trasee și aerul muntelui.',
      en: 'Classic alpine style with every modern comfort — your base for the slopes, the trails, and the mountain air.',
      de: 'Klassischer Alpenstil mit jedem modernen Komfort — Ihre Basis für Pisten, Wanderwege und Bergluft.',
    },
    size: 25,
    capacity: { adults: 2, children: 0, maxAdults: 2 },
    bedType: {
      ro: 'Pat king 200x180 sau 2 paturi twin',
      en: 'King bed 200x180 or 2 twin beds',
      de: 'Kingsize-Bett 200x180 oder 2 Einzelbetten',
    },
    amenities: [
      'wifi',
      'air-conditioning',
      'minibar',
      'safe',
      'flat-screen-tv',
      'bathrobe',
      'slippers',
      'hair-dryer',
    ],
    images: [
      '/images/rooms/double-standard/button-desktop.jpg',
    ],
    floorPlan: '/images/rooms/double-standard/floorplan.png',
    order: 6,
  },
  {
    id: 'double-economy',
    slug: {
      ro: 'dubla-economy',
      en: 'double-economy',
      de: 'doppel-economy',
    },
    name: {
      ro: 'Cameră Dublă Economy',
      en: 'Double Economy Room',
      de: 'Doppelzimmer Economy',
    },
    description: {
      ro: 'Compactă și bine gândită — creată pentru cei care își petrec zilele pe munte și serile în companie bună.',
      en: 'Compact and considered — designed for those who spend their days on the mountain and their evenings in good company.',
      de: 'Kompakt und durchdacht — für alle, die ihre Tage am Berg und ihre Abende in guter Gesellschaft verbringen.',
    },
    size: 22,
    capacity: { adults: 2, children: 0, maxAdults: 2 },
    bedType: {
      ro: 'Pat king 200x160 sau 2 paturi twin',
      en: 'King bed 200x160 or 2 twin beds',
      de: 'Kingsize-Bett 200x160 oder 2 Einzelbetten',
    },
    amenities: [
      'wifi',
      'air-conditioning',
      'minibar',
      'safe',
      'flat-screen-tv',
      'hair-dryer',
    ],
    images: [
      '/images/rooms/double-economy/button-desktop.jpg',
    ],
    floorPlan: '/images/rooms/double-economy/floorplan.png',
    order: 7,
  },
  {
    id: 'single',
    slug: {
      ro: 'single',
      en: 'single',
      de: 'einzelzimmer',
    },
    name: {
      ro: 'Cameră Single',
      en: 'Single Room',
      de: 'Einzelzimmer',
    },
    description: {
      ro: 'Colțul tău liniștit de munte — amenajat cu grijă pentru călătorul independent.',
      en: 'Your own quiet corner of the mountain — thoughtfully appointed for the independent traveller.',
      de: 'Ihr ruhiger Winkel am Berg — mit Bedacht eingerichtet für den unabhängigen Reisenden.',
    },
    size: 18,
    capacity: { adults: 1, children: 0, maxAdults: 1 },
    bedType: {
      ro: 'Pat single 200x120',
      en: 'Single bed 200x120',
      de: 'Einzelbett 200x120',
    },
    amenities: [
      'wifi',
      'air-conditioning',
      'minibar',
      'safe',
      'flat-screen-tv',
      'hair-dryer',
    ],
    images: [
      '/images/rooms/single/button-desktop.jpg',
    ],
    floorPlan: '/images/rooms/single/floorplan.png',
    order: 8,
  },
]

export function getRoomBySlug(slug: string): RoomData | undefined {
  return rooms.find(
    (room) =>
      room.slug.ro === slug || room.slug.en === slug || room.slug.de === slug
  )
}

export function getRoomById(id: string): RoomData | undefined {
  return rooms.find((room) => room.id === id)
}

export function getRoomsByOrder(): RoomData[] {
  return [...rooms].sort((a, b) => a.order - b.order)
}
