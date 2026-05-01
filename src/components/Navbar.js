"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(255,77,77,0.1)] font-space-grotesk">
      <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
          DevPortfolio
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-zinc-400 font-medium hover:text-red-400 transition-colors duration-200 active:scale-95 transform" href="/#home">Home</Link>
          <Link className="text-zinc-400 font-medium hover:text-red-400 transition-colors duration-200 active:scale-95 transform" href="/#about">About</Link>
          <Link className="text-zinc-400 font-medium hover:text-red-400 transition-colors duration-200 active:scale-95 transform" href="/#skills">Skills</Link>
          <Link className="text-zinc-400 font-medium hover:text-red-400 transition-colors duration-200 active:scale-95 transform" href="/#projects">Projects</Link>
          <Link className="text-zinc-400 font-medium hover:text-red-400 transition-colors duration-200 active:scale-95 transform" href="/#education">Education</Link>
          <Link className="text-zinc-400 font-medium hover:text-red-400 transition-colors duration-200 active:scale-95 transform" href="/#contact">Contact</Link>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold active:scale-95 transform transition-all hover:brightness-110">
          Download Resume
        </button>
      </div>
    </nav>
  );
}
