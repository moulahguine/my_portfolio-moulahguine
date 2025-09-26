import { useState, useEffect, useCallback, useRef } from "react";
import { useMediaQuery } from "react-responsive";

// Throttle function to limit scroll event frequency
const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => {
          func.apply(this, args);
          lastExecTime = Date.now();
        },
        delay - (currentTime - lastExecTime)
      );
    }
  };
};

export const useScrollManager = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const throttledHandlerRef = useRef(null);

  // Detect mobile for performance optimization
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleScroll = useCallback(() => {
    // Skip scroll handling when locked
    if (isScrollLocked) return;

    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    // Update scrolled state for header
    setIsScrolled(currentScrollY > 50);

    // On mobile, skip complex section detection for better performance
    if (isMobile) return;

    // Update active section (desktop only)
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const scrollPosition = currentScrollY + 370;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + currentScrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, [isScrollLocked, isMobile]);

  useEffect(() => {
    // Create throttled handler with different delays for mobile vs desktop
    const throttleDelay = isMobile ? 32 : 16; // Less frequent updates on mobile
    throttledHandlerRef.current = throttle(handleScroll, throttleDelay);

    window.addEventListener("scroll", throttledHandlerRef.current, {
      passive: true,
    });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", throttledHandlerRef.current);
    };
  }, [handleScroll, isMobile]);

  // Add scroll lock functions
  const lockScroll = useCallback(() => {
    setIsScrollLocked(true);
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    setIsScrollLocked(false);
    document.body.style.overflow = "unset";
  }, []);

  // Navigation handler for smooth scrolling to sections
  const handleNavigate = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Update URL hash
    window.history.replaceState(null, null, `#${sectionId}`);
  }, []);

  return {
    scrollY,
    activeSection,
    isScrolled,
    isScrollLocked,
    lockScroll,
    unlockScroll,
    handleNavigate,
  };
};
