import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./InteractiveText.scss";

const InteractiveText = ({ text, projectData, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    const rect = e.target.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // Calculate position with viewport boundaries
    let x = rect.left + rect.width / 2;
    let y = rect.top - 10;

    if (x < 150) x = 150;
    if (x > viewportWidth - 150) x = viewportWidth - 150;
    if (y < 100) y = rect.bottom + 10;

    setPreviewPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (projectData?.demoLink) {
      window.open(projectData.demoLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <>
      <span
        ref={textRef}
        className={`interactive-text ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`View ${projectData?.subtitle || text} project`}
      >
        {text}
      </span>

      <AnimatePresence>
        {isHovered && projectData && (
          <motion.div
            className="interactive-preview"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: previewPosition.x,
              top: previewPosition.y,
              transform: "translateX(-50%)",
              zIndex: 1000,
              pointerEvents: "none",
            }}
          >
            <div className="preview-content">
              <img
                src={projectData.media.image}
                alt={projectData.subtitle}
                className="preview-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveText;
