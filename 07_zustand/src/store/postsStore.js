import { create } from "zustand";

export const usePostsStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const posts = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
      );
      const data = await posts.json();
      set({ posts: data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message || "Failed to fetch posts" });
    }
  },
}));
