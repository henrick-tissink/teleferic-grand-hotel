import type { Locale } from '@/i18n/config'

export interface FaqData {
  id: string
  question: Record<Locale, string>
  answer: Record<Locale, string>
  category: string
  order: number
}

export const faqItems: FaqData[] = [
  {
    id: 'pets',
    question: {
      ro: 'Sunt acceptate animalele de companie?',
      en: 'Are pets allowed?',
      de: 'Sind Haustiere erlaubt?',
    },
    answer: {
      ro: 'Din păcate, animalele de companie nu sunt permise în interiorul hotelului.',
      en: 'Unfortunately, pets are not allowed inside the hotel.',
      de: 'Leider sind Haustiere im Hotel nicht erlaubt.',
    },
    category: 'general',
    order: 1,
  },
  {
    id: 'accessibility',
    question: {
      ro: 'Există camere accesibile?',
      en: 'Are there accessible rooms?',
      de: 'Gibt es barrierefreie Zimmer?',
    },
    answer: {
      ro: 'Da, dispunem de 2 camere special echipate cu paturi electrice.',
      en: 'Yes, we have 2 specially equipped rooms with electric beds.',
      de: 'Ja, wir haben 2 speziell ausgestattete Zimmer mit elektrischen Betten.',
    },
    category: 'rooms',
    order: 2,
  },
  {
    id: 'breakfast',
    question: {
      ro: 'Ce include micul dejun?',
      en: 'What does breakfast include?',
      de: 'Was beinhaltet das Frühstück?',
    },
    answer: {
      ro: 'Micul dejun este servit între 07:00-10:30 la restaurantul 4 Anotimpuri și este inclus în tariful camerei. Pentru non-rezidenți: 199 lei adulți, 99.5 lei copii, gratuit sub 6 ani.',
      en: 'Breakfast is served from 07:00-10:30 at the 4 Anotimpuri restaurant and is included in the room rate. For non-guests: 199 lei adults, 99.5 lei children, free under 6.',
      de: 'Das Frühstück wird von 07:00-10:30 Uhr im Restaurant 4 Anotimpuri serviert und ist im Zimmerpreis enthalten. Für Nicht-Hotelgäste: 199 Lei Erwachsene, 99,5 Lei Kinder, kostenlos unter 6.',
    },
    category: 'dining',
    order: 3,
  },
  {
    id: 'checkin',
    question: {
      ro: 'Care sunt orele de check-in și check-out?',
      en: 'What are the check-in and check-out times?',
      de: 'Was sind die Check-in- und Check-out-Zeiten?',
    },
    answer: {
      ro: 'Check-in: 16:00 | Check-out: 12:00',
      en: 'Check-in: 4:00 PM | Check-out: 12:00 PM',
      de: 'Check-in: 16:00 Uhr | Check-out: 12:00 Uhr',
    },
    category: 'general',
    order: 4,
  },
  {
    id: 'smoking',
    question: {
      ro: 'Se poate fuma în hotel?',
      en: 'Is smoking allowed in the hotel?',
      de: 'Ist Rauchen im Hotel erlaubt?',
    },
    answer: {
      ro: 'Toate camerele sunt nefumătoare. Fumatul este permis pe balcoane.',
      en: 'All rooms are non-smoking. Smoking is permitted on balconies.',
      de: 'Alle Zimmer sind Nichtraucherzimmer. Rauchen ist auf Balkonen gestattet.',
    },
    category: 'rooms',
    order: 5,
  },
  {
    id: 'wifi',
    question: {
      ro: 'Există WiFi gratuit?',
      en: 'Is there free WiFi?',
      de: 'Gibt es kostenloses WLAN?',
    },
    answer: {
      ro: 'Da, WiFi gratuit în tot hotelul.',
      en: 'Yes, free WiFi throughout the hotel.',
      de: 'Ja, kostenloses WLAN im gesamten Hotel.',
    },
    category: 'facilities',
    order: 6,
  },
  {
    id: 'extra-beds',
    question: {
      ro: 'Sunt disponibile paturi suplimentare?',
      en: 'Are extra beds available?',
      de: 'Sind Zusatzbetten verfügbar?',
    },
    answer: {
      ro: 'Nu, nu sunt disponibile paturi suplimentare.',
      en: 'No, extra beds are not available.',
      de: 'Nein, Zusatzbetten sind nicht verfügbar.',
    },
    category: 'rooms',
    order: 7,
  },
  {
    id: 'parking',
    question: {
      ro: 'Există parcare?',
      en: 'Is there parking?',
      de: 'Gibt es Parkplätze?',
    },
    answer: {
      ro: 'Da, parcare gratuită în exterior.',
      en: 'Yes, free outdoor parking.',
      de: 'Ja, kostenlose Außenparkplätze.',
    },
    category: 'facilities',
    order: 8,
  },
  {
    id: 'ev-charging',
    question: {
      ro: 'Există stații de încărcare pentru mașini electrice?',
      en: 'Are there EV charging stations?',
      de: 'Gibt es Ladestationen für Elektrofahrzeuge?',
    },
    answer: {
      ro: '3 stații de încărcare de 21kW (cu plată, prin Plugpoint: 0744 518 024).',
      en: '3 x 21kW charging stations (paid, via Plugpoint: 0744 518 024).',
      de: '3 x 21kW Ladestationen (kostenpflichtig, über Plugpoint: 0744 518 024).',
    },
    category: 'facilities',
    order: 9,
  },
  {
    id: 'visa',
    question: {
      ro: 'Oferiți confirmări pentru viză?',
      en: 'Do you provide visa confirmations?',
      de: 'Stellen Sie Visumsbestätigungen aus?',
    },
    answer: {
      ro: 'Da, hotelul oferă confirmări de rezervare pentru aplicații de viză.',
      en: 'Yes, the hotel provides reservation confirmations for visa applications.',
      de: 'Ja, das Hotel stellt Reservierungsbestätigungen für Visumanträge aus.',
    },
    category: 'general',
    order: 10,
  },
  {
    id: 'rates',
    question: {
      ro: 'Tarifele sunt per cameră sau per persoană?',
      en: 'Are rates per room or per person?',
      de: 'Gelten die Preise pro Zimmer oder pro Person?',
    },
    answer: {
      ro: 'Tarifele sunt per cameră, nu per persoană.',
      en: 'Rates are per room, not per person.',
      de: 'Die Preise gelten pro Zimmer, nicht pro Person.',
    },
    category: 'general',
    order: 11,
  },
  {
    id: 'languages',
    question: {
      ro: 'Ce limbi vorbește personalul?',
      en: 'What languages does the staff speak?',
      de: 'Welche Sprachen spricht das Personal?',
    },
    answer: {
      ro: 'Personalul vorbește română și engleză.',
      en: 'Staff speaks Romanian and English.',
      de: 'Das Personal spricht Rumänisch und Englisch.',
    },
    category: 'general',
    order: 12,
  },
  {
    id: 'building',
    question: {
      ro: 'Cum este structurat hotelul?',
      en: 'How is the hotel structured?',
      de: 'Wie ist das Hotel aufgebaut?',
    },
    answer: {
      ro: '2 clădiri, 4 etaje fiecare, 3 lifturi + 2 lifturi lobby.',
      en: '2 buildings, 4 floors each, 3 elevators + 2 lobby elevators.',
      de: '2 Gebäude, je 4 Stockwerke, 3 Aufzüge + 2 Lobby-Aufzüge.',
    },
    category: 'general',
    order: 13,
  },
  {
    id: 'dietary',
    question: {
      ro: 'Sunt disponibile opțiuni dietetice speciale?',
      en: 'Are special dietary options available?',
      de: 'Gibt es spezielle Ernährungsoptionen?',
    },
    answer: {
      ro: 'Da, oferim opțiuni fără gluten, pentru diabetici și vegetariene.',
      en: 'Yes, we offer gluten-free, diabetic and vegetarian options.',
      de: 'Ja, wir bieten glutenfreie, diabetische und vegetarische Optionen an.',
    },
    category: 'dining',
    order: 14,
  },
  {
    id: 'balcony',
    question: {
      ro: 'Toate camerele au balcon?',
      en: 'Do all rooms have balconies?',
      de: 'Haben alle Zimmer einen Balkon?',
    },
    answer: {
      ro: 'Nu, unele camere au balcon, altele nu. Vă rugăm să specificați preferința la rezervare.',
      en: 'No, some rooms have balconies, some do not. Please specify your preference when booking.',
      de: 'Nein, einige Zimmer haben Balkone, andere nicht. Bitte geben Sie Ihre Präferenz bei der Buchung an.',
    },
    category: 'rooms',
    order: 15,
  },
  {
    id: 'ac',
    question: {
      ro: 'Camerele au aer condiționat?',
      en: 'Do rooms have air conditioning?',
      de: 'Haben die Zimmer eine Klimaanlage?',
    },
    answer: {
      ro: 'Da, aer condiționat gratuit în toate camerele.',
      en: 'Yes, free air conditioning in all rooms.',
      de: 'Ja, kostenlose Klimaanlage in allen Zimmern.',
    },
    category: 'rooms',
    order: 16,
  },
  {
    id: 'spa-available',
    question: {
      ro: 'Hotelul are spa?',
      en: 'Does the hotel have a spa?',
      de: 'Hat das Hotel einen Spa-Bereich?',
    },
    answer: {
      ro: 'Da, centru spa complet cu piscină, jacuzzi, saune, cameră de sare și tratamente de masaj.',
      en: 'Yes, full spa center with swimming pool, jacuzzi, saunas, salt room and massage treatments.',
      de: 'Ja, vollständiges Spa-Zentrum mit Schwimmbad, Whirlpool, Saunen, Salzraum und Massagebehandlungen.',
    },
    category: 'spa',
    order: 17,
  },
  {
    id: 'massage-booking',
    question: {
      ro: 'Cum pot rezerva un masaj?',
      en: 'How can I book a massage?',
      de: 'Wie kann ich eine Massage buchen?',
    },
    answer: {
      ro: 'Prin website sau email la spa@telefericgrandhotel.ro.',
      en: 'Via website or email at spa@telefericgrandhotel.ro.',
      de: 'Über die Website oder per E-Mail an spa@telefericgrandhotel.ro.',
    },
    category: 'spa',
    order: 18,
  },
  {
    id: 'conference-halls',
    question: {
      ro: 'Câte săli de conferințe are hotelul?',
      en: 'How many conference halls does the hotel have?',
      de: 'Wie viele Konferenzräume hat das Hotel?',
    },
    answer: {
      ro: '5 săli de conferințe cu capacități diverse.',
      en: '5 conference halls with various capacities.',
      de: '5 Konferenzräume mit verschiedenen Kapazitäten.',
    },
    category: 'facilities',
    order: 19,
  },
  {
    id: 'early-late',
    question: {
      ro: 'Sunt posibile check-in devreme sau check-out târziu?',
      en: 'Are early check-in or late check-out possible?',
      de: 'Ist ein früher Check-in oder später Check-out möglich?',
    },
    answer: {
      ro: 'Da, în funcție de disponibilitate, cu supliment.',
      en: 'Yes, subject to availability, with an extra charge.',
      de: 'Ja, je nach Verfügbarkeit, gegen Aufpreis.',
    },
    category: 'general',
    order: 20,
  },
]
