import Experiences from "@/sections/Experiences/Experiences";

export const metadata = {
  title: "Experience | Mohamed Oulahguine",
  description:
    "Professional experience, freelance projects, and education background of Mohamed Oulahguine - Frontend Developer",
};

export default function ExperiencesPage() {
  return (
    <main className="experiences-page">
      <Experiences mode="full" />
    </main>
  );
}
