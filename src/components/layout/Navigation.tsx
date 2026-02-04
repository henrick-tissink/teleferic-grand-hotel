'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'

interface NavigationProps {
  onLinkClick?: () => void
  className?: string
  vertical?: boolean
}

const navItems = [
  { href: '/rooms' as const, key: 'rooms' },
  { href: '/dining' as const, key: 'dining' },
  { href: '/spa' as const, key: 'spa' },
  { href: '/conference' as const, key: 'conference' },
  { href: '/activities' as const, key: 'activities' },
  { href: '/gallery' as const, key: 'gallery' },
  { href: '/contact' as const, key: 'contact' },
] as const

export function Navigation({ onLinkClick, className = '', vertical = false }: NavigationProps) {
  const t = useTranslations('nav')
  const tc = useTranslations('common')
  const pathname = usePathname()

  return (
    <nav className={className} aria-label={tc('mainNavigation')}>
      <ul className={`flex ${vertical ? 'flex-col gap-4' : 'items-center gap-6'}`}>
        {navItems.map((item) => {
          const isActive = pathname.endsWith(item.href) || pathname.includes(`${item.href}/`)
          return (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={onLinkClick}
                {...(isActive ? { 'aria-current': 'page' as const } : {})}
                className={`text-sm font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-gold border-b-2 border-gold pb-1'
                    : 'text-white/80 hover:text-gold'
                }`}
              >
                {t(item.key)}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
