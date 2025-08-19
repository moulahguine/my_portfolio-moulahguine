import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import locationMap from "../../assets/images/hero-section/location/worldMap.png";
import moroccoImage from "../../assets/images/hero-section/location/morocco.jpg";
import turkeyImage from "../../assets/images/hero-section/location/turkey.jpg";
import germanyImage from "../../assets/images/hero-section/location/germany.jpeg";
import "./Location.scss";
import ReactCountryFlag from "react-country-flag";
import { motion, AnimatePresence } from "framer-motion";

export default function Location() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isMapOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMapOpen]);

  const openMap = () => {
    setIsMapOpen(true);
  };

  const closeMap = () => {
    setIsMapOpen(false);
  };

  return (
    <>
      <div className="location" onClick={openMap}>
        <MdOutlineLocationOn className="location__icon" />
        <p>
          Living in Istanbul, Türkiye <ReactCountryFlag svg countryCode="tr" />{" "}
          (originally from Morocco <ReactCountryFlag svg countryCode="ma" />)
        </p>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isMapOpen && (
              <motion.div
                key="map-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="map-overlay"
                onClick={closeMap}
              >
                <motion.div
                  key="map-modal"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  className="map-modal"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 90,
                      transition: { duration: 0.2 },
                    }}
                    className="map-close"
                    onClick={closeMap}
                  >
                    <IoClose />
                  </motion.button>
                  <div className="map-content">
                    <div className="locations">
                      <motion.div
                        className="location-card"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.3,
                        }}
                        whileHover={{
                          y: -5,
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <div
                          className="location-item morocco"
                          style={{ backgroundImage: `url(${moroccoImage})` }}
                        >
                          <div className="location-content">
                            <span>
                              Morocco <br />
                              <small>Origin</small>
                            </span>
                          </div>
                        </div>
                        <div className="status-indicator completed">
                          <FaCheckCircle />
                          <span>Completed</span>
                        </div>
                      </motion.div>

                      <motion.div
                        className="location-card"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                        whileHover={{
                          y: -5,
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <div
                          className="location-item turkey"
                          style={{ backgroundImage: `url(${turkeyImage})` }}
                        >
                          <div className="location-content">
                            <span>
                              Istanbul, Türkiye <br />
                              <small>Current</small>
                            </span>
                          </div>
                        </div>
                        <div className="status-indicator in-progress">
                          <MdPending />
                          <span>In Progress</span>
                        </div>
                      </motion.div>

                      <motion.div
                        className="location-card"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.5,
                        }}
                        whileHover={{
                          y: -5,
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <div
                          className="location-item germany"
                          style={{ backgroundImage: `url(${germanyImage})` }}
                        >
                          <div className="location-content">
                            <span>
                              Germany <br />
                              <small>Next Chapter</small>
                            </span>
                          </div>
                        </div>
                        <div className="status-indicator planned">
                          <MdPending />
                          <span>Planned</span>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      className="map-container"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6,
                      }}
                    >
                      <img
                        src={locationMap}
                        alt="World map showing journey from Morocco to Turkey to Germany"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
