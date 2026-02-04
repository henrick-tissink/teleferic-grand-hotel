'use client'

import { useState, useEffect, useCallback } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SliderProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  className?: string
  showControls?: boolean
  showDots?: boolean
}

export function Slider({
  children,
  autoPlay = true,
  interval = 5000,
  className = '',
  showControls = true,
  showDots = true,
}: SliderProps) {
  const t = useTranslations('common')
  const prefersReducedMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)
  const total = children.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])

  useEffect(() => {
    if (!autoPlay || prefersReducedMotion) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, next, prefersReducedMotion])

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Slides */}
      <div
        className={cn('flex', prefersReducedMotion ? '' : 'transition-transform duration-700 ease-in-out')}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children.map((child, i) => (
          <div key={i} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Controls */}
      {showControls && total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
            aria-label={t('previousSlide')}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
            aria-label={t('nextSlide')}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && total > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-11 h-11 flex items-center justify-center"
              aria-label={t('goToSlide', { number: i + 1 })}
            >
              <span className={cn(
                'block w-2.5 h-2.5 rounded-full transition-all duration-300',
                i === current ? 'bg-gold w-8' : 'bg-white/50 hover:bg-white/80'
              )} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
