import { motion, AnimatePresence } from "framer-motion";
import CloseButton from "../CloseButton/CloseButton";
import { useScrollLock } from "../../hooks/useScrollLock";
import "./ImageModal.scss";

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  // Use centralized scroll lock
  useScrollLock(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="hero-image-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="hero-image-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} ariaLabel="Close image modal" />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="hero-image-modal__image"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
