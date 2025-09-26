import { useState, useEffect, useCallback, useRef } from "react";

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

  const handleScroll = useCallback(() => {
    // Skip scroll handling when locked
    if (isScrollLocked) return;

    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    // Update scrolled state for header
    setIsScrolled(currentScrollY > 50);

    // Update active section with mobile-friendly detection
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const isMobile = window.innerWidth <= 778; // Match your breakpoint-md
    const offset = isMobile ? 100 : 370; // Smaller offset for mobile
    const scrollPosition = currentScrollY + offset;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + currentScrollY;
        const elementBottom = elementTop + rect.height;

        // More lenient detection for mobile
        const threshold = isMobile ? 50 : 100;

        if (
          scrollPosition >= elementTop - threshold &&
          scrollPosition <= elementBottom + threshold
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, [isScrollLocked]);

  useEffect(() => {
    // Create throttled handler once
    throttledHandlerRef.current = throttle(handleScroll, 16);

    // Add scroll listener with better mobile support
    window.addEventListener("scroll", throttledHandlerRef.current, {
      passive: true,
    });

    // Also listen for touch events on mobile for better responsiveness
    if (window.innerWidth <= 778) {
      window.addEventListener("touchmove", throttledHandlerRef.current, {
        passive: true,
      });
    }

    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", throttledHandlerRef.current);
      if (window.innerWidth <= 778) {
        window.removeEventListener("touchmove", throttledHandlerRef.current);
      }
    };
  }, [handleScroll]);

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
      // Use different scroll behavior for mobile
      const isMobile = window.innerWidth <= 778;
      element.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "center" : "start",
      });
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
