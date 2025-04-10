import '../styles/globals.css';
import 'highlight.js/styles/github.css'; // or 'atom-one-dark.css', 'monokai.css' 등
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
