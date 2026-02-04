export const locales = ['ro', 'en', 'de'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'ro'

export const localeNames: Record<Locale, string> = {
  ro: 'Română',
  en: 'English',
  de: 'Deutsch',
}

export const localeFlags: Record<Locale, string> = {
  ro: '🇷🇴',
  en: '🇬🇧',
  de: '🇩🇪',
}

// Maps internal route segments to localized slugs
export const pathnames = {
  '/': '/',
  '/rooms': {
    ro: '/camere',
    en: '/rooms',
    de: '/zimmer',
  },
  '/rooms/[slug]': {
    ro: '/camere/[slug]',
    en: '/rooms/[slug]',
    de: '/zimmer/[slug]',
  },
  '/dining': {
    ro: '/restaurante',
    en: '/dining',
    de: '/gastronomie',
  },
  '/dining/[slug]': {
    ro: '/restaurante/[slug]',
    en: '/dining/[slug]',
    de: '/gastronomie/[slug]',
  },
  '/spa': {
    ro: '/spa',
    en: '/spa',
    de: '/spa',
  },
  '/conference': {
    ro: '/conferinte',
    en: '/conference',
    de: '/konferenzen',
  },
  '/conference/[slug]': {
    ro: '/conferinte/[slug]',
    en: '/conference/[slug]',
    de: '/konferenzen/[slug]',
  },
  '/events': {
    ro: '/evenimente',
    en: '/events',
    de: '/veranstaltungen',
  },
  '/activities': {
    ro: '/activitati',
    en: '/activities',
    de: '/aktivitaeten',
  },
  '/activities/winter': {
    ro: '/activitati/iarna',
    en: '/activities/winter',
    de: '/aktivitaeten/winter',
  },
  '/activities/summer': {
    ro: '/activitati/vara',
    en: '/activities/summer',
    de: '/aktivitaeten/sommer',
  },
  '/activities/kids': {
    ro: '/activitati/copii',
    en: '/activities/kids',
    de: '/aktivitaeten/kinder',
  },
  '/facilities': {
    ro: '/facilitati',
    en: '/facilities',
    de: '/einrichtungen',
  },
  '/gallery': {
    ro: '/galerie',
    en: '/gallery',
    de: '/galerie',
  },
  '/live-camera': {
    ro: '/camera-live',
    en: '/live-camera',
    de: '/live-kamera',
  },
  '/awards': {
    ro: '/premii',
    en: '/awards',
    de: '/auszeichnungen',
  },
  '/history': {
    ro: '/istoric',
    en: '/history',
    de: '/geschichte',
  },
  '/contact': {
    ro: '/contact',
    en: '/contact',
    de: '/kontakt',
  },
  '/faq': {
    ro: '/intrebari-frecvente',
    en: '/faq',
    de: '/haeufige-fragen',
  },
  '/offers': {
    ro: '/oferte',
    en: '/offers',
    de: '/angebote',
  },
  '/booking': {
    ro: '/rezervare',
    en: '/booking',
    de: '/buchung',
  },
} as const

export type PathnameKey = keyof typeof pathnames
