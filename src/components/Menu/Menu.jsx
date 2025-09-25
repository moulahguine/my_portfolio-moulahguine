import React from "react";
import Navigation from "../Navigation/Navigation";
import { SocialLinks } from "../SocialLinks";
import "./Menu.scss";

export default function Menu({ activeSection, onNavigate, isVisible = false }) {
  return (
    <div className={`menu ${isVisible ? "menu--visible" : ""}`}>
      <div className="menu__content">
        {/* Navigation Links */}
        <Navigation
          activeSection={activeSection}
          isScrolled={false}
          isMenuOpen={true}
          onNavigate={onNavigate}
        />

        {/* Social Links - All social links */}
        <SocialLinks variant="mobile" className="menu__social" />
      </div>
    </div>
  );
}
