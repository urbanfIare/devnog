// 📄 src/lib/api.js
export async function getPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    if (!res.ok) throw new Error("API fetch failed");
    return res.json();
  }
  