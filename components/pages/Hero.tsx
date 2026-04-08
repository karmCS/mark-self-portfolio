'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Meteors } from '@/components/ui/meteors';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 sm:px-8 md:px-16 py-20 sm:py-0 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Meteors number={80} className="bg-slate-400 opacity-30" />
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 sm:mb-5 tracking-tight leading-tight"
        >
          Mark Calip
        </motion.h1>

        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-base sm:text-xl md:text-2xl text-portfolio-text-secondary mb-5 sm:mb-4 font-sans"
        >
          Computer Engineering Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm sm:text-base text-portfolio-text-secondary max-w-xl mx-auto mb-10 leading-relaxed px-2"
        >
          A motivated computer engineering student working to expand my skills in DevOps, system administration, and generative AI workflows
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/projects"
            className="px-6 sm:px-8 py-3 bg-portfolio-accent text-white font-medium rounded hover:opacity-90 transition-all duration-200 text-sm sm:text-base"
          >
            View Projects
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to about section">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
