import Link from 'next/link'
import { useState } from 'react'

export default function BlogContent({ posts }) {
  const POSTS_PER_PAGE = 5
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className="w-full px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📚 블로그</h1>

        <ul className="divide-y divide-slate-200">
          {currentPosts.map((post) => (
            <li key={post.slug} className="py-6">
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-sm text-slate-500">{post.date}</p>
              <p className="mt-2 text-slate-700">{post.summary}</p>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border ${
              currentPage === 1 ? 'text-gray-400 border-gray-300' : 'hover:bg-gray-100'
            }`}
          >
            이전
          </button>

          <span className="text-sm text-gray-600">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded border ${
              currentPage === totalPages ? 'text-gray-400 border-gray-300' : 'hover:bg-gray-100'
            }`}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  )
}
