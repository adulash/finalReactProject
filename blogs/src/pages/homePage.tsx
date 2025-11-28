import BlogCard from "../components/blogs/BlogCard";
import blogsData from "../data/blogs";
import type { BlogData } from "../data/types";
import { useSearch } from "../context/SearchContext";

export default function HomePage() {
  const { searchQuery } = useSearch();
  const filteredBlogs = blogsData.filter((blog: BlogData) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query) ||
      blog.author.toLowerCase().includes(query) ||
      blog.content.toLowerCase().includes(query)
    );
  });

  return (
    <div className="w-[1216px] mx-auto my-0 mt-[40px]">
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {searchQuery.trim() ? `No blogs found for "${searchQuery}"` : "No blogs available"}
          </p>

          {searchQuery.trim() && (
            <button
              className="px-2 py-2 bg-gray-300 hover:bg-gray-400 text-white rounded-lg transition"
              onClick={() => window.location.reload()}>
              Reset Search
            </button>
          )}
        </div>
      ) : (
        <ul className="grid grid-cols-3 gap-[32px] place-items-center">
          {filteredBlogs.map((blog: BlogData) => (
            <li key={blog.title}>
              <BlogCard {...blog} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
