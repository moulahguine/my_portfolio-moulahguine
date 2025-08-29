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
  SiNpm,
  SiYarn,
  SiStyledcomponents,
  SiCssmodules,
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
  StyledComponents: "#DB7093",
  CSSModules: "#000000",
  Jest: "#C21325",
  Git: "#F05032",
  GitHub: "#181717",
  Vite: "#646CFF",
  npm: "#CB3837",
  Yarn: "#2C8EBB",
  "VS Code": "#007ACC",
  Figma: "#F24E1E",
  REST: "#FF6B6B",
  CI_CD: "#FF6B6B",
  Accessibility: "#4CAF50",
  Responsive: "#9C27B0",
  ReactQuery: "#FF4154",
  Testing: "#FF9800",
  APIs: "#2196F3",
};

// Skills data organized by categories
export const skillCategories = [
  {
    id: "foundation",
    name: "Foundation",
    icon: categoryIcons.foundation,
    skills: [
      {
        id: 1,
        name: "HTML",
        icon: FaHtml5,
        level: "Advanced",
        description: "Semantic markup & accessibility",
      },
      {
        id: 2,
        name: "CSS",
        icon: FaCss3Alt,
        level: "Advanced",
        description: "Modern layouts & animations",
      },
      {
        id: 3,
        name: "JavaScript",
        icon: FaJs,
        level: "Advanced",
        description: "ES6+ & modern patterns",
      },
      {
        id: 5,
        name: "Accessibility",
        icon: FaAccessibleIcon,
        level: "Proficient",
        description: "WCAG guidelines & a11y",
      },
      {
        id: 6,
        name: "Responsive",
        icon: FaLaptopCode,
        level: "Advanced",
        description: "Mobile-first design",
      },
    ],
  },
  {
    id: "frameworks",
    name: "Libraries & Frameworks",
    icon: categoryIcons.frameworks,
    skills: [
      {
        id: 7,
        name: "React",
        icon: FaReact,
        level: "Advanced",
        description: "Hooks, context & performance",
      },
      {
        id: 8,
        name: "NextJS",
        icon: SiNextdotjs,
        level: "learning",
        description: "SSR, SSG & app router",
      },
      {
        id: 9,
        name: "Redux",
        icon: SiRedux,
        level: "Proficient",
        description: "State management & toolkit",
      },
      {
        id: 10,
        name: "Framer",
        icon: SiFramer,
        level: "Proficient",
        description: "Animations & interactions",
      },
      {
        id: 11,
        name: "ReactQuery",
        icon: SiReactquery,
        level: "Learning",
        description: "Server state management",
      },
    ],
  },
  {
    id: "styling",
    name: "Styling",
    icon: categoryIcons.styling,
    skills: [
      {
        id: 12,
        name: "TailwindCSS",
        icon: SiTailwindcss,
        level: "Advanced",
        description: "Utility-first CSS",
      },
      {
        id: 13,
        name: "Sass",
        icon: SiSass,
        level: "Advanced",
        description: "Variables, mixins & nesting",
      },
      {
        id: 14,
        name: "StyledComponents",
        icon: SiStyledcomponents,
        level: "Proficient",
        description: "CSS-in-JS styling",
      },
      {
        id: 15,
        name: "CSSModules",
        icon: SiCssmodules,
        level: "Proficient",
        description: "Scoped CSS styling",
      },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    icon: categoryIcons.tools,
    skills: [
      {
        id: 16,
        name: "Git",
        icon: FaGithub,
        level: "Advanced",
        description: "Version control & workflows",
      },
      {
        id: 17,
        name: "GitHub",
        icon: FaGithub,
        level: "Advanced",
        description: "Collaboration & CI/CD",
      },
      {
        id: 18,
        name: "VS Code",
        icon: FaCode,
        level: "Advanced",
        description: "Extensions & debugging",
      },
      {
        id: 20,
        name: "Vite",
        icon: SiVite,
        level: "Proficient",
        description: "Fast build tool",
      },
      {
        id: 22,
        name: "npm",
        icon: SiNpm,
        level: "Advanced",
        description: "Package management",
      },
      {
        id: 23,
        name: "Yarn",
        icon: SiYarn,
        level: "Proficient",
        description: "Fast package manager",
      },
    ],
  },
  {
    id: "testing",
    name: "Testing",
    icon: categoryIcons.testing,
    skills: [
      {
        id: 25,
        name: "Jest",
        icon: SiJest,
        level: "Proficient",
        description: "Unit testing framework",
      },
      {
        id: 28,
        name: "Testing",
        icon: FaVial,
        level: "Proficient",
        description: "TDD & testing strategies",
      },
    ],
  },
  {
    id: "other",
    name: "Other",
    icon: categoryIcons.other,
    skills: [
      {
        id: 29,
        name: "REST",
        icon: TbApi,
        level: "Proficient",
        description: "API design & integration",
      },
      {
        id: 37,
        name: "Figma",
        icon: SiFigma,
        level: "Learning",
        description: "Design collaboration",
      },
    ],
  },
];

// Skill notes/context mapping — updated to reflect real-world usage & what hiring managers look for
export const skillNotes = {
  HTML: "Semantic, accessible markup; landmarks, forms, and SEO-ready structure",
  CSS: "Responsive layouts (Grid/Flex), modern selectors, transitions, reduced-motion",
  JavaScript:
    "ES6+ patterns, async/await, modules; SPA logic and data handling",
  React:
    "Hooks, context, composition; reusable components and performance tuning",
  NextJS:
    "SSR/SSG/ISR routing, metadata, image optimization, API routes for SEO",
  Redux: "Redux Toolkit slices & RTK Query for predictable app-wide state",
  Framer: "Variants, gestures, scroll effects; tasteful micro-interactions",
  TailwindCSS: "Design tokens via utilities; responsive/themed UI at speed",
  Sass: "Variables, mixins, partials; scalable BEM/7-1 architecture",
  StyledComponents:
    "Theme-driven, prop-based styles co-located with components",
  CSSModules: "Scoped styles for features; isolation without runtime overhead",
  Jest: "Unit tests, mocks, coverage; fast feedback on business logic",
  Git: "Feature branches, rebasing, clean history; code review workflows",
  GitHub: "PRs, issues, Projects; Actions for CI/CD pipelines",
  "VS Code": "Debugging, ESLint/Prettier, Git integration; productive setup",
  Vite: "Instant dev server, TS/React HMR; optimized builds & code splitting",
  npm: "Scripts, versioning, audits; safe dependency management",
  Yarn: "Workspaces and caching for multi-package repos",
  REST: "Resource design, auth, pagination; robust errors/retries",
  Figma: "Dev handoff, component specs/variables; translate design to code",
  Accessibility: "WCAG 2.2, ARIA patterns, keyboard nav, contrast checks",
  Responsive: "Mobile-first layouts, fluid typography, container queries",
  ReactQuery: "Caching, SWR, mutations; deduped requests and status UI",
  Testing: "Unit/integration/E2E strategy with RTL + Cypress/Playwright",
  APIs: "REST/GraphQL integration; auth flows, rate limits, optimistic UI",
};

// Helper function to get skill notes
export const getSkillNotes = (skill) => {
  return skillNotes[skill.name] || "Professional development";
};
