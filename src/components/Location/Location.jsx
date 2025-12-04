"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";

import { MdOutlineLocationOn } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";
import CloseButton from "../CloseButton/CloseButton";
import HoverCursor from "../HoverCursor/HoverCursor";

import "./Location.scss";
import { GrLocationPin } from "react-icons/gr";

// Lazy load the heavy map component
const InteractiveMap = lazy(() => import("./InteractiveMap"));

export default function Location(style) {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Istanbul time that updates every minute
  const [istanbulNow, setIstanbulNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setIstanbulNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const istanbulTimeText = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(istanbulNow);

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
        <p>
          Istanbul, Türkiye{" "}
          <b className="location__time" aria-label="Current time in Istanbul">
            | {istanbulTimeText}
          </b>
        </p>
      </HoverCursor>

      {mounted &&
        createPortal(
          <>
            <AnimatePresence>
              {isMapOpen && (
                <RemoveScroll
                  enabled={isMapOpen}
                  removeScrollBar={false}
                  allowPinchZoom
                >
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
                </RemoveScroll>
              )}
            </AnimatePresence>
          </>,
          document.body
        )}
    </>
  );
}
