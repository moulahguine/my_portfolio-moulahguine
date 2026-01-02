"use client";

import { useState } from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-section/hero-img.png";
import { Modal, ImageViewer } from "@/components";
import { BsArrowsFullscreen } from "react-icons/bs";
import * as motion from "motion/react-client";

export default function HeroMedia({ classFigure, classImage }) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const handleCloseModal = () => setIsImageOpen(false);

  return (
    <>
      <figure
        className={classFigure}
        onClick={() => setIsImageOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setIsImageOpen(true)}
        tabIndex={0}
        role="button"
        aria-label="View full size portrait"
        title="Click to enlarge"
      >
        <Image
          className={classImage}
          src={heroImage}
          alt="Portrait of Mohamed Oulahguine, Frontend Developer"
          loading="eager"
          decoding="async"
          height={400}
          priority
        />
        <span className="hero__media-overlay">
          <BsArrowsFullscreen size={18} />
        </span>
        <figcaption className="sr-only">
          Portrait of Mohamed Oulahguine
        </figcaption>
      </figure>

      <Modal
        isOpen={isImageOpen}
        onClose={handleCloseModal}
        size="large"
        closeOnOverlayClick={true}
        allowPinchZoom
        showHeader={false}
      >
        <ImageViewer
          src={heroImage}
          alt="Mohamed Oulahguine - Frontend Developer"
        />
      </Modal>
    </>
  );
}
