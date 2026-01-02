"use client";

import { useState } from "react";
import { Modal, VideoViewer } from "@/components";
import { CiPlay1 } from "react-icons/ci";

export default function IntroVideo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Inline preview */}
      <div
        className="video__container"
        onClick={handleOpen}
        aria-label="Play introduction video"
      >
        <VideoViewer
          className="myvideo"
          src="https://res.cloudinary.com/dauiexg9k/video/upload/v1730982387/backgroundHero_ytckhd.mp4"
          // layoutId="intro-video"
          isOpen={false}
          autoplayInline={!isOpen}
          onRequestClose={handleClose}
        />
        <span className="playIcon">
          <CiPlay1 />
        </span>
      </div>

      {/* Fullscreen modal viewer */}
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        showHeader={false}
        size="xlarge"
        allowPinchZoom
      >
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
