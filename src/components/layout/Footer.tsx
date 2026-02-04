'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { blurDataURL } from '@/lib/blur'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Check } from 'lucide-react'

export function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [newsletterError, setNewsletterError] = useState(false)

  return (
    <footer className="bg-navy text-white">
      {/* Discount Banner */}
      <div className="bg-gold text-navy py-3 text-center">
        <p className="text-sm font-semibold tracking-wide">{t('discountBanner')}</p>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logos/logo-white.png"
              alt="Teleferic Grand Hotel"
              width={200}
              height={54}
              className="h-12 w-auto mb-4"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t('brandDescription')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/telefericgrandhotel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2.5 text-white/70 hover:text-gold transition-colors" aria-label={t('visitFacebook')}>
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/telefericgrandhotel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2.5 text-white/70 hover:text-gold transition-colors" aria-label={t('visitInstagram')}>
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@telefericgrandhotel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2.5 text-white/70 hover:text-gold transition-colors" aria-label={t('visitYouTube')}>
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-4 text-gold">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/rooms' as const, label: nav('rooms') },
                { href: '/dining' as const, label: nav('dining') },
                { href: '/spa' as const, label: nav('spa') },
                { href: '/conference' as const, label: nav('conference') },
                { href: '/activities' as const, label: nav('activities') },
                { href: '/offers' as const, label: nav('offers') },
                { href: '/awards' as const, label: nav('awards') },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-4 text-gold">
              {t('phone')} & {t('email')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+40368100200" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors">
                  <Phone size={16} />
                  0368 100 200
                </a>
              </li>
              <li>
                <a href="mailto:rezervari@telefericgrandhotel.ro" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors">
                  <Mail size={16} />
                  rezervari@telefericgrandhotel.ro
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Str. Poiana Soarelui 243,<br />Poiana Brașov, 500001,<br />Romania</span>
                </div>
              </li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-4 text-gold">
              {t('downloadApp')}
            </h4>
            <p className="text-sm text-white/70 mb-4">
              {t('appDescription')}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://apps.apple.com/ro/app/teleferic-grand-hotel/id6739245894"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/70 leading-none">{t('downloadOnThe')}</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=ro.telefericgrandhotel.telefericgrandhotel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.9l2.188 1.268a1 1 0 010 1.73l-2.188 1.269L15.4 12l2.298-3.193zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/70 leading-none">{t('getItOn')}</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-4 text-gold">
              {t('newsletter')}
            </h4>
            {newsletterSubmitted ? (
              <div className="flex items-center justify-center gap-2 py-2.5 text-gold">
                <Check size={18} />
                <span className="text-sm font-medium">{t('subscribe')} ✓</span>
              </div>
            ) : (
              <form onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const input = form.querySelector('input[type="email"]') as HTMLInputElement
                if (!input.value || !input.validity.valid) {
                  setNewsletterError(true)
                  return
                }
                setNewsletterError(false)
                setNewsletterSubmitted(true)
              }} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder={t('newsletterPlaceholder')}
                    aria-label={t('newsletter')}
                    onChange={() => newsletterError && setNewsletterError(false)}
                    className={`flex-1 bg-white/10 border px-4 py-2.5 text-sm text-white placeholder:text-white/70 focus:outline-none focus-visible:border-gold transition-colors ${newsletterError ? 'border-red-400' : 'border-white/20'}`}
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gold text-navy font-semibold uppercase tracking-wider text-xs hover:bg-gold-light transition-colors"
                  >
                    {t('subscribe')}
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-red-400 text-xs">{t('invalidEmail')}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Teleferic Grand Hotel. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  )
}
