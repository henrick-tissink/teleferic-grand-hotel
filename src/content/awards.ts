import type { Locale } from '@/i18n/config'

export interface AwardData {
  id: string
  name: string
  title: Record<Locale, string>
  year: number
  image: string
}

export const awards: AwardData[] = [
  {
    id: 'wta-2023',
    name: 'World Travel Awards',
    title: { ro: 'Hotelul Lider din România', en: "Romania's Leading Hotel", de: 'Führendes Hotel Rumäniens' },
    year: 2023,
    image: '/images/awards/world-travel-2023.png',
  },
  {
    id: 'ski-2023',
    name: 'World Travel Awards',
    title: { ro: 'Cel Mai Bun Hotel de Schi din România', en: "Romania's Best Ski Hotel", de: 'Bestes Skihotel Rumäniens' },
    year: 2023,
    image: '/images/awards/best-ski-hotel-2023.png',
  },
  {
    id: 'top-2023',
    name: 'Top Hotel Award',
    title: { ro: 'Top Hotel Award', en: 'Top Hotel Award', de: 'Top Hotel Award' },
    year: 2023,
    image: '/images/awards/top-hotel-2023.png',
  },
  {
    id: 'wta-2022',
    name: 'World Travel Awards',
    title: { ro: 'Hotelul Lider din România', en: "Romania's Leading Hotel", de: 'Führendes Hotel Rumäniens' },
    year: 2022,
    image: '/images/awards/world-travel-2022.png',
  },
  {
    id: 'ski-2022',
    name: 'World Travel Awards',
    title: { ro: 'Cel Mai Bun Hotel de Schi din România', en: "Romania's Best Ski Hotel", de: 'Bestes Skihotel Rumäniens' },
    year: 2022,
    image: '/images/awards/best-ski-hotel-2022.png',
  },
  {
    id: 'top-business-2022',
    name: 'Top Hotel Business',
    title: { ro: 'Top Hotel Business', en: 'Top Hotel Business', de: 'Top Hotel Business' },
    year: 2022,
    image: '/images/awards/top-hotel-business-2022.png',
  },
  {
    id: 'top-award-2022',
    name: 'Top Award',
    title: { ro: 'Top Award', en: 'Top Award', de: 'Top Award' },
    year: 2022,
    image: '/images/awards/top-award-2022.png',
  },
  {
    id: 'wta-2021',
    name: 'World Travel Awards',
    title: { ro: 'Hotelul Lider din România', en: "Romania's Leading Hotel", de: 'Führendes Hotel Rumäniens' },
    year: 2021,
    image: '/images/awards/world-travel-2021.png',
  },
  {
    id: 'top-business-2020',
    name: 'Top Hotel Business',
    title: { ro: 'Top Hotel Business', en: 'Top Hotel Business', de: 'Top Hotel Business' },
    year: 2020,
    image: '/images/awards/top-hotel-business-2020.png',
  },
  {
    id: 'hospitality-2020',
    name: 'Romanian Hospitality Hotel',
    title: { ro: 'Hotel Ospitalitate Românească', en: 'Romanian Hospitality Hotel', de: 'Rumänisches Gastfreundschaftshotel' },
    year: 2020,
    image: '/images/awards/romanian-hospitality-2020.png',
  },
  {
    id: 'top-2019',
    name: 'TopHotel Awards',
    title: { ro: 'TopHotel Award', en: 'TopHotel Award', de: 'TopHotel Award' },
    year: 2019,
    image: '/images/awards/tophotel-2019.png',
  },
  {
    id: 'kiev-2019',
    name: 'International Hospitality Awards',
    title: { ro: 'Premiul Internațional de Ospitalitate', en: 'International Hospitality Award', de: 'Internationaler Gastfreundschaftspreis' },
    year: 2019,
    image: '/images/awards/intl-hospitality-2019.png',
  },
  {
    id: 'hospitality-2019',
    name: 'Romanian Hospitality Hotel',
    title: { ro: 'Hotel Ospitalitate Românească', en: 'Romanian Hospitality Hotel', de: 'Rumänisches Gastfreundschaftshotel' },
    year: 2019,
    image: '/images/awards/romanian-hospitality-2019.png',
  },
  {
    id: 'top-2018',
    name: 'TopHotel Awards',
    title: { ro: 'TopHotel Award', en: 'TopHotel Award', de: 'TopHotel Award' },
    year: 2018,
    image: '/images/awards/tophotel-2018.png',
  },
  {
    id: 'top-2017',
    name: 'TopHotel Awards',
    title: { ro: 'TopHotel Award', en: 'TopHotel Award', de: 'TopHotel Award' },
    year: 2017,
    image: '/images/awards/tophotel-2017.png',
  },
  {
    id: 'kiev-2017',
    name: 'International Hospitality Awards',
    title: { ro: 'Premiul Internațional de Ospitalitate', en: 'International Hospitality Award', de: 'Internationaler Gastfreundschaftspreis' },
    year: 2017,
    image: '/images/awards/intl-hospitality-2017.png',
  },
  {
    id: 'top-2016',
    name: 'TopHotel Awards',
    title: { ro: 'TopHotel Award', en: 'TopHotel Award', de: 'TopHotel Award' },
    year: 2016,
    image: '/images/awards/tophotel-2016.png',
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001',
    title: { ro: 'Management al Calității', en: 'Quality Management', de: 'Qualitätsmanagement' },
    year: 2020,
    image: '/images/awards/tuv-9001.png',
  },
  {
    id: 'iso-22000',
    name: 'ISO 22000',
    title: { ro: 'Siguranță Alimentară', en: 'Food Safety Management', de: 'Lebensmittelsicherheitsmanagement' },
    year: 2020,
    image: '/images/awards/tuv-22000.png',
  },
]
