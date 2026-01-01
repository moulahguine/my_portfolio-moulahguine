import Link from "next/link";
import { getRecentPosts, blogsData } from "@/data/blogsData";
import BlogCard from "./BlogCard";
import { GoArrowUpRight } from "react-icons/go";
const PREVIEW_LIMIT = 3;
import "./Blogs.scss";

function Blogs({ mode = "full" }) {
  const isPreview = mode === "preview";
  const blogs = getRecentPosts(isPreview ? PREVIEW_LIMIT : blogsData.length);

  const hasMore = isPreview && blogsData.length > PREVIEW_LIMIT;

  return (
    <section id="blogs" className="blogs">
      <div className="container">
        {/* Section Header */}
        <div className="blogs__header-container">
          <h2 className="blogs__header">Recent Posts</h2>
          {hasMore && (
            <Link href="/blogs" className="blogs__view-all-link">
              View more
              <GoArrowUpRight size={18} />
            </Link>
          )}
        </div>

        {/* Blog List */}
        <div className="blogs__list">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="blogs__empty">No posts yet. Check back soon! 📝</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
