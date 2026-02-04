'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <section className="min-h-[60vh] bg-navy flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-[family-name:var(--font-heading)] text-gold font-bold mb-4">404</h1>
        <p className="text-xl text-white/70 mb-8">{t('title')}</p>
        <p className="text-base text-white/70 mb-8">{t('description')}</p>
        <Link href="/" className="inline-block px-8 py-4 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors">
          {t('backHome')}
        </Link>
      </div>
    </section>
  )
}
