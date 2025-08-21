import React, { useEffect, useRef } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaDesktop,
  FaCloud,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiSass,
  SiFigma,
} from "react-icons/si";
import "./Projects.scss";

const Projects = () => {
  const projectsRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Web Application",
      description:
        "A modern e-commerce platform with real-time inventory management, secure payment processing, and responsive design. Features include user authentication, product catalog, shopping cart, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full-Stack",
    },
    {
      id: 2,
      title: "Task Management App",
      subtitle: "Mobile-First Web App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Includes project tracking, time management, and progress analytics.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Sass", icon: SiSass, color: "#CC6699" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Mobile", icon: FaMobile, color: "#4A90E2" },
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Web App",
    },
    {
      id: 3,
      title: "AI Chat Interface",
      subtitle: "Modern UI/UX Design",
      description:
        "An intelligent chat interface with AI-powered responses, voice recognition, and natural language processing. Features include conversation history, sentiment analysis, and customizable themes.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Cloud", icon: FaCloud, color: "#4285F4" },
        { name: "Desktop", icon: FaDesktop, color: "#00D4AA" },
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "AI/ML",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 0.2}s`;
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" ref={projectsRef}>
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">
            Featured <span className="projects__title-accent">Projects</span>
          </h2>
          <p className="projects__subtitle">
            Explore my latest work showcasing modern web development and design
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="projects__card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="projects__card-image">
                <img src={project.image} alt={project.title} />
                <div className="projects__card-overlay">
                  <div className="projects__card-actions">
                    <a
                      href={project.github}
                      className="projects__card-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="projects__card-btn projects__card-btn--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
                <div className="projects__card-category">
                  {project.category}
                </div>
              </div>

              <div className="projects__card-content">
                <div className="projects__card-header">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-subtitle">{project.subtitle}</p>
                </div>

                <p className="projects__card-description">
                  {project.description}
                </p>

                <div className="projects__card-technologies">
                  <h4 className="projects__card-tech-title">
                    Technologies Used
                  </h4>
                  <div className="projects__card-tech-grid">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="projects__card-tech-item">
                        <tech.icon style={{ color: tech.color }} />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__cta">
          <a
            href="https://github.com"
            className="projects__cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
