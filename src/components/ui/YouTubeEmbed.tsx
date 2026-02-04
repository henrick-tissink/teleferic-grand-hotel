'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'
import { Play } from 'lucide-react'

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export function YouTubeEmbed({ videoId, title = 'Video', className = '' }: YouTubeEmbedProps) {
  const t = useTranslations('common')
  const [isPlaying, setIsPlaying] = useState(false)
  const [thumbUrl, setThumbUrl] = useState(`https://i.ytimg.com/vi/${videoId}/sddefault.jpg`)

  if (isPlaying) {
    return (
      <div className={`relative aspect-video ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className={`relative aspect-video group cursor-pointer overflow-hidden w-full ${className}`}
      aria-label={t('playVideo', { title })}
    >
      {/* Thumbnail */}
      <Image
        src={thumbUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 800px"
        onError={() => setThumbUrl(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/90 flex items-center justify-center group-hover:bg-gold transition-colors group-hover:scale-110 duration-300">
          <Play size={32} className="text-navy ml-1" />
        </div>
      </div>
    </button>
  )
}
