import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { liveCameraYoutubeId } from '@/content/videos'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'liveCamera' })
  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default async function LiveCameraPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'liveCamera' })

  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative py-28 md:py-36">
        <Image
          src="/images/hero/hero-winter-day.jpg"
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

      {/* Live Camera Embed */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <AnimateIn>
          <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-xl">
            <iframe
              src={`https://www.youtube.com/embed/${liveCameraYoutubeId}?si=1suxejV7Ni-RYr9p&controls=0`}
              title={t('title')}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-charcoal/70 text-lg leading-relaxed max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  )
}
