'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { type ReactNode } from 'react'

type AnimateInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function AnimateIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: AnimateInProps) {
  const prefersReducedMotion = useReducedMotion()
  const cappedDelay = Math.min(delay, 0.4)

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay: cappedDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
