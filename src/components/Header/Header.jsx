import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const socialLinks = [
    {
      id: "github",
      icon: FaGithub,
      url: "https://github.com/moulahguine",
      label: "GitHub",
    },
    {
      id: "linkedin",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/moulahguine",
      label: "LinkedIn",
    },
  ];

  const navigationItems = [
    { id: "about", label: "About", path: "/about" },
    { id: "skills", label: "Skills", path: "/skills" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const scrollPosition = window.scrollY;

      // Check if scrolled past hero section
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight - 200;
        setIsScrolled(scrollPosition > heroHeight);
      }

      // Update URL based on scroll position
      const sections = [
        { id: "hero", path: "/" },
        { id: "about", path: "/about" },
        { id: "skills", path: "/skills" },
        { id: "projects", path: "/projects" },
        { id: "contact", path: "/contact" },
      ];

      const scrollOffset = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && scrollOffset >= section.offsetTop) {
          if (location.pathname !== sections[i].path) {
            navigate(sections[i].path, { replace: true });
          }
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate, location.pathname]);

  const handleNavigation = (path) => {
    const pathToSection = {
      "/": "hero",
      "/about": "about",
      "/skills": "skills",
      "/projects": "projects",
      "/contact": "contact",
    };

    const sectionId = pathToSection[path];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    navigate(path);
  };

  const isActive = (sectionId) => activeSection === sectionId;

  return (
    <header
      className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="container">
        <div className="header__logo">
          <button
            onClick={() => handleNavigation("/")}
            className="userName"
            aria-label="Go to home section"
          >
            <span className="userName__m">m</span> oulahguine
          </button>
        </div>

        <nav
          className={`primary-nav ${isScrolled ? "primary-nav--centered" : ""}`}
          aria-label="Primary"
        >
          <ul className="primary-nav__list">
            {navigationItems.map((item) => (
              <li key={item.id} className="primary-nav__item">
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={isActive(item.id) ? "active" : ""}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`social-links ${isScrolled ? "social-links--visible" : ""}`}
        >
          <ul className="social-links__list">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <li key={social.id} className="social-links__item">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-links__link"
                    aria-label={social.label}
                  >
                    <IconComponent />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
