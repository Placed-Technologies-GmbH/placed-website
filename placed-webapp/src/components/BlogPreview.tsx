import { useEffect, useState } from 'react';

type GhostPost = {
  id: string;
  title: string;
  url: string;
  excerpt?: string;
  feature_image?: string;
};

type BlogPreviewProps = {
  headingClassName?: string;
  linkClassName?: string;
  textClassName?: string;
};

const BlogPreview = ({
  headingClassName = 'text-center mb-6 text-work-blue tracking-tight',
  // Match blog section heading color for post titles
  linkClassName = 'text-work-blue hover:text-work-blue/90 underline-offset-2 hover:underline',
  // Match general body text style used across the app
  textClassName = 'text-gray-600',
}: BlogPreviewProps) => {
  const [posts, setPosts] = useState<GhostPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiKey = 'ae8a450bbc9249609223cf3013';
    // Call the canonical Ghost domain directly to avoid a 302 redirect (which can trigger CORS issues)
    const apiUrl = `https://placed.ghost.io/ghost/api/content/posts/?key=${apiKey}&limit=3&fields=id,title,url,excerpt,feature_image`;

    const fetchPosts = async () => {
      try {
        const res = await fetch(apiUrl, { credentials: 'omit', mode: 'cors' });
        if (!res.ok) throw new Error(`Failed to load posts: ${res.status}`);
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (e: any) {
        setError(e?.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Neu im Blog</h2>
        <p className="text-muted-foreground">Lade Beiträge…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Neu im Blog</h2>
        <p className="text-red-600">{error}</p>
      </section>
    );
  }

  if (!posts.length) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 sm:mb-36 lg:mb-48">
      <h2 className={headingClassName}>Aktuelle Beiträge aus unserem Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="border border-border/50 rounded-xl p-4 bg-white shadow-sm">
            {post.feature_image && (
              <img
                src={post.feature_image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md mb-3"
                loading="lazy"
              />
            )}
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              <a href={post.url} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                {post.title}
              </a>
            </h3>
            {post.excerpt && (
              <p className={`text-sm sm:text-base ${textClassName} line-clamp-3`}>{post.excerpt}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;


