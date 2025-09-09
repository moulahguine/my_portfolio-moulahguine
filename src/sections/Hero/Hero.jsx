import React, { useState, useEffect } from "react";
import "./Hero.scss";
import heroImage from "../../assets/images/hero-section/hero-img.webp";
import { HiDownload } from "react-icons/hi";
import { FaCircle, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { useHeroHeight } from "../../hooks";
import Location from "../../components/Location/Location";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/Button/Button";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 778 });
  const isTablet = useMediaQuery({ maxWidth: 1130 });

  const heroHeight = useHeroHeight();
  const [isImageOpen, setIsImageOpen] = useState(false);

  const socialLinks = [
    {
      href: "https://github.com/moulahguine",
      icon: <FaGithub />,
      label: "GitHub Profile",
      delay: 0.9,
      className: "github-link",
    },
    {
      href: "https://linkedin.com/in/moulahguine",
      icon: <FaLinkedin />,
      label: "LinkedIn Profile",
      delay: 1.0,
      className: "linkedin-link",
    },
    {
      href: "https://codepen.io/moulahguine",
      icon: <SiCodepen />,
      label: "CodePen Profile",
      delay: 1.1,
      className: "codepen-link",
    },
  ];

  // Modal handlers
  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  const handleCloseModal = () => {
    setIsImageOpen(false);
  };

  // Handle body scroll locking
  useEffect(() => {
    if (isImageOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isImageOpen]);

  return (
    <section
      style={{ height: `${heroHeight}px` }}
      id="hero"
      className="hero"
      aria-label="Hero"
    >
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero__content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!isMobile && (
            <>
              <motion.h1
                className="hero__title"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hi{" "}
                <motion.span
                  className="hiEmoji"
                  initial={{ rotate: -20 }}
                  animate={{ rotate: [0, -20, 0, -20, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  &#128075;
                </motion.span>
                , I&apos;m{" "}
                <span>
                  Mohamed <br />
                  Oulahguine
                </span>{" "}
                <small>(o-laha-kiiin)</small>
              </motion.h1>
              <motion.h1
                className="hero__subtitle"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Frontend Developer
              </motion.h1>
            </>
          )}
          <motion.p
            className="hero__description"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Front-end developer with expertise in clean code, strong attention
            to detail, and intuitive UI. Focused on delivering efficient,
            polished, and interactive applications.
          </motion.p>
          {/* start location */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Location />
          </motion.div>
          {/* end location */}
          {/* start available label */}
          <motion.div
            className="availability-badge"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <FaCircle />
            Available for work
          </motion.div>
          {/* end available label */}
          {/* end btn */}
          <motion.div
            className="hero__resume"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
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

            {/* hero social */}
            {isTablet && (
              <motion.div
                className="hero__social"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                {socialLinks.map(({ href, icon, label, delay, className }) => (
                  <motion.a
                    key={label}
                    className={`social-link ${className}`}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    {icon}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </motion.div>
          {/* end btn */}
        </motion.div>
        <div className="hero__media-content">
          {/* hero image */}
          <motion.div
            className="hero__media"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              className="hero__image"
              src={heroImage}
              alt="Mohamed Oulahguine - Frontend Developer"
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            />
          </motion.div>
          {/* hero title */}
          {isMobile && (
            <motion.h1
              className="hero__title"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi{" "}
              <motion.span
                className="hiEmoji"
                initial={{ rotate: -20 }}
                animate={{ rotate: [0, -20, 0, -20, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                &#128075;
              </motion.span>
              , I&apos;m{" "}
              <span>
                Mohamed <br /> Oulahguine
              </span>{" "}
              <small>(o-laha-kiiin)</small>
              <motion.h1
                className="hero__subtitle"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Frontend Developer
              </motion.h1>
            </motion.h1>
          )}
        </div>

        {/* hero social */}
        {!isTablet && (
          <motion.div
            className="hero__social"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            {socialLinks.map(({ href, icon, label, delay, className }) => (
              <motion.a
                key={label}
                className={`social-link ${className}`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Custom Image Modal */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            className="hero-image-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="hero-image-modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="hero-image-modal__close"
                onClick={handleCloseModal}
                aria-label="Close image modal"
              >
                <FaTimes />
              </button>
              <img
                src={heroImage}
                alt="Mohamed Oulahguine - Frontend Developer"
                className="hero-image-modal__image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
