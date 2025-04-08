import '../styles/globals.css';
import Link from 'next/link';
import 'highlight.js/styles/github.css'; // or 'atom-one-dark.css', 'monokai.css' 등
// import LottieMascot from '../components/LottieMascot';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <header className="border-b backdrop-blur bg-white/90 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">DevLog</Link>
          <nav className="space-x-4 text-sm text-slate-600">
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-10">
        <Component {...pageProps} />
        {/* <LottieMascot /> */}
      </main>
      <footer className="text-center text-xs text-slate-400 py-6 border-t">
        © 2025 DevLog. Made with 💙 by You.
      </footer>
    </div>
  );
}
