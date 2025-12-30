import Image from "next/image";
import SkillIcon from "@/sections/Skills/SkillIcon";
import ProjectLinks from "./ProjectLinks";
import { GoArrowUpRight } from "react-icons/go";
import "./ProjectCard.scss";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <>
      <figure className="project-card__media">
        <Image
          className="project-card__mediaImg"
          src={project.media.image}
          alt={`${project.title} - Frontend Development Project Screenshot`}
          width={1200}
          height={800}
        />

        <figcaption className="sr-only">
          {project.title} – Project preview screenshot
        </figcaption>
      </figure>

      <div className="project-card__details">
        <h3 className="project-card__title">
          {project.title}

          <GoArrowUpRight size={20} />
        </h3>

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

        <ProjectLinks
          demoLink={project.demoLink}
          githubLink={project.githubLink}
        />
      </div>
    </>
  );
}
