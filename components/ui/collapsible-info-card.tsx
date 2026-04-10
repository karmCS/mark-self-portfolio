'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CollapsibleInfoCardProps {
  label: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function CollapsibleInfoCard({ label, children, defaultOpen = false }: CollapsibleInfoCardProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-[#D8D5CE] my-6">
      <button
        className="w-full flex items-center justify-between px-6 py-5 group"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#666666] group-hover:text-[#111111] transition-colors">
          {label}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[#999] group-hover:text-[#444444] transition-colors"
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
            <div className="border-t border-[#D8D5CE] px-6 pt-5 pb-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
