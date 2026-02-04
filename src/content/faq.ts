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
      ro: 'Animalele de companie nu sunt permise în hotel. Vă mulțumim pentru înțelegere.',
      en: 'Pets are not permitted inside the hotel. We appreciate your understanding.',
      de: 'Haustiere sind im Hotel nicht gestattet. Wir danken Ihnen für Ihr Verständnis.',
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
      ro: 'Da, dispunem de două camere accesibile, special echipate cu paturi electrice. Vă rugăm să ne contactați în prealabil pentru a ne asigura că totul este pregătit pentru sosirea dumneavoastră.',
      en: 'Yes, we have two specially equipped accessible rooms with electric beds. Please contact us in advance so we can ensure everything is prepared for your arrival.',
      de: 'Ja, wir verfügen über zwei speziell ausgestattete barrierefreie Zimmer mit elektrischen Betten. Bitte kontaktieren Sie uns im Voraus, damit wir alles für Ihre Ankunft vorbereiten können.',
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
      ro: 'Un bufet complet de mic dejun este servit zilnic între 07:00 și 10:30 la Restaurantul 4 Anotimpuri, inclus în tariful camerei. Non-rezidenții sunt bineveniți: 199 lei per adult, 99,50 lei per copil, gratuit sub 6 ani.',
      en: 'A full breakfast buffet is served daily from 07:00 to 10:30 at Restaurant 4 Anotimpuri, included in your room rate. Non-residents are welcome: 199 lei per adult, 99.50 lei per child, complimentary under 6.',
      de: 'Ein reichhaltiges Frühstücksbuffet wird täglich von 07:00 bis 10:30 Uhr im Restaurant 4 Anotimpuri serviert, im Zimmerpreis inbegriffen. Externe Gäste sind willkommen: 199 Lei pro Erwachsener, 99,50 Lei pro Kind, kostenfrei unter 6 Jahren.',
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
      ro: 'Check-in de la 16:00 | Check-out până la 12:00',
      en: 'Check-in from 4:00 PM | Check-out by 12:00 PM',
      de: 'Check-in ab 16:00 Uhr | Check-out bis 12:00 Uhr',
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
      ro: 'Toate camerele sunt nefumătoare. Fumatul este permis doar pe balcoanele private.',
      en: 'All rooms are non-smoking. Smoking is permitted on private balconies only.',
      de: 'Alle Zimmer sind Nichtraucherzimmer. Rauchen ist ausschließlich auf den privaten Balkonen gestattet.',
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
      ro: 'Paturi suplimentare nu sunt disponibile. Mai multe tipuri de camere includ canapele extensibile — consultați descrierile camerelor pentru detalii.',
      en: 'Extra beds are not available. Several room types include sofa beds — see our room descriptions for details.',
      de: 'Zusatzbetten sind nicht verfügbar. Mehrere Zimmertypen verfügen über Schlafsofas — siehe unsere Zimmerbeschreibungen für Details.',
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
      ro: 'Parcare exterioară gratuită, disponibilă pentru toți oaspeții.',
      en: 'Complimentary outdoor parking is available for all guests.',
      de: 'Kostenfreie Außenparkplätze stehen allen Gästen zur Verfügung.',
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
      ro: 'Trei stații de încărcare EV de 21 kW sunt disponibile pe loc. Încărcarea se face prin Plugpoint (0744 518 024).',
      en: 'Three 21 kW EV charging stations are available on site. Charging is managed through Plugpoint (0744 518 024).',
      de: 'Drei 21-kW-Ladestationen für Elektrofahrzeuge stehen vor Ort zur Verfügung. Die Abrechnung erfolgt über Plugpoint (0744 518 024).',
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
      ro: 'Da, oferim cu plăcere confirmări de rezervare pentru aplicații de viză. Trimiteți-ne cerințele dumneavoastră pe email.',
      en: 'Yes, we are happy to provide reservation confirmations for visa applications. Please email us your requirements.',
      de: 'Ja, wir stellen gerne Reservierungsbestätigungen für Visumanträge aus. Bitte senden Sie uns Ihre Anforderungen per E-Mail.',
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
      ro: 'Toate tarifele sunt pe cameră, pe noapte — nu pe persoană.',
      en: 'All rates are quoted per room, per night — not per person.',
      de: 'Alle Preise verstehen sich pro Zimmer und Nacht — nicht pro Person.',
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
      ro: 'Echipa noastră vorbește română și engleză.',
      en: 'Our team speaks Romanian and English.',
      de: 'Unser Team spricht Rumänisch und Englisch.',
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
      ro: 'Două clădiri, patru etaje fiecare, deservite de cinci lifturi (trei în aripe, două în lobby).',
      en: 'Two buildings, four floors each, served by five lifts (three in the wings, two in the lobby).',
      de: 'Zwei Gebäude, je vier Stockwerke, erschlossen durch fünf Aufzüge (drei in den Flügeln, zwei in der Lobby).',
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
      ro: 'Opțiuni fără gluten, prietenoase pentru diabetici și vegetariene sunt disponibile. Vă rugăm să ne comunicați cerințele alimentare la rezervare.',
      en: 'Gluten-free, diabetic-friendly, and vegetarian options are available. Please let us know your dietary requirements when booking.',
      de: 'Glutenfreie, diabetikerfreundliche und vegetarische Optionen sind verfügbar. Bitte teilen Sie uns Ihre Ernährungsanforderungen bei der Buchung mit.',
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
      ro: 'Nu toate camerele au balcon. Vă rugăm să ne comunicați preferința la rezervare și vom face tot posibilul să vă îndeplinim dorința.',
      en: 'Not all rooms include a balcony. Please let us know your preference when booking and we will do our best to accommodate you.',
      de: 'Nicht alle Zimmer verfügen über einen Balkon. Bitte teilen Sie uns Ihre Präferenz bei der Buchung mit, und wir werden unser Bestes tun, Ihren Wunsch zu erfüllen.',
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
      ro: 'Centrul nostru spa include piscină interioară, jacuzzi, saune, cameră de sare și o gamă completă de tratamente de masaj și wellness.',
      en: 'Our spa features an indoor pool, jacuzzi, saunas, salt room, and a full menu of massage and wellness treatments.',
      de: 'Unser Spa bietet einen Innenpool, Whirlpool, Saunen, Salzraum und eine umfassende Auswahl an Massage- und Wellnessbehandlungen.',
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
      ro: 'Puteți rezerva tratamente prin intermediul site-ului nostru sau pe email la spa@telefericgrandhotel.ro.',
      en: 'You can book treatments through our website or by emailing spa@telefericgrandhotel.ro.',
      de: 'Sie können Behandlungen über unsere Website oder per E-Mail an spa@telefericgrandhotel.ro buchen.',
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
      ro: 'Cinci săli de conferințe și evenimente cu configurații flexibile pentru grupuri de toate dimensiunile.',
      en: 'Five conference and event rooms with flexible configurations for groups of all sizes.',
      de: 'Fünf Konferenz- und Veranstaltungsräume mit flexiblen Konfigurationen für Gruppen jeder Größe.',
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
      ro: 'Da, în funcție de disponibilitate. Se poate aplica un supliment — vă rugăm să contactați recepția pentru a aranja.',
      en: 'Yes, subject to availability. A supplement may apply — please contact reception to arrange.',
      de: 'Ja, je nach Verfügbarkeit. Ein Zuschlag kann anfallen — bitte wenden Sie sich an die Rezeption.',
    },
    category: 'general',
    order: 20,
  },
]
