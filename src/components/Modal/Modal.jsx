import React, { useEffect, useState, useCallback } from "react";
import CloseButton from "../CloseButton/CloseButton";
import "./Modal.scss";

function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "large",
  showHeader = true,
  showCloseButton = true,
  closeOnOverlayClick = true,
  animationDuration = 200,
  style,
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
    <dialog
      className={`modal__overlay ${
        isAnimating ? "modal__overlay--animating" : "modal__overlay--closing"
      }`}
      onClick={handleOverlayClick}
    >
      <main
        tabIndex={-1}
        className={`modal__container modal__container--${size} ${
          isAnimating
            ? "modal__container--animating"
            : "modal__container--closing"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ ...style }}
      >
        {/* Modal Header */}
        {showHeader && (title || showCloseButton) && (
          <header className="modal__header">
            {title && <h2 className="modal__header-title">{title}</h2>}
            {showCloseButton && (
              <CloseButton onClick={handleClose} ariaLabel="Close modal" />
            )}
          </header>
        )}

        {/* Modal Content */}
        <div
          className={`modal__content ${
            showHeader && (title || showCloseButton)
              ? "modal__content--with-header"
              : "modal__content--without-header"
          }`}
        >
          {children}
        </div>
      </main>
    </dialog>
  );
}

export default Modal;
