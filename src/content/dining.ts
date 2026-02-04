import type { Locale } from '@/i18n/config'

export interface DiningData {
  id: string
  slug: Record<Locale, string>
  name: string
  description: Record<Locale, string>
  style: Record<Locale, string>
  capacity: { interior: number; terrace: number }
  hours: string
  dressCode: Record<Locale, string>
  menuType: Record<Locale, string>
  images: string[]
  order: number
}

export const diningVenues: DiningData[] = [
  {
    id: '4-anotimpuri',
    slug: {
      ro: '4-anotimpuri',
      en: 'four-seasons',
      de: 'vier-jahreszeiten',
    },
    name: 'Restaurant 4 Anotimpuri',
    description: {
      ro: 'Restaurantul de referință al hotelului. Un bufet generos cu preparate internaționale și românești, cu vedere panoramică spre Munții Bucegi. Deschis pentru mic dejun, prânz și cină.',
      en: 'The hotel\'s signature restaurant. A generous buffet of international and Romanian dishes, with panoramic views of the Bucegi Mountains. Open for breakfast, lunch, and dinner.',
      de: 'Das Signature-Restaurant des Hotels. Ein großzügiges Buffet mit internationalen und rumänischen Gerichten, mit Panoramablick auf die Bucegi-Berge. Geöffnet zum Frühstück, Mittagessen und Abendessen.',
    },
    style: {
      ro: 'Internațional și românesc',
      en: 'International and Romanian',
      de: 'International und rumänisch',
    },
    capacity: { interior: 180, terrace: 50 },
    hours: '07:00-10:30, 12:30-15:00, 18:30-22:00',
    dressCode: {
      ro: 'Elegant casual',
      en: 'Elegant casual',
      de: 'Elegant lässig',
    },
    menuType: {
      ro: 'Bufet',
      en: 'Buffet',
      de: 'Buffet',
    },
    images: [
      '/images/restaurants/4-anotimpuri/1.jpg',
      '/images/restaurants/4-anotimpuri/2.jpg',
      '/images/restaurants/4-anotimpuri/3.jpg',
    ],
    order: 1,
  },
  {
    id: 'coroana',
    slug: {
      ro: 'coroana',
      en: 'coroana',
      de: 'coroana',
    },
    name: 'Restaurant Coroana',
    description: {
      ro: 'Fine dining cu rădăcini în terroir-ul carpatin. Meniul a la carte celebrează cele mai bune produse locale, iar terasa oferă una dintre cele mai frumoase vederi montane din Poiana Brașov.',
      en: 'Fine dining rooted in the Carpathian terroir. The a la carte menu celebrates the best of local produce, and the terrace commands one of the finest mountain views in Poiana Brașov.',
      de: 'Gehobene Küche, verwurzelt im Terroir der Karpaten. Das A-la-carte-Menü feiert die besten lokalen Erzeugnisse, und die Terrasse bietet einen der schönsten Bergblicke in Poiana Brașov.',
    },
    style: {
      ro: 'Gourmet',
      en: 'Gourmet',
      de: 'Gourmet',
    },
    capacity: { interior: 80, terrace: 90 },
    hours: '12:00-23:00',
    dressCode: {
      ro: 'Smart casual',
      en: 'Smart casual',
      de: 'Gehoben lässig',
    },
    menuType: {
      ro: 'A la carte',
      en: 'A la carte',
      de: 'A la carte',
    },
    images: [
      '/images/restaurants/coroana/1.jpg',
      '/images/restaurants/coroana/2.jpg',
      '/images/restaurants/coroana/3.jpg',
    ],
    order: 2,
  },
  {
    id: 'lobby-bar',
    slug: {
      ro: 'grand-lobby-cafe-bar',
      en: 'grand-lobby-cafe-bar',
      de: 'grand-lobby-cafe-bar',
    },
    name: 'Grand Lobby Cafe Bar',
    description: {
      ro: 'Sufrageria hotelului. Savurează o cafea de specialitate, un cocktail de după-amiază sau o gustare ușoară — lumina caldă și muzica discretă fac ca fiecare oră să pară fără grabă.',
      en: 'The hotel\'s living room. Settle into a specialty coffee, an afternoon cocktail, or a light bite — warm light and soft music make every hour feel unhurried.',
      de: 'Das Wohnzimmer des Hotels. Genießen Sie einen Spezialitätenkaffee, einen Nachmittagscocktail oder einen leichten Snack — warmes Licht und sanfte Musik lassen jede Stunde gemütlich vergehen.',
    },
    style: {
      ro: 'Lounge',
      en: 'Lounge',
      de: 'Lounge',
    },
    capacity: { interior: 30, terrace: 20 },
    hours: '10:00-24:00',
    dressCode: {
      ro: 'Casual',
      en: 'Casual',
      de: 'Lässig',
    },
    menuType: {
      ro: 'A la carte',
      en: 'A la carte',
      de: 'A la carte',
    },
    images: [
      '/images/restaurants/lobby-bar/1.jpg',
      '/images/restaurants/lobby-bar/2.jpg',
      '/images/restaurants/lobby-bar/3.jpg',
    ],
    order: 3,
  },
  {
    id: 'apres-ski',
    slug: {
      ro: 'apres-ski-bar',
      en: 'apres-ski-bar',
      de: 'apres-ski-bar',
    },
    name: 'Apres Ski Bar',
    description: {
      ro: 'Direct de pe pârtie, la ceva cald. La poalele pârtiei de schi, Apres Ski Bar este locul unde se spun cele mai bune povești ale zilei. Deschis pe toată durata sezonului de iarnă.',
      en: 'Straight off the slopes and into something warm. At the foot of the ski run, the Apres Ski Bar is where the day\'s best stories are told. Open through winter season.',
      de: 'Direkt von der Piste in etwas Warmes. Am Fuße der Skipiste ist die Apres-Ski-Bar der Ort, an dem die besten Geschichten des Tages erzählt werden. Geöffnet während der Wintersaison.',
    },
    style: {
      ro: 'Casual',
      en: 'Casual',
      de: 'Ungezwungen',
    },
    capacity: { interior: 20, terrace: 40 },
    hours: '10:00-17:00 (iarna / winter / Winter)',
    dressCode: {
      ro: 'Echipament de ski',
      en: 'Ski attire',
      de: 'Skibekleidung',
    },
    menuType: {
      ro: 'A la carte',
      en: 'A la carte',
      de: 'A la carte',
    },
    images: [
      '/images/restaurants/apres-ski/1.jpg',
      '/images/restaurants/apres-ski/2.jpg',
      '/images/restaurants/apres-ski/3.jpg',
    ],
    order: 4,
  },
  {
    id: 'casa-utu',
    slug: {
      ro: 'casa-utu',
      en: 'casa-utu',
      de: 'casa-utu',
    },
    name: 'Casa Utu',
    description: {
      ro: 'Suflet românesc autentic într-un cadru rustic și primitor. Preparate gătite după rețete moștenite din familie — într-un spațiu creat pentru a aduce oamenii împreună.',
      en: 'Authentic Romanian soul in a rustic, welcoming setting. Dishes prepared from inherited family recipes — in a space that was made for gathering.',
      de: 'Authentische rumänische Seele in einem rustikalen, einladenden Ambiente. Gerichte nach überlieferten Familienrezepten — in einem Raum, der zum Zusammenkommen geschaffen wurde.',
    },
    style: {
      ro: 'Tradițional românesc',
      en: 'Traditional Romanian',
      de: 'Traditionell rumänisch',
    },
    capacity: { interior: 0, terrace: 0 },
    hours: 'Evenimente / Events / Veranstaltungen',
    dressCode: {
      ro: 'Smart casual',
      en: 'Smart casual',
      de: 'Gehoben lässig',
    },
    menuType: {
      ro: 'Meniu dedicat evenimentelor',
      en: 'Events menu',
      de: 'Veranstaltungsmenue',
    },
    images: [
      '/images/restaurants/casa-utu/1.jpg',
      '/images/restaurants/casa-utu/2.jpg',
      '/images/restaurants/casa-utu/3.jpg',
    ],
    order: 5,
  },
  {
    id: 'spa-bar',
    slug: {
      ro: 'spa-bar',
      en: 'spa-bar',
      de: 'spa-bar',
    },
    name: 'Spa Bar',
    description: {
      ro: 'Smoothie-uri, ceaiuri din plante și preparate ușoare în liniștea zonei de wellness — o pauză blândă între tratamente.',
      en: 'Smoothies, herbal teas, and light plates in the calm of the wellness wing — a gentle pause between treatments.',
      de: 'Smoothies, Kräutertees und leichte Gerichte in der Ruhe des Wellnessbereichs — eine sanfte Pause zwischen den Behandlungen.',
    },
    style: {
      ro: 'Wellness',
      en: 'Wellness',
      de: 'Wellness',
    },
    capacity: { interior: 20, terrace: 10 },
    hours: '10:00-22:00',
    dressCode: {
      ro: 'Echipament de inot / halat',
      en: 'Swimming attire / bathrobe',
      de: 'Badebekleidung / Bademantel',
    },
    menuType: {
      ro: 'A la carte',
      en: 'A la carte',
      de: 'A la carte',
    },
    images: [
      '/images/restaurants/spa-bar/1.jpg',
    ],
    order: 6,
  },
  {
    id: 'nightclub',
    slug: {
      ro: 'club-de-noapte-arena',
      en: 'arena-nightclub',
      de: 'nachtclub-arena',
    },
    name: 'Club de Noapte Arena',
    description: {
      ro: 'Un spațiu cu 150 de locuri, cu sistem profesional de sunet și iluminare de scenă, disponibil la cerere pentru evenimente private, celebrări corporate și ocazii nocturne.',
      en: 'A 150-seat venue with professional sound and stage lighting, available on request for private events, corporate celebrations, and late-night occasions.',
      de: 'Ein Veranstaltungsort mit 150 Plätzen, professioneller Tonanlage und Bühnenbeleuchtung, auf Anfrage verfügbar für private Events, Firmenfeiern und spätabendliche Anlässe.',
    },
    style: {
      ro: 'Club / Evenimente',
      en: 'Club / Events',
      de: 'Club / Veranstaltungen',
    },
    capacity: { interior: 150, terrace: 0 },
    hours: 'La cerere / On demand / Auf Anfrage',
    dressCode: {
      ro: 'Smart casual',
      en: 'Smart casual',
      de: 'Gehoben lässig',
    },
    menuType: {
      ro: 'Evenimente private',
      en: 'Private events',
      de: 'Private Veranstaltungen',
    },
    images: [
      '/images/restaurants/nightclub/1.jpg',
      '/images/restaurants/nightclub/2.jpg',
      '/images/restaurants/nightclub/3.jpg',
    ],
    order: 7,
  },
]
