'use client'

import Image from 'next/image'
import { blurDataURL } from '@/lib/blur'

const awards = [
  { name: 'World Travel Awards 2023', image: '/images/awards/world-travel-2023.png' },
  { name: 'World Travel Awards 2022', image: '/images/awards/world-travel-2022.png' },
  { name: 'World Travel Awards 2021', image: '/images/awards/world-travel-2021.png' },
  { name: 'Best Ski Hotel 2023', image: '/images/awards/best-ski-hotel-2023.png' },
  { name: 'Top Hotel Award 2023', image: '/images/awards/top-hotel-2023.png' },
  { name: 'Top Hotel Business 2022', image: '/images/awards/top-hotel-business-2022.png' },
  { name: 'ISO 9001', image: '/images/awards/tuv-9001.png' },
]

interface AwardsStripProps {
  title: string
}

export function AwardsStrip({ title }: AwardsStripProps) {
  return (
    <section className="section-padding bg-navy">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-white mb-12">
          {title}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {awards.map((award, i) => (
            <div
              key={i}
              className="w-24 h-24 md:w-32 md:h-32 relative opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={award.image}
                alt={award.name}
                fill
                className="object-contain"
                sizes="128px"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
