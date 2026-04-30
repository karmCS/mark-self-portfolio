'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Projects', href: '/projects', internal: true },
    { label: 'Github', href: 'https://github.com/karmCS', internal: false },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mark-calip-a770a5271', internal: false },
    { label: 'Email', href: 'mailto:mark.c.calip@gmail.com', internal: false },
  ];

  const isProjectsActive = pathname === '/projects' || pathname?.startsWith('/projects/');

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
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

            <nav className="hidden sm:flex items-center gap-8">
              {navLinks.map((link) =>
                link.internal ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-mono text-[10px] tracking-[0.15em] uppercase transition-colors ${
                      isProjectsActive
                        ? 'text-portfolio-text-primary'
                        : 'text-portfolio-text-secondary hover:text-portfolio-text-primary'
                    }`}
                  >
                    {isProjectsActive ? (
                      <span className="border-b border-portfolio-text-primary pb-px">{link.label}</span>
                    ) : link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            <button
              className="sm:hidden text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden border-t border-portfolio-border"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.internal ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`font-mono text-[10px] tracking-[0.15em] uppercase transition-colors ${
                        isProjectsActive
                          ? 'text-portfolio-text-primary'
                          : 'text-portfolio-text-secondary hover:text-portfolio-text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
