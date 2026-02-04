import type { Locale } from '@/i18n/config'
import type { LocaleString, LocalePortableText } from '@/sanity/types'

/**
 * Get localized value from a LocaleString object
 */
export function t(obj: LocaleString | undefined | null, locale: Locale): string {
  if (!obj) return ''
  return obj[locale] || obj.ro || ''
}

/**
 * Get localized portable text from a LocalePortableText object
 */
export function tPortableText(obj: LocalePortableText | undefined | null, locale: Locale) {
  if (!obj) return []
  return obj[locale] || obj.ro || []
}

/**
 * Get localized slug
 */
export function tSlug(
  obj: { ro?: { current: string }; en?: { current: string }; de?: { current: string } } | undefined | null,
  locale: Locale
): string {
  if (!obj) return ''
  return obj[locale]?.current || obj.ro?.current || ''
}

/**
 * Combine class names (simple cn utility)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
