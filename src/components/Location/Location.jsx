import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import locationMap from "../../assets/images/hero-section/countries-flag/location-map.png";
import moroccoImage from "../../assets/images/hero-section/countries-flag/morocco.jpg";
import turkeyImage from "../../assets/images/hero-section/countries-flag/turkey.jpg";
import germanyImage from "../../assets/images/hero-section/countries-flag/germany.jpeg";
import "./Location.scss";
import ReactCountryFlag from "react-country-flag";

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

  return (
    <>
      <div className="location" onClick={openMap}>
        <MdOutlineLocationOn className="location__icon" />
        <p>
          Living in Istanbul, Türkiye <ReactCountryFlag svg countryCode="tr" />{" "}
          (originally from Morocco <ReactCountryFlag svg countryCode="ma" />)
        </p>
      </div>

      {isMapOpen &&
        mounted &&
        createPortal(
          <div className="map-overlay" onClick={closeMap}>
            <div className="map-modal" onClick={(e) => e.stopPropagation()}>
              <button className="map-close" onClick={closeMap}>
                <IoClose />
              </button>
              <div className="map-content">
                <h3>My Global Journey</h3>
                <p className="journey-description">
                  From my roots in Morocco to my current life in Turkey, and
                  soon to Germany - each step represents growth, new
                  opportunities, and expanding horizons.
                </p>
                <div className="locations">
                  <div className="location-card">
                    <div
                      className="location-item morocco"
                      style={{ backgroundImage: `url(${moroccoImage})` }}
                    >
                      <div className="location-content">
                        <div className="flag-container">
                          <ReactCountryFlag
                            svg
                            countryCode="ma"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
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
                  </div>

                  <div className="location-card">
                    <div
                      className="location-item turkey"
                      style={{ backgroundImage: `url(${turkeyImage})` }}
                    >
                      <div className="location-content">
                        <div className="flag-container">
                          <ReactCountryFlag
                            svg
                            countryCode="tr"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
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
                  </div>

                  <div className="location-card">
                    <div
                      className="location-item germany"
                      style={{ backgroundImage: `url(${germanyImage})` }}
                    >
                      <div className="location-content">
                        <div className="flag-container">
                          <ReactCountryFlag
                            svg
                            countryCode="de"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
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
                  </div>
                </div>
                <div className="map-container">
                  <img
                    src={locationMap}
                    alt="World map showing journey from Morocco to Turkey to Germany"
                  />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
