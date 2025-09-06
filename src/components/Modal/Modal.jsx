import React, { useEffect, useState, useCallback } from "react";
import "./Modal.scss";

function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "large",
  showCloseButton = true,
  closeOnOverlayClick = true,
  animationDuration = 200,
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, animationDuration);
  }, [onClose, animationDuration]);

  // Handle modal animations and body scroll locking
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimating(false);
      // Restore body scroll when modal is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal__overlay ${
        isAnimating ? "modal__overlay--animating" : "modal__overlay--closing"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        tabIndex={-1}
        className={`modal__container modal__container--${size} ${
          isAnimating
            ? "modal__container--animating"
            : "modal__container--closing"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        {(title || showCloseButton) && (
          <div className="modal__header">
            {title && <h2 className="modal__header-title">{title}</h2>}
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="modal__header-close"
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>
        )}

        {/* Modal Content */}
        <div
          className={`modal__content ${
            title || showCloseButton
              ? "modal__content--with-header"
              : "modal__content--without-header"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
