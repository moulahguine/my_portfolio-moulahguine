"use client";

// React
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
// Components
import { Modal, ImageViewer } from "@/components";
// Icons
import { BsArrowsFullscreen } from "react-icons/bs";

// Data URLs
export default function HeroMedia({ classFigure, classImage }) {
  const profilePictureDark =
    "https://ik.imagekit.io/moulahguine/profilePictureDarkTheme?updatedAt=1773306637302&tr=w-800,h-800";
  const profilePictureLight =
    "https://ik.imagekit.io/moulahguine/profilePictureLightTheme?updatedAt=1773306637302&tr=w-800,h-800";

  const largeProfilePicture =
    "https://ik.imagekit.io/moulahguine/lagreprofilepicture?updatedAt=1772958051315&tr=w-800,h-800";

  // state to open and close the modal
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [useDarkFallback, setUseDarkFallback] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  const rootTheme =
    typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-theme")
      : null;
  const activeTheme = resolvedTheme ?? theme ?? rootTheme ?? "dark";
  const isLight = activeTheme === "light" && !useDarkFallback;
  const profilePicture = isLight ? profilePictureLight : profilePictureDark;

  useEffect(() => {
    if (activeTheme === "light") {
      setUseDarkFallback(false);
    }
  }, [activeTheme]);

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
          key={profilePicture}
          className={classImage}
          src={profilePicture}
          alt="my profile picture"
          loading="eager"
          decoding="async"
          fill
          sizes="(max-width: 778px) 300px, 160px"
          quality={100}
          priority={true}
          onError={() => setUseDarkFallback(true)}
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
        showHeader={true}
        title="My Profile Picture"
      >
        <ImageViewer
          src={largeProfilePicture}
          sizes="(max-width: 778px) 100vw, 80vw"
          alt="after clicking on the image, a modal will open to view the full size portrait"
        />
      </Modal>
    </>
  );
}
