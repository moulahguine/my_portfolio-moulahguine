"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CloseButton from "../CloseButton/CloseButton";
import { useScrollLock } from "../../hooks/useScrollLock";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import "./ImageModal.scss";

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  // Use centralized scroll lock
  useScrollLock(isOpen);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const overlay = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="image-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="image-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative" }}
          >
            <CloseButton onClick={onClose} ariaLabel="Close image modal" />
            <div
              className="image-modal__image"
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 778px) 100vw, 80vw"
                priority={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(overlay, document.body);
};

export default ImageModal;
