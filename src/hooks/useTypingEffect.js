"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook for typing effect animation
 * @param {string} text - The text to type out
 * @param {number} speed - Typing speed in milliseconds per character
 * @param {boolean} enabled - Whether the typing effect is enabled
 * @returns {string} - The currently displayed text
 */
export default function useTypingEffect(text = "", speed = 30, enabled = true) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!enabled || !text) {
      setDisplayText(text);
      return;
    }

    setDisplayText("");
    setCurrentIndex(0);
  }, [text, enabled]);

  useEffect(() => {
    if (!enabled || !text || currentIndex >= text.length) {
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, enabled]);

  return displayText;
}

