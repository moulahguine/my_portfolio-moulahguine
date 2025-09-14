import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import "./HoverCursor.scss";

/**
 * HoverCursor - A reusable hover component with custom cursor animation
 *
 * @param {string} content - Text to display in the hover cursor
 * @param {React.ReactNode} children - Child elements to wrap
 * @param {string} className - CSS class name for the wrapper div
 * @param {function} onClick - Click handler function
 * @param {function} onKeyDown - Keyboard event handler
 * @param {string} role - ARIA role attribute
 * @param {number} tabIndex - Tab index for keyboard navigation
 * @param {string} ariaLabel - ARIA label for accessibility
 *
 * @example
 * <HoverCursor content="click me" className="my-button" onClick={handleClick}>
 *   <button>Hover over me</button>
 * </HoverCursor>
 */

function HoverCursor({
  content,
  children,
  className = "",
  onClick,
  onKeyDown,
  role,
  tabIndex,
  ariaLabel,
  style,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const locationRef = useRef(null);

  // Handle mouse movement for custom cursor
  const handleMouseMove = (e) => {
    if (locationRef.current) {
      const rect = locationRef.current.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={locationRef}
      className={className}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", ...style }}
    >
      {children}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="custom-cursor"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              left: cursorPosition.x - 30,
              top: cursorPosition.y - 30,
            }}
          >
            <span>{content}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HoverCursor;
