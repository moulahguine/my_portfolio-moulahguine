"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { HiPlay } from "react-icons/hi2";
import { Modal, VideoViewer } from "@/components";

const VIDEO_URL = "https://ik.imagekit.io/moulahguine/video.mp4";
const POSTER_URL = "https://ik.imagekit.io/moulahguine/Thumbnaill";

export default function IntroVideo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button
        type="button"
        className="video-preview"
        onClick={handleOpen}
        aria-label="Play introduction video"
      >
        {/*  Thumbnail image */}
        <div className="video-preview__poster">
          <Image
            src={POSTER_URL}
            alt="Video thumbnail"
            fill
            sizes="400px"
            className="video-preview__poster-img"
          />
        </div>

        {/* Play button overlay */}
        <span className="video-preview__play" aria-hidden="true">
          <HiPlay size={28} />
        </span>
      </button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        showHeader={false}
        size="large"
        allowPinchZoom
      >
        <VideoViewer
          src={VIDEO_URL}
          isOpen={isOpen}
          autoplayInline={false}
          loop={false}
        />
      </Modal>
    </>
  );
}
