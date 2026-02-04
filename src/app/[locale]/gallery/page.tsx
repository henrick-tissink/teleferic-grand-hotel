import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { videoCategories } from '@/content/videos'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'
import type { Locale } from '@/i18n/config'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gallery' })
  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gallery' })

  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative py-28 md:py-36">
        <Image
          src="/images/hero/hero-lobby-bar.jpg"
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

      {/* Video Categories */}
      <section className="section-padding">
        <div className="container-custom">
          {videoCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-navy mb-8">
                <span className="border-b-2 border-gold pb-2">
                  {category.name[locale as Locale]}
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video, index) => (
                  <AnimateIn key={video.youtubeId} delay={0.1 * index}>
                  <div className="group">
                    <YouTubeEmbed
                      videoId={video.youtubeId}
                      title={video.title[locale as Locale]}
                      className="rounded-sm shadow-md"
                    />
                    <p className="mt-3 text-sm font-medium text-navy/80">
                      {video.title[locale as Locale]}
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
