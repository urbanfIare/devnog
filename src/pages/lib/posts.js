// 📄 src/pages/lib/posts.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'src/posts');

function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
  
    const posts = fileNames.map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
  
      const { data, content } = matter(fileContents);
  
      return {
        slug: fileName.replace(/\.md$/, ''),
        ...data,
      };
    });
  
    // ✅ 날짜 기준 내림차순 정렬
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}  

function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { ...data, slug, content };
}

function getAllCategories() {
  const posts = getAllPosts(); // 이미 존재하는 함수
  const categories = Array.from(
    new Set(posts.map((post) => post.category).filter(Boolean))
  );
  return categories;
}

module.exports = { getAllPosts, getPostBySlug, getAllCategories };