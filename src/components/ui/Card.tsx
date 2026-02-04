import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white overflow-hidden shadow-sm',
        hover && 'transition-shadow duration-300 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  )
}
