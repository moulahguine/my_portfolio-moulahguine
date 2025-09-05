import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaAccessibleIcon,
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaTools,
  FaVial,
  FaRocket,
} from "react-icons/fa";
import {
  SiSass,
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiJest,
  SiReactquery,
  SiFigma,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

// Category icons mapping
export const categoryIcons = {
  foundation: FaLaptopCode,
  frameworks: FaCode,
  styling: FaPalette,
  tools: FaTools,
  testing: FaVial,
  other: FaRocket,
};

// Skill color mapping
export const skillColors = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  NextJS: "#000000",
  Redux: "#764ABC",
  Framer: "#0055FF",
  TailwindCSS: "#06B6D4",
  Sass: "#CC6699",
  Jest: "#C21325",
  Git: "#F05032",
  GitHub: "#181717",
  Vite: "#646CFF",
  "VS Code": "#007ACC",
  Figma: "#F24E1E",
  REST: "#FF6B6B",
  Accessibility: "#4CAF50",
  Responsive: "#9C27B0",
  ReactQuery: "#FF4154",
};

// Skills data organized by categories
export const skillCategories = [
  {
    id: "foundation",
    name: "Foundation",
    skills: [
      {
        id: 1,
        name: "HTML",
        icon: FaHtml5,
      },
      {
        id: 2,
        name: "CSS",
        icon: FaCss3Alt,
      },
      {
        id: 3,
        name: "JavaScript",
        icon: FaJs,
      },
      {
        id: 5,
        name: "Accessibility",
        icon: FaAccessibleIcon,
      },
      {
        id: 6,
        name: "Responsive",
        icon: FaLaptopCode,
      },
    ],
  },
  {
    id: "frameworks",
    name: "Libraries & Frameworks",
    skills: [
      {
        id: 7,
        name: "React",
        icon: FaReact,
      },
      {
        id: 8,
        name: "NextJS",
        icon: SiNextdotjs,
      },
      {
        id: 9,
        name: "Redux",
        icon: SiRedux,
      },
      {
        id: 10,
        name: "Framer",
        icon: SiFramer,
      },
      {
        id: 11,
        name: "ReactQuery",
        icon: SiReactquery,
      },
    ],
  },
  {
    id: "styling",
    name: "Styling",
    skills: [
      {
        id: 12,
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        id: 13,
        name: "Sass",
        icon: SiSass,
      },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    skills: [
      {
        id: 16,
        name: "Git",
        icon: FaGithub,
      },
      {
        id: 17,
        name: "GitHub",
        icon: FaGithub,
      },
      {
        id: 18,
        name: "VS Code",
        icon: FaCode,
      },
      {
        id: 20,
        name: "Vite",
        icon: SiVite,
      },
    ],
  },
  {
    id: "testing",
    name: "Testing",
    skills: [
      {
        id: 25,
        name: "Jest",
        icon: SiJest,
      },
    ],
  },
  {
    id: "other",
    name: "Other",
    skills: [
      {
        id: 29,
        name: "REST",
        icon: TbApi,
      },
      {
        id: 37,
        name: "Figma",
        icon: SiFigma,
      },
    ],
  },
];
