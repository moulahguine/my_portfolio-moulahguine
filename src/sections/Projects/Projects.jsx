import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLaptop,
  FaPlayCircle,
} from "react-icons/fa";
import {
  SiReact,
  SiSass,
  SiFramer,
  SiReactrouter,
  SiFormspree,
} from "react-icons/si";
import "./Projects.scss";

// import porfolio media project
import video from "../../assets/images/project-section/porfolio-card/fullRecord.mp4";
import laptop from "../../assets/images/project-section/porfolio-card/laptop.png";
import logo from "../../assets/images/project-section/porfolio-card/android-chrome-192x192.png";

function Projects() {
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

      role: [
        "Designed UI from scratch",
        "Created interactive dialogs",
        "Optimized performance",
        "Built responsive layouts",
      ],

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

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects__header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="projects__title">Projects</h2>
        <p className="projects__subtitle">Interfaces I Built From Scratch</p>
      </motion.div>
      <div className="container">
        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ProjectCard component for individual project display...

function ProjectCard({ project, index }) {
  const [activeMedia, setActiveMedia] = useState("video");
  const mediaButtons = [
    { key: "video", icon: FaPlayCircle, label: "Video Demo" },
    { key: "laptop", icon: FaLaptop, label: "Laptop View" },
  ];

  const renderMedia = () => {
    const mediaUrl = project.media[activeMedia];

    if (activeMedia === "video") {
      return (
        <video
          className="project-card__media video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
      <img
        className="project-card__media"
        src={mediaUrl}
        alt={`${project.title} ${activeMedia} view`}
      />
    );
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="project-card__container">
        {/* Left Side */}
        <div className="project-card__media-section">
          <div className="project-card__media-container">{renderMedia()}</div>

          {/* Media Control Buttons */}
          <div className="project-card__media-controls">
            {mediaButtons.map((button) => {
              const IconComponent = button.icon;
              return (
                <button
                  key={button.key}
                  className={`project-card__media-btn ${
                    activeMedia === button.key
                      ? "project-card__media-btn--active"
                      : ""
                  }`}
                  onClick={() => setActiveMedia(button.key)}
                  aria-label={button.label}
                  title={button.label}
                >
                  <IconComponent />
                </button>
              );
            })}
          </div>
        </div>
        {/* Right Side  */}
        <div className="project-card__details">
          <div className="project-card__header">
            <div className="project-card__logo">
              <img src={project.logo} alt={`${project.title} logo`} />
            </div>
            <div className="project-card__title-section">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__subtitle">{project.subtitle}</p>
            </div>
          </div>
          <div className="project-card__content">
            <p className="project-card__description">{project.description}</p>

            {/* Role & Contribution Section */}
            <div className="project-card__role">
              <ul className="project-card__role-list">
                {project.role.map((item, index) => (
                  <li key={index} className="project-card__role-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Section */}
            <div className="project-card__tech-stack">
              <h4 className="project-card__tech-title">Tech Stack :</h4>
              <div className="project-card__technologies">
                {project.technologies.map((tech, techIndex) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      style={{ "--colorTech": tech.color }}
                      key={techIndex}
                      className="project-card__tech-item"
                      title={tech.name}
                    >
                      <IconComponent style={{ color: tech.color }} size={20} />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="project-card__links">
            <a
              href={project.demoLink}
              className="project-card__link project-card__link demo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Live Demo"
              title="🔗 Live Demo"
            >
              <FaExternalLinkAlt />
              <span> visit</span>
            </a>
            <a
              href={project.githubLink}
              className="project-card__link project-card__link github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              title="💻 GitHub Repo"
            >
              <FaGithub />
              <span>source</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
