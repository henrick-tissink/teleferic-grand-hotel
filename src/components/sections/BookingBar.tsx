'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/routing'

export function BookingBar() {
  const t = useTranslations('booking')
  const router = useRouter()
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [adults, setAdults] = useState('2')
  const [children, setChildren] = useState('0')

  const today = new Date().toISOString().split('T')[0]

  const handleCheckinChange = (value: string) => {
    setCheckin(value)
    if (checkout && checkout <= value) {
      setCheckout('')
    }
  }

  const handleSubmit = () => {
    const params = new URLSearchParams()
    if (checkin) params.set('checkin', checkin)
    if (checkout) params.set('checkout', checkout)
    params.set('adults', adults)
    params.set('children', children)
    router.push({ pathname: '/booking', query: Object.fromEntries(params) as Record<string, string> })
  }

  return (
    <div className="bg-navy py-4">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full md:w-auto">
          <div>
            <label htmlFor="booking-bar-checkin" className="text-white/70 text-xs uppercase tracking-wider block mb-1">
              {t('checkIn')}
            </label>
            <input
              id="booking-bar-checkin"
              type="date"
              value={checkin}
              min={today}
              onChange={(e) => handleCheckinChange(e.target.value)}
              className="w-full bg-white/10 text-white border border-white/20 px-3 py-2.5 text-sm focus:outline-none focus-visible:border-gold"
            />
          </div>
          <div>
            <label htmlFor="booking-bar-checkout" className="text-white/70 text-xs uppercase tracking-wider block mb-1">
              {t('checkOut')}
            </label>
            <input
              id="booking-bar-checkout"
              type="date"
              value={checkout}
              min={checkin || today}
              onChange={(e) => setCheckout(e.target.value)}
              className="w-full bg-white/10 text-white border border-white/20 px-3 py-2.5 text-sm focus:outline-none focus-visible:border-gold"
            />
          </div>
          <div>
            <label htmlFor="booking-bar-adults" className="text-white/70 text-xs uppercase tracking-wider block mb-1">
              {t('adults')}
            </label>
            <select
              id="booking-bar-adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="w-full bg-white/10 text-white border border-white/20 px-3 py-2.5 text-sm focus:outline-none focus-visible:border-gold"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n} className="text-navy">
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="booking-bar-children" className="text-white/70 text-xs uppercase tracking-wider block mb-1">
              {t('children')}
            </label>
            <select
              id="booking-bar-children"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="w-full bg-white/10 text-white border border-white/20 px-3 py-2.5 text-sm focus:outline-none focus-visible:border-gold"
            >
              {[0, 1, 2, 3].map((n) => (
                <option key={n} value={n} className="text-navy">
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors whitespace-nowrap"
        >
          {t('submit')}
        </button>
      </div>
    </div>
  )
}
