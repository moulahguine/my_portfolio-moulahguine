"use client";

// React
import { useState } from "react";
import Image from "next/image";
// Components
import { Modal, ImageViewer } from "@/components";
// Icons
import { BsArrowsFullscreen } from "react-icons/bs";

// Data URLs
export default function HeroMedia({ classFigure, classImage }) {
  const smallProfilePicture =
    "https://ik.imagekit.io/moulahguine/smallprofilepicture?updatedAt=1772992448799&tr=w-800,h-800,fo-auto";
  const fullProfilePicture =
    "https://ik.imagekit.io/moulahguine/lagreprofilepicture?updatedAt=1772958051315&tr=w-800,fo-auto";

  // state to open and close the modal
  const [isImageOpen, setIsImageOpen] = useState(false);

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
          alt="my profile picture"
          loading="eager"
          decoding="async"
          fill
          sizes="(max-width: 778px) 300px, 160px"
          quality={100}
          priority={true}
        />
        <span className="hero__media-overlay">
          <BsArrowsFullscreen size={18} />
        </span>
        <figcaption className="sr-only">my profile picture image</figcaption>
      </figure>

      <Modal
        isOpen={isImageOpen}
        onClose={() => setIsImageOpen(false)}
        size="large"
        closeOnOverlayClick={true}
        allowPinchZoom
        showHeader={false}
      >
        <ImageViewer
          src={fullProfilePicture}
          sizes="(max-width: 778px) 100vw, 80vw"
          alt="after clicking on the image, a modal will open to view the full size portrait"
        />
      </Modal>
    </>
  );
}
