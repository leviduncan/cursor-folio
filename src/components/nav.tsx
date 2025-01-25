import Link from 'next/link';

export function Nav() {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        Olive.
      </Link>
      
      <div className="flex items-center gap-8">
        <Link href="/work" className="hover:text-gray-300 transition-colors">
          Work
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors">
          Contact
        </Link>
        <button className="w-8 h-8 flex flex-col justify-center gap-1.5">
          <span className="w-full h-0.5 bg-white"></span>
          <span className="w-full h-0.5 bg-white"></span>
          <span className="w-full h-0.5 bg-white"></span>
        </button>
      </div>
    </nav>
  );
} 