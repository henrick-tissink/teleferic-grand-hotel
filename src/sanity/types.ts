import type { PortableTextBlock } from '@portabletext/types'

export interface LocaleString {
  ro?: string
  en?: string
  de?: string
}

export interface LocaleSlug {
  ro?: { current: string }
  en?: { current: string }
  de?: { current: string }
}

export interface LocalePortableText {
  ro?: PortableTextBlock[]
  en?: PortableTextBlock[]
  de?: PortableTextBlock[]
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface Room {
  _id: string
  name: LocaleString
  slug: LocaleSlug
  description: LocalePortableText
  size: number
  capacity: {
    adults: number
    children: number
    maxAdults: number
  }
  bedType: LocaleString
  amenities: LocaleString[]
  gallery: SanityImage[]
  floorPlan?: SanityImage
  order: number
}

export interface DiningVenue {
  _id: string
  name: string
  slug: LocaleSlug
  description: LocalePortableText
  style: LocaleString
  capacity: {
    interior: number
    terrace: number
  }
  hours: string
  dressCode: LocaleString
  menuType: LocaleString
  menuPdf?: { asset: { _ref: string } }
  gallery: SanityImage[]
  order: number
}

export interface ConferenceRoom {
  _id: string
  name: string
  slug: LocaleSlug
  description: LocalePortableText
  capacity: {
    theatre: number
    banquet: number
    classroom: number
    ushape: number
  }
  equipment: LocaleString[]
  eventEquipment: LocaleString[]
  gallery: SanityImage[]
  order: number
}

export interface SpaPage {
  _id: string
  description: LocalePortableText
  facilities: {
    name: LocaleString
    description: LocalePortableText
    image: SanityImage
  }[]
  massageTypes: {
    name: LocaleString
    description: LocalePortableText
  }[]
  hours: string
  contact: {
    phone: string
    email: string
  }
  menuPdfs: {
    title: LocaleString
    file: { asset: { _ref: string } }
  }[]
  gallery: SanityImage[]
}

export interface Activity {
  _id: string
  name: LocaleString
  slug: LocaleSlug
  season: 'winter' | 'summer' | 'year-round'
  description: LocalePortableText
  details: {
    title: LocaleString
    description: LocalePortableText
    image: SanityImage
  }[]
  gallery: SanityImage[]
}

export interface FaqItem {
  _id: string
  question: LocaleString
  answer: LocalePortableText
  category: string
  order: number
}

export interface Award {
  _id: string
  name: string
  title: LocaleString
  year: number
  badge: SanityImage
}

export interface Homepage {
  _id: string
  heroImages: SanityImage[]
  tagline: LocaleString
  sections: {
    type: string
    enabled: boolean
  }[]
}

export interface SiteSettings {
  _id: string
  phone: string
  email: string
  whatsapp: string
  address: LocaleString
  socialLinks: {
    facebook?: string
    instagram?: string
    youtube?: string
    tripadvisor?: string
  }
  appLinks: {
    ios?: string
    android?: string
  }
  discountTiers: {
    percent: number
    label: LocaleString
    description: LocaleString
  }[]
  logo: SanityImage
  logoWhite: SanityImage
}

export interface HistoryPage {
  _id: string
  timeline: {
    year: string
    title: LocaleString
    description: LocalePortableText
    image: SanityImage
  }[]
}

export interface VideoGallery {
  _id: string
  categories: {
    name: LocaleString
    videos: {
      youtubeId: string
      title: LocaleString
    }[]
  }[]
}

export interface LiveCameraPage {
  _id: string
  youtubeId: string
  description: LocalePortableText
}
