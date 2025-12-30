import Experiences from "@/sections/Experiences/Experiences";

export const metadata = {
  title: "Experience | Mohamed Oulahguine - Frontend Developer",
  description:
    "Explore my journey: education in Computer Software Engineering at Atlas University, freelance projects, and professional work experience in frontend development with React, Next.js, and TypeScript.",
  keywords: [
    "frontend developer experience",
    "React developer",
    "Next.js developer",
    "software engineering student",
    "Atlas University",
    "freelance web developer",
    "Istanbul developer",
  ],
  openGraph: {
    title: "Experience | Mohamed Oulahguine",
    description:
      "Education, freelance projects, and professional experience of a frontend developer specializing in React and Next.js.",
    type: "website",
  },
};

export default function ExperiencesPage() {
  return (
    <main className="experiences-page">
      <Experiences mode="full" />
    </main>
  );
}
