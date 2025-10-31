"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLinkIcon,
  GithubIcon,
} from "../../components/Icons/CustomIcons";
import "./Projects.scss";

import projectsData from "./projectData";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <header className="projects__header">
        <h2 className="projects__title">Projects</h2>
        <p className="projects__subtitle">Interfaces I Built From Scratch</p>
      </header>
      <main className="container">
        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </main>
    </motion.section>
  );
}

// ProjectCard component for individual project display...
const ProjectCard = React.memo(function ProjectCard({ project, index }) {
  const handleImageClick = useCallback(() => {
    window.open(project.demoLink, "_blank", "noopener,noreferrer");
  }, [project.demoLink]);

  const [isExpanded, setIsExpanded] = useState(false);
  const words = (project.description || "").trim().split(" ");
  const shortText = words.slice(0, 17).join(" ");
  const hasMore = words.length > 17;

  return (
    <section
      className="project-card"
      style={{ "--project-color": project.color }}
    >
      <main className="project-card__container">
        <div className="project-card__media-section">
          <div className="project-card__media-container">
            <Image
              className="project-card__media"
              src={project.media.image}
              alt={`${project.subtitle} - Frontend Development Project Screenshot`}
              sizes={project.media.sizes}
              onClick={handleImageClick}
              onContextMenu={(e) => e.preventDefault()}
              style={{ cursor: "pointer" }}
              width={1200}
              height={800}
              priority={index < 2}
            />
          </div>
        </div>

        <div className="project-card__details">
          <header className="project-card__header">
            <p className="project-card__title">{project.subtitle}</p>
          </header>
          <div className="project-card__content">
            <p className="project-card__description">
              {isExpanded ? project.description : shortText}
              {!isExpanded && hasMore ? "..." : ""}
              {hasMore && (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#718096",
                    cursor: "pointer",
                  }}
                  type="button"
                  className="project-card__toggle"
                  aria-expanded={isExpanded}
                  onClick={() => setIsExpanded((v) => !v)}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </p>

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
              <ExternalLinkIcon />
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
              <GithubIcon />
              <span>source</span>
            </a>
          </div>
        </div>
      </main>
    </section>
  );
});

export default Projects;
