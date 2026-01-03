import projectsData from "@/data/projectsData";

// Get all projects
export function getAllProjects() {
  return projectsData;
}

// first two if none are featured
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
