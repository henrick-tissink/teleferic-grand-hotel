import type { Locale } from '@/i18n/config'

export interface VideoCategory {
  name: Record<Locale, string>
  videos: {
    youtubeId: string
    title: Record<Locale, string>
  }[]
}

export const videoCategories: VideoCategory[] = [
  {
    name: { ro: 'Promovare Hotel', en: 'Hotel Promo', de: 'Hotelpromotion' },
    videos: [
      { youtubeId: 'SfXSuTTgEKQ', title: { ro: 'Cel Mai Bun Hotel de Schi din România', en: "Romania's Best Ski Hotel", de: 'Bestes Skihotel Rumäniens' } },
      { youtubeId: 'M09cy1WrFDU', title: { ro: 'Teleferic Grand Hotel Promo', en: 'Teleferic Grand Hotel Promo', de: 'Teleferic Grand Hotel Promo' } },
      { youtubeId: 'auXgn67CEhY', title: { ro: 'Descoperă Teleferic', en: 'Discover Teleferic', de: 'Entdecke Teleferic' } },
      { youtubeId: 'Scjs3a8a7f4', title: { ro: 'Experiența Teleferic', en: 'The Teleferic Experience', de: 'Das Teleferic-Erlebnis' } },
      { youtubeId: '85B6V33n-oI', title: { ro: 'Vara la Teleferic', en: 'Summer at Teleferic', de: 'Sommer im Teleferic' } },
      { youtubeId: 'vUEhXcKXKGA', title: { ro: 'Iarna la Teleferic', en: 'Winter at Teleferic', de: 'Winter im Teleferic' } },
      { youtubeId: 'ZRUc63rs_ps', title: { ro: 'Prezentare Hotel', en: 'Hotel Presentation', de: 'Hotelpräsentation' } },
    ],
  },
  {
    name: { ro: 'Evenimente & Nunți', en: 'Events & Weddings', de: 'Events & Hochzeiten' },
    videos: [
      { youtubeId: 'hN_WFDuDo54', title: { ro: 'Nunți la Teleferic', en: 'Weddings at Teleferic', de: 'Hochzeiten im Teleferic' } },
      { youtubeId: 'UL-5BkQhj0g', title: { ro: 'Eveniment Special', en: 'Special Event', de: 'Sonderveranstaltung' } },
      { youtubeId: '9NSsBeEmtQc', title: { ro: 'Gala de Nuntă', en: 'Wedding Gala', de: 'Hochzeitsgala' } },
      { youtubeId: '_z8pePMW2c4', title: { ro: 'Ceremonie', en: 'Ceremony', de: 'Zeremonie' } },
      { youtubeId: '0pRjm5EeIss', title: { ro: 'Recepție Nuntă', en: 'Wedding Reception', de: 'Hochzeitsempfang' } },
      { youtubeId: 'ny7ZACQD-4M', title: { ro: 'Eveniment Corporate', en: 'Corporate Event', de: 'Firmenveranstaltung' } },
      { youtubeId: 'T4B46rDa5WY', title: { ro: 'Petrecere Privată', en: 'Private Party', de: 'Private Party' } },
      { youtubeId: 'XJrEPPpw4gQ', title: { ro: 'Revelion', en: 'New Year Eve', de: 'Silvester' } },
      { youtubeId: 'ZentRNom_Sw', title: { ro: 'Botez', en: 'Christening', de: 'Taufe' } },
      { youtubeId: '1gFmmwWs2t0', title: { ro: 'Aniversare', en: 'Anniversary', de: 'Jubiläum' } },
    ],
  },
  {
    name: { ro: 'Teleferic Challenge / Ciclism', en: 'Teleferic Challenge / Cycling', de: 'Teleferic Challenge / Radfahren' },
    videos: [
      { youtubeId: '0IFsmHMOWrw', title: { ro: 'Teleferic Challenge 2023', en: 'Teleferic Challenge 2023', de: 'Teleferic Challenge 2023' } },
      { youtubeId: 'oZRrSczh0aM', title: { ro: 'Teleferic Challenge 2022', en: 'Teleferic Challenge 2022', de: 'Teleferic Challenge 2022' } },
      { youtubeId: '1N_BJGRk4JY', title: { ro: 'Ciclism în Poiana Brașov', en: 'Cycling in Poiana Brașov', de: 'Radfahren in Poiana Brașov' } },
      { youtubeId: 'g6Eb294hAk4', title: { ro: 'Mountain Bike', en: 'Mountain Bike', de: 'Mountainbike' } },
      { youtubeId: '0wjOFTMw2pU', title: { ro: 'Traseu Montan', en: 'Mountain Trail', de: 'Bergpfad' } },
      { youtubeId: 'UfsNzpfVY10', title: { ro: 'Bike Park', en: 'Bike Park', de: 'Bike Park' } },
      { youtubeId: 'J_-WXoG55uE', title: { ro: 'Cycling Event', en: 'Cycling Event', de: 'Radevent' } },
    ],
  },
  {
    name: { ro: 'Cupa Teleferic / Schi', en: 'Teleferic Cup / Ski', de: 'Teleferic Cup / Ski' },
    videos: [
      { youtubeId: '1n8x9W2-VMQ', title: { ro: 'Cupa Teleferic 2023', en: 'Teleferic Cup 2023', de: 'Teleferic Cup 2023' } },
      { youtubeId: 'zOH3M8W_FUY', title: { ro: 'Cupa Teleferic 2022', en: 'Teleferic Cup 2022', de: 'Teleferic Cup 2022' } },
      { youtubeId: '1xFnr8ojtbo', title: { ro: 'Competiție Schi', en: 'Ski Competition', de: 'Skiwettbewerb' } },
      { youtubeId: '0lWCc9zqVSs', title: { ro: 'Schi la Teleferic', en: 'Skiing at Teleferic', de: 'Skifahren im Teleferic' } },
      { youtubeId: 'oNdKVmMNn8k', title: { ro: 'Pârtia Teleferic', en: 'Teleferic Slope', de: 'Teleferic Piste' } },
    ],
  },
  {
    name: { ro: 'Altele', en: 'Other', de: 'Sonstiges' },
    videos: [
      { youtubeId: '9sC_yV1R3P0', title: { ro: 'Video Special', en: 'Special Video', de: 'Sondervideo' } },
    ],
  },
]

export const liveCameraYoutubeId = 'kEIFOfvNF4I'
