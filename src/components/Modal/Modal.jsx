"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

import CloseButton from "../CloseButton/CloseButton";
import useScrollLock, {
  useScrollLock as useScrollLockNamed,
} from "../../hooks/useScrollLock";
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
}) {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useScrollLock(isOpen);
  useScrollLockNamed?.(isOpen);

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

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <>
      {isOpen && (
        <dialog
          className={`modal__overlay ${
            isAnimating
              ? "modal__overlay--animating"
              : "modal__overlay--closing"
          }`}
          onClick={handleOverlayClick}
        >
          <main
            layout={!!layoutId}
            layoutId={layoutId}
            tabIndex={-1}
            className={`modal__container modal__container--${size} ${
              isAnimating
                ? "modal__container--animating"
                : "modal__container--closing"
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{ ...style }}
          >
            {showHeader && (title || showCloseButton) && (
              <header className="modal__header">
                {title && <h2 className="modal__header-title">{title}</h2>}
                {showCloseButton && (
                  <CloseButton onClick={handleClose} ariaLabel="Close modal" />
                )}
              </header>
            )}

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
      )}
    </>
  );

  return createPortal(modalContent, document.body);
}
