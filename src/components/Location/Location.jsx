import { useState, useEffect, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import { MdOutlineLocationOn } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";
import CloseButton from "../CloseButton/CloseButton";
import HoverCursor from "../HoverCursor/HoverCursor";
import { useScrollLock } from "../../hooks/useScrollLock";

import "./Location.scss";

// Lazy load the heavy map component
const InteractiveMap = lazy(() => import("./InteractiveMap"));

export default function Location(style) {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Use centralized scroll lock
  useScrollLock(isMapOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openMap = () => {
    setIsMapOpen(true);
  };

  const closeMap = () => {
    setIsMapOpen(false);
  };

  return (
    <>
      <HoverCursor
        content="view"
        className="location"
        onClick={openMap}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openMap();
          }
        }}
        role="button"
        tabIndex={0}
        ariaLabel="Click to view location journey on map"
        style={{ ...style }}
      >
        <MdOutlineLocationOn className="location__icon" />
        <p>
          Living in Istanbul, Türkiye{" "}
          <ReactCountryFlag
            svg
            countryCode="tr"
            title="Turkey flag"
            aria-label="Turkey flag"
          />
          (originally from Morocco{" "}
          <ReactCountryFlag
            svg
            countryCode="ma"
            title="Morocco flag"
            aria-label="Morocco flag"
          />
          )
        </p>
      </HoverCursor>

      {mounted &&
        createPortal(
          <>
            <AnimatePresence>
              {isMapOpen && (
                <motion.div
                  key="map-overlay"
                  className="map-overlay"
                  onClick={closeMap}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    key="map-modal"
                    className="map-modal"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* close icon */}
                    <CloseButton onClick={closeMap} ariaLabel="Close map" />
                    {/* header location */}
                    <div className="map-content">
                      {/* show map */}
                      <div className="map-container">
                        <Suspense
                          fallback={
                            <div className="map-loading">Loading map...</div>
                          }
                        >
                          <InteractiveMap />
                        </Suspense>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </>,
          document.body
        )}
    </>
  );
}
