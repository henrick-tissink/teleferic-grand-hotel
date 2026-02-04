import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Clock, Users } from 'lucide-react'
import { blurDataURL } from '@/lib/blur'

interface DiningCardProps {
  name: string
  slug: string
  image: string
  style: string
  hours: string
  capacity?: number
  learnMore: string
}

export function DiningCard({
  name,
  slug,
  image,
  style,
  hours,
  capacity,
  learnMore,
}: DiningCardProps) {
  return (
    <Link
      href={{ pathname: '/dining/[slug]', params: { slug } }}
      className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-[family-name:var(--font-heading)] text-white font-bold">
            {name}
          </h3>
          <p className="text-white/80 text-sm mt-1">{style}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-charcoal/70 mb-4">
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {hours}
          </span>
          {capacity && (
            <span className="flex items-center gap-1.5">
              <Users size={14} />
              {capacity}
            </span>
          )}
        </div>

        <span className="text-gold text-sm font-semibold uppercase tracking-wider group-hover:underline">
          {learnMore} &rarr;
        </span>
      </div>
    </Link>
  )
}
