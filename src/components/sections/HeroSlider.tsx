'use client'

import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { blurDataURL } from '@/lib/blur'
import { cn } from '@/lib/utils'

const heroImages = [
  '/images/hero/hero-winter-night.jpg',
  '/images/hero/hero-pool.jpg',
  '/images/hero/hero-summer-entrance.jpg',
  '/images/hero/hero-jacuzzi.jpg',
  '/images/hero/hero-winter-day.jpg',
  '/images/hero/hero-coroana-restaurant.jpg',
  '/images/hero/hero-fireplace.jpg',
  '/images/hero/hero-lobby-bar.jpg',
  '/images/hero/hero-reception.jpg',
  '/images/hero/hero-summer-night-1.jpg',
  '/images/hero/hero-nightclub.jpg',
  '/images/hero/hero-summer-troita.jpg',
  '/images/hero/hero-games-room-1.jpg',
  '/images/hero/hero-summer-night-2.jpg',
  '/images/hero/hero-games-room-2.jpg',
]

// Deterministic Ken Burns directions per image (rounded to avoid hydration mismatch).
const KB_DIRECTIONS: Array<{ tx: number; ty: number }> = heroImages.map((_, i) => {
  const angle = ((i * 137.508) % 360) * (Math.PI / 180)
  return {
    tx: Math.round(Math.cos(angle) * 200) / 100,
    ty: Math.round(Math.sin(angle) * 200) / 100,
  }
})

interface HeroSliderProps {
  translations: {
    tagline: string
    subtitle: string
    exploreRooms: string
    bookYourStay: string
    heroSubtitle: string
    heroImageAlt: string
    goToSlide: string
    slideNavigation: string
  }
}

export function HeroSlider({ translations: t }: HeroSliderProps) {
  const prefersReducedMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const advance = useCallback(() => {
    setCurrent((prev) => {
      setPrevious(prev)
      return (prev + 1) % heroImages.length
    })
  }, [])

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(advance, 6000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [advance])

  // Clear the "previous" layer after the crossfade completes
  useEffect(() => {
    if (previous === null) return
    const id = setTimeout(() => setPrevious(null), 1200)
    return () => clearTimeout(id)
  }, [previous])

  const goTo = (index: number) => {
    if (index === current) return
    setPrevious(current)
    setCurrent(index)
    // Reset auto-advance timer
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(advance, 6000)
  }

  // Hide scroll indicator once the user scrolls past the hero
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When less than 50% of the hero is visible, hide the indicator
        if (!entry.isIntersecting) {
          setScrollIndicatorVisible(false)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Image layers */}
      {heroImages.map((src, i) => {
        const isActive = i === current
        const isLeaving = i === previous
        const isVisible = isActive || isLeaving

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              transition: isVisible ? 'opacity 1.2s ease-in-out' : 'none',
              zIndex: isActive ? 2 : isLeaving ? 1 : 0,
              pointerEvents: 'none',
            }}
            aria-hidden={!isActive}
          >
            <div
              className="absolute inset-0"
              style={{
                ['--kb-tx' as string]: `${KB_DIRECTIONS[i].tx}%`,
                ['--kb-ty' as string]: `${KB_DIRECTIONS[i].ty}%`,
                animation: isVisible && !prefersReducedMotion ? 'kb 6s ease-out forwards' : 'none',
                willChange: isVisible && !prefersReducedMotion ? 'transform' : 'auto',
              }}
            >
              <Image
                src={src}
                alt={t.heroImageAlt}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
          </div>
        )
      })}

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white pointer-events-auto">
          <p className="text-gold text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-semibold">
            {t.heroSubtitle}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-heading)] font-bold mb-6 leading-tight">
            {t.tagline}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/rooms" size="lg">
              {t.exploreRooms}
            </Button>
            <Button as="link" href="/booking" variant="outline-white" size="lg">
              {t.bookYourStay}
            </Button>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-0.5 md:gap-1 mb-2" role="tablist" aria-label={t.slideNavigation}>
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={t.goToSlide.replace('{number}', String(i + 1))}
            className="flex items-center justify-center w-8 h-8 md:w-11 md:h-11 group"
          >
            <span className={cn(
              'block w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-300',
              i === current ? 'bg-gold' : 'bg-white/50 group-hover:bg-white/80'
            )} />
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className={cn(
        'absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500',
        scrollIndicatorVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce motion-reduce:animate-none" />
        </div>
      </div>
    </section>
  )
}
