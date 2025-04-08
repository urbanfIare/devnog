import Link from 'next/link';

export default function Sidebar({ categories }) {
  return (
    <aside className="w-64 p-4 border-r sticky top-20 h-full">
      <h2 className="text-lg font-semibold mb-4">📂 카테고리</h2>
      <ul className="space-y-2 text-sm">
        {categories.map((cat) => (
          <li key={cat}>
            <Link href={`/category/${cat.toLowerCase()}`} className="hover:text-blue-600">
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}