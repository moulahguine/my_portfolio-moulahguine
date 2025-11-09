"use client";
import { useState, useEffect } from "react";

export const useHeroHeight = () => {
  const [heroHeight, setHeroHeight] = useState(null);

  useEffect(() => {
    // Capture height once on mount
    setHeroHeight(window.innerHeight);
  }, []);

  return heroHeight;
};
