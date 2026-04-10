'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Meteors } from '@/components/ui/meteors';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Meteors number={60} />
      </div>

      <div className="px-6 sm:px-10 md:px-16 pt-24 pb-20 sm:pb-24 relative z-10">
        <div className="max-w-content w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3"
          >
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary">
              Computer Engineering Student
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-medium tracking-tight leading-[1.02] mb-5"
          >
            Mark Calip
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-portfolio-text-secondary max-w-sm leading-relaxed mb-8"
          >
            Infrastructure built the modern way.
            <br />
            Human architecture, AI execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-8"
          >
            <Link
              href="/projects"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-primary border-b border-portfolio-text-primary pb-px hover:text-portfolio-text-secondary hover:border-portfolio-text-secondary transition-colors"
            >
              View Projects
            </Link>
            <a
              href="#about"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
            >
              About
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" aria-label="Scroll to about section">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
