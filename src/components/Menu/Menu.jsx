import React from "react";
import Navigation from "../Navigation/Navigation";
import { SocialLinks } from "../SocialLinks";
import "./Menu.scss";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Menu({
  activeSection,
  onNavigate,
  isVisible = false,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onClose,
}) {
  const handleMenuClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };

  return (
    <div
      className={`menu ${isVisible ? "menu--visible" : ""}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={handleMenuClick}
    >
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
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

      {/* Swipe up indicator - Only show on mobile when menu is visible */}
      {isVisible && (
        <div className="menu__swipe-indicator">
          <span className="menu__swipe-icon">
            <FaArrowAltCircleUp />
          </span>
          <span className="menu__swipe-text">Swipe up to close</span>
        </div>
      )}
    </div>
  );
}
