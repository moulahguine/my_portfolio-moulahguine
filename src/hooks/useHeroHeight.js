import { useState, useEffect } from "react";

export const useHeroHeight = () => {
  const [heroHeight, setHeroHeight] = useState(window.innerHeight);

  useEffect(() => {
    const initialHeight = window.innerHeight;
    setHeroHeight(initialHeight);
  }, []);

  return heroHeight;
};
