'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import NavMenu from '@/components/ui/menu-hover-effects';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-portfolio-bg-primary/90 backdrop-blur-md border-b border-portfolio-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-8 md:px-16 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-serif font-semibold hover:text-portfolio-accent transition-colors">
            Mark Calip
          </Link>

          <NavMenu />
        </div>
      </div>
    </motion.header>
  );
}
