import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 w-full py-12 border-t border-white/10 relative before:content-[''] before:absolute before:top-[-1px] before:left-0 before:w-2 before:h-2 before:bg-red-500 before:rounded-full font-space-grotesk text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div className="text-lg font-bold text-white">DevPortfolio</div>
        <div className="text-zinc-500">© 2026 TechPortfolio. Built for precision.</div>
        <div className="flex gap-8">
          <Link className="text-zinc-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="#">GitHub</Link>
          <Link className="text-zinc-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="#">LinkedIn</Link>
          <Link className="text-zinc-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="#">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
