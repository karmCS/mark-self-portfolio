'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface WorkItem {
  title: string
  subTitle: string
  tags: string[]
  status?: string
}

const currentWork: WorkItem[] = [
  {
    title: 'Project Bloo',
    subTitle: 'Developing web platform for Orange County based meal-prep delivery platform.',
    tags: ['Marketplace', 'Web-Development'],
    status: 'In Production',
  },
  {
    title: 'Simulated Multi-Tenant IoT Monitoring Platform',
    subTitle: 'A SaaS vibration sensor monitoring simulation based on the Inland Empire Utilities Agency Remote Vibration Project.',
    tags: ['IIot', 'Python', 'Automation'],
    status: 'In Production',
  },
]

export default function CurrentWorkCard() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-16 border border-portfolio-border bg-portfolio-bg-primary">
      <button
        className="w-full flex items-start justify-between px-6 py-5 group"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="text-left">
          <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-portfolio-text-secondary block mb-1.5">
            Currently Working On
          </span>
          <p className="text-sm font-medium text-portfolio-text-primary">
            {currentWork.length} active items
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="mt-1 text-portfolio-text-secondary group-hover:text-portfolio-text-primary transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.075, 0.82, 0.165, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-portfolio-border divide-y divide-portfolio-border">
              {currentWork.map((item, index) => (
                <div key={index} className="flex items-start py-5 px-6 gap-5 bg-portfolio-bg-primary hover:bg-portfolio-bg-secondary transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      {item.status && (
                        <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-portfolio-text-secondary border border-portfolio-border px-1.5 py-0.5 whitespace-nowrap shrink-0">
                          {item.status}
                        </span>
                      )}
                      <div className="flex items-center gap-3 min-w-0 overflow-hidden">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] tracking-[0.12em] uppercase text-portfolio-text-secondary whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-portfolio-text-primary leading-snug sm:truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-portfolio-text-secondary mt-0.5 leading-relaxed sm:line-clamp-1">
                      {item.subTitle}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-portfolio-text-secondary flex-shrink-0" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
