import projectsData from "@/data/projectData/projectData";
import ProjectsClient from "./ProjectsClient";
import "./page.scss";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="container">
        <header className="projects-page__header">
          <h1 className="projects-page__title">Projects</h1>
          <p className="projects-page__subtitle">
            A selection of my frontend development work.
          </p>
        </header>

        <ProjectsClient projects={projectsData} />
      </div>
    </div>
  );
}
