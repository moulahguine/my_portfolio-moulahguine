import { technologies } from "../Skills/skill-data";

// import porfolio media project
import porfolio from "../../assets/images/project-section/porfolio/porfolio.webp";

import ecommerce from "../../assets/images/project-section/ecommerce/ecommerce.webp";

import clinic from "../../assets/images/project-section/clinic/clinic.webp";

import Moder from "../../assets/images/project-section/modern/modern.webp";

const projectsData = [
  {
    id: 1,
    color: "#b4c7c1",
    subtitle: "Personal Frontend Developer Portfolio",
    description:
      "Built with React + SCSS to showcase work, design, and interaction. Mobile-first with smooth animations and polished UX.",

    demoLink: "https://mohamedoulahguine.com",
    githubLink: "https://github.com/moulahguine/my_portfolio-moulahguine",

    technologies: [
      {
        name: "NextJs",
        icon: technologies.NextJS.icon,
        color: technologies.NextJS.color,
      },
      {
        name: "SCSS",
        icon: technologies.SCSS.icon,
        color: technologies.SCSS.color,
      },
      {
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
    color: "#9f9f9f",
    subtitle: " Fashion Shop – E-Commerce Website",
    description:
      "Mastered dynamic product management and interactive UI behaviors. Overcame obstacles in responsive grids, mobile navigation, and performance tuning to create a seamless shopping experience.",

    demoLink: "https://e-fashionshop.netlify.app/",
    githubLink: "https://moulahguine.github.io/fashion-shop/",

    technologies: [
      {
        name: "React",
        icon: technologies.React.icon,
        color: technologies.React.color,
      },
      {
        name: "TailwindCSS",
        icon: technologies.TailwindCSS.icon,
        color: technologies.TailwindCSS.color,
      },
      {
        name: "vite",
        icon: technologies.Vite.icon,
        color: technologies.Vite.color,
      },
      {
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
    color: "#f1f1f1",
    subtitle: "Clinic Website",
    description:
      "Refined my approach to building complex dashboards. Addressed challenges in displaying structured data, creating responsive cards, and improving accessibility for better usability.",

    demoLink: "https://clinic-dashboard.netlify.app/",
    githubLink: "https://github.com/moulahguine/clinic-dashboard",

    technologies: [
      {
        name: "React",
        icon: technologies.React.icon,
        color: technologies.React.color,
      },
      {
        name: "Material UI",
        icon: technologies.MUI.icon,
        color: technologies.MUI.color,
      },
      {
        name: "TailwindCSS",
        icon: technologies.TailwindCSS.icon,
        color: technologies.TailwindCSS.color,
      },
      {
        name: "vite",
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
    color: "#f2f1f2",
    subtitle: "Modern Landing Page",
    description:
      "Focused on lightweight, high-performance interface design. Handled responsive layouts, smooth scrolling, and cross-device consistency to deliver a visually clean and engaging landing page.",

    demoLink: "https://modern-landingpage.netlify.app/",
    githubLink: "https://github.com/moulahguine/modern-landingpage",

    technologies: [
      {
        name: "HTML",
        icon: technologies.HTML.icon,
        color: technologies.HTML.color,
      },
      {
        name: "CSS",
        icon: technologies.CSS3.icon,
        color: technologies.CSS3.color,
      },
      {
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
