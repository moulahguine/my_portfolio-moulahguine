import "./Hero.scss";
// Framer Motion (client) for animations
import * as motion from "motion/react-client";
// Outward arrow icon used in the resume button
import { MdArrowOutward } from "react-icons/md";
// UI components: location indicator and verified badge
import Location from "@/components/Location/Location";
import VerifiedBadge from "@/components/icons/VerifiedBadge";
// SVG clip paths used for shaping containers and media
import HeroClipPaths from "./HeroClipPaths";
// Social links cluster (mobile/desktop variants handled by props/styles)
import SocialLinksHero from "./SocialLinksHero/SocialLinksHero";
// Next.js Image and responsive sources for the main hero image
import Image from "next/image";
import heroImage from "@/assets/images/hero-section/hero-img.webp";
import heroImage600 from "@/assets/images/hero-section/hero-img_600.webp";
import heroImage800 from "@/assets/images/hero-section/hero-img_800.webp";

export default function Hero() {
  const containerFade = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerParent = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // split text into words and spaces, preserving natural spacing
  function splitWords(text) {
    return text.match(/\S+|\s+/g) || [];
  }

  const descriptionText = `Interfaces shaped with clarity, balance, and strong attention to detail. Smooth interaction, reliable performance, and layouts that feel intuitive on every device. A focus on structure and refinement, where every element supports the experience.`;

  return (
    <>
      {/* HERO SECTION - START */}
      <motion.section
        className="hero"
        aria-labelledby="hero-heading"
        initial="hidden"
        animate="visible"
        variants={containerFade}
      >
        {/* HERO CONTAINER - START */}
        <main className="container">
          {/* HERO INFO (desktop) - START */}
          <motion.div
            className="hero__info"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <motion.h2
              id="hero-heading"
              className="hero__title"
              variants={itemUp}
            >
              Mohamed Oulahguine
              <VerifiedBadge
                className="verified-badge"
                width={25}
                height={25}
              />
            </motion.h2>
            <motion.p className="hero__subtitle" variants={itemUp}>
              Frontend Developer
            </motion.p>
            <div className="hero__location">
              <address className="hero__locationText">
                <motion.div variants={itemUp}>
                  <Location />
                </motion.div>
              </address>
            </div>
          </motion.div>
          {/* HERO INFO (desktop) - END */}
          {/* SOCIAL LINKS - MOBILE */}
          <SocialLinksHero className={"mobile"} />
          {/* HERO CONTENT GRID - START */}
          <div className="content">
            {/* HERO PROFILE - START */}
            <motion.div className="hero__profile" variants={staggerParent}>
              {/* HERO MEDIA - START */}
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
                />
                <figcaption className="sr-only">
                  Portrait of Mohamed Oulahguine
                </figcaption>
              </motion.figure>
              {/* HERO MEDIA - END */}

              {/* HERO INFO (mobile) - START */}
              <div className="hero__info-mobile">
                <motion.h2
                  id="hero-heading-mobile"
                  className="hero__title-mobile"
                  variants={itemUp}
                >
                  Mohamed Oulahguine
                  <VerifiedBadge
                    className="verified-badge"
                    width={25}
                    height={25}
                  />
                </motion.h2>
                <motion.p className="hero__subtitle-mobile" variants={itemUp}>
                  Frontend Developer | Nextjs & TypeScript | Tailwind CSS | Open
                  to Opportunities
                </motion.p>
                <div className="hero__location-mobile">
                  <address className="hero__locationText-mobile">
                    <motion.div variants={itemUp}>
                      <Location />
                    </motion.div>
                  </address>
                </div>
              </div>
              {/* HERO INFO (mobile) - END */}

              {/* SOCIAL LINKS - DESKTOP */}
              <SocialLinksHero className={"desktop"} />
            </motion.div>
            {/* HERO PROFILE - END */}
            {/* HERO DETAILS - START */}
            <div className="hero__details" aria-label="About">
              {/* HERO CONTENT INNER - START */}
              <div className="hero__content">
                <motion.p
                  className="hero__description"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* HERO DESCRIPTION - START */}
                  <svg
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.5 2C3.12 2 2 3.12 2 4.5V10h3V4.5H3.5A1.5 1.5 0 0 1 5 3V2h-.5ZM9.5 2C8.12 2 7 3.12 7 4.5V10h3V4.5H8.5A1.5 1.5 0 0 1 10 3V2h-.5Z" />
                  </svg>
                  {splitWords(descriptionText).map((token, index) =>
                    /\s+/.test(token) ? (
                      token
                    ) : (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, filter: "blur(4px)", y: 4 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: 1.8 + index * 0.04,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {token}
                      </motion.span>
                    )
                  )}
                  <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5 }}
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.5 2C3.12 2 2 3.12 2 4.5V10h3V4.5H3.5A1.5 1.5 0 0 1 5 3V2h-.5ZM9.5 2C8.12 2 7 3.12 7 4.5V10h3V4.5H8.5A1.5 1.5 0 0 1 10 3V2h-.5Z" />
                  </motion.svg>
                  {/* HERO DESCRIPTION - END */}
                </motion.p>

                <motion.a
                  href="/resume.pdf"
                  download
                  aria-label="Download resume as PDF"
                  className="hero__resume"
                  whileTap={{ scale: 0.98 }}
                >
                  {/* HERO RESUME BUTTON - START */}
                  <span className="label__resume">Resume</span>
                  <motion.span
                    className="download__icon"
                    initial={{ x: -100, rotate: 0 }}
                    animate={{ x: 0, rotate: 360 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <MdArrowOutward />
                  </motion.span>
                  {/* HERO RESUME BUTTON - END */}
                </motion.a>
              </div>
            </div>
          </div>
          {/* HERO DETAILS - END */}
          {/* HERO CONTENT GRID - END */}
        </main>
        {/* HERO CONTAINER - END */}
        {/* HERO CLIP PATHS (SVG defs) */}
        <HeroClipPaths />
      </motion.section>
      {/* HERO SECTION - END */}
      {isImageOpen && (
        <Suspense
          fallback={<div style={{ display: "none" }}>Loading modal...</div>}
        >
          <ImageModal
            isOpen={isImageOpen}
            onClose={handleCloseModal}
            imageSrc={aboutImage}
            imageAlt="Mohamed Oulahguine - Frontend Developer"
          />
        </Suspense>
      )}
    </>
  );
}
