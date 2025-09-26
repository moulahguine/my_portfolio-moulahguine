import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useScrollManager } from "../../hooks/useScrollManager";
import "./Background.scss";

const Background = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const prefersReducedMotion = useMediaQuery({
    query: "(prefers-reduced-motion: reduce)",
  });

  // Use shared scroll manager
  const { scrollY, activeSection } = useScrollManager();

  // For mobile, return a simple background instead of null
  if (isMobile || prefersReducedMotion) {
    return (
      <div className="background-container background-mobile">
        <div className="background-mobile-gradient"></div>
      </div>
    );
  }

  const getBoxVariants = (boxIndex) => {
    const parallaxFactor = 0.05;
    const parallaxOffset = scrollY * parallaxFactor;

    const variants = {
      hero: {
        box1: {
          x: 80 + parallaxOffset,
          y: 120 - parallaxOffset * 0.5,
          scale: 1,
          rotate: 15,
        },
        box2: {
          x: 350 - parallaxOffset * 0.8,
          y: 250 + parallaxOffset,
          scale: 0.8,
          rotate: -25,
        },
        box3: {
          x: 200 + parallaxOffset * 0.6,
          y: 400 - parallaxOffset * 0.3,
          scale: 1.2,
          rotate: 45,
        },
        box4: {
          x: 450 - parallaxOffset,
          y: 80 + parallaxOffset * 0.7,
          scale: 0.6,
          rotate: -10,
        },
      },
      about: {
        box1: {
          x: 120 + parallaxOffset * 0.5,
          y: 180 - parallaxOffset,
          scale: 1.1,
          rotate: 30,
        },
        box2: {
          x: 190 - parallaxOffset * 0.3,
          y: 250 + parallaxOffset * 0.8,
          scale: 0.9,
          rotate: -40,
        },
        box3: {
          x: 80 + parallaxOffset * 0.7,
          y: 450 - parallaxOffset * 0.4,
          scale: 1.3,
          rotate: 60,
        },
        box4: {
          x: 400 - parallaxOffset * 0.6,
          y: 130 + parallaxOffset * 0.9,
          scale: 0.7,
          rotate: -20,
        },
      },
      skills: {
        box1: {
          x: 200 - parallaxOffset * 0.4,
          y: 80 + parallaxOffset * 0.6,
          scale: 0.8,
          rotate: -15,
        },
        box2: {
          x: 200 + parallaxOffset * 0.8,
          y: 150 - parallaxOffset * 0.2,
          scale: 1.2,
          rotate: 35,
        },
        box3: {
          x: 320 - parallaxOffset * 0.9,
          y: 380 + parallaxOffset * 0.5,
          scale: 0.9,
          rotate: -50,
        },
        box4: {
          x: 150 + parallaxOffset * 0.3,
          y: 350 - parallaxOffset * 0.7,
          scale: 1.1,
          rotate: 25,
        },
      },
      projects: {
        box1: {
          x: 60 + parallaxOffset * 0.6,
          y: 120 - parallaxOffset * 0.8,
          scale: 1.3,
          rotate: 20,
        },
        box2: {
          x: 280 - parallaxOffset * 0.5,
          y: 220 + parallaxOffset * 0.4,
          scale: 0.7,
          rotate: -35,
        },
        box3: {
          x: 0 + parallaxOffset * 0.9,
          y: 400 - parallaxOffset * 0.6,
          scale: 1.0,
          rotate: 50,
        },
        box4: {
          x: 380 - parallaxOffset * 0.7,
          y: 60 + parallaxOffset * 0.3,
          scale: 0.8,
          rotate: -25,
        },
      },
      contact: {
        box1: {
          x: 120 + parallaxOffset * 0.4,
          y: 200 - parallaxOffset * 0.5,
          scale: 0.9,
          rotate: -30,
        },
        box2: {
          x: 300 - parallaxOffset * 0.8,
          y: 100 + parallaxOffset * 0.7,
          scale: 1.1,
          rotate: 40,
        },
        box3: {
          x: 300 + parallaxOffset * 0.5,
          y: 320 - parallaxOffset * 0.9,
          scale: 0.8,
          rotate: -20,
        },
        box4: {
          x: 250 - parallaxOffset * 0.3,
          y: 400 + parallaxOffset * 0.6,
          scale: 1.2,
          rotate: 35,
        },
      },
    };

    return (
      variants[activeSection]?.[`box${boxIndex}`] ||
      variants.hero[`box${boxIndex}`]
    );
  };

  return (
    <div className="background-container">
      {[1, 2, 3, 4].map((boxIndex) => (
        <motion.div
          key={boxIndex}
          className={`background-box box-${boxIndex}`}
          animate={getBoxVariants(boxIndex)}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          whileHover={{
            scale: 1.1,
            rotate: "+=10deg",
            transition: { duration: 0.3 },
          }}
        />
      ))}
    </div>
  );
};

export default Background;
