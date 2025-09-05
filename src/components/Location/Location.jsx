import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import { MdOutlineLocationOn } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import ReactCountryFlag from "react-country-flag";

import moroccoImage from "../../assets/images/hero-section/location/morocco.jpg";
import turkeyImage from "../../assets/images/hero-section/location/turkey.jpg";
import InteractiveMap from "./InteractiveMap";
import HoverCursor from "../HoverCursor/HoverCursor";

import "./Location.scss";

export default function Location() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openMap = () => {
    setIsMapOpen(true);
  };

  const closeMap = () => {
    setIsMapOpen(false);
  };

  const locations = [
    {
      id: 1,
      name: "Morocco",
      subtitle: "Origin",
      image: moroccoImage,
    },
    {
      id: 2,
      name: "Istanbul, Türkiye",
      subtitle: "Current",
      image: turkeyImage,
    },
    {
      id: 3,
      name: " soon",
      subtitle: "",
      image: "",
    },
  ];

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
      >
        <MdOutlineLocationOn className="location__icon" />
        <p>
          Living in Istanbul, Türkiye <ReactCountryFlag svg countryCode="tr" />
          (originally from Morocco <ReactCountryFlag svg countryCode="ma" />)
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
                    <button className="map-close" onClick={closeMap}>
                      <IoClose />
                    </button>
                    {/* header location */}
                    <div className="map-content">
                      <div className="locations">
                        {locations.map((loc) => (
                          <div key={loc.id} className="location-card">
                            <img
                              className={`location-item ${loc.name} `}
                              src={loc.image}
                              alt="?"
                            />
                            <div className="location-content">
                              <span>
                                {loc.name} <br />
                                <small>{loc.subtitle}</small>
                              </span>
                            </div>
                            <span className="location-line"></span>
                          </div>
                        ))}
                      </div>

                      {/* show map */}
                      <div className="map-container">
                        <InteractiveMap />
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
