import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import "./Header.scss";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      id: "github",
      icon: FaGithub,
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      id: "linkedin",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      id: "codepen",
      icon: FaCodepen,
      url: "https://codepen.io/yourusername",
      label: "CodePen",
    },
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

      // Active section detection
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (sectionId) => activeSection === sectionId;

  return (
    <header
      className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="container">
        <div className="header__logo">
          <a href="/" className="userName" aria-label="Go to home section">
            <span className="userName__m">m</span> oulahguine
          </a>
        </div>

        <nav
          className={`primary-nav ${isScrolled ? "primary-nav--centered" : ""}`}
          aria-label="Primary"
        >
          <ul className="primary-nav__list">
            {navigationItems.map((item) => (
              <li key={item.id} className="primary-nav__item">
                <a
                  href={`#${item.id}`}
                  className={isActive(item.id) ? "active" : ""}
                >
                  {item.label}
                </a>
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
