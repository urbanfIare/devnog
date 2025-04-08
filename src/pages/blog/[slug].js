// 📄 src/pages/blog/[slug].js
import { getPostBySlug, getAllPosts } from '../lib/posts';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(post.content);

  const contentHtml = processedContent.toString();

  return {
    props: {
      ...post,
      contentHtml,
    },
    revalidate: 60,
  };
}

export default function Post({ title, date, contentHtml }) {
  return (
    <article className="prose-custom py-14 px-4">
      <h1 className="text-4xl mb-2">{title}</h1>
      <p className="text-sm text-slate-500 mb-10">{date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
