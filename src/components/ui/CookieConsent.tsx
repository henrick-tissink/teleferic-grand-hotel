'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Cookie } from 'lucide-react'

export function CookieConsent() {
  const t = useTranslations('cookie')
  const tc = useTranslations('common')
  const prefersReducedMotion = useReducedMotion()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Small delay so it doesn't compete with page load
      const timer = setTimeout(() => setShow(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { y: 100, opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { y: 100, opacity: 0 }}
          transition={prefersReducedMotion ? { duration: 0.01 } : { type: 'tween', duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-custom">
            <div
              role="alertdialog"
              aria-label={tc('cookieConsent')}
              aria-describedby="cookie-consent-message"
              className="bg-navy border border-white/10 shadow-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Cookie size={24} className="text-gold flex-shrink-0 hidden sm:block" aria-hidden="true" />
              <p id="cookie-consent-message" className="text-sm text-white/80 flex-1">
                {t('message')}
              </p>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
                >
                  {t('decline')}
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 text-sm bg-gold text-navy font-semibold hover:bg-gold-light transition-colors"
                >
                  {t('accept')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
