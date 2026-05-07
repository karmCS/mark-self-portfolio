'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Slide {
  src: string
  caption?: string
}

interface Track {
  label?: string
  slides: Slide[]
  aspect?: string
}

interface ScreenshotSlideshowProps {
  slides?: Slide[]
  label?: string
  aspect?: string
  tracks?: Track[]
}

function TrackPanel({ track }: { track: Track }) {
  const [index, setIndex] = useState(0)
  const slides = track.slides
  const aspect = track.aspect ?? 'aspect-[800/480]'

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const goNext = () => setIndex((i) => (i + 1) % slides.length)

  const current = slides[index]

  return (
    <div className="flex-1 min-w-0 flex flex-col">
      <div className="px-5 py-4 border-b border-[#D8D5CE] flex items-center justify-between gap-3">
        {track.label && (
          <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#666666] truncate">
            {track.label}
          </span>
        )}
        <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] shrink-0">
          {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      <div className={`relative ${aspect} bg-[#0a0a0a] overflow-hidden`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.caption || `Screenshot ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>

        {slides.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label={`Previous ${track.label ?? 'screenshot'}`}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white text-[#111111] border border-[#D8D5CE] transition-colors z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              aria-label={`Next ${track.label ?? 'screenshot'}`}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white text-[#111111] border border-[#D8D5CE] transition-colors z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {current.caption && (
        <div className="px-5 py-3 border-t border-[#D8D5CE] min-h-[60px]">
          <p className="text-[12px] text-[#666666] leading-relaxed">{current.caption}</p>
        </div>
      )}

      {slides.length > 1 && (
        <div className="px-5 py-3 border-t border-[#D8D5CE] flex gap-2 mt-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${track.label ?? 'slide'} ${i + 1}`}
              className={`h-1 flex-1 transition-colors ${
                i === index ? 'bg-[#111111]' : 'bg-[#D8D5CE] hover:bg-[#999]'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ScreenshotSlideshow({
  slides,
  label,
  aspect = 'aspect-[800/480]',
  tracks,
}: ScreenshotSlideshowProps) {
  const resolvedTracks: Track[] = tracks ?? (slides ? [{ label, slides, aspect }] : [])
  if (resolvedTracks.length === 0 || resolvedTracks.some((t) => t.slides.length === 0)) return null

  return (
    <div className="border border-[#D8D5CE] my-6 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#D8D5CE]">
      {resolvedTracks.map((track, i) => (
        <TrackPanel key={i} track={track} />
      ))}
    </div>
  )
}
