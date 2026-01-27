"use client";

import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();

  return (
    <>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.25, 1, 0.25, 1],
        }}
      >
        {children}
      </motion.div>

      <motion.div
        key={`${pathname}-overlay`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.76, 1, 0.24, 1],
        }}
        style={{
          position: "fixed",
          inset: 0,
          background: "#f3f3f4",
          transformOrigin: "bottom",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
