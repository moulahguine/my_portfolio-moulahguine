import Blogs from "@/sections/Blog/Blogs";

export const metadata = {
  title: "Blog | Mohamed Oulahguine - Frontend Developer",
  description:
    "Read my thoughts on frontend development, React, Next.js, homelabs, AI tools, and web accessibility. Practical insights from real-world projects.",
  keywords: [
    "frontend development blog",
    "React tutorials",
    "Next.js tips",
    "web development insights",
    "homelab setup",
    "AI coding tools",
    "accessibility best practices",
  ],
  openGraph: {
    title: "Blog | Mohamed Oulahguine",
    description:
      "Articles on frontend development, React, Next.js, and practical coding insights.",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <main className="blogs-page">
      <Blogs mode="full" />
    </main>
  );
}
