"use client";

// React
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RemoveScroll } from "react-remove-scroll";
// Motion
import { AnimatePresence, motion } from "framer-motion";
// Components
import CloseButton from "../CloseButton/CloseButton";
// Styles
import "./Modal.scss";

// Constants
const MODAL_SIZES = new Set(["small", "medium", "large", "xlarge"]);

// Component
export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = "large",
  showHeader = true,
  showCloseButton = true,
  closeOnOverlayClick = true,
  style,
  removeScrollBar = true,
  allowPinchZoom = false,
}) {
  // state to mount the component
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  if (!mounted) return null;

  // Normalize the size of the modal
  const normalizedSize = MODAL_SIZES.has(size) ? size : "large";

  const modalContent = (
    // AnimatePresence is used to animate the modal when it is opened and closed
    <AnimatePresence>
      {isOpen && (
        // RemoveScroll is used to prevent the scrollbar from appearing when the modal is open
        <RemoveScroll
          enabled={isOpen}
          removeScrollBar={removeScrollBar}
          allowPinchZoom={allowPinchZoom}
        >
          {/* Overlay */}
          <motion.div
            className="modal__overlay"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Container */}
            <motion.div
              tabIndex={-1}
              className={`modal__container ${normalizedSize}`}
              onClick={(e) => e.stopPropagation()}
              style={{ ...style }}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              {showHeader && (title || showCloseButton) && (
                <header className="modal__header">
                  {title && <h2 className="modal__header-title">{title}</h2>}
                  {showCloseButton && (
                    <span className="modal__header-close">
                      <CloseButton onClick={onClose} ariaLabel="Close modal" />
                    </span>
                  )}
                </header>
              )}

              {/* Content */}
              <div
                className={`modal__content ${
                  showHeader && (title || showCloseButton)
                    ? "with-header"
                    : "without-header"
                }`}
              >
                {!showHeader && showCloseButton && (
                  <span className="modal__content-close">
                    <CloseButton onClick={onClose} ariaLabel="Close modal" />
                  </span>
                )}
                {children}
              </div>
            </motion.div>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
