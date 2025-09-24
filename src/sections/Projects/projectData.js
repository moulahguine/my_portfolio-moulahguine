import { technologies } from "../../components/technologies/technologies";

// import porfolio media project
import porfolio from "../../assets/images/project-section/porfolio.webp";
import ecommerce from "../../assets/images/project-section/ecommerce.webp";
import clinic from "../../assets/images/project-section/clinic.webp";
import Moder from "../../assets/images/project-section/modern.webp";

const projectsData = [
  {
    id: 1,

    subtitle: "Personal Frontend Developer Portfolio",
    description:
      "Built with React + SCSS to showcase work, design, and interaction. Mobile-first with smooth animations and polished UX.",

    demoLink: "https://mohamedoulahguine.com",
    githubLink: "https://github.com/moulahguine/my_portfolio-moulahguine",

    technologies: [
      {
        name: "React",
        icon: technologies.React.icon,
        color: technologies.React.color,
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
      {
        name: "React Router",
        icon: technologies["React Router"].icon,
        color: technologies["React Router"].color,
      },
    ],

    media: {
      image: porfolio,
    },
  },
  {
    id: 2,

    subtitle: "Personal Frontend Developer Portfolio",
    description:
      "Built with React + SCSS to showcase work, design, and interaction. Mobile-first with smooth animations and polished UX.",

    demoLink: "https://mohamedoulahguine.com",
    githubLink: "https://github.com/moulahguine/my_portfolio-moulahguine",

    technologies: [
      {
        name: "React",
        icon: technologies.React.icon,
        color: technologies.React.color,
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
      {
        name: "React Router",
        icon: technologies["React Router"].icon,
        color: technologies["React Router"].color,
      },
    ],

    media: {
      image: ecommerce,
    },
  },
  {
    id: 3,

    subtitle: "Personal Frontend Developer Portfolio",
    description:
      "Built with React + SCSS to showcase work, design, and interaction. Mobile-first with smooth animations and polished UX.",

    demoLink: "https://mohamedoulahguine.com",
    githubLink: "https://github.com/moulahguine/my_portfolio-moulahguine",

    technologies: [
      {
        name: "React",
        icon: technologies.React.icon,
        color: technologies.React.color,
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
      {
        name: "React Router",
        icon: technologies["React Router"].icon,
        color: technologies["React Router"].color,
      },
    ],

    media: {
      image: clinic,
    },
  },
  {
    id: 4,

    subtitle: "Personal Frontend Developer Portfolio",
    description:
      "Built with React + SCSS to showcase work, design, and interaction. Mobile-first with smooth animations and polished UX.",

    demoLink: "https://mohamedoulahguine.com",
    githubLink: "https://github.com/moulahguine/my_portfolio-moulahguine",

    technologies: [
      {
        name: "React",
        icon: technologies.React.icon,
        color: technologies.React.color,
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
      {
        name: "React Router",
        icon: technologies["React Router"].icon,
        color: technologies["React Router"].color,
      },
    ],

    media: {
      image: Moder,
    },
  },
];

export default projectsData;
