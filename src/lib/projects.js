import projectsData from "@/data/projects";

/**
 * Get all projects
 * @returns {Array} All projects
 */
export function getAllProjects() {
  return projectsData;
}

/**
 * Get only featured projects
 * Falls back to first 2 if none are featured
 * @returns {Array} Featured projects or first 2
 */
export function getFeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured);
  return featured.length > 0 ? featured : projectsData.slice(0, 2);
}

/**
 * Get a single project by slug
 * @param {string} slug - Project slug
 * @returns {Object|null} Project object or null if not found
 */
export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug);
}

/**
 * Get static params for dynamic routes
 * @returns {Array} Array of {slug} objects for generateStaticParams
 */
export function getStaticProjectParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Get all available technology names for filtering
 * @returns {Array} Sorted unique technology names
 */
export function getAvailableTechnologies() {
  const allTechs = new Set();
  projectsData.forEach((project) => {
    project.technologies.forEach((tech) => {
      allTechs.add(tech.name);
    });
  });
  return ["All", ...Array.from(allTechs).sort()];
}

/**
 * Filter projects by technology
 * @param {string} techName - Technology name
 * @returns {Array} Projects using the technology
 */
export function getProjectsByTechnology(techName) {
  if (techName === "All") {
    return projectsData;
  }
  return projectsData.filter((project) =>
    project.technologies.some((tech) => tech.name === techName)
  );
}

/**
 * Chunk projects into groups of specified size
 * Used for pagination/slider display
 * @param {Array} projects - Array of projects to chunk
 * @param {number} size - Size of each chunk (default 6)
 * @returns {Array} Array of chunked project arrays
 */
export function chunkProjects(projects, size = 6) {
  const chunks = [];
  for (let i = 0; i < projects.length; i += size) {
    chunks.push(projects.slice(i, i + size));
  }
  return chunks;
}
