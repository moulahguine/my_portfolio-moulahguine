import { technologies } from "@/data/skillsData";

// Project media assets
import porfolio from "@/assets/images/project-section/porfolio/porfolio.webp";
import ecommerce from "@/assets/images/project-section/ecommerce/ecommerce.webp";
import clinic from "@/assets/images/project-section/clinic/clinic.webp";
import Moder from "@/assets/images/project-section/modern/modern.webp";

// Single source of truth for all project metadata
// NOTE: Keep this structure stable – routing, filters and UI depend on it.
const projectsData = [
  {
    id: 1,
    slug: "personal-frontend-portfolio",
    title: "Personal Frontend Developer Portfolio",
    description:
      "Built with React + SCSS to showcase work, design, and interaction. Mobile-first with smooth animations and polished UX.",
    year: 2024,
    featured: true,

    color: "#b4c7c1",

    demoLink: "https://mohamedoulahguine.com",
    githubLink: "https://github.com/moulahguine/my_portfolio-moulahguine",

    technologies: [
      {
        techKey: "NextJS",
        name: "Next.js",
        icon: technologies.NextJS.icon,
        color: technologies.NextJS.color,
      },
      {
        techKey: "SCSS",
        name: "SCSS",
        icon: technologies.SCSS.icon,
        color: technologies.SCSS.color,
      },
      {
        techKey: "Framer Motion",
        name: "Framer Motion",
        icon: technologies["Framer Motion"].icon,
        color: technologies["Framer Motion"].color,
      },
    ],

    media: {
      image: porfolio,
    },
  },
  {
    id: 2,
    slug: "fashion-shop-ecommerce",
    title: "Fashion Shop  E-Commerce Website",
    description:
      "Mastered dynamic product management and interactive UI behaviors. Overcame obstacles in responsive grids, mobile navigation, and performance tuning to create a seamless shopping experience.",
    year: 2023,
    featured: true,

    color: "#9f9f9f",

    demoLink: "https://e-fashionshop.netlify.app/",
    githubLink: "https://moulahguine.github.io/fashion-shop/",

    technologies: [
      {
        techKey: "React",
        name: "React",
        icon: technologies.React.icon,
        color: technologies.React.color,
      },
      {
        techKey: "TailwindCSS",
        name: "Tailwind CSS",
        icon: technologies.TailwindCSS.icon,
        color: technologies.TailwindCSS.color,
      },
      {
        techKey: "Vite",
        name: "Vite",
        icon: technologies.Vite.icon,
        color: technologies.Vite.color,
      },
      {
        techKey: "JavaScript",
        name: "JavaScript",
        icon: technologies.JavaScript.icon,
        color: technologies.JavaScript.color,
      },
    ],

    media: {
      image: ecommerce,
    },
  },
  {
    id: 3,
    slug: "clinic-dashboard",
    title: "Clinic Website",
    description:
      "Refined my approach to building complex dashboards. Addressed challenges in displaying structured data, creating responsive cards, and improving accessibility for better usability.",
    year: 2023,
    featured: true,

    color: "#f1f1f1",

    demoLink: "https://clinic-dashboard.netlify.app/",
    githubLink: "https://github.com/moulahguine/clinic-dashboard",

    technologies: [
      {
        techKey: "React",
        name: "React",
        icon: technologies.React.icon,
        color: technologies.React.color,
      },
      {
        techKey: "MUI",
        name: "Material UI",
        icon: technologies.MUI.icon,
        color: technologies.MUI.color,
      },
      {
        techKey: "TailwindCSS",
        name: "Tailwind CSS",
        icon: technologies.TailwindCSS.icon,
        color: technologies.TailwindCSS.color,
      },
      {
        techKey: "Vite",
        name: "Vite",
        icon: technologies.Vite.icon,
        color: technologies.Vite.color,
      },
    ],

    media: {
      image: clinic,
    },
  },
  {
    id: 4,
    slug: "modern-landing-page",
    title: "Modern Landing Page",
    description:
      "Focused on lightweight, high-performance interface design. Handled responsive layouts, smooth scrolling, and cross-device consistency to deliver a visually clean and engaging landing page.",
    year: 2022,
    featured: false,

    color: "#f2f1f2",

    demoLink: "https://modern-landingpage.netlify.app/",
    githubLink: "https://github.com/moulahguine/modern-landingpage",

    technologies: [
      {
        techKey: "HTML",
        name: "HTML",
        icon: technologies.HTML.icon,
        color: technologies.HTML.color,
      },
      {
        techKey: "CSS3",
        name: "CSS",
        icon: technologies.CSS3.icon,
        color: technologies.CSS3.color,
      },
      {
        techKey: "JavaScript",
        name: "JavaScript",
        icon: technologies.JavaScript.icon,
        color: technologies.JavaScript.color,
      },
    ],

    media: {
      image: Moder,
    },
  },
];

export default projectsData;
