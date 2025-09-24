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

  const scrollTimeoutRef = useRef(null);
  const throttledHandlerRef = useRef(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    // Update scrolled state for header
    setIsScrolled(currentScrollY > 50);

    // Update active section
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const scrollPosition = currentScrollY + window.innerHeight;

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
  }, []);

  useEffect(() => {
    // Create throttled handler once
    throttledHandlerRef.current = throttle(handleScroll, 16);

    window.addEventListener("scroll", throttledHandlerRef.current, {
      passive: true,
    });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", throttledHandlerRef.current);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  return {
    scrollY,
    activeSection,
    isScrolled,
  };
};
