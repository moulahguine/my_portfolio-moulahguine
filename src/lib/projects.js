import projectsData from "@/data/projectsData";

// Get all projects
export function getAllProjects() {
  return projectsData;
}

// Get featured projects, or first two if none are featured
export function getFeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured);
  return featured.length > 0 ? featured : projectsData.slice(0, 2);
}

// Get a single project by slug
export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug);
}

// Get static params for dynamic routes
export function getStaticProjectParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Get all available technologies from projects
export function getAvailableTechnologies() {
  const allTechs = new Set();
  projectsData.forEach((project) => {
    project.technologies.forEach((tech) => {
      allTechs.add(tech.name);
    });
  });
  return ["All", ...Array.from(allTechs).sort()];
}

// Filter projects by technology name
export function getProjectsByTechnology(techName) {
  if (techName === "All") {
    return projectsData;
  }
  return projectsData.filter((project) =>
    project.technologies.some((tech) => tech.name === techName)
  );
}

// Chunk projects into smaller arrays for pagination or grid layouts
export function chunkProjects(projects, size = 6) {
  const chunks = [];
  for (let i = 0; i < projects.length; i += size) {
    chunks.push(projects.slice(i, i + size));
  }
  return chunks;
}
