import Sidebar from '../components/Sidebar';

// BlogLayout.js
export default function BlogLayout({ children, categories = [] }) {
  return (
    <div>
      <Sidebar categories={categories} />
      {children}
    </div>
  );
}