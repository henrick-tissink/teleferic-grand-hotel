import { getTranslations } from 'next-intl/server'
import { awards } from '@/content/awards'
import type { Locale } from '@/i18n/config'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'awards' })
  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default async function AwardsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'awards' })

  // Group awards by year, descending
  const awardsByYear = awards.reduce<Record<number, typeof awards>>((acc, award) => {
    if (!acc[award.year]) acc[award.year] = []
    acc[award.year].push(award)
    return acc
  }, {})

  const sortedYears = Object.keys(awardsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative py-28 md:py-36">
        <Image
          src="/images/hero/hero-reception.jpg"
          alt={t('title')}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] text-white font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          {sortedYears.map((year) => (
            <div key={year} className="mb-16 last:mb-0">
              {/* Year heading */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl md:text-6xl font-[family-name:var(--font-heading)] text-gold font-bold">
                  {year}
                </span>
                <div className="flex-1 h-px bg-gold/30" />
              </div>

              {/* Awards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {awardsByYear[year].map((award, index) => (
                  <AnimateIn key={award.id} delay={0.1 * index}>
                  <div
                    className="bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="relative w-28 h-28 mx-auto mb-6 bg-navy rounded-lg flex items-center justify-center">
                      <div className="relative w-20 h-20">
                        <Image
                          src={award.image}
                          alt={award.name}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-110"
                          sizes="80px"
                        />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-2">
                      {award.name}
                    </h3>
                    <p className="text-lg font-[family-name:var(--font-heading)] text-navy">
                      {award.title[locale as Locale]}
                    </p>
                  </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
