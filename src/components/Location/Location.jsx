import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import locationMap from "../../assets/images/location-map.png";
import moroccoImage from "../../assets/images/morocco.jpg";
import turkeyImage from "../../assets/images/turkey.jpg";
import germanyImage from "../../assets/images/germany.jpeg";
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
                <h3>My Journey</h3>
                <div className="locations">
                  <div
                    className="location-item morocco"
                    style={{ backgroundImage: `url(${moroccoImage})` }}
                  >
                    <div className="location-content">
                      <span>
                        Morocco <br /> (Origin)
                      </span>
                    </div>
                  </div>
                  <div className="location-arrow">→</div>
                  <div
                    className="location-item turkey"
                    style={{ backgroundImage: `url(${turkeyImage})` }}
                  >
                    <div className="location-content">
                      <span>
                        Istanbul, Türkiye <br />
                        (Current)
                      </span>
                    </div>
                  </div>
                  <div className="location-arrow">→</div>
                  <div
                    className="location-item germany"
                    style={{ backgroundImage: `url(${germanyImage})` }}
                  >
                    <div className="location-content">
                      <span>
                        Germany <br /> (Soon)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="map-container">
                  <img src={locationMap} alt="location map morocco turkey" />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
