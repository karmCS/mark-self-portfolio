'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-8 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal mb-6"
        >
          Mark Calip
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl text-portfolio-text-secondary mb-4"
        >
          <span className="italic">Computer Engineering</span> Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-base sm:text-lg text-portfolio-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A motivated computer engineering student wanting to expand my knowledge and build intelligent systems in the world of automation and AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-center gap-6"
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-portfolio-accent text-portfolio-bg-primary font-medium rounded-sm hover:bg-portfolio-text-primary transition-all duration-200 hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 border border-portfolio-border text-portfolio-text-primary font-medium rounded-sm hover:border-portfolio-text-primary transition-all duration-200 hover:scale-105"
          >
            About Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-portfolio-text-secondary"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
