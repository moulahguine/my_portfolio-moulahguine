"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal, ImageViewer } from "@/components";
import { BsArrowsFullscreen } from "react-icons/bs";

export default function HeroMedia({ classFigure, classImage }) {
  const smallProfilePicture =
    "https://ik.imagekit.io/moulahguine/smallprofilepicture";
  const fullProfilePicture =
    "https://ik.imagekit.io/moulahguine/lagreprofilepicture";
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
          src={smallProfilePicture}
          alt="my profile picture, Mohamed Oulahguine, Frontend Developer"
          loading="eager"
          decoding="async"
          fill={true}
          quality={100}
          priority={true}
        />
        <span className="hero__media-overlay">
          <BsArrowsFullscreen size={18} />
        </span>
        <figcaption className="sr-only">
          my profile picture, Mohamed Oulahguine, Frontend Developer
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
          src={fullProfilePicture}
          alt="after clicking on the image, a modal will open to view the full size portrait"
        />
      </Modal>
    </>
  );
}
