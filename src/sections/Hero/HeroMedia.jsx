"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import heroImage from "@/assets/images/hero-section/hero-img.webp";
import ImageModal from "@/components/ImageModal/ImageModal";

import { Suspense, useState } from "react";

export default function HeroMedia({ classFigure, classImage }) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const handleCloseModal = () => setIsImageOpen(false);
  return (
    <>
      <figure className={classFigure}>
        <Image
          className={classImage}
          src={heroImage}
          alt="Portrait of Mohamed Oulahguine, Frontend Developer"
          loading="eager"
          decoding="async"
          onClick={() => setIsImageOpen(true)}
          height={400}
        />
        <figcaption className="sr-only">
          Portrait of Mohamed Oulahguine
        </figcaption>
      </figure>

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
