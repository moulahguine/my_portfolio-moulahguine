"use client";
import "./VideoModal.scss";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import useScrollLock from "@/hooks/useScrollLock";
import CloseButton from "@/components/CloseButton/CloseButton";

export default function VideoModal({ children, layoutId = "video-modal" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  const videoRef = useRef(null);

  useScrollLock(isOpen);

  // ✅ Handle autoplay inline + restart + controls on modal
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (isOpen) {
      // FULLSCREEN MODE
      v.muted = false;
      v.controls = true;
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      // INLINE MODE
      v.pause();
      v.currentTime = 0;
      v.muted = true;
      v.controls = false;
      v.play().catch(() => {});
    }
  }, [isOpen]);

  return (
    <div className="videoModal">
      <motion.div
        layout
        layoutId={layoutId}
        className={`videoModal__frame ${isOpen ? "is-open" : ""} ${isOpen && isLarge ? "is-large" : ""}`}
        onClick={() => {
          if (!isOpen) {
            setIsLarge(false);
            setIsOpen(true);
          }
        }}
      >
        {!isOpen && <div className="videoModal__darkOverlay" />}

        {!isOpen && (
          <button
            type="button"
            className="videoModal__play"
            aria-label="Play video"
            onClick={(e) => {
              e.stopPropagation();
              setIsLarge(true);
              setIsOpen(true);
            }}
          >
            <span className="videoModal__playIcon" />
          </button>
        )}

        {children(videoRef)}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="videoModal__overlay"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="videoModal__closeWrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CloseButton
              className="videoModal__close"
              onClick={() => setIsOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

VideoModal.propTypes = {
  children: PropTypes.func.isRequired,
  layoutId: PropTypes.string,
};
