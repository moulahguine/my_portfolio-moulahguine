"use client";

import { useState, useMemo } from "react";
import ProjectCard from "./Card/ProjectCard";
import Filters from "./Filters/Filters";
import "../../sections/Projects/Projects.scss";

export default function ProjectsClient({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.some((tech) => {
        const techName = tech.name.toLowerCase();
        const filterName = activeFilter.toLowerCase();

        // Handle special cases
        if (activeFilter === "Next.js" && techName === "nextjs") return true;
        if (activeFilter === "Framer Motion" && techName === "framer motion")
          return true;
        if (activeFilter === "TailwindCSS" && techName === "tailwindcss")
          return true;

        // Exact match
        return techName === filterName || tech.name === activeFilter;
      })
    );
  }, [projects, activeFilter]);

  return (
    <>
      <Filters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className="projects__grid projects__grid--full">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
              style={{ "--project-color": project.color }}
            >
              <ProjectCard project={project} index={index} />
            </article>
          ))
        ) : (
          <div className="projects__empty">
            <p>No projects found for this filter.</p>
          </div>
        )}
      </div>
    </>
  );
}
