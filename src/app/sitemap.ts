import type { MetadataRoute } from 'next'
import { locales, type Locale } from '@/i18n/config'
import { rooms } from '@/content/rooms'
import { diningVenues } from '@/content/dining'
import { conferenceRooms } from '@/content/conference'

const BASE_URL = 'https://telefericgrandhotel.ro'

const pathMap: Record<string, Record<Locale, string>> = {
  '/': { ro: '/', en: '/', de: '/' },
  '/rooms': { ro: '/camere', en: '/rooms', de: '/zimmer' },
  '/dining': { ro: '/restaurante', en: '/dining', de: '/gastronomie' },
  '/spa': { ro: '/spa', en: '/spa', de: '/spa' },
  '/conference': { ro: '/conferinte', en: '/conference', de: '/konferenzen' },
  '/events': { ro: '/evenimente', en: '/events', de: '/veranstaltungen' },
  '/activities': { ro: '/activitati', en: '/activities', de: '/aktivitaeten' },
  '/activities/winter': { ro: '/activitati/iarna', en: '/activities/winter', de: '/aktivitaeten/winter' },
  '/activities/summer': { ro: '/activitati/vara', en: '/activities/summer', de: '/aktivitaeten/sommer' },
  '/activities/kids': { ro: '/activitati/copii', en: '/activities/kids', de: '/aktivitaeten/kinder' },
  '/facilities': { ro: '/facilitati', en: '/facilities', de: '/einrichtungen' },
  '/gallery': { ro: '/galerie', en: '/gallery', de: '/galerie' },
  '/live-camera': { ro: '/camera-live', en: '/live-camera', de: '/live-kamera' },
  '/awards': { ro: '/premii', en: '/awards', de: '/auszeichnungen' },
  '/history': { ro: '/istoric', en: '/history', de: '/geschichte' },
  '/contact': { ro: '/contact', en: '/contact', de: '/kontakt' },
  '/faq': { ro: '/intrebari-frecvente', en: '/faq', de: '/haeufige-fragen' },
  '/offers': { ro: '/oferte', en: '/offers', de: '/angebote' },
  '/booking': { ro: '/rezervare', en: '/booking', de: '/buchung' },
}

function makeEntry(
  localePaths: Record<Locale, string>,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly',
): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[locale] = `${BASE_URL}/${locale}${localePaths[locale]}`
  }
  languages['x-default'] = `${BASE_URL}/ro${localePaths.ro}`

  return {
    url: `${BASE_URL}/ro${localePaths.ro}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  for (const [, paths] of Object.entries(pathMap)) {
    const isHome = paths.ro === '/'
    entries.push(makeEntry(paths, isHome ? 1.0 : 0.8))
  }

  // Room detail pages
  for (const room of rooms) {
    const localePaths: Record<Locale, string> = {
      ro: `/camere/${room.slug.ro}`,
      en: `/rooms/${room.slug.en}`,
      de: `/zimmer/${room.slug.de}`,
    }
    entries.push(makeEntry(localePaths, 0.7))
  }

  // Dining detail pages
  for (const venue of diningVenues) {
    const localePaths: Record<Locale, string> = {
      ro: `/restaurante/${venue.slug.ro}`,
      en: `/dining/${venue.slug.en}`,
      de: `/gastronomie/${venue.slug.de}`,
    }
    entries.push(makeEntry(localePaths, 0.7))
  }

  // Conference room detail pages
  for (const room of conferenceRooms) {
    const localePaths: Record<Locale, string> = {
      ro: `/conferinte/${room.slug.ro}`,
      en: `/conference/${room.slug.en}`,
      de: `/konferenzen/${room.slug.de}`,
    }
    entries.push(makeEntry(localePaths, 0.6))
  }

  return entries
}
