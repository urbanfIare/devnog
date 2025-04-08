// 📄 src/components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-blue-600 hover:text-blue-800 transition-colors">
            DevLog
          </Link>
          <nav className="space-x-4 text-sm text-slate-600">
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          </nav>
        </div>
      </header>
    );
}
