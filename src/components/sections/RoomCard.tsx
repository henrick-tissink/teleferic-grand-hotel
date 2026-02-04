import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Users, Maximize } from 'lucide-react'
import { blurDataURL } from '@/lib/blur'

interface RoomCardProps {
  name: string
  slug: string
  image: string
  size: number
  adults: number
  children?: number
  sizeLabel: string
  capacityLabel: string
  viewDetailsLabel: string
}

export function RoomCard({
  name,
  slug,
  image,
  size,
  adults,
  children: kids,
  sizeLabel,
  capacityLabel,
  viewDetailsLabel,
}: RoomCardProps) {
  return (
    <Link
      href={{ pathname: '/rooms/[slug]', params: { slug } }}
      className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-[family-name:var(--font-heading)] text-navy mb-3">
          {name}
        </h3>

        <div className="flex items-center gap-4 text-sm text-charcoal/70 mb-4">
          <span className="flex items-center gap-1.5">
            <Maximize size={14} />
            {sizeLabel}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} />
            {capacityLabel}
          </span>
        </div>

        <span className="text-gold text-sm font-semibold uppercase tracking-wider group-hover:underline">
          {viewDetailsLabel} &rarr;
        </span>
      </div>
    </Link>
  )
}
