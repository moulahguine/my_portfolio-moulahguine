export const blogsData = [
  {
    id: "blog-1",
    slug: "about-my-first-homelab",
    title: "Christmas Special: About My First Homelab",
    description:
      "This is the story of how cloud storage pricing pushed me into building a quiet, always-on homelab that now runs everything I care about.",
    tags: ["Homelab", "Self-hosting", "Fly.io"],
    publishDate: "2025-12-25",
    readTime: 6,
  },
];

export function getRecentPosts(limit = 3) {
  return [...blogsData]
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
}

export function getAllPosts() {
  return [...blogsData].sort(
    (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
  );
}

export function getPostBySlug(slug) {
  return blogsData.find((post) => post.slug === slug) || null;
}

export function formatPostDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default blogsData;
