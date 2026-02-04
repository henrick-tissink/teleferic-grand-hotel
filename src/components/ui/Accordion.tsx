'use client'

import { useState, useRef, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      let targetIndex: number | null = null
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        targetIndex = (index + 1) % items.length
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        targetIndex = (index - 1 + items.length) % items.length
      } else if (e.key === 'Home') {
        e.preventDefault()
        targetIndex = 0
      } else if (e.key === 'End') {
        e.preventDefault()
        targetIndex = items.length - 1
      }
      if (targetIndex !== null) {
        buttonRefs.current[targetIndex]?.focus()
      }
    },
    [items.length]
  )

  return (
    <div className={cn('divide-y divide-cream-dark', className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id
        const triggerId = `accordion-trigger-${item.id}`
        const panelId = `accordion-panel-${item.id}`
        return (
          <div key={item.id}>
            <h3>
              <button
                ref={(el) => { buttonRefs.current[index] = el }}
                id={triggerId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-[family-name:var(--font-heading)] text-lg text-navy pr-4">
                  {item.title}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    'flex-shrink-0 text-gold transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="grid transition-[grid-template-rows] duration-300"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className={cn('overflow-hidden', isOpen && 'pb-5')}>
                <div className="text-charcoal/70 leading-relaxed">{item.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
