'use client'

import { Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface AppDownloadProps {
  translations: {
    appTitle: string
    appSubtitle: string
    directBooking: string
    directBookingDesc: string
    nonRefundableWeb: string
    nonRefundableWebDesc: string
    nonRefundableApp: string
    nonRefundableAppDesc: string
  }
}

export function AppDownload({ translations: t }: AppDownloadProps) {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <Smartphone className="mx-auto text-gold mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-navy mb-4">
            {t.appTitle}
          </h2>
          <p className="text-lg text-charcoal/70 mb-8">
            {t.appSubtitle}
          </p>

          {/* Discount Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { percent: 10, label: t.directBooking, desc: t.directBookingDesc },
              { percent: 15, label: t.nonRefundableWeb, desc: t.nonRefundableWebDesc },
              { percent: 18, label: t.nonRefundableApp, desc: t.nonRefundableAppDesc },
            ].map((tier) => (
              <div key={tier.percent} className="bg-white p-6 shadow-sm">
                <div className="text-4xl font-[family-name:var(--font-heading)] text-gold font-bold mb-2">
                  {tier.percent}%
                </div>
                <div className="text-sm font-semibold text-navy uppercase tracking-wider mb-1">
                  {tier.label}
                </div>
                <div className="text-xs text-charcoal/70">{tier.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href="https://apps.apple.com/ro/app/teleferic-grand-hotel/id6739245894"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              App Store
            </Button>
            <Button
              as="a"
              href="https://play.google.com/store/apps/details?id=ro.telefericgrandhotel.telefericgrandhotel"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
