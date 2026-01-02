import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components";
import { GoArrowUpRight } from "react-icons/go";
import "./Projects.scss";

function Projects() {
  const projectsToShow = getFeaturedProjects();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header-container">
          <h2 className="projects__header">Recent projects</h2>
          <Link href="/projects" className="projects__button">
            View More Projects
            <GoArrowUpRight size={20} />
          </Link>
        </div>

        <div className="projects__grid">
          {projectsToShow.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="project-card__link"
            >
              <article
                className="project-card"
                style={{ "--project-color": project.color }}
              >
                <ProjectCard project={project} index={index} />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
