'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Navigation } from './Navigation'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Link } from '@/i18n/routing'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  triggerRef?: React.RefObject<HTMLButtonElement | null>
}

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const prefersReducedMotion = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const handleClose = useCallback(() => {
    onClose()
    triggerRef?.current?.focus()
  }, [onClose, triggerRef])

  // Focus trap and keyboard handling
  const handleFocusTrap = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
      return
    }
    if (e.key !== 'Tab' || !panelRef.current) return

    const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }, [handleClose])

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener('keydown', handleFocusTrap)
    document.body.style.overflow = 'hidden'

    // Focus the close button when menu opens
    requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })

    return () => {
      document.removeEventListener('keydown', handleFocusTrap)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleFocusTrap])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label={tCommon('mobileMenu')}>
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-navy shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <LanguageSwitcher />
              <button
                ref={closeButtonRef}
                onClick={handleClose}
                className="p-2.5 text-white/70 hover:text-white transition-colors"
                aria-label={tCommon('close')}
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <Navigation vertical onLinkClick={onClose} />

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/booking"
                  onClick={onClose}
                  className="block w-full text-center py-3 px-6 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors"
                >
                  {t('bookNow')}
                </Link>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { href: '/offers' as const, key: 'offers' },
                  { href: '/awards' as const, key: 'awards' },
                  { href: '/history' as const, key: 'history' },
                  { href: '/faq' as const, key: 'faq' },
                  { href: '/facilities' as const, key: 'facilities' },
                  { href: '/live-camera' as const, key: 'liveCamera' },
                ].map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={onClose}
                    className="block text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
