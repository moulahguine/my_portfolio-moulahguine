"use client";
// React
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
// Icons
import { BsFillPlayCircleFill } from "react-icons/bs";
// Motion;
import { motion } from "framer-motion";
// Components
import { Modal, VideoViewer } from "@/components";

// Data URLs
const VIDEO_URL =
  "https://ik.imagekit.io/moulahguine/introVideo?updatedAt=1773223008996&tr=w-720,h-400,q-100";
const POSTER_DARK_URL =
  "https://ik.imagekit.io/moulahguine/ThumbnailDarkTheme?updatedAt=1773285647898&tr=w-800";
const POSTER_LIGHT_URL =
  "https://ik.imagekit.io/moulahguine/ThumbnailLightTheme?updatedAt=1773285633672&tr=w-800";

// Component
export default function IntroVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  const rootTheme =
    typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-theme")
      : null;
  const activeTheme = resolvedTheme ?? theme ?? rootTheme ?? "dark";
  const posterSrc =
    activeTheme === "light" ? POSTER_LIGHT_URL : POSTER_DARK_URL;

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
            key={posterSrc}
            src={posterSrc}
            alt="Video thumbnail"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={100}
            className="thumbnail__img"
          />
        </div>

        {/* Play button overlay */}
        <span className="video__preview__play">
          <BsFillPlayCircleFill aria-hidden="true" />
        </span>
      </motion.button>
      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showHeader={true}
        title="A Quick Introduction"
        size="xlarge"
        allowPinchZoom
      >
        {/* Video viewer */}
        <VideoViewer
          src={VIDEO_URL}
          isOpen={isOpen}
          autoplayInline={false}
          loop={false}
          volume={0.1}
        />
      </Modal>
    </>
  );
}
