import Image from "next/image";
import * as motion from "motion/react-client";
import {
  ExternalLinkIcon,
  GithubIcon,
} from "../../components/Icons/CustomIcons";
import SkillIcon from "../Skills/SkillIcon";
import "./Projects.scss";

import projectsData from "./projectData";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__header">Recent projects</h2>

        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
              style={{ "--project-color": project.color }}
            >
              <ProjectCard project={project} index={index} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <>
      <figure className="project-card__media">
        <Image
          className="project-card__mediaImg"
          src={project.media.image}
          alt={`${project.subtitle} - Frontend Development Project Screenshot`}
          width={1200}
          height={800}
          priority={index < 2}
          style={{ cursor: "pointer" }}
          // onClick={handleImageClick}
          // onContextMenu={(e) => e.preventDefault()}
        />

        <figcaption className="sr-only">
          {project.subtitle} – Project preview screenshot
        </figcaption>
      </figure>

      <div className="project-card__details">
        <h3 className="project-card__title">{project.subtitle}</h3>

        <div className="project-card__content">
          <p className="project-card__description">{project.description}</p>

          <div className="project-card__technologies">
            {project.technologies.map((tech, techIndex) => (
              <span
                style={{ "--colorTech": tech.color }}
                key={techIndex}
                className="project-card__tech-item"
                title={tech.name}
              >
                <SkillIcon
                  icon={tech.icon}
                  color={tech.color}
                  size={18}
                  title={tech.name}
                  className="project-card__tech-icon"
                />
                <span className="project-card__tech-name">{tech.name}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="project-card__links">
          <a
            href={project.demoLink}
            className="project-card__link demo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Live Demo"
            title="🔗 Live Demo"
          >
            <ExternalLinkIcon />
            <span> visit</span>
          </a>

          <a
            href={project.githubLink}
            className="project-card__link github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            title="💻 GitHub Repo"
          >
            <GithubIcon />
            <span>source</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
