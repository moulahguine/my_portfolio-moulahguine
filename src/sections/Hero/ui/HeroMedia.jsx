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
  // ImageKit URLs
  const profilePicture =
    "https://ik.imagekit.io/moulahguine/myPortfolio/profilePicture/profilePicture?tr=w-400,h-400";
  const largeProfilePicture =
    "https://ik.imagekit.io/moulahguine/myPortfolio/profilePicture/lagreprofilepicture?tr=w-800,h-800";

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
        aria-label="Open full-size portrait of Mohamed Oulahguine"
        title="Open full-size portrait"
      >
        <Image
          key={profilePicture}
          className={classImage}
          src={profilePicture}
          alt="Portrait of Mohamed Oulahguine, frontend developer specialized in React and Next.js"
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
        <figcaption className="sr-only">
          Portrait of Mohamed Oulahguine, frontend developer specialized in
          React and Next.js
        </figcaption>
      </figure>

      <Modal
        isOpen={isImageOpen}
        onClose={() => setIsImageOpen(false)}
        size="large"
        closeOnOverlayClick={true}
        allowPinchZoom
        showHeader={true}
        title="Profile picture"
      >
        <ImageViewer
          src={largeProfilePicture}
          alt={`Portrait of Mohamed Oulahguine, frontend developer specialized in React and Next.js in full size`}
        />
      </Modal>
    </>
  );
}
