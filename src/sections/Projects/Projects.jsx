import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
  SiTypescript,
  SiPython,
  SiJava,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiVuedotjs,
  SiAngular,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import "./Projects.scss";

function Projects() {
  // Local projects data object - replace with your actual project information
  const projectsData = [
    {
      id: 1,
      title: "QuantumChat",
      subtitle: "Next-gen messaging platform",
      year: 2024,
      category: "Web Application",
      description:
        "A revolutionary quantum-encrypted chat application with AI-powered features. Built with cutting-edge technologies for maximum security and performance.",
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&crop=center",
      demoLink: "https://quantumchat-demo.com",
      githubLink: "https://github.com/moulahguine/QuantumChat",
      stars: 247,
      forks: 89,
      language: "TypeScript",
      topics: ["quantum", "ai", "security", "messaging"],
    },
    {
      id: 2,
      title: "NeuralPortfolio",
      subtitle: "AI-powered portfolio builder",
      year: 2024,
      category: "Portfolio Website",
      description:
        "An intelligent portfolio website that adapts to visitor behavior using machine learning. Features dynamic content generation and personalized experiences.",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=60&h=60&fit=crop&crop=center",
      demoLink: "https://neuralportfolio.com",
      githubLink: "https://github.com/moulahguine/NeuralPortfolio",
      stars: 156,
      forks: 34,
      language: "TypeScript",
      topics: ["ai", "ml", "portfolio", "nextjs"],
    },
    {
      id: 3,
      title: "TaskMaster Pro",
      subtitle: "Enterprise task management",
      year: 2024,
      category: "Task Management App",
      description:
        "A comprehensive enterprise-grade task management solution with advanced analytics, team collaboration, and AI-powered task prioritization.",
      technologies: [
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=60&h=60&fit=crop&crop=center",
      demoLink: "https://taskmaster-pro.com",
      githubLink: "https://github.com/moulahguine/TaskMasterPro",
      stars: 89,
      forks: 23,
      language: "JavaScript",
      topics: ["enterprise", "collaboration", "analytics", "ai"],
    },
  ];

  return (
    <section id="projects" className="projects">
      {/* Header section with title and description */}
      <motion.div
        className="projects__header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="projects__title">My Work</h2>
      </motion.div>
      <div className="container">
        {/* Map through projects to create stacked cards */}
        {projectsData.map((project, index) => (
          <div key={project.id} className="project-card">
            {/* Background Image/Video */}
            <div className="project-card__background">
              <img src={project.image} alt={project.title} />
              {/* Overlay for better text readability */}
              <div className="project-card__overlay"></div>
            </div>

            <div className="project-card__top">
              {/* Top Left Logo */}
              <div className="project-card__top-logo">
                <div className="project-card__logo">
                  <img src={project.logo} alt={`${project.title} logo`} />
                </div>

                {/* GitHub Stats */}
                <div className="project-card__stats">
                  <span className="project-card__stat">⭐ {project.stars}</span>
                </div>
              </div>
              {/* Top Right Links */}
              <div className="project-card__top-links">
                <a
                  href={project.demoLink}
                  className="project-card__link project-card__link--demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.githubLink}
                  className="project-card__link project-card__link--github"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="project-card__content">
              {/* Left Side - Title and Category */}
              <div className="project-card__left">
                <h3 className="project-card__title">{project.title}</h3>
              </div>

              {/* Right Side - Description and Technologies */}
              <div className="project-card__right">
                <p className="project-card__description">
                  {project.description}
                </p>

                {/* Technologies/Stack Icons */}
                <div className="project-card__technologies">
                  {project.technologies.map((tech, techIndex) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={techIndex}
                        className="project-card__tech-logo"
                        title={tech.name}
                      >
                        <IconComponent
                          style={{ color: tech.color }}
                          size={20}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
