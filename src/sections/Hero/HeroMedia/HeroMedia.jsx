"use client";

import "./HeroMedia.scss";
import * as motion from "motion/react-client";
import Image from "next/image";
import heroImage from "@/assets/images/hero-section/hero-img.webp";
import heroImage600 from "@/assets/images/hero-section/hero-img_600.webp";
import heroImage800 from "@/assets/images/hero-section/hero-img_800.webp";
import ImageModal from "@/components/ImageModal/ImageModal";

import { Suspense, useState } from "react";

export default function HeroMedia() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const handleCloseModal = () => setIsImageOpen(false);
  return (
    <>
      <motion.figure
        className="hero__media"
        initial={{ scale: 0.5, opacity: 0, filter: "blur(15px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <Image
          className="hero__image"
          src={heroImage}
          srcSet={` ${heroImage600} 600w, ${heroImage800} 800w`}
          sizes="(max-width: 778px) 100vw, (max-width: 1130px) 50vw, 500px"
          alt="Portrait of Mohamed Oulahguine, Frontend Developer"
          loading="eager"
          decoding="async"
          onClick={() => setIsImageOpen(true)}
        />
        <figcaption className="sr-only">
          Portrait of Mohamed Oulahguine
        </figcaption>
      </motion.figure>

      {isImageOpen && (
        <Suspense
          fallback={<div style={{ display: "none" }}>Loading modal...</div>}
        >
          <ImageModal
            isOpen={isImageOpen}
            onClose={handleCloseModal}
            imageSrc={heroImage}
            imageAlt="Mohamed Oulahguine - Frontend Developer"
          />
        </Suspense>
      )}
    </>
  );
}
