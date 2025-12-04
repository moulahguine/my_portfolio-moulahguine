"use client";

import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { VideoViewer } from "@/components/ModalContent";

export default function IntroVideo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Inline preview */}
      <button
        type="button"
        className="introVideo__trigger"
        onClick={handleOpen}
        aria-label="Play introduction video"
      >
        <video
          className="myvideo_intro"
          src="https://res.cloudinary.com/dauiexg9k/video/upload/v1730982387/backgroundHero_ytckhd.mp4"
          muted
          loop
          playsInline
          preload="none"
        />
      </button>

      {/* Fullscreen modal viewer */}
      <Modal isOpen={isOpen} onClose={handleClose} size="large" allowPinchZoom>
        <VideoViewer
          src="https://res.cloudinary.com/dauiexg9k/video/upload/v1730982387/backgroundHero_ytckhd.mp4"
          layoutId="intro-video"
          isOpen={isOpen}
          onRequestClose={handleClose}
        />
      </Modal>
    </>
  );
}
