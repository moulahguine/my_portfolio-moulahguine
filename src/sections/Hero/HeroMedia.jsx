"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import heroImage from "@/assets/images/hero-section/hero-img.webp";
import Modal from "@/components/Modal/Modal";
import { ImageViewer } from "@/components/ModalContent";
import { useState } from "react";

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
          priority
        />
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
          style={{ scale: "1.2", objectPosition: "center" }}
        />
      </Modal>
    </>
  );
}
