import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationItems } from "./navigationData";
import "./Navigation.scss";

export default function Navigation({
  activeSection,
  isScrolled,
  isMenuOpen,
  onNavigate,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (location.pathname === "/") {
      // On home page - scroll to section
      if (item.scrollTo) {
        const element = document.getElementById(item.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      if (onNavigate) {
        onNavigate(item.id);
      }
    } else {
      // On other pages - navigate to home page first, then scroll
      if (item.scrollTo) {
        navigate("/");
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(item.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        navigate(item.path);
      }
    }
  };

  return (
    <nav
      className={`nav ${isScrolled ? "nav--centered" : ""} ${isMenuOpen ? "nav--mobile-open" : ""}`}
      aria-label="Main navigation"
    >
      <ul className="nav__list">
        {navigationItems.map((item) => {
          let isActive = false;

          if (location.pathname === "/") {
            isActive = activeSection === item.id;
          } else {
            isActive = location.pathname === item.path;
          }

          return (
            <li key={item.id} className="nav__item">
              <button
                onClick={() => handleNavigation(item)}
                className={`nav__button ${isActive ? "nav__button--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
