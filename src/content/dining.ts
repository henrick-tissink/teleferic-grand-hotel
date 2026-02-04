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
      ro: 'Restaurantul principal al hotelului, oferind un bufet generos cu preparate internationale si romanesti. Situat la parterul hotelului, cu vedere panoramica spre muntii Bucegi, restaurantul 4 Anotimpuri este locul ideal pentru mic dejun, pranz si cina in cadru elegant.',
      en: 'The hotel\'s main restaurant, offering a generous buffet with international and Romanian dishes. Located on the ground floor with panoramic views of the Bucegi Mountains, Restaurant 4 Anotimpuri is the ideal venue for breakfast, lunch, and dinner in an elegant setting.',
      de: 'Das Hauptrestaurant des Hotels bietet ein grosszuegiges Buffet mit internationalen und rumaenischen Gerichten. Im Erdgeschoss gelegen, mit Panoramablick auf die Bucegi-Berge, ist das Restaurant 4 Anotimpuri der ideale Ort fuer Fruehstueck, Mittagessen und Abendessen in elegantem Ambiente.',
    },
    style: {
      ro: 'International si romanesc',
      en: 'International and Romanian',
      de: 'International und rumaenisch',
    },
    capacity: { interior: 180, terrace: 50 },
    hours: '07:00-10:30, 12:30-15:00, 18:30-22:00',
    dressCode: {
      ro: 'Elegant casual',
      en: 'Elegant casual',
      de: 'Elegant laessig',
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
      ro: 'Restaurant a la carte cu o atmosfera rafinata si un meniu gourmet de exceptie. Terasa generoasa ofera un cadru deosebit pentru mese in aer liber, cu vedere spre peisajul montan. Preparat cu ingrediente locale de cea mai inalta calitate.',
      en: 'An a la carte restaurant with a refined atmosphere and an exceptional gourmet menu. The generous terrace provides a remarkable setting for outdoor dining with views of the mountain landscape. Prepared with the highest quality local ingredients.',
      de: 'Ein A-la-carte-Restaurant mit gehobenem Ambiente und einem aussergewoehnlichen Gourmet-Menue. Die grosszuegige Terrasse bietet einen besonderen Rahmen fuer Mahlzeiten im Freien mit Blick auf die Berglandschaft. Zubereitet mit lokalen Zutaten hoechster Qualitaet.',
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
      de: 'Gehoben laessig',
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
      ro: 'Un spatiu lounge elegant in inima hotelului, perfect pentru o cafea de specialitate, cocktailuri rafinate sau o gustare usoara. Atmosfera calda si muzica ambientala creeaza cadrul ideal pentru intalniri de afaceri sau momente de relaxare.',
      en: 'An elegant lounge space in the heart of the hotel, perfect for specialty coffee, refined cocktails, or a light snack. The warm atmosphere and ambient music create the ideal setting for business meetings or moments of relaxation.',
      de: 'Ein eleganter Lounge-Bereich im Herzen des Hotels, perfekt fuer Spezialitaetenkaffee, erlesene Cocktails oder einen leichten Snack. Die warme Atmosphaere und die Hintergrundmusik schaffen den idealen Rahmen fuer Geschaeftstreffen oder Momente der Entspannung.',
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
      de: 'Laessig',
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
      ro: 'Barul Apres Ski este locul perfect pentru a va relaxa dupa o zi pe partii. Situat la baza partiei, ofera bauturi calde si reci, gustari si o atmosfera casual si prietenoasa. Deschis in sezonul de iarna.',
      en: 'The Apres Ski Bar is the perfect place to unwind after a day on the slopes. Located at the base of the ski run, it offers hot and cold drinks, snacks, and a casual, friendly atmosphere. Open during winter season.',
      de: 'Die Apres-Ski-Bar ist der perfekte Ort, um sich nach einem Tag auf der Piste zu entspannen. Am Fusse der Skipiste gelegen, bietet sie warme und kalte Getraenke, Snacks und eine ungezwungene, freundliche Atmosphaere. Geoeffnet waehrend der Wintersaison.',
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
      ro: 'Un loc cu suflet romanesc autentic, dedicat bucatariei traditionale si evenimentelor private. Casa Utu ofera preparate gatite dupa retete mostenite, intr-un cadru rustic si primitor, ideal pentru petreceri si evenimente speciale.',
      en: 'A venue with authentic Romanian soul, dedicated to traditional cuisine and private events. Casa Utu offers dishes prepared from inherited recipes in a rustic and welcoming setting, ideal for celebrations and special events.',
      de: 'Ein Ort mit authentischer rumaenischer Seele, gewidmet der traditionellen Kueche und privaten Veranstaltungen. Casa Utu bietet Gerichte nach ueberlieferten Rezepten in einem rustikalen und einladenden Ambiente, ideal fuer Feiern und besondere Anlaesse.',
    },
    style: {
      ro: 'Traditional romanesc',
      en: 'Traditional Romanian',
      de: 'Traditionell rumaenisch',
    },
    capacity: { interior: 0, terrace: 0 },
    hours: 'Evenimente / Events / Veranstaltungen',
    dressCode: {
      ro: 'Smart casual',
      en: 'Smart casual',
      de: 'Gehoben laessig',
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
      ro: 'Situat in zona de wellness a hotelului, Spa Barul ofera bauturi racoritoare, smoothie-uri, ceaiuri si gustari usoare, perfecte pentru a completa experienta de relaxare. Un refugiu linistit unde sanatatea si bunastarea sunt prioritare.',
      en: 'Located in the hotel\'s wellness area, the Spa Bar offers refreshing drinks, smoothies, teas, and light snacks, perfect for complementing the relaxation experience. A tranquil retreat where health and well-being are the priority.',
      de: 'Im Wellnessbereich des Hotels gelegen, bietet die Spa-Bar erfrischende Getraenke, Smoothies, Tees und leichte Snacks, perfekt als Ergaenzung zum Entspannungserlebnis. Ein ruhiger Rueckzugsort, an dem Gesundheit und Wohlbefinden im Vordergrund stehen.',
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
      ro: 'Clubul de noapte Arena, cu o capacitate de peste 150 de locuri, este disponibil la cerere pentru evenimente private, petreceri corporate si celebrari speciale. Un spatiu versatil cu sistem de sunet profesional si iluminare de scena.',
      en: 'Arena Nightclub, with a capacity of over 150 seats, is available on demand for private events, corporate parties, and special celebrations. A versatile space with a professional sound system and stage lighting.',
      de: 'Der Nachtclub Arena, mit einer Kapazitaet von ueber 150 Plaetzen, steht auf Anfrage fuer private Veranstaltungen, Firmenpartys und besondere Feiern zur Verfuegung. Ein vielseitiger Raum mit professioneller Tonanlage und Buehnenbeleuchtung.',
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
      de: 'Gehoben laessig',
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
