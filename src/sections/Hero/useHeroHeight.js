// import { useState, useEffect, useCallback } from "react";

// export const useHeroHeight = () => {
//   const [heroHeight, setHeroHeight] = useState(() => window.innerHeight);

//   const handleResize = useCallback(() => {
//     setHeroHeight(window.innerHeight);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [handleResize]);

//   return heroHeight;
// };

import { useState, useEffect } from "react";

export const useHeroHeight = () => {
  const [heroHeight, setHeroHeight] = useState(null);

  useEffect(() => {
    // Capture height once on mount
    setHeroHeight(window.innerHeight);
  }, []);

  return heroHeight;
};
