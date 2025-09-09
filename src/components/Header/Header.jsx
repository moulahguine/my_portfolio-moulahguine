import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";
import "./_Header-responsive.scss";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (sectionId) => activeSection === sectionId;

  return (
    <header
      className={`site-header ${isScrolled ? "site-header--scrolled" : ""}  ${isMenuOpen ? "site-header--mobile-open" : ""}`}
    >
      <div
        className={`container ${isMenuOpen ? "container--mobile-open" : ""}`}
      >
        <div
          className={`header__logo ${isMenuOpen ? "header__logo--mobile-open" : ""}`}
        >
          <button
            onClick={() => handleNavigation("/")}
            className="userName"
            aria-label="Go to home section"
          >
            <span className="userName__m">m</span> oulahguine
          </button>
        </div>

        <nav
          className={`primary-nav ${isScrolled ? "primary-nav--centered" : ""} ${isMenuOpen ? "primary-nav--mobile-open" : ""}`}
          aria-label="Primary"
        >
          <ul className="primary-nav__list">
            {navigationItems.map((item) => (
              <li key={item.id} className="primary-nav__item">
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`${isActive(item.id) ? "active" : ""} ${isMenuOpen ? "item--mobile-open" : ""} `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`social-links ${isScrolled ? "social-links--visible" : ""} ${isMenuOpen ? "social-links--mobile-open" : ""}`}
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

        {/* Mobile Menu Toggle Button */}
        <button
          className={`mobile-toggle ${isMenuOpen ? "mobile-toggle--mobile-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
