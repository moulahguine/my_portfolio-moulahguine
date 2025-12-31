/**
 * Blog Data
 * Single source of truth for all blog posts
 */

export const blogsData = [
  {
    id: "blog-1",
    slug: "about-my-first-homelab",
    title: "Christmas Special: About My First Homelab",
    description:
      "This is the story of how cloud storage pricing pushed me into building a quiet, always-on homelab that now runs everything I care about.",
    tags: ["Homelab", "Self-hosting", "Fly.io"],
    publishDate: "2025-12-25",
    readTime: 6, // minutes
  },
  {
    id: "blog-2",
    slug: "cost-effective-ai-tools",
    title: "My Quest for the Most Cost-Effective AI Tools",
    description:
      "A personal journey of testing and comparing free, cheap, and value-oriented AI tools to see if they can match my corporate setup.",
    tags: ["Agentic AI", "Developer-Tools", "Coding Assistant"],
    publishDate: "2025-11-16",
    readTime: 7,
  },
  {
    id: "blog-3",
    slug: "building-accessible-components",
    title: "Building Accessible React Components from Scratch",
    description:
      "How I approach accessibility in my component library: keyboard navigation, ARIA labels, and focus management without external dependencies.",
    tags: ["React", "Accessibility", "Components"],
    publishDate: "2025-10-28",
    readTime: 8,
  },
  {
    id: "blog-4",
    slug: "nextjs-app-router-patterns",
    title: "Next.js App Router: Patterns I Actually Use",
    description:
      "After building several production apps with the App Router, here are the patterns that stuck and the ones I abandoned.",
    tags: ["Next.js", "App Router", "Architecture"],
    publishDate: "2025-09-15",
    readTime: 10,
  },
];

/**
 * Get recent blog posts
 * @param {number} limit - Max posts to return
 * @returns {Array} Sorted posts by date (newest first)
 */
export function getRecentPosts(limit = 3) {
  return [...blogsData]
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
}

/**
 * Get all blog posts sorted by date
 * @returns {Array} All posts sorted by date
 */
export function getAllPosts() {
  return [...blogsData].sort(
    (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
  );
}

/**
 * Get a single post by slug
 * @param {string} slug - Post slug
 * @returns {Object|null} Post object or null
 */
export function getPostBySlug(slug) {
  return blogsData.find((post) => post.slug === slug) || null;
}

/**
 * Format date for display
 * @param {string} dateStr - ISO date string
 * @returns {string} Formatted date (e.g., "December 25, 2025")
 */
export function formatPostDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default blogsData;
