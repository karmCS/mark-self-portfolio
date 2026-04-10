'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import StackedArticleCards, { WorkItem } from '@/components/ui/stacked-article-cards'

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
    <div className="border border-portfolio-border bg-portfolio-bg-primary">
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
            <div className="border-t border-portfolio-border px-6 pt-5 pb-6">
              <StackedArticleCards items={currentWork} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
