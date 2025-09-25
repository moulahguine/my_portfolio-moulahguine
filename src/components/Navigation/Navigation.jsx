import React from "react";
import { navigationItems } from "./navigationData";
import "./Navigation.scss";

export default function Navigation({
  activeSection,
  isScrolled,
  isMenuOpen,
  onNavigate,
}) {
  return (
    <nav
      className={`nav ${isScrolled ? "nav--centered" : ""} ${isMenuOpen ? "nav--mobile-open" : ""}`}
      aria-label="Main navigation"
    >
      <ul className="nav__list">
        {navigationItems.map((item) => (
          <li key={item.id} className="nav__item">
            <button
              onClick={() => onNavigate(item.id)}
              className={`nav__button ${activeSection === item.id ? "nav__button--active" : ""}`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
