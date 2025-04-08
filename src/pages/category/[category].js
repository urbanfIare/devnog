import { getAllPosts, getAllCategories } from '../lib/posts';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';

export async function getStaticPaths() {
  const categories = getAllCategories();

  const paths = categories.map((category) => ({
    params: { category: category.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter(
    (post) => post.category?.toLowerCase() === params.category
  );

  const categories = getAllCategories();

  return {
    props: {
      posts: filteredPosts,
      categories,
      currentCategory: params.category,
    },
    revalidate: 60,
  };
}

export default function CategoryPage({ posts, categories, currentCategory }) {
  return (
    <div className="flex max-w-7xl mx-auto px-4 py-8 gap-6">
      {/* 사이드바 */}
      <aside className="w-full max-w-[280px] lg:block hidden sticky top-20 self-start">
        <Sidebar categories={categories} />
      </aside>

      {/* 본문 */}
      <main className="flex-1 space-y-8">
        <h1 className="text-3xl font-bold capitalize">카테고리: {currentCategory}</h1>
        <Link
          href="/blog"
          className="inline-block text-blue-600 text-sm hover:underline"
        >
          전체 글 보기
        </Link>

        <ul className="divide-y divide-slate-200">
          {posts.map((post) => (
            <li key={post.slug} className="py-6">
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-sm text-slate-500">{post.date}</p>
              <p className="mt-2 text-slate-700">{post.summary}</p>

              {post.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-200 text-slate-800 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
