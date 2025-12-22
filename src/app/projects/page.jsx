import { getAllProjects } from "@/lib/projects";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import "./page.scss";

export default function Projects() {
  const allProjects = getAllProjects();

  return (
    <div className="projects-page">
      <div className="container">
        <h3 className="projects-page__header">My Projects</h3>

        {/* Projects Grid (inlined from ProjectsClient) */}
        {allProjects.length === 0 ? (
          <div className="projects__empty">
            <p>Oops!! no projects available. 🙄</p>
          </div>
        ) : (
          <div className="projects__grid">
            {allProjects.map((project, index) => (
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
        )}
      </div>
    </div>
  );
}
