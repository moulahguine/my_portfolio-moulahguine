import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaTools,
  FaVial,
  FaRocket,
} from "react-icons/fa";
import {
  SiSass,
  SiFramer,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiJest,
  SiReactquery,
  SiMui,
} from "react-icons/si";

import Cursor from "../../assets/images/skill-section/cursor/cursor-dark.png";
import VsCode from "../../assets/images/skill-section/vscode/vscode.png";
import css from "../../assets/images/skill-section/css/css.svg.png";

const CursorIcon = () => (
  <img src={Cursor} alt="Cursor AI" style={{ width: 30, height: 30 }} />
);

const VscodeIcon = () => (
  <img src={VsCode} alt="Cursor AI" style={{ width: 30, height: 30 }} />
);

const cssIcon = () => (
  <img src={css} alt="Cursor AI" style={{ width: 30, height: 30 }} />
);

// ======================
// Category Icons Mapping
// ======================
export const categoryIcons = {
  core: FaLaptopCode,
  frameworks: FaCode,
  styling: FaPalette,
  tools: FaTools,
  testing: FaVial,
  design: FaRocket,
};

// ======================
// Skill Colors
// ======================
export const skillColors = {
  HTML: "#E34F26",
  CSS: "#66309a",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  NextJS: "#000000",
  Redux: "#764ABC",
  Framer: "#0055FF",
  TailwindCSS: "#06B6D4",
  Sass: "#CC6699",
  MUI: "#007FFF",
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
  "Cursor AI": "#424242",
};

// ======================
// Organized Skills
// ======================
export const skillCategories = [
  {
    id: "core",
    name: "Core Skills",
    skills: [
      {
        id: 1,
        name: "HTML",
        icon: FaHtml5,
        blog: "HTML is the foundation of every web page. I learned HTML through building semantic, accessible websites. Understanding the importance of proper document structure, semantic elements like <header>, <main>, <section>, and accessibility attributes has been crucial. I've built numerous projects focusing on clean, semantic markup that works across all browsers and devices.",
      },
      {
        id: 2,
        name: "CSS",
        icon: cssIcon,
        blog: "CSS transformed how I approach web design. From basic styling to advanced techniques like Flexbox, Grid, and CSS animations, I've mastered the art of creating beautiful, responsive interfaces. I particularly enjoy working with CSS custom properties (variables) and modern layout techniques that make designs both flexible and maintainable.",
      },
      {
        id: 3,
        name: "JavaScript",
        icon: FaJs,
        blog: "JavaScript opened the door to interactive web development. Starting with ES5 fundamentals, I progressed through ES6+ features like arrow functions, destructuring, async/await, and modules. I've built everything from simple DOM manipulations to complex applications with modern JavaScript patterns, always focusing on clean, readable code.",
      },
      // {
      //   id: 4,
      //   name: "Accessibility",
      //   icon: FaAccessibleIcon,
      //   blog: "Accessibility isn't optional—it's essential. I've learned to build inclusive web experiences using ARIA attributes, semantic HTML, keyboard navigation, and screen reader compatibility. Understanding WCAG guidelines and implementing accessible design patterns ensures everyone can use the applications I create.",
      // },
      // {
      //   id: 5,
      //   name: "Responsive",
      //   icon: FaLaptopCode,
      //   blog: "Responsive design is about creating experiences that work seamlessly across all devices. I've mastered mobile-first design principles, flexible layouts, and media queries. From fluid typography to adaptive images, I ensure every project looks and functions perfectly on phones, tablets, and desktops.",
      // },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    skills: [
      {
        id: 6,
        name: "React",
        icon: FaReact,
        blog: "React changed everything about how I think about building user interfaces. The component-based architecture, virtual DOM, and unidirectional data flow have made complex applications manageable. I've built everything from simple components to full-scale applications, always focusing on performance optimization and clean code patterns.",
      },
      {
        id: 8,
        name: "Redux",
        icon: SiRedux,
        blog: "Redux taught me the power of predictable state management. Understanding actions, reducers, and the store pattern has helped me build scalable applications with complex state requirements. I've implemented Redux Toolkit for modern Redux development, making state management both powerful and developer-friendly.",
      },
      {
        id: 9,
        name: "Framer",
        icon: SiFramer,
        blog: "Framer Motion brought my designs to life with smooth animations and transitions. I've learned to create engaging user experiences through gesture-based interactions, page transitions, and micro-animations. The declarative API makes complex animations surprisingly simple to implement and maintain.",
      },
      {
        id: 10,
        name: "ReactQuery",
        icon: SiReactquery,
        blog: "React Query (TanStack Query) transformed how I handle server state. The powerful caching, background updates, and optimistic updates have made data fetching both efficient and user-friendly. I've implemented complex data synchronization patterns that keep users informed and applications responsive.",
      },
      {
        id: 11,
        name: "MUI",
        icon: SiMui,
        blog: "Material-UI provided me with a comprehensive design system and component library. I've learned to customize themes, create consistent interfaces, and leverage the extensive component ecosystem. The theming system allows me to maintain brand consistency while benefiting from Google's Material Design principles.",
      },
    ],
  },
  {
    id: "styling",
    name: "Styling & UI",
    skills: [
      {
        id: 12,
        name: "TailwindCSS",
        icon: SiTailwindcss,
        blog: "TailwindCSS revolutionized my styling workflow. The utility-first approach allows me to build custom designs rapidly without leaving HTML. I love how it promotes consistency, reduces CSS bloat, and enables rapid prototyping. The responsive prefixes and state variants make complex layouts surprisingly simple to implement.",
      },
      {
        id: 13,
        name: "Sass",
        icon: SiSass,
        blog: "Sass brought organization and power to my CSS. Variables, mixins, nesting, and functions have made my stylesheets more maintainable and DRY. I've built scalable CSS architectures using Sass, creating reusable components and maintaining consistent design systems across large projects.",
      },
    ],
  },
  {
    id: "testing",
    name: "Testing",
    skills: [
      {
        id: 19,
        name: "Jest",
        icon: SiJest,
        blog: "Jest has become my go-to testing framework for JavaScript applications. I've learned to write comprehensive unit tests, integration tests, and snapshot tests. The powerful mocking capabilities, assertion library, and excellent React integration have made testing an integral part of my development workflow, ensuring code quality and preventing regressions.",
      },
    ],
  },
  {
    id: "tools",
    name: "Developer Tools",
    skills: [
      {
        id: 14,
        name: "Git",
        icon: FaGithub,
        blog: "Git is the backbone of modern development workflows. I've mastered version control concepts, branching strategies, and collaborative development practices. Understanding Git's distributed nature and powerful features like rebasing, cherry-picking, and conflict resolution has made me an effective team member and project maintainer.",
      },
      {
        id: 15,
        name: "GitHub",
        icon: FaGithub,
        blog: "GitHub extends Git with powerful collaboration features. I've learned to manage repositories, create pull requests, use GitHub Actions for CI/CD, and leverage the platform's project management tools. GitHub has become central to my workflow for code hosting, collaboration, and open-source contributions.",
      },
      {
        id: 16,
        name: "VS Code",
        icon: VscodeIcon,
        blog: "VS Code is my primary development environment. I've customized it with extensions, themes, and settings that optimize my productivity. The integrated terminal, debugging tools, and extensive extension ecosystem make it a powerful IDE for any type of development work.",
      },
      {
        id: 17,
        name: "Vite",
        icon: SiVite,
        blog: "Vite has revolutionized my development experience with its lightning-fast build times and hot module replacement. The modern ES modules approach and excellent plugin ecosystem have made it my preferred build tool for React projects. The development server is incredibly fast, making the development cycle much more enjoyable.",
      },
      {
        id: 18,
        name: "Cursor AI",
        icon: CursorIcon,
        blog: "Cursor AI has transformed how I write code. This AI-powered editor helps me write better code faster, debug issues more effectively, and learn new patterns and best practices. It's like having a senior developer pair programming with me, offering suggestions and helping me think through complex problems.",
      },
    ],
  },
];
