import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { faqItems } from '@/content/faq'
import { Accordion } from '@/components/ui/Accordion'
import type { Locale } from '@/i18n/config'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'faq' })
  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'faq' })

  const sortedFaq = faqItems.sort((a, b) => a.order - b.order)

  const accordionItems = sortedFaq.map((item) => ({
    id: item.id,
    title: item.question[locale as Locale],
    content: (
      <p>{item.answer[locale as Locale]}</p>
    ),
  }))

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sortedFaq.map((item) => ({
      '@type': 'Question',
      name: item.question[locale as Locale],
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer[locale as Locale],
      },
    })),
  }

  return (
    <div className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="relative py-28 md:py-36">
        <Image
          src="/images/hero/hero-fireplace.jpg"
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

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <AnimateIn>
          <div className="bg-white p-6 md:p-10 shadow-sm">
            <Accordion items={accordionItems} />
          </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
