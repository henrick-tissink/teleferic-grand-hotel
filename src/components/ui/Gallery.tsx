'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { blurDataURL } from '@/lib/blur'

interface GalleryImage {
  src: string
  alt: string
}

interface GalleryProps {
  images: GalleryImage[]
  className?: string
}

export function Gallery({ images, className = '' }: GalleryProps) {
  const t = useTranslations('common')
  const prefersReducedMotion = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [displayIndex, setDisplayIndex] = useState<number>(0)
  const [fadeState, setFadeState] = useState<'idle' | 'transitioning'>('idle')
  const [openedFromIndex, setOpenedFromIndex] = useState<number | null>(null)
  const thumbnailStripRef = useRef<HTMLDivElement>(null)
  const pointerStartRef = useRef<{ x: number; y: number; id: number } | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const gridButtonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const isOpen = lightboxIndex !== null

  const close = useCallback(() => {
    setLightboxIndex(null)
    gridButtonRefs.current[openedFromIndex ?? 0]?.focus()
  }, [openedFromIndex])

  const navigateTo = useCallback(
    (targetIndex: number) => {
      if (fadeState === 'transitioning') return
      setFadeState('transitioning')
      setLightboxIndex(targetIndex)
      setTimeout(() => {
        setDisplayIndex(targetIndex)
        setFadeState('idle')
      }, 400)
    },
    [fadeState]
  )

  const prev = useCallback(() => {
    if (lightboxIndex === null) return
    navigateTo((lightboxIndex - 1 + images.length) % images.length)
  }, [lightboxIndex, images.length, navigateTo])

  const next = useCallback(() => {
    if (lightboxIndex === null) return
    navigateTo((lightboxIndex + 1) % images.length)
  }, [lightboxIndex, images.length, navigateTo])

  // Sync displayIndex when lightbox first opens
  useEffect(() => {
    if (lightboxIndex !== null && fadeState === 'idle') {
      setDisplayIndex(lightboxIndex)
    }
  }, [lightboxIndex, fadeState])

  // Keyboard navigation & focus trapping
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Tab') {
        const dialog = dialogRef.current
        if (!dialog) return
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    // Move focus into the dialog
    const dialog = dialogRef.current
    if (dialog) {
      const firstFocusable = dialog.querySelector<HTMLElement>('button')
      firstFocusable?.focus()
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, prev, next])

  // Auto-scroll thumbnail strip to keep active thumbnail visible
  useEffect(() => {
    if (!isOpen || lightboxIndex === null) return
    const strip = thumbnailStripRef.current
    if (!strip) return
    const activeThumb = strip.children[lightboxIndex] as HTMLElement | undefined
    if (!activeThumb) return
    const scrollLeft =
      activeThumb.offsetLeft - strip.offsetWidth / 2 + activeThumb.offsetWidth / 2
    strip.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }, [isOpen, lightboxIndex])

  // Pointer event handlers for swipe
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerStartRef.current = { x: e.clientX, y: e.clientY, id: e.pointerId }
  }, [])

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      const start = pointerStartRef.current
      if (!start || start.id !== e.pointerId) return
      pointerStartRef.current = null
      const dx = e.clientX - start.x
      const dy = e.clientY - start.y
      // Only trigger if horizontal movement exceeds threshold and is dominant
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) next()
        else prev()
      }
    },
    [next, prev]
  )

  const handlePointerCancel = useCallback(() => {
    pointerStartRef.current = null
  }, [])

  // Preload indices
  const prevIndex =
    lightboxIndex !== null ? (lightboxIndex - 1 + images.length) % images.length : null
  const nextIndex =
    lightboxIndex !== null ? (lightboxIndex + 1) % images.length : null

  return (
    <>
      {/* Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ${className}`}>
        {images.map((image, i) => (
          <button
            key={i}
            ref={(el) => { gridButtonRefs.current[i] = el }}
            onClick={() => {
              setOpenedFromIndex(i)
              setDisplayIndex(i)
              setLightboxIndex(i)
              setFadeState('idle')
            }}
            className="relative aspect-[4/3] overflow-hidden group cursor-pointer rounded-sm"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' }}
            ref={dialogRef}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95"
            role="dialog"
            aria-modal="true"
            aria-label={t('imageGallery')}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-20 p-3 text-white/70 hover:text-white transition-colors duration-200"
              aria-label={t('close')}
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            {/* Previous button */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 text-white/70 hover:text-white transition-colors duration-200"
              aria-label={t('previous')}
            >
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>

            {/* Next button */}
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 text-white/70 hover:text-white transition-colors duration-200"
              aria-label={t('next')}
            >
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>

            {/* Main image area with crossfade */}
            <div className="relative w-full flex-1 min-h-0 max-w-[90vw] max-h-[70vh] my-4">
              {/* Outgoing image (displayIndex - shown until transition completes) */}
              <Image
                key={`display-${displayIndex}`}
                src={images[displayIndex].src}
                alt={images[displayIndex].alt}
                fill
                className={`object-contain transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none ${
                  fadeState === 'transitioning' ? 'opacity-0' : 'opacity-100'
                }`}
                sizes="90vw"
                priority
                draggable={false}
                placeholder="blur"
                blurDataURL={blurDataURL}
              />

              {/* Incoming image (lightboxIndex - fades in during transition) */}
              {fadeState === 'transitioning' && lightboxIndex !== displayIndex && (
                <Image
                  key={`incoming-${lightboxIndex}`}
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].alt}
                  fill
                  className="object-contain animate-[fadeIn_400ms_ease-in-out_forwards]"
                  sizes="90vw"
                  priority
                  draggable={false}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              )}
            </div>

            {/* Image counter */}
            <div className="text-white/70 text-xs tracking-[0.2em] uppercase font-light mb-3 select-none">
              {t('imageOf', { current: lightboxIndex + 1, total: images.length })}
            </div>

            {/* Thumbnail strip */}
            <div
              ref={thumbnailStripRef}
              className="flex gap-2 px-4 pb-4 overflow-x-auto max-w-[90vw] no-scrollbar"
            >
              {images.map((image, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i === lightboxIndex) return
                    navigateTo(i)
                  }}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-sm overflow-hidden transition-all duration-300 ${
                    i === lightboxIndex
                      ? 'ring-2 ring-gold opacity-100'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                  aria-label={image.alt}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="64px"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </button>
              ))}
            </div>

            {/* Hidden preload images */}
            {prevIndex !== null && prevIndex !== lightboxIndex && (
              <div className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
                <Image
                  src={images[prevIndex].src}
                  alt=""
                  width={1}
                  height={1}
                  priority
                />
              </div>
            )}
            {nextIndex !== null && nextIndex !== lightboxIndex && (
              <div className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
                <Image
                  src={images[nextIndex].src}
                  alt=""
                  width={1}
                  height={1}
                  priority
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}
