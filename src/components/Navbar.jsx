import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Playground', href: '#playground' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="p-2 bg-indigo-600/20 rounded-xl border border-indigo-500/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-indigo-400 animate-pulse" />
            </div>
            <span className="font-display font-bold text-xl tracking-wide bg-gradient-to-r from-white via-slate-200 to-indigo-200 bg-clip-text text-transparent">
              Aethera<span className="text-indigo-400">.ai</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white font-sans text-sm font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <button className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 transition-all duration-500 group-hover:scale-105"></span>
              <span className="relative text-white font-semibold flex items-center gap-1.5">
                Launch Console
                <Sparkles className="w-4 h-4 text-purple-200" />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100 py-4 border-b border-slate-800 glass' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="px-4 pt-4 border-t border-slate-800/80">
            <button className="w-full relative group overflow-hidden px-4 py-3 rounded-xl font-medium text-sm">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600"></span>
              <span className="relative text-white font-semibold flex items-center justify-center gap-1.5">
                Launch Console
                <Sparkles className="w-4 h-4 text-purple-200" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
