import React, { useState, useEffect } from "react";
import "./Header.scss";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; 

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
    <header className="site-header">
      <div className="container">
        <div className="header__logo">
          <a className="userName" aria-label="Go to home section">
            <span className="userName__m">m</span> oulahguine
          </a>
        </div>

        <nav className="primary-nav" aria-label="Primary">
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
      </div>
    </header>
  );
}
