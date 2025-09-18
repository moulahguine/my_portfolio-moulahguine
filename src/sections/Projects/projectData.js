import {
  SiReact,
  SiSass,
  SiFramer,
  SiReactrouter,
  SiFormspree,
} from "react-icons/si";

// import porfolio media project
import video from "../../assets/images/project-section/porfolio-card/fullRecord.mp4";
import laptop from "../../assets/images/project-section/porfolio-card/laptop.png";
import logo from "../../assets/images/project-section/porfolio-card/android-chrome-192x192.png";

const projectsData = [
  {
    id: 1,
    title: "OULAHGUINE",
    subtitle: "Personal Frontend Developer Portfolio",
    description:
      "Built with React + SCSS to showcase work, design, and interaction. Mobile-first with smooth animations and polished UX.",
    year: 2025,
    logo: logo,
    demoLink: "https://mohamedoulahguine.com",
    githubLink: "https://github.com/moulahguine/my_portfolio-moulahguine",

    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "SCSS", icon: SiSass, color: "#CC6699" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "React Router", icon: SiReactrouter, color: "#F05032" },
      { name: "Formspree", icon: SiFormspree, color: "#FF6B6B" },
    ],

    media: {
      laptop: laptop,
      video: video,
    },
  },
];

export default projectsData;
