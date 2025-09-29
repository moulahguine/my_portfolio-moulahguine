// All technology icons and colors in one place
import { FaHtml5, FaJs, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiSass,
  SiFramer,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiJest,
  SiReactquery,
  SiMui,
  SiReactrouter,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import Cursor from "../../assets/images/skill-section/cursor/cursor-dark.webp";
import VsCode from "../../assets/images/skill-section/vscode/vscode.webp";
import css from "../../assets/images/skill-section/css/css.webp";

// Custom icon components for images
const CursorIcon = () => (
  <img
    src={Cursor}
    alt="Cursor AI"
    loading="lazy"
    decoding="async"
    style={{ width: 40, aspectRatio: 1 / 1 }}
  />
);

const VscodeIcon = () => (
  <img
    src={VsCode}
    alt="vs code logo"
    loading="lazy"
    decoding="async"
    style={{ width: 40, aspectRatio: 1 / 1 }}
  />
);

const cssIcon = () => (
  <img
    src={css}
    alt="css logo"
    loading="lazy"
    decoding="async"
    style={{ width: 40, aspectRatio: 1 / 1 }}
  />
);

// Technology definitions with icons and colors
export const technologies = {
  HTML: { icon: FaHtml5, color: "#E34F26" },
  CSS: { icon: cssIcon, color: "#66309a" },
  JavaScript: { icon: FaJs, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#007FFF" },
  React: { icon: FaReact, color: "#61DAFB" },
  NextJS: { icon: SiNextdotjs, color: "#000000" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  Framer: { icon: SiFramer, color: "#0055FF" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
  Sass: { icon: SiSass, color: "#CC6699" },
  SCSS: { icon: SiSass, color: "#CC6699" },
  MUI: { icon: SiMui, color: "#007FFF" },
  Jest: { icon: SiJest, color: "#C21325" },
  Git: { icon: FaGitAlt, color: "#F05032" },
  GitHub: { icon: FaGithub, color: "#181717" },
  Vite: { icon: SiVite, color: "#646CFF" },
  "VS Code": { icon: VscodeIcon, color: "#007ACC" },
  Figma: { icon: FaHtml5, color: "#F24E1E" }, // Placeholder icon
  REST: { icon: FaHtml5, color: "#FF6B6B" }, // Placeholder icon
  Accessibility: { icon: FaHtml5, color: "#4CAF50" }, // Placeholder icon
  Responsive: { icon: FaHtml5, color: "#9C27B0" }, // Placeholder icon
  ReactQuery: { icon: SiReactquery, color: "#FF4154" },
  "Cursor AI": { icon: CursorIcon, color: "#424242" },
  "React Router": { icon: SiReactrouter, color: "#F05032" },
};

// Export skillColors for backward compatibility (derived from technologies)
export const skillColors = Object.fromEntries(
  Object.entries(technologies).map(([name, tech]) => [name, tech.color])
);

// Helper function to get technology data
export const getTechnology = (name) => {
  return technologies[name] || { icon: FaHtml5, color: "#6C757D" };
};

// Helper function to get technology color
export const getTechnologyColor = (name) => {
  return technologies[name]?.color || "#6C757D";
};
