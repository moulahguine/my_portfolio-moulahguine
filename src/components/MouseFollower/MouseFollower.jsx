"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import "./MouseFollower.scss";

const MouseFollower = ({
  size = 28,
  color = "rgba(0,0,0,0.6)",
  speed = 0.18,
  zIndex = 9999,
  enabled = true,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  // Animation loop
  const animate = useCallback(() => {
    const { x: targetX, y: targetY } = mousePos.current;
    const { x: currentX, y: currentY } = currentPos.current;

    const newX = currentX + (targetX - currentX) * speed;
    const newY = currentY + (targetY - currentY) * speed;

    currentPos.current = { x: newX, y: newY };
    setPosition({ x: newX, y: newY });

    animationRef.current = requestAnimationFrame(animate);
  }, [speed]);

  // Mouse move handler
  const handleMouseMove = useCallback(
    (e) => {
      mousePos.current = {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
      };
      if (!isVisible) setIsVisible(true);
    },
    [size, isVisible]
  );

  // Setup
  useEffect(() => {
    if (!enabled || isMobile) return;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", () => setIsVisible(false));
      document.removeEventListener("mouseenter", () => setIsVisible(true));
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [enabled, isMobile, animate, handleMouseMove]);

  // Disable on mobile for performance
  if (isMobile || !enabled) return null;

  return (
    <div
      className="mouse-follower"
      style={{
        "--size": `${size}px`,
        "--color": color,
        "--z-index": zIndex,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default MouseFollower;
