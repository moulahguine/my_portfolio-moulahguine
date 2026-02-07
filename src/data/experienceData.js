// Education logos
import atlasUniversityLogo from "@/assets/images/expreriences-section/education/Atlas_university.jpg";
import lyceeAhmedChaoukiLogo from "@/assets/images/expreriences-section/education/Ahmed_Chawki.png";
import nisantasiUniversityLogo from "@/assets/images/expreriences-section/education/nisantasi_university.png";

// Freelance logos
import upworkLogo from "@/assets/images/expreriences-section/freelance/upwork.png";
import selfEmployedLogo from "@/assets/images/expreriences-section/freelance/freelancer.jpg";

// Certifications logos
import freecodecampLogo from "@/assets/images/expreriences-section/certifications/freecodecamp.jpg";
import simplilearnLogo from "@/assets/images/expreriences-section/certifications/simplilearn.png";

// Icons
import { PiBagSimpleThin } from "react-icons/pi";
import { PiCertificateThin } from "react-icons/pi";
import { HiOutlineLanguage } from "react-icons/hi2";
import { PiGraduationCapThin } from "react-icons/pi";
import { PiCoffeeThin } from "react-icons/pi";

export const experienceData = {
  // =========================
  // Education
  // =========================

  education: [
    {
      id: "edu-1",
      company: "Atlas University",
      role: "Bachelor's Degree in Computer Software Engineering",
      type: "Degree",
      location: "Istanbul, Türkiye",
      startDate: "2023",
      endDate: "2027",
      logo: atlasUniversityLogo,
      description: [
        "Studying Computer Software Engineering with a balance between engineering fundamentals and practical software development",
        "Learning core computer science concepts including programming, data structures, algorithms, and system thinking",
        "Applying theoretical knowledge through academic projects, assignments, and self-directed software work",
        "Developing problem-solving, analytical thinking, and structured coding practices expected from software engineers",
      ],
      technologies: [
        "Programming Fundamentals",
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming (OOP)",
        "JavaScript",
        "Python",
        "Databases (SQL fundamentals)",
        "Git & Version Control",
        "Software Engineering Principles",
      ],
      link: "https://atlas.edu.tr",
    },

    {
      id: "edu-2",
      company: "Nişantaşı University",
      role: "English Language Preparation Program",
      type: "Foundation Year",
      location: "Istanbul, Türkiye",
      startDate: "2022",
      endDate: "2023",
      logo: nisantasiUniversityLogo,
      description: [
        "Completed an intensive academic English preparation program",
        "Strengthened technical and academic communication skills for engineering studies",
        "Developed confidence in professional English for documentation, presentations, and teamwork",
      ],
      technologies: ["Academic English", "Technical Communication"],
      link: "https://www.nisantasi.edu.tr",
    },

    {
      id: "edu-3",
      company: "Lycée Ahmed Chaouki",
      role: "Baccalaureate in Physics Sciences",
      type: "High School Diploma",
      location: "Salé, Morocco",
      startDate: "Sep 2017",
      endDate: "Jul 2020",
      logo: lyceeAhmedChaoukiLogo,
      description: [
        "Completed a Baccalaureate in Physics Sciences with a strong focus on physics, mathematics, and analytical problem-solving",
        "Participated in physics and science projects involving laboratory experiments and applied sciences",
        "Developed critical thinking, teamwork, and problem-solving skills through group-based activities",
      ],
      activities: [
        "Physics and science projects",
        "Laboratory experiments",
        "Team problem-solving activities",
      ],
      technologies: ["Physics", "Mathematics", "Analytical Thinking"],
      link: "https://www.men.gov.ma",
    },
  ],

  // =========================
  // Freelance / Self-Employed
  // =========================
  freelance: [
    {
      id: "freelance-1",
      company: "Upwork",
      role: "Frontend Web Developer",
      type: "Freelance",
      location: "Remote · Istanbul, Türkiye",
      startDate: "Sep 2025",
      endDate: "Present",
      logo: upworkLogo,
      description: [
        "Worked on multiple web projects using React, Next.js, TypeScript, and Tailwind CSS",
        "Built clean, responsive user interfaces with reusable and maintainable components",
        "Translated Figma designs into production-ready frontend code",
        "Implemented animations, transitions, and interactive UI elements",
        "Applied performance optimization and accessibility best practices",
        "Worked independently using Git and GitHub for version control",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "Git",
        "GitHub",
        "Figma",
        "Responsive Design",
        "Accessibility",
      ],
      link: "https://www.upwork.com/freelancers/moulahguine",
    },

    {
      id: "freelance-2",
      company: "Self-Employed",
      role: "Frontend Developer",
      type: "Freelance",
      location: "Remote · Istanbul, Türkiye",
      startDate: "Mar 2022",
      endDate: "Present",
      logo: selfEmployedLogo,
      description: [
        "Designed and developed personal and client-based frontend projects",
        "Built websites using React, JavaScript, Vite, and Tailwind CSS",
        "Explored UI animations and motion-based interactions",
        "Improved code quality through better component structure and reusability",
        "Strengthened understanding of state management, routing, and performance optimization",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "UI Animation",
        "Component Architecture",
      ],
      link: "https://moulahguine.dev",
    },
  ],

  // =========================
  // Work Experience
  // =========================
  work: [],

  // =========================
  // Certifications
  // =========================
  certifications: [
    {
      id: "cert-1",
      company: "Simplilearn",
      role: "Introduction to Front End Development",
      type: "Online Certification",
      location: "Online",
      startDate: "Sep 2025",
      endDate: "Dec 2025",
      credentialId: "9069639",
      logo: simplilearnLogo,
      description: [
        "Completed an introductory frontend development course covering core web concepts",
        "Gained foundational knowledge in HTML, CSS, JavaScript, and React.js",
        "Learned the basics of building responsive and user-friendly web interfaces",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Frontend Fundamentals",
      ],
      link: "https://drive.google.com/file/d/1HfUUeeIq6azofM1MSGlulSw0iuQVU45Z/view",
    },

    {
      id: "cert-2",
      company: "freeCodeCamp",
      role: "Responsive Web Design",
      type: "Online Certification",
      location: "Online",
      startDate: "Sep 2025",
      endDate: "Dec 2025",
      credentialId: "moulahguine",
      logo: freecodecampLogo,
      description: [
        "Completed the Responsive Web Design certification program on freeCodeCamp",
        "Built multiple projects focusing on responsive layouts and modern CSS techniques",
        "Gained hands-on experience with Flexbox, Grid, and mobile-first design principles",
        "Completed approximately 300 hours of practical coursework",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "CSS Grid",
        "Responsive Design",
      ],
      link: "https://www.freecodecamp.org/certification/moulahguine/responsive-web-design",
    },
  ],

  // =========================
  // Languages
  // =========================
  languages: [
    {
      id: "lang-1",
      name: "Arabic",
      level: "Native",
      flag: "🇲🇦",
    },
    {
      id: "lang-2",
      name: "Berber (Amazigh)",
      level: "Native",
      flag: "🇲🇦",
    },
    {
      id: "lang-3",
      name: "English",
      level: "Fluent",
      flag: "🌍",
    },
    {
      id: "lang-4",
      name: "Turkish",
      level: "Intermediate",
      flag: "🇹🇷",
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
