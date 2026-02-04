'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Menu, Phone } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { blurDataURL } from '@/lib/blur'
import { Navigation } from './Navigation'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const t = useTranslations('nav')
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > 50
    }
    return false
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Check scroll position immediately on mount to prevent flash
    setIsScrolled(window.scrollY > 50)

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3 min-h-[64px]'
            : 'bg-gradient-to-b from-black/50 to-transparent py-5 min-h-[80px]'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logos/logo-white.png"
              alt="Teleferic Grand Hotel"
              width={180}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </Link>

          {/* Desktop Nav */}
          <Navigation className="hidden lg:block" />

          {/* Right side */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <LanguageSwitcher />

            <a
              href="tel:+40368100200"
              className="hidden lg:flex items-center gap-2 text-white/80 hover:text-gold transition-colors whitespace-nowrap"
              aria-label={t('callUs')}
            >
              <Phone size={16} className="flex-shrink-0" />
              <span className="text-sm">0368 100 200</span>
            </a>

            <Link
              href="/booking"
              className="hidden lg:block py-2 px-5 bg-gold text-navy font-semibold uppercase tracking-wider text-xs hover:bg-gold-light transition-colors whitespace-nowrap"
            >
              {t('bookNow')}
            </Link>

            {/* Mobile menu toggle */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-white p-2.5"
              aria-label={t('openMenu')}
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} triggerRef={menuButtonRef} />
    </>
  )
}
