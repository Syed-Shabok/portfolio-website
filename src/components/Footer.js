import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 w-full py-12 border-t border-white/10 relative before:content-[''] before:absolute before:top-[-1px] before:left-0 before:w-2 before:h-2 before:bg-red-500 before:rounded-full font-space-grotesk text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div className="text-lg font-bold text-white"><Image src={logo} alt="Logo" width={35} height={35} /></div>
        <div className="text-zinc-500">© 2026 Syed-Shabok. Built for precision.</div>
        <div className="flex gap-8">
          <Link className="text-zinc-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="https://github.com/Syed-Shabok">GitHub</Link>
          <Link className="text-zinc-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/syed-shabok/">LinkedIn</Link>
          <Link className="text-zinc-500 hover:text-white transition-colors opacity-80 hover:opacity-100" href="mailto:[syed.shabok@gmail.com]">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
