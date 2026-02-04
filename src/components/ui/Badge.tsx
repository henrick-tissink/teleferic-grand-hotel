import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'navy' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider',
        variant === 'gold' && 'bg-gold/10 text-gold',
        variant === 'navy' && 'bg-navy text-white',
        variant === 'outline' && 'border border-gold text-gold',
        className
      )}
    >
      {children}
    </span>
  )
}
