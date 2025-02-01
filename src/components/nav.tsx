'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    // { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#expertise', label: 'Expertise' },
    // { href: 'mailto:darrin@darrinduncan.com', label: 'Contact' }
  ];

  return (
    <>
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-sm">
        <Link href="/" className="text-2xl font-bold">
          Darrin.
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="hover:text-gray-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={cn(
            "w-full h-0.5 bg-white transition-all duration-300",
            isMenuOpen && "rotate-45 translate-y-2"
          )} />
          <span className={cn(
            "w-full h-0.5 bg-white transition-all duration-300",
            isMenuOpen && "opacity-0"
          )} />
          <span className={cn(
            "w-full h-0.5 bg-white transition-all duration-300",
            isMenuOpen && "-rotate-45 -translate-y-2"
          )} />
        </button>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div className={cn(
        "fixed top-0 right-0 w-[300px] h-full bg-white transform transition-transform duration-300 ease-in-out z-40",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="pt-24 px-6">
          {menuItems.map((item, index) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block py-4 text-black hover:text-gray-600 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
              {index < menuItems.length - 1 && (
                <div className="border-b border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-label="Mobile menu overlay"
      />
    </>
  );
}