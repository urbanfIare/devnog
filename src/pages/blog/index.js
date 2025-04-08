import Link from 'next/link';
import { getAllPosts, getAllCategories } from '../../lib/posts';
import Sidebar from '../../components/Sidebar'; // 사이드바 직접 import

export async function getStaticProps() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return {
    props: {
      posts,
      categories,
    },
    revalidate: 60,
  };
}

export default function Blog({ posts, categories }) {
  return (
    <div className="w-full px-4">
      <div className="max-w-7xl mx-auto flex gap-6">
        {/* 사이드바 - 약 30% */}
        <aside className="w-[280px] hidden lg:block sticky top-24 self-start shrink-0">
        <Sidebar categories={categories} />
        </aside>

        {/* 본문 - 약 70% */}
        <main className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold">블로그</h1>
          <ul className="divide-y divide-slate-200">
            {posts.map((post) => (
              <li key={post.slug} className="py-6">
                <Link href={`/blog/${post.slug}`} className="text-xl font-semibold text-blue-600 hover:underline">
                  {post.title}
                </Link>
                <p className="text-sm text-slate-500">{post.date}</p>
                <p className="mt-2 text-slate-700">{post.summary}</p>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
