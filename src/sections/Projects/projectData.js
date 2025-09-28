import { technologies } from "../../components/technologies/technologies";

// import porfolio media project
import porfolio from "../../assets/images/project-section/porfolio/porfolio.webp";
import porfolio400 from "../../assets/images/project-section/porfolio/porfolio_400.webp";
import porfolio600 from "../../assets/images/project-section/porfolio/porfolio_600.webp";
import porfolio800 from "../../assets/images/project-section/porfolio/porfolio_800.webp";
import porfolio1000 from "../../assets/images/project-section/porfolio/porfolio_1000.webp";
import porfolio1200 from "../../assets/images/project-section/porfolio/porfolio_1200.webp";

import ecommerce from "../../assets/images/project-section/ecommerce/ecommerce.webp";
import ecommerce400 from "../../assets/images/project-section/ecommerce/ecommerce_400.webp";
import ecommerce600 from "../../assets/images/project-section/ecommerce/ecommerce_600.webp";
import ecommerce800 from "../../assets/images/project-section/ecommerce/ecommerce_800.webp";
import ecommerce1000 from "../../assets/images/project-section/ecommerce/ecommerce_1000.webp";
import ecommerce1200 from "../../assets/images/project-section/ecommerce/ecommerce_1200.webp";

import clinic from "../../assets/images/project-section/clinic/clinic.webp";
import clinic400 from "../../assets/images/project-section/clinic/clinic_400.webp";
import clinic600 from "../../assets/images/project-section/clinic/clinic_600.webp";
import clinic800 from "../../assets/images/project-section/clinic/clinic_800.webp";
import clinic1000 from "../../assets/images/project-section/clinic/clinic_1000.webp";
import clinic1200 from "../../assets/images/project-section/clinic/clinic_1200.webp";

import Moder from "../../assets/images/project-section/modern/modern.webp";
import modern400 from "../../assets/images/project-section/modern/modern_400.webp";
import modern600 from "../../assets/images/project-section/modern/modern_600.webp";
import modern800 from "../../assets/images/project-section/modern/modern_800.webp";
import modern1000 from "../../assets/images/project-section/modern/modern_1000.webp";
import modern1200 from "../../assets/images/project-section/modern/modern_1200.webp";

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
      srcSet: `${porfolio400} 400w, ${porfolio600} 600w, ${porfolio800} 800w, ${porfolio1000} 1000w, ${porfolio1200} 1200w`,
      sizes: "(max-width: 778px) 100vw, 50vw",
    },
  },
  {
    id: 2,
    color: "#9f9f9f",
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
      srcSet: `${ecommerce400} 400w, ${ecommerce600} 600w, ${ecommerce800} 800w, ${ecommerce1000} 1000w, ${ecommerce1200} 1200w`,
      sizes: "(max-width: 778px) 100vw, 50vw",
    },
  },
  {
    id: 3,
    color: "#f1f1f1",
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
      srcSet: `${clinic400} 400w, ${clinic600} 600w, ${clinic800} 800w, ${clinic1000} 1000w, ${clinic1200} 1200w`,
      sizes: "(max-width: 778px) 100vw, 50vw",
    },
  },
  {
    id: 4,
    color: "#f2f1f2",
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
      srcSet: `${modern400} 400w, ${modern600} 600w, ${modern800} 800w, ${modern1000} 1000w, ${modern1200} 1200w`,
      sizes: "(max-width: 778px) 100vw, 50vw",
    },
  },
];

export default projectsData;
