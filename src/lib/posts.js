const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getAllPosts() {
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

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
  
    return {
      slug,
      content,
      ...data,
    };
}

// category 정렬
export function getAllCategories() {
  const posts = getAllPosts();
  const categories = new Set();

  posts.forEach((post) => {
    if (post.category) {
      categories.add(post.category);
    }
  });

  return Array.from(categories);
}