// Import logos
import atlasUniversityLogo from "@/assets/images/expreriences-section/education/logo.jpg";

export const experienceData = {
  // Work experience entries
  work: [
    // {
    //   id: "work-1",
    //   company: "Your Company Name",
    //   role: "Frontend Developer",
    //   type: "Full-time",
    //   location: "Istanbul, Turkey",
    //   startDate: "Jan 2024",
    //   endDate: "Present",
    //   logo: null, // Optional: import company logo
    //   description: [
    //     "Developed and maintained responsive web applications using React and Next.js",
    //     "Collaborated with design team to implement pixel-perfect UI components",
    //     "Optimized application performance, achieving 40% improvement in load times",
    //   ],
    //   technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    //   link: null, // Optional: company website
    // },
  ],

  // Freelance experience entries
  freelance: [
    // {
    //   id: "freelance-1",
    //   company: "Client Project",
    //   role: "Frontend Developer",
    //   type: "Contract",
    //   location: "Remote",
    //   startDate: "Mar 2024",
    //   endDate: "May 2024",
    //   logo: null,
    //   description: [
    //     "Designed and developed a modern portfolio website for a creative agency",
    //     "Implemented smooth animations using Framer Motion",
    //     "Delivered responsive design across all device sizes",
    //   ],
    //   technologies: ["Next.js", "Framer Motion", "SCSS"],
    //   link: null,
    // },
  ],

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
  { id: "education", label: "Education" },
  { id: "freelance", label: "Freelance" },
  { id: "work", label: "Employment" },
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
