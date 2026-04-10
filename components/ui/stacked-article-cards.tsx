'use client'

import { MouseEventHandler, useState } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ArrowUpRight, ChevronUp } from 'lucide-react'

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

export interface WorkItem {
  title: string
  subTitle: string
  tags: string[]
  status?: string
}

const COLLAPSED_OFFSETS = [
  'top-0',
  'top-[calc(0.5rem)]',
  'top-[calc(1rem)]',
  'top-[calc(1.5rem)]',
]

const EXPANDED_OFFSETS = [
  'top-0',
  'top-[calc(88px+1rem)]',
  'top-[calc(176px+2rem)]',
  'top-[calc(264px+3rem)]',
]

interface StackedArticleCardsProps {
  items: WorkItem[]
  className?: string
}

export default function StackedArticleCards({
  items,
  className,
}: StackedArticleCardsProps) {
  const [isActive, setIsActive] = useState(false)

  const handleExpand = () => {
    if (!isActive) setIsActive(true)
  }

  const handleCollapse: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setIsActive(false)
  }

  const totalHeight = isActive
    ? `calc(${items.length} * 88px + ${items.length - 1} * 1rem + 2.5rem)`
    : `calc(88px + ${Math.min(items.length - 1, 3)} * 0.5rem)`

  return (
    <div
      className={cn('relative w-full cursor-pointer', className)}
      style={{ minHeight: totalHeight, transition: 'min-height 0.8s cubic-bezier(0.075, 0.82, 0.165, 1)' }}
      onClick={handleExpand}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'absolute left-0 right-0 h-[88px] border border-portfolio-border bg-portfolio-bg-primary transition-all duration-700 ease-[cubic-bezier(0.075,0.82,0.165,1)]',
            !isActive && 'hover:bg-portfolio-bg-secondary',
            isActive ? EXPANDED_OFFSETS[index] : COLLAPSED_OFFSETS[index]
          )}
          style={{ zIndex: items.length - index }}
        >
          <div className="flex items-center h-full px-6 gap-5">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-[0.12em] uppercase text-portfolio-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
                {item.status && (
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-portfolio-text-secondary border border-portfolio-border px-1.5 py-0.5">
                    {item.status}
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-portfolio-text-primary truncate leading-snug">
                {item.title}
              </p>
              <p className="text-xs text-portfolio-text-secondary mt-0.5 line-clamp-1 leading-relaxed">
                {item.subTitle}
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-portfolio-text-secondary flex-shrink-0" />
          </div>
        </div>
      ))}

      <button
        className={cn(
          'absolute left-0 right-0 flex items-center justify-center gap-1.5 py-2 font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-all duration-300',
          isActive
            ? 'pointer-events-auto visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        )}
        style={{
          top: isActive
            ? `calc(${items.length} * 88px + ${items.length - 1} * 1rem + 0.5rem)`
            : '0',
        }}
        onClick={handleCollapse}
      >
        <ChevronUp className="w-3 h-3" />
        Collapse
      </button>
    </div>
  )
}
