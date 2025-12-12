import Link from "next/link";
import ProjectCard from "@/app/projects/Card/ProjectCard";
import "./Projects.scss";

import projectsData from "@/data/projectData";

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
              style={{ "--project-color": project.color, cursor: "pointer" }}
            >
              <ProjectCard project={project} index={index} />
            </article>
          ))}
        </div>

        <div className="projects__cta">
          <Link href="/projects" className="projects__button">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
