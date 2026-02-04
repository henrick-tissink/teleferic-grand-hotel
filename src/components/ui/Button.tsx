import { cn } from '@/lib/utils'
import { Link } from '@/i18n/routing'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a' | 'link'
  href?: Parameters<typeof Link>[0]['href'] | string
  className?: string
  children?: React.ReactNode
  target?: string
  rel?: string
  [key: string]: unknown
}

const variants = {
  primary: 'bg-gold text-navy hover:bg-gold-light font-semibold',
  secondary: 'bg-navy text-white hover:bg-navy-light font-semibold',
  outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold',
  'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-navy font-semibold',
  ghost: 'text-gold hover:bg-gold/10',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  as = 'button',
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center uppercase tracking-wider transition-colors duration-200',
    variants[variant],
    sizes[size],
    className
  )

  if (as === 'link' && href) {
    return (
      <Link href={href as Parameters<typeof Link>[0]['href']} className={classes}>
        {children}
      </Link>
    )
  }

  if (as === 'a' && href) {
    return (
      <a href={href as string} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
