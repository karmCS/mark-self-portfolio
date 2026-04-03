'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-portfolio-bg-primary/90 backdrop-blur-md border-b border-portfolio-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-4 sm:px-8 md:px-16 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-serif font-semibold hover:text-portfolio-accent transition-colors">
            Portfolio
          </Link>

          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors text-sm tracking-wide uppercase"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
