"use client";
// React
import { useState } from "react";
import Image from "next/image";
// Icons
import { HiPlay } from "react-icons/hi2";
// Motion;
import { motion } from "framer-motion";
// Components
import { Modal, VideoViewer } from "@/components";

// Data URLs
const VIDEO_URL =
  "https://ik.imagekit.io/moulahguine/introVideo?updatedAt=1773223008996&tr=w-720,h-400,q-100";
const POSTER_URL =
  "https://ik.imagekit.io/moulahguine/Thumbnaill?updatedAt=1771736165293&tr=w-400";

// Component
export default function IntroVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Video preview */}
      <motion.button
        type="button"
        className="video__preview"
        onClick={() => setIsOpen(true)}
        aria-label="Play introduction video"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        viewport={{ once: false, amount: 0.35, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/*  Thumbnail image */}
        <div className="thumbnail">
          <Image
            src={POSTER_URL}
            alt="Video thumbnail"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={100}
            className="thumbnail__img"
          />
        </div>

        {/* Play button overlay */}
        <span className="video-preview__play">
          <HiPlay size={28} aria-hidden="true" />
        </span>
      </motion.button>
      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showHeader={false}
        size="xlarge"
        allowPinchZoom
      >
        {/* Video viewer */}
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
