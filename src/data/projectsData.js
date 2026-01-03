import { technologies } from "@/data/skillsData";

// Project media assets
import porfolio from "@/assets/images/project-section/porfolio/porfolio.webp";
import ecommerce from "@/assets/images/project-section/ecommerce/ecommerce.webp";
import clinic from "@/assets/images/project-section/clinic/clinic.webp";
import Moder from "@/assets/images/project-section/modern/modern.webp";

// Single source of truth for all project metadata
const projectsData = [
  {
    id: 1,
    slug: "personal-frontend-portfolio",
    title: "Personal Frontend Developer Portfolio",
    description:
      "How I turn UI ideas into smooth, real interactions. Built to show how I think, not just what I know.",
    year: 2024,
    featured: true,

    color: "#b4c7c1",

    demoLink: "https://mohamedoulahguine.com",
    githubLink: "https://github.com/moulahguine/my_portfolio-moulahguine",

    technologies: [
      {
        techKey: technologies.NextJS.name,
        name: technologies.NextJS.name,
        icon: technologies.NextJS.icon,
        color: technologies.NextJS.color,
      },
      {
        techKey: technologies.SCSS.name,
        name: technologies.SCSS.name,
        icon: technologies.SCSS.icon,
        color: technologies.SCSS.color,
      },
      {
        techKey: technologies["Framer Motion"].name,
        name: technologies["Framer Motion"].name,
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
    title: "Fashion Shop  E-Commerce Website",
    description:
      "From browsing to buying, every interaction is intentional. Built to handle real product behavior.",
    year: 2023,
    featured: true,

    color: "#9f9f9f",

    demoLink: "https://e-fashionshop.netlify.app/",
    githubLink: "https://moulahguine.github.io/fashion-shop/",

    technologies: [
      {
        techKey: technologies.React.name,
        name: technologies.React.name,
        icon: technologies.React.icon,
        color: technologies.React.color,
      },
      {
        techKey: technologies.TailwindCSS.name,
        name: technologies.TailwindCSS.name,
        icon: technologies.TailwindCSS.icon,
        color: technologies.TailwindCSS.color,
      },
      {
        techKey: technologies.Vite.name,
        name: technologies.Vite.name,
        icon: technologies.Vite.icon,
        color: technologies.Vite.color,
      },
      {
        techKey: technologies.JavaScript.name,
        name: technologies.JavaScript.name,
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
    featured: false,

    color: "#f1f1f1",

    demoLink: "https://clinic-dashboard.netlify.app/",
    githubLink: "https://github.com/moulahguine/clinic-dashboard",

    technologies: [
      {
        techKey: technologies.React.name,
        name: technologies.React.name,
        icon: technologies.React.icon,
        color: technologies.React.color,
      },
      {
        techKey: technologies.MUI.name,
        name: technologies.MUI.name,
        icon: technologies.MUI.icon,
        color: technologies.MUI.color,
      },
      {
        techKey: technologies.TailwindCSS.name,
        name: technologies.TailwindCSS.name,
        icon: technologies.TailwindCSS.icon,
        color: technologies.TailwindCSS.color,
      },
      {
        techKey: technologies.Vite.name,
        name: technologies.Vite.name,
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
        techKey: technologies.HTML.name,
        name: technologies.HTML.name,
        icon: technologies.HTML.icon,
        color: technologies.HTML.color,
      },
      {
        techKey: technologies.CSS4.name,
        name: technologies.CSS4.name,
        icon: technologies.CSS4.icon,
        color: technologies.CSS4.color,
      },
      {
        techKey: technologies.JavaScript.name,
        name: technologies.JavaScript.name,
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
