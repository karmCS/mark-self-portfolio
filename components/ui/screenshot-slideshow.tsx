'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
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

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

function Lightbox({
  track,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  track: Track
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const slides = track.slides
  const current = slides[index]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && slides.length > 1) onPrev()
      if (e.key === 'ArrowRight' && slides.length > 1) onNext()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, onPrev, onNext, slides.length])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Expanded view of ${current.caption || track.label || 'screenshot'}`}
      className="fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-md flex items-center justify-center p-6 sm:p-12 cursor-zoom-out"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.18, duration: 0.3 }}
        className="absolute top-5 left-6 sm:top-8 sm:left-10 font-mono text-[10px] tracking-[0.15em] uppercase pointer-events-none"
      >
        {track.label && (
          <div className="text-white/40 mb-1.5">{track.label}</div>
        )}
        <div className="text-white/75 tabular-nums">
          {String(index + 1).padStart(2, '0')}
          <span className="text-white/30 mx-1.5">/</span>
          {String(slides.length).padStart(2, '0')}
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.18, duration: 0.3 }}
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        aria-label="Close expanded view"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/15 transition-colors"
      >
        <X className="w-4 h-4" />
      </motion.button>

      <motion.div
        key={current.src}
        initial={{ opacity: 0, scale: 0.96, y: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[92vw] max-h-[78vh] flex items-center justify-center cursor-default"
      >
        <img
          src={current.src}
          alt={current.caption || `Screenshot ${index + 1}`}
          className="max-w-full max-h-[78vh] object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        />
      </motion.div>

      {current.caption && (
        <motion.div
          key={`caption-${current.src}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.35, ease: EASE_OUT_EXPO }}
          className="absolute bottom-6 sm:bottom-10 left-0 right-0 px-6 flex justify-center pointer-events-none"
        >
          <p
            onClick={(e) => e.stopPropagation()}
            className="text-[13px] text-white/70 leading-relaxed text-center max-w-2xl pointer-events-auto"
          >
            {current.caption}
          </p>
        </motion.div>
      )}

      {slides.length > 1 && (
        <>
          <motion.button
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.3 }}
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label="Previous"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/15 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.3 }}
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="Next"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/15 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </>
      )}
    </motion.div>
  )
}

function TrackPanel({ track }: { track: Track }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const slides = track.slides
  const aspect = track.aspect ?? 'aspect-[800/480]'

  useEffect(() => {
    setMounted(true)
  }, [])

  const goPrev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  )
  const goNext = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length]
  )

  const current = slides[index]

  return (
    <>
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

        <div className={`relative ${aspect} bg-[#0a0a0a] overflow-hidden group`}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Expand ${current.caption || track.label || 'screenshot'}`}
            className="absolute inset-0 z-0 cursor-zoom-in"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={current.src}
                src={current.src}
                alt={current.caption || `Screenshot ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.012]"
              />
            </AnimatePresence>
          </button>

          <div className="pointer-events-none absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center bg-white/0 group-hover:bg-white/85 text-white/0 group-hover:text-[#111111] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border border-transparent group-hover:border-[#D8D5CE]">
            <Maximize2 className="w-3 h-3" />
          </div>

          {slides.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                aria-label={`Previous ${track.label ?? 'screenshot'}`}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white text-[#111111] border border-[#D8D5CE] transition-colors z-20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                aria-label={`Next ${track.label ?? 'screenshot'}`}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white text-[#111111] border border-[#D8D5CE] transition-colors z-20"
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

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <Lightbox
                track={track}
                index={index}
                onClose={() => setOpen(false)}
                onPrev={goPrev}
                onNext={goNext}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
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
