import Link from 'next/link';

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m a Developer 👋</h1>
      <p className="text-base text-slate-600 mb-6 max-w-md mx-auto">
        다양한 개발 이야기와 프로젝트, 실험적인 글들을 기록하고 공유합니다.
      </p>
      <Link
        href="/blog"
        className="inline-block bg-slate-900 text-white px-5 py-2 rounded hover:bg-slate-800 transition"
      >
        블로그 글 보기
      </Link>
    </section>
  );
}
