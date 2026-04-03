'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
];

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full">
      <button
        onClick={toggleMenu}
        className="md:hidden absolute top-6 right-6 z-20 p-2"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <div className={`w-6 h-0.5 bg-portfolio-text-primary mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-portfolio-text-primary mb-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-portfolio-text-primary transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      <div className={`
        flex items-center justify-center w-full
        md:block md:h-auto
        ${isMenuOpen ? 'fixed inset-0 bg-portfolio-bg-primary z-10' : 'hidden md:block'}
      `}>
        <ul className={`
          flex flex-col items-center space-y-6
          md:flex-row md:space-y-0 md:space-x-4 md:justify-end
          lg:space-x-8
        `}>
          {menuItems.map((item) => (
            <li key={item.name} className="list-none">
              <Link
                href={item.href}
                className="relative inline-block group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="
                  relative z-10 block uppercase text-portfolio-text-primary
                  font-sans font-semibold transition-colors duration-300
                  group-hover:text-portfolio-bg-primary
                  text-xl py-2 px-3
                  md:text-sm md:py-2 md:px-3
                  lg:text-sm lg:py-2 lg:px-4
                  tracking-wide
                ">
                  {item.name}
                </span>
                <span className="
                  absolute inset-0 border-t-2 border-b-2 border-portfolio-text-primary
                  transform scale-y-[2] opacity-0
                  transition-all duration-300 origin-center
                  group-hover:scale-y-100 group-hover:opacity-100
                " />
                <span className="
                  absolute top-[2px] left-0 w-full h-full bg-portfolio-accent
                  transform scale-0 opacity-0
                  transition-all duration-300 origin-top
                  group-hover:scale-100 group-hover:opacity-100
                " />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
