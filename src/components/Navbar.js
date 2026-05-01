"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Education', href: '/#education' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(255,77,77,0.1)] font-space-grotesk">
      <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
          DevPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className="text-zinc-400 font-medium hover:text-red-400 transition-colors duration-200"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold shadow-lg shadow-primary/10"
          >
            Download Resume
          </motion.button>
        </div>

        {/* Mobile Burger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hiddenborder-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-8 items-end">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl text-zinc-400 hover:text-red-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-bold mt-4 w-fit">
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
