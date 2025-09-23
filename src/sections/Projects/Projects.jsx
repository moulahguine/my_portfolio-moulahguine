import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.scss";

import projectsData from "./projectData";

function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.header
        className="projects__header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="projects__title">Projects</h2>
        <p className="projects__subtitle">Interfaces I Built From Scratch</p>
      </motion.header>
      <main className="container">
        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>
    </section>
  );
}

// ProjectCard component for individual project display...

function ProjectCard({ project, index }) {
  const renderMedia = () => {
    return (
      <img
        className="project-card__media"
        src={project.media.laptop}
        alt={`${project.title} laptop view`}
      />
    );
  };

  return (
    <motion.section
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <main className="project-card__container">
        <div className="project-card__media-section">
          <div className="project-card__media-container">{renderMedia()}</div>
        </div>

        <div className="project-card__details">
          <header className="project-card__header">
            <p className="project-card__title">{project.subtitle}</p>
          </header>
          <div className="project-card__content">
            <p className="project-card__description">{project.description}</p>

            {/* Tech Stack Section */}
            <div className="project-card__tech-stack">
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
                      <IconComponent style={{ color: tech.color }} size={15} />
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
      </main>
    </motion.section>
  );
}

export default Projects;
