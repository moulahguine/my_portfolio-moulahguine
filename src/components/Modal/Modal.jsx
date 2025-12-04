"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { RemoveScroll } from "react-remove-scroll";
import CloseButton from "../CloseButton/CloseButton";
import "./Modal.scss";

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = "large",
  showHeader = true,
  showCloseButton = true,
  closeOnOverlayClick = true,
  animationDuration = 200,
  style,
  layoutId,
  removeScrollBar = true,
  allowPinchZoom = false,
}) {
  // start state
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  // end state

  // start use effect
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);
  // end use effect

  // start use callback
  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose?.();
    }, animationDuration);
  }, [onClose, animationDuration]);

  const handleOverlayClick = (e) => {
    if (!closeOnOverlayClick) return;
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  // end use callback

  // start return
  if (!mounted || !isOpen) return null;

  const modalContent = (
    // start remove scroll
    <RemoveScroll
      enabled={isOpen}
      removeScrollBar={removeScrollBar}
      allowPinchZoom={allowPinchZoom}
    >
      {/* start modal overlay */}
      {isOpen && (
        <dialog className={`modal__overlay `} onClick={handleOverlayClick}>
          {/* start modal container */}
          <div
            layout={!!layoutId}
            layoutId={layoutId}
            tabIndex={-1}
            className={`modal__container ${size} ${
              isAnimating ? "animating" : "closing"
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{ ...style }}
          >
            {/* start modal header */}
            {showHeader && (title || showCloseButton) && (
              <header className="modal__header">
                {title && <h2 className="modal__header-title">{title}</h2>}
                {showCloseButton && (
                  <CloseButton onClick={handleClose} ariaLabel="Close modal" />
                )}
              </header>
            )}
            {/* end modal header */}
            {/* start modal content */}
            <div
              className={`modal__content ${
                showHeader && (title || showCloseButton)
                  ? "with-header"
                  : "without-header"
              }`}
            >
              {/* If no header, show close button inside content */}
              {!showHeader && showCloseButton && (
                <div className="modal__content-close">
                  <CloseButton onClick={handleClose} ariaLabel="Close modal" />
                </div>
              )}
              {children}
            </div>
            {/* end modal content */}
          </div>
          {/* end modal container */}
        </dialog>
      )}
      {/* end modal overlay */}
    </RemoveScroll>
    // end remove scroll
  );
  // end return
  // start create portal
  return createPortal(modalContent, document.body);
  // end create portal
}
