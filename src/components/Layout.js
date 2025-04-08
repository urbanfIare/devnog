// src/components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <header className="border-b p-4 shadow-sm">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">My Blog</Link>
          <nav className="space-x-4 text-sm">
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-3xl mx-auto w-full p-6">{children}</main>
      <footer className="border-t text-center text-sm p-4 text-gray-500">
        © 2025 My Blog. All rights reserved.
      </footer>
    </div>
  );
}
