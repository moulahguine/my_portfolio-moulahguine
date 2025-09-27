import "./Hero.scss";
import { useState, useMemo, useCallback, Suspense, lazy } from "react";
import heroImage from "../../assets/images/hero-section/hero-img.webp";
import heroImage600 from "../../assets/images/hero-section/hero-img_600.webp";
import heroImage800 from "../../assets/images/hero-section/hero-img_800.webp";
import { HiDownload } from "react-icons/hi";
import { FaCircle, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { useHeroHeight } from "./useHeroHeight";
import Location from "../../components/Location/Location";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import { useMediaQuery } from "react-responsive";

// Lazy load ImageModal
const ImageModal = lazy(() => import("../../components/ImageModal/ImageModal"));

export default function Hero() {
  const heroHeight = useHeroHeight();

  const isTablet = useMediaQuery({ maxWidth: 1130 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [isImageOpen, setIsImageOpen] = useState(false);

  const socialLinks = useMemo(
    () => [
      {
        href: "https://github.com/moulahguine",
        icon: <FaGithub />,
        label: "GitHub Profile",

        className: "github-link",
      },
      {
        href: "https://linkedin.com/in/moulahguine",
        icon: <FaLinkedin />,
        label: "LinkedIn Profile",
        className: "linkedin-link",
      },
      {
        href: "https://codepen.io/moulahguine",
        icon: <SiCodepen />,
        label: "CodePen Profile",
        className: "codepen-link",
      },
    ],
    []
  );

  // Modal handlers
  const handleImageClick = useCallback(() => {
    setIsImageOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsImageOpen(false);
  }, []);

  return (
    <>
      <motion.section
        style={{ height: `${heroHeight}px` }}
        id="hero"
        className="hero"
        aria-label="Hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            drag={isMobile}
            dragConstraints={{
              left: -270,
              right: -180,
              top: -330,
              bottom: -50,
            }}
            dragElastic={0.2}
            whileTap={isMobile ? { scale: 0.95 } : {}}
            dragMomentum={false}
          >
            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              Hi <span className="hiEmoji">&#128075;</span>, I&apos;m{" "}
              <span>
                Mohamed <br />
                Oulahguine
              </span>{" "}
              <small>(o-laha-kiiin)</small>
            </motion.h1>
            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              Frontend Developer
            </motion.p>

            <motion.p
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
              Front-end developer with expertise in clean code, strong attention
              to detail, and intuitive UI. Focused on delivering efficient,
              polished, and interactive applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
            >
              <Location />
            </motion.div>

            <motion.div
              className="availability-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
            >
              <FaCircle />
              Available for work
            </motion.div>

            <motion.div
              className="hero__resume"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
            >
              <Button
                href="/resume.pdf"
                download
                icon={<HiDownload />}
                iconPosition="left"
                className="resume-btn"
              >
                Resume
              </Button>

              {isTablet && (
                <motion.div
                  className="hero__social"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
                >
                  {socialLinks.map(
                    ({ href, icon, label, className }, index) => (
                      <motion.a
                        key={label}
                        className={`social-link ${className}`}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 1.8 + index * 0.1,
                        }}
                      >
                        {icon}
                      </motion.a>
                    )
                  )}
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__media"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <img
              className="hero__image"
              src={heroImage}
              srcSet={` ${heroImage600} 600w, ${heroImage800} 800w`}
              sizes="(max-width: 778px) 100vw, (max-width: 1130px) 50vw, 500px"
              alt="Mohamed Oulahguine - Professional Frontend Developer Portrait"
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
              loading="eager"
              decoding="async"
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>

          {!isTablet && (
            <motion.div
              className="hero__social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
            >
              {socialLinks.map(({ href, icon, label, className }, index) => (
                <motion.a
                  key={label}
                  className={`social-link ${className}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 1.8 + index * 0.1,
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
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
