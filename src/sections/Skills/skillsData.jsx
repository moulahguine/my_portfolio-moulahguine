import {
  technologies,
  skillColors,
} from "../../components/technologies/technologies";

// Re-export skillColors for backward compatibility
export { skillColors };

// ======================
// Skills for Two Rows
// ======================
export const skillsRow1 = [
  {
    id: 1,
    name: "HTML",
    icon: technologies.HTML.icon,
    blog: "HTML is the foundation of every web page. I learned HTML through building semantic, accessible websites. Understanding the importance of proper document structure, semantic elements like <header>, <main>, <section>, and accessibility attributes has been crucial. I've built numerous projects focusing on clean, semantic markup that works across all browsers and devices.",
  },
  {
    id: 2,
    name: "CSS",
    icon: technologies.CSS4.icon,
    blog: "CSS transformed how I approach web design. From basic styling to advanced techniques like Flexbox, Grid, and CSS animations, I've mastered the art of creating beautiful, responsive interfaces. I particularly enjoy working with CSS custom properties (variables) and modern layout techniques that make designs both flexible and maintainable.",
  },
  {
    id: 3,
    name: "Sass",
    icon: technologies.Sass.icon,
    blog: "Sass brought organization and power to my CSS. Variables, mixins, nesting, and functions have made my stylesheets more maintainable and DRY. I've built scalable CSS architectures using Sass, creating reusable components and maintaining consistent design systems across large projects.",
  },
  {
    id: 4,
    name: "JavaScript",
    icon: technologies.JavaScript.icon,
    blog: "JavaScript opened the door to interactive web development. Starting with ES5 fundamentals, I progressed through ES6+ features like arrow functions, destructuring, async/await, and modules. I've built everything from simple DOM manipulations to complex applications with modern JavaScript patterns, always focusing on clean, readable code.",
  },
  {
    id: 19,
    name: "TypeScript",
    icon: technologies.TypeScript.icon,
    blog: "TypeScript adds static typing to JavaScript for safer, scalable code. I use it to improve maintainability and developer experience.",
  },
  {
    id: 5,
    name: "React",
    icon: technologies.React.icon,
    blog: "React changed everything about how I think about building user interfaces. The component-based architecture, virtual DOM, and unidirectional data flow have made complex applications manageable. I've built everything from simple components to full-scale applications, always focusing on performance optimization and clean code patterns.",
  },
  {
    id: 18,
    name: "NextJS",
    icon: technologies.NextJS.icon,
    blog: "Next.js brings SSR/SSG, file-based routing, API routes, and great DX. I use it for SEO-friendly, production-ready React apps.",
  },
  {
    id: 6,
    name: "TailwindCSS",
    icon: technologies.TailwindCSS.icon,
    blog: "TailwindCSS revolutionized my styling workflow. The utility-first approach allows me to build custom designs rapidly without leaving HTML. I love how it promotes consistency, reduces CSS bloat, and enables rapid prototyping. The responsive prefixes and state variants make complex layouts surprisingly simple to implement.",
  },
];

export const skillsRow2 = [
  {
    id: 10,
    name: "Framer",
    icon: technologies.Framer.icon,
    blog: "Framer Motion brought my designs to life with smooth animations and transitions. I've learned to create engaging user experiences through gesture-based interactions, page transitions, and micro-animations. The declarative API makes complex animations surprisingly simple to implement and maintain.",
  },
  {
    id: 11,
    name: "ReactQuery",
    icon: technologies.ReactQuery.icon,
    blog: "React Query (TanStack Query) transformed how I handle server state. The powerful caching, background updates, and optimistic updates have made data fetching both efficient and user-friendly. I've implemented complex data synchronization patterns that keep users informed and applications responsive.",
  },
  {
    id: 12,
    name: "MUI",
    icon: technologies.MUI.icon,
    blog: "Material-UI provided me with a comprehensive design system and component library. I've learned to customize themes, create consistent interfaces, and leverage the extensive component ecosystem. The theming system allows me to maintain brand consistency while benefiting from Google's Material Design principles.",
  },

  {
    id: 17,
    name: "React Router",
    icon: technologies["React Router"].icon,
    blog: "React Router enables intuitive client-side routing with nested routes and data APIs. I use it for clean, accessible navigation and route-based code splitting.",
  },

  {
    id: 7,
    name: "Redux",
    icon: technologies.Redux.icon,
    blog: "Redux taught me the power of predictable state management. Understanding actions, reducers, and the store pattern has helped me build scalable applications with complex state requirements. I've implemented Redux Toolkit for modern Redux development, making state management both powerful and developer-friendly.",
  },
  {
    id: 8,
    name: "Jest",
    icon: technologies.Jest.icon,
    blog: "Jest has become my go-to testing framework for JavaScript applications. I've learned to write comprehensive unit tests, integration tests, and snapshot tests. The powerful mocking capabilities, assertion library, and excellent React integration have made testing an integral part of my development workflow, ensuring code quality and preventing regressions.",
  },
];

export const skillsRow3 = [
  {
    id: 9,
    name: "Vite",
    icon: technologies.Vite.icon,
    blog: "Vite has revolutionized my development experience with its lightning-fast build times and hot module replacement. The modern ES modules approach and excellent plugin ecosystem have made it my preferred build tool for React projects. The development server is incredibly fast, making the development cycle much more enjoyable.",
  },
  {
    id: 13,
    name: "Git",
    icon: technologies.Git.icon,
    blog: "Git is the backbone of modern development workflows. I've mastered version control concepts, branching strategies, and collaborative development practices. Understanding Git's distributed nature and powerful features like rebasing, cherry-picking, and conflict resolution has made me an effective team member and project maintainer.",
  },
  {
    id: 14,
    name: "GitHub",
    icon: technologies.GitHub.icon,
    blog: "GitHub extends Git with powerful collaboration features. I've learned to manage repositories, create pull requests, use GitHub Actions for CI/CD, and leverage the platform's project management tools. GitHub has become central to my workflow for code hosting, collaboration, and open-source contributions.",
  },
  {
    id: 15,
    name: "Cursor AI",
    icon: technologies["Cursor AI"].icon,
    blog: "Cursor AI has transformed how I write code. This AI-powered editor helps me write better code faster, debug issues more effectively, and learn new patterns and best practices. It's like having a senior developer pair programming with me, offering suggestions and helping me think through complex problems.",
  },
  {
    id: 16,
    name: "VS Code",
    icon: technologies["VS Code"].icon,
    blog: "VS Code is my primary development environment. I've customized it with extensions, themes, and settings that optimize my productivity. The integrated terminal, debugging tools, and extensive extension ecosystem make it a powerful IDE for any type of development work.",
  },
];
