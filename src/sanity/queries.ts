import { client } from './client'
import type { Locale } from '@/i18n/config'

// Rooms
export async function getAllRooms() {
  return client.fetch(`*[_type == "room"] | order(order asc)`)
}

export async function getRoomBySlug(slug: string, locale: Locale) {
  return client.fetch(
    `*[_type == "room" && slug[$locale].current == $slug][0]`,
    { slug, locale }
  )
}

// Dining
export async function getAllDiningVenues() {
  return client.fetch(`*[_type == "diningVenue"] | order(order asc)`)
}

export async function getDiningVenueBySlug(slug: string, locale: Locale) {
  return client.fetch(
    `*[_type == "diningVenue" && slug[$locale].current == $slug][0]`,
    { slug, locale }
  )
}

// Conference
export async function getAllConferenceRooms() {
  return client.fetch(`*[_type == "conferenceRoom"] | order(order asc)`)
}

export async function getConferenceRoomBySlug(slug: string, locale: Locale) {
  return client.fetch(
    `*[_type == "conferenceRoom" && slug[$locale].current == $slug][0]`,
    { slug, locale }
  )
}

// Spa (singleton)
export async function getSpaPage() {
  return client.fetch(`*[_type == "spaPage"][0]`)
}

// Activities
export async function getActivitiesBySeason(season: string) {
  return client.fetch(
    `*[_type == "activity" && season == $season]`,
    { season }
  )
}

// FAQ
export async function getAllFaqItems() {
  return client.fetch(`*[_type == "faqItem"] | order(order asc)`)
}

// Awards
export async function getAllAwards() {
  return client.fetch(`*[_type == "award"] | order(year desc)`)
}

// Homepage (singleton)
export async function getHomepage() {
  return client.fetch(`*[_type == "homepage"][0]`)
}

// Site Settings (singleton)
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`)
}

// History (singleton)
export async function getHistoryPage() {
  return client.fetch(`*[_type == "historyPage"][0]`)
}

// Video Gallery (singleton)
export async function getVideoGallery() {
  return client.fetch(`*[_type == "videoGallery"][0]`)
}

// Live Camera (singleton)
export async function getLiveCameraPage() {
  return client.fetch(`*[_type == "liveCameraPage"][0]`)
}

// Events
export async function getEvents() {
  return client.fetch(`*[_type == "event"][0]{
    ...,
    venues[]->{name, slug, capacity}
  }`)
}
