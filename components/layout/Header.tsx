'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-portfolio-bg-primary/96 backdrop-blur-sm border-b border-portfolio-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 sm:px-10 md:px-16">
        <div className="flex items-center justify-between h-12">
          <Link
            href="/"
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-primary hover:text-portfolio-text-secondary transition-colors"
          >
            Mark Calip
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/projects"
              className={`font-mono text-[10px] tracking-[0.15em] uppercase transition-colors ${
                pathname === '/projects' || pathname?.startsWith('/projects/')
                  ? 'text-portfolio-text-primary'
                  : 'text-portfolio-text-secondary hover:text-portfolio-text-primary'
              }`}
            >
              {pathname === '/projects' || pathname?.startsWith('/projects/') ? (
                <span className="border-b border-portfolio-text-primary pb-px">Projects</span>
              ) : 'Projects'}
            </Link>
            <a
              href="https://github.com/karmCS"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/mark-calip-a770a5271"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mark.c.calip@gmail.com"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
            >
              Email
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
