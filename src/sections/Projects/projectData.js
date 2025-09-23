import { SiReact, SiSass, SiFramer, SiReactrouter } from "react-icons/si";

// import porfolio media project
import laptop from "../../assets/images/project-section/porfolio-card/laptop.webp";

const projectsData = [
  {
    id: 1,

    subtitle: "Personal Frontend Developer Portfolio",
    description:
      "Built with React + SCSS to showcase work, design, and interaction. Mobile-first with smooth animations and polished UX.",

    demoLink: "https://mohamedoulahguine.com",
    githubLink: "https://github.com/moulahguine/my_portfolio-moulahguine",

    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "SCSS", icon: SiSass, color: "#CC6699" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "React Router", icon: SiReactrouter, color: "#F05032" },
    ],

    media: {
      laptop: laptop,
    },
  },
];

export default projectsData;
