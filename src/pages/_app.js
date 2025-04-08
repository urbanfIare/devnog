import '../styles/globals.css';
import Link from 'next/link';
import 'highlight.js/styles/github.css'; // or 'atom-one-dark.css', 'monokai.css' 등
import '../styles/globals.css';
import Header from '../components/Header';

// import LottieMascot from '../components/LottieMascot';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-100 text-slate-800">
      <Header />
      <main className="flex-1 w-full pt-20">
        {/* 홈에서 블로그 바로 보이도록 구성 */}
        <div className="relative bg-blue-50 py-20 mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Welcome to DevLog</h1>
          <p className="text-slate-600 max-w-xl mx-auto">개발과 기록, 그리고 성장의 여정을 담는 블로그입니다.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <Component {...pageProps} />
        </div>
      </main>
      <footer className="text-center text-xs text-slate-400 py-6 border-t">
        © 2025 DevLog. Made with 💙 by You.
      </footer>
    </div>
  );
}
