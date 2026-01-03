import { FaGithub, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiCsswizardry,
  SiFramer,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { BsEmojiDizzy } from "react-icons/bs";

// Icon map
export const iconMap = {
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
  SiCsswizardry,
  SiFramer,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  VscVscodeInsiders,
};

const DEFAULT_ICON = BsEmojiDizzy;

// SkillIcon component
function SkillIcon({ icon, color = "#6C757D", size = 28, title, className }) {
  const IconComponent = iconMap[icon] ?? DEFAULT_ICON;

  const iconElement = (
    <IconComponent size={size} color={color} style={{ color }} />
  );
  const mergedClassName = ["skill-icon", className].filter(Boolean).join(" ");

  return (
    <span className={mergedClassName} title={title} aria-hidden={!title}>
      {iconElement}
    </span>
  );
}

export default SkillIcon;

// Technologies mapping
export const technologies = {
  HTML: { name: "HTML", icon: "FaHtml5", color: "#E34F26" },
  CSS4: { name: "CSS4", icon: "SiCsswizardry", color: "#66309a" },
  JavaScript: { name: "JavaScript", icon: "FaJs", color: "#F7DF1E" },
  TypeScript: { name: "TypeScript", icon: "SiTypescript", color: "#007FFF" },
  React: { name: "React", icon: "FaReact", color: "#61DAFB" },
  NextJS: { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
  Redux: { name: "Redux", icon: "SiRedux", color: "#764ABC" },
  Framer: { name: "Framer", icon: "SiFramer", color: "#0055FF" },
  "Framer Motion": {
    name: "Framer Motion",
    icon: "SiFramer",
    color: "#0055FF",
  },
  TailwindCSS: {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "#06B6D4",
  },
  Sass: { name: "Sass", icon: "SiSass", color: "#CC6699" },
  SCSS: { name: "SCSS", icon: "SiSass", color: "#CC6699" },
  MUI: { name: "MUI", icon: "SiMui", color: "#007FFF" },
  Jest: { name: "Jest", icon: "SiJest", color: "#C21325" },
  Git: { name: "Git", icon: "FaGitAlt", color: "#F05032" },
  GitHub: { name: "GitHub", icon: "FaGithub", color: "#181717" },
  Vite: { name: "Vite", icon: "SiVite", color: "#646CFF" },
  "VS Code": { name: "VS Code", icon: "VscVscodeInsiders", color: "#007ACC" },
  Figma: { name: "Figma", icon: "FaHtml5", color: "#F24E1E" },
  REST: { name: "REST API", icon: "FaHtml5", color: "#FF6B6B" },
  Accessibility: { name: "Accessibility", icon: "FaHtml5", color: "#4CAF50" },
  Responsive: { name: "Responsive", icon: "FaHtml5", color: "#9C27B0" },
  ReactQuery: { name: "React Query", icon: "SiReactquery", color: "#FF4154" },
  "React Router": {
    name: "React Router",
    icon: "SiReactrouter",
    color: "#F05032",
  },
};

// Skills data
export const skills = [
  {
    id: 1,
    name: "HTML",
    icon: technologies.HTML.icon,
    color: technologies.HTML.color,
    blog: "HTML is the foundation of every web page. I learned HTML through building semantic, accessible websites. Understanding the importance of proper document structure, semantic elements like <header>, <main>, <section>, and accessibility attributes has been crucial. I've built numerous projects focusing on clean, semantic markup that works across all browsers and devices.",
    showOnHome: true,
  },
  {
    id: 2,
    name: "CSS4",
    icon: technologies.CSS4.icon,
    color: technologies.CSS4.color,
    blog: "CSS transformed how I approach web design. From basic styling to advanced techniques like Flexbox, Grid, and CSS animations, I've mastered the art of creating beautiful, responsive interfaces. I particularly enjoy working with CSS custom properties (variables) and modern layout techniques that make designs both flexible and maintainable.",
    showOnHome: true,
  },
  {
    id: 3,
    name: "Sass",
    icon: technologies.Sass.icon,
    color: technologies.Sass.color,
    blog: "Sass brought organization and power to my CSS. Variables, mixins, nesting, and functions have made my stylesheets more maintainable and DRY. I've built scalable CSS architectures using Sass, creating reusable components and maintaining consistent design systems across large projects.",
    showOnHome: true,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: technologies.JavaScript.icon,
    color: technologies.JavaScript.color,
    blog: "JavaScript opened the door to interactive web development. Starting with ES5 fundamentals, I progressed through ES6+ features like arrow functions, destructuring, async/await, and modules. I've built everything from simple DOM manipulations to complex applications with modern JavaScript patterns, always focusing on clean, readable code.",
    showOnHome: true,
  },
  {
    id: 19,
    name: "TypeScript",
    icon: technologies.TypeScript.icon,
    color: technologies.TypeScript.color,
    blog: "TypeScript adds static typing to JavaScript for safer, scalable code. I use it to improve maintainability and developer experience.",
    showOnHome: true,
  },
  {
    id: 5,
    name: "React",
    icon: technologies.React.icon,
    color: technologies.React.color,
    blog: "React changed everything about how I think about building user interfaces. The component-based architecture, virtual DOM, and unidirectional data flow have made complex applications manageable. I've built everything from simple components to full-scale applications, always focusing on performance optimization and clean code patterns.",
    showOnHome: true,
  },
  {
    id: 18,
    name: "NextJS",
    icon: technologies.NextJS.icon,
    color: technologies.NextJS.color,
    blog: "Next.js brings SSR/SSG, file-based routing, API routes, and great DX. I use it for SEO-friendly, production-ready React apps.",
    showOnHome: true,
  },
  {
    id: 6,
    name: "TailwindCSS",
    icon: technologies.TailwindCSS.icon,
    color: technologies.TailwindCSS.color,
    blog: "TailwindCSS revolutionized my styling workflow. The utility-first approach allows me to build custom designs rapidly without leaving HTML. I love how it promotes consistency, reduces CSS bloat, and enables rapid prototyping. The responsive prefixes and state variants make complex layouts surprisingly simple to implement.",
    showOnHome: true,
  },
  {
    id: 10,
    name: "Framer",
    icon: technologies.Framer.icon,
    color: technologies.Framer.color,
    blog: "Framer Motion brought my designs to life with smooth animations and transitions. I've learned to create engaging user experiences through gesture-based interactions, page transitions, and micro-animations. The declarative API makes complex animations surprisingly simple to implement and maintain.",
    showOnHome: true,
  },
  {
    id: 11,
    name: "ReactQuery",
    icon: technologies.ReactQuery.icon,
    color: technologies.ReactQuery.color,
    blog: "React Query (TanStack Query) transformed how I handle server state. The powerful caching, background updates, and optimistic updates have made data fetching both efficient and user-friendly. I've implemented complex data synchronization patterns that keep users informed and applications responsive.",
    showOnHome: true,
  },
  {
    id: 12,
    name: "MUI",
    icon: technologies.MUI.icon,
    color: technologies.MUI.color,
    blog: "Material-UI provided me with a comprehensive design system and component library. I've learned to customize themes, create consistent interfaces, and leverage the extensive component ecosystem. The theming system allows me to maintain brand consistency while benefiting from Google's Material Design principles.",
    showOnHome: true,
  },
  {
    id: 17,
    name: "React Router",
    icon: technologies["React Router"].icon,
    color: technologies["React Router"].color,
    blog: "React Router enables intuitive client-side routing with nested routes and data APIs. I use it for clean, accessible navigation and route-based code splitting.",
    showOnHome: true,
  },
  {
    id: 7,
    name: "Redux",
    icon: technologies.Redux.icon,
    color: technologies.Redux.color,
    blog: "Redux taught me the power of predictable state management. Understanding actions, reducers, and the store pattern has helped me build scalable applications with complex state requirements. I've implemented Redux Toolkit for modern Redux development, making state management both powerful and developer-friendly.",
    showOnHome: true,
  },
  {
    id: 8,
    name: "Jest",
    icon: technologies.Jest.icon,
    color: technologies.Jest.color,
    blog: "Jest has become my go-to testing framework for JavaScript applications. I've learned to write comprehensive unit tests, integration tests, and snapshot tests. The powerful mocking capabilities, assertion library, and excellent React integration have made testing an integral part of my development workflow, ensuring code quality and preventing regressions.",
    showOnHome: true,
  },
  {
    id: 9,
    name: "Vite",
    icon: technologies.Vite.icon,
    color: technologies.Vite.color,
    blog: "Vite has revolutionized my development experience with its lightning-fast build times and hot module replacement. The modern ES modules approach and excellent plugin ecosystem have made it my preferred build tool for React projects. The development server is incredibly fast, making the development cycle much more enjoyable.",
    showOnHome: true,
  },
  {
    id: 13,
    name: "Git",
    icon: technologies.Git.icon,
    color: technologies.Git.color,
    blog: "Git is the backbone of modern development workflows. I've mastered version control concepts, branching strategies, and collaborative development practices. Understanding Git's distributed nature and powerful features like rebasing, cherry-picking, and conflict resolution has made me an effective team member and project maintainer.",
    showOnHome: true,
  },
  {
    id: 14,
    name: "GitHub",
    icon: technologies.GitHub.icon,
    color: technologies.GitHub.color,
    blog: "GitHub extends Git with powerful collaboration features. I've learned to manage repositories, create pull requests, use GitHub Actions for CI/CD, and leverage the platform's project management tools. GitHub has become central to my workflow for code hosting, collaboration, and open-source contributions.",
    showOnHome: true,
  },
  {
    id: 16,
    name: "VS Code",
    icon: technologies["VS Code"].icon,
    color: technologies["VS Code"].color,
    blog: "VS Code is my primary development environment. I've customized it with extensions, themes, and settings that optimize my productivity. The integrated terminal, debugging tools, and extensive extension ecosystem make it a powerful IDE for any type of development work.",
    showOnHome: true,
  },
];

export const skillColors = skills.reduce((acc, skill) => {
  acc[skill.name] = skill.color;
  return acc;
}, {});
