'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { locales, localeNames, type Locale } from '@/i18n/config'

const flags: Record<string, string> = { ro: '🇷🇴', en: '🇬🇧', de: '🇩🇪' }

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('common')

  function onChange(newLocale: Locale) {
    // pathname from usePathname() returns a union of all localized pathnames;
    // router.replace expects a specific pathname, so we need to cast here
    router.replace(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { pathname } as any,
      { locale: newLocale }
    )
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          aria-current={l === locale ? 'true' : undefined}
          aria-label={t('switchToLanguage', { language: localeNames[l] })}
          className={`px-2 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
            l === locale
              ? 'text-gold border-b-2 border-gold'
              : 'text-white/70 hover:text-white'
          }`}
        >
          <span className="text-xs mr-1" aria-hidden="true">{flags[l]}</span>
          {l}
        </button>
      ))}
    </div>
  )
}
