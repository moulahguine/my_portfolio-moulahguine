// Import logos
import atlasUniversityLogo from "@/assets/images/expreriences-section/education/logo.jpg";
import { PiBagSimpleThin } from "react-icons/pi";
import { PiCertificateThin } from "react-icons/pi";
import { HiOutlineLanguage } from "react-icons/hi2";
import { PiGraduationCapThin } from "react-icons/pi";
import { PiCoffeeThin } from "react-icons/pi";

export const experienceData = {
  // Work experience entries
  work: [],

  // Freelance experience entries
  freelance: [],

  // Education experience entries
  education: [
    {
      id: "edu-1",
      company: "Atlas University",
      role: "Bachelor's Degree in Computer Software Engineering",
      type: "Degree",
      location: "Istanbul, Türkiye",
      startDate: "Sep 2023",
      endDate: "Aug 2027",
      logo: atlasUniversityLogo,
      description: [
        "Studying Computer Software Engineering with a strong focus on software development, data structures, and algorithms",
        "Completed academic projects using modern web technologies including React.js and Node.js",
        "Active member of the International Students Club, participating in cultural exchange events and networking activities",
        "Supported new international students in adapting to university life and academic environment",
      ],
      technologies: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Material UI",
        "Tailwind CSS",
        "Git",
      ],
      link: "https://atlas.edu.tr",
    },
  ],
};

// Tab configuration
export const experienceTabs = [
  { id: "education", label: "Education", icon: PiGraduationCapThin },
  { id: "freelance", label: "Freelance", icon: PiCoffeeThin },
  { id: "work", label: "Employment", icon: PiBagSimpleThin },
  { id: "certifications", label: "Certifications", icon: PiCertificateThin },
  { id: "languages", label: "Languages", icon: HiOutlineLanguage },
];

function parseExperienceDate(dateStr) {
  if (!dateStr) return 0;
  if (dateStr.toLowerCase() === "present") return Date.now();

  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? 0 : date.getTime();
}

export function getExperiences(category, limit = null) {
  const experiences = experienceData[category] || [];

  const sorted = [...experiences].sort((a, b) => {
    return parseExperienceDate(b.endDate) - parseExperienceDate(a.endDate);
  });

  return limit ? sorted.slice(0, limit) : sorted;
}

export const PREVIEW_LIMIT = 2;

export default experienceData;
