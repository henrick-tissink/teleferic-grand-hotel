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
      ro: 'Un spațiu de lux creat pentru confort suprem',
      en: 'A luxury space designed for ultimate comfort',
      de: 'Ein luxuriöser Raum für höchsten Komfort',
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
      ro: 'Confort și eleganță într-un cadru natural',
      en: 'Comfort and elegance in a natural setting',
      de: 'Komfort und Eleganz in natürlicher Umgebung',
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
      ro: 'Experiență de lux într-un ambient montan',
      en: 'A luxury experience in a mountain setting',
      de: 'Ein luxuriöses Erlebnis in alpiner Atmosphäre',
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
      ro: 'Confort și eleganță la prețuri accesibile',
      en: 'Comfort and elegance at affordable prices',
      de: 'Komfort und Eleganz zu erschwinglichen Preisen',
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
      ro: 'Eleganță și confort într-o cameră spațioasă',
      en: 'Elegance and comfort in a spacious room',
      de: 'Eleganz und Komfort in einem geräumigen Zimmer',
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
      ro: 'Confort modern într-un ambient clasic',
      en: 'Modern comfort in a classic setting',
      de: 'Moderner Komfort in klassischem Ambiente',
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
      ro: 'Funcționalitate și confort la un preț accesibil',
      en: 'Functionality and comfort at an affordable price',
      de: 'Funktionalität und Komfort zu einem erschwinglichen Preis',
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
      ro: 'Confort perfect pentru călătorul solo',
      en: 'Perfect comfort for the solo traveller',
      de: 'Perfekter Komfort für den Alleinreisenden',
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
