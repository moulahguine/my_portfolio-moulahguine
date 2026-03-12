import Experiences from "@/sections/Experiences/Experiences";

export const metadata = {
  title: "Experience | Mohamed Oulahguine",
  description:
    "Explore the professional experience, education, and freelance projects with 4 years of experience in frontend development.",
  keywords: [
    "frontend developer experience",
    "React projects",
    "Next.js projects",
    "software engineering student",
    "Atlas University",
    "freelance web developer",
    "Istanbul developer",
    "Morocco developer",
    "Nişantaşı University",
    "English Language Preparation Program",
    "education",
    "english language",
  ],
  openGraph: {
    title: "Experience | Mohamed Oulahguine",
    description:
      "Explore the professional experience, education, and freelance projects with 4 years of experience in frontend development.",
    type: "website",
  },
};

export default function ExperiencePage() {
  return (
    <main className="experience-page">
      <Experiences mode="full" />
    </main>
  );
}
