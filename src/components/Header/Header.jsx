import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { SocialLinks } from "../SocialLinks";
import { Menu } from "../Menu";
import { useScrollLock } from "../../hooks/useScrollLock";
import { useScrollManager } from "../../hooks/useScrollManager";
import "./Header.scss";

export default function Header() {
  // ****************************
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 778);
  const { isScrolled, activeSection, handleNavigate } = useScrollManager();
  // ****************************
  // ****************************

  useScrollLock(isMenuOpen && isMobile);
  // ****************************
  // ****************************

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 778;
      setIsMobile(mobile);

      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // ****************************
  // ****************************

  const handleNavigateWithMenuClose = (sectionId) => {
    handleNavigate(sectionId);
    setIsMenuOpen(false);
  };

  // ****************************
  // ****************************

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ****************************
  // ****************************

  const shouldShowSocialLinks =
    activeSection !== "hero" && activeSection !== "contact";

  // ****************************
  // ****************************

  return (
    <header
      className={`header ${isScrolled ? "header--scrolled" : ""} ${isMenuOpen ? "header--menu-open" : ""}`}
    >
      <div className="header__container">
        {/* Logo */}
        <Logo
          onClick={() => handleNavigateWithMenuClose("hero")}
          className="header__logo"
          ariaLabel="Go to home section"
          text="oulahguine"
          highlightChar="m"
        />

        {/* Desktop Navigation - Only show when menu is closed */}
        {!isMenuOpen && (
          <Navigation
            activeSection={activeSection}
            isScrolled={isScrolled}
            isMenuOpen={false}
            onNavigate={handleNavigateWithMenuClose}
          />
        )}

        {/* Desktop Social Links - Only show on About, Skills, Projects when menu is closed */}
        {!isMenuOpen && shouldShowSocialLinks && (
          <SocialLinks
            variant="desktop"
            filter={["github", "linkedin"]}
            className="header__social"
          />
        )}

        {/* Menu Toggle - Only show on mobile */}
        {isMobile && (
          <button
            className="header__toggle"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>
      {/* Menu Component - Only show on mobile when menu is open */}
      {isMobile && (
        <Menu
          activeSection={activeSection}
          onNavigate={handleNavigateWithMenuClose}
          isVisible={isMenuOpen}
        />
      )}
    </header>
  );
}
