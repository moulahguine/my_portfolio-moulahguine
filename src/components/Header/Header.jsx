import React, { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo/Logo";
import socialLinks from "../../sections/Contact/socialLinks";
import { useScrollManager } from "../../hooks/useScrollManager";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use shared scroll manager
  const { activeSection, isScrolled } = useScrollManager();

  const desktopSocialLinks = [
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

  // Handle URL updates based on active section
  const updateUrlFromScroll = useCallback(() => {
    const sections = [
      { id: "hero", path: "/" },
      { id: "about", path: "/about" },
      { id: "skills", path: "/skills" },
      { id: "projects", path: "/projects" },
      { id: "contact", path: "/contact" },
    ];

    const currentSection = sections.find(
      (section) => section.id === activeSection
    );
    if (currentSection && location.pathname !== currentSection.path) {
      navigate(currentSection.path, { replace: true });
    }
  }, [activeSection, navigate, location.pathname]);

  // Update URL when active section changes
  React.useEffect(() => {
    updateUrlFromScroll();
  }, [updateUrlFromScroll]);

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
          <Logo
            onClick={() => handleNavigation("/")}
            className="userName"
            ariaLabel="Go to home section"
            text="oulahguine"
            highlightChar="m"
          />
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

        {/* Mobile Social Links - Only show when mobile menu is open */}
        {isMenuOpen && (
          <div className="social-links social-links--mobile-open">
            <ul className="social-links__list">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <li key={index} className="social-links__item">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-links__link"
                      aria-label={social.label}
                      style={{ color: social.color }}
                    >
                      <IconComponent />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div
          className={`social-links ${isScrolled ? "social-links--visible" : ""}`}
        >
          <ul className="social-links__list">
            {desktopSocialLinks.map((social) => {
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
