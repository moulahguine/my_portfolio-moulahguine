"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import HoverCursor from "../HoverCursor/HoverCursor";
import Modal from "../Modal/Modal";
import "./Location.scss";

// Lazy load the heavy map component
const InteractiveMap = lazy(() => import("./InteractiveMap"));

export default function Location() {
  const [isMapOpen, setIsMapOpen] = useState(false);

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
        role="button"
        tabIndex={0}
        ariaLabel="Click to view location journey on map"
      >
        <p>
          Istanbul, Türkiye{" "}
          <b className="location__time" aria-label="Current time in Istanbul">
            | {istanbulTimeText}
          </b>
        </p>
      </HoverCursor>

      <Modal
        isOpen={isMapOpen}
        onClose={closeMap}
        showHeader={false}
        size="xlarge"
        allowPinchZoom
      >
        <Suspense
          fallback={<div className="location__map-loading">Loading map...</div>}
        >
          <InteractiveMap />
        </Suspense>
      </Modal>
    </>
  );
}
