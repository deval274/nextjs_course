import { usePostsStore } from "../store/postsStore";
import { useEffect } from "react";

function Posts() {
  //   const posts = usePostsStore((state) => state.posts);
  //   const loading = usePostsStore((state) => state.loading);
  //   const error = usePostsStore((state) => state.error);
  //   const fetchPosts = usePostsStore((state) => state.fetchPosts);
  const { posts, loading, error, fetchPosts } = usePostsStore();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
