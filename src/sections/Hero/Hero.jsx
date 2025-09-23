import "./Hero.scss";
import { useState, useMemo, useCallback } from "react";
import heroImage from "../../assets/images/hero-section/hero-img.webp";
import { HiDownload } from "react-icons/hi";
import { FaCircle, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { useHeroHeight } from "./useHeroHeight";
import Location from "../../components/Location/Location";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import ImageModal from "../../components/ImageModal/ImageModal";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const heroHeight = useHeroHeight();

  const isMobile = useMediaQuery({ maxWidth: 778 });
  const isTablet = useMediaQuery({ maxWidth: 1130 });

  const [isImageOpen, setIsImageOpen] = useState(false);

  const socialLinks = useMemo(
    () => [
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
    <motion.section
      style={{ height: `${heroHeight}px` }}
      id="hero"
      className="hero"
      aria-label="Hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="hero__content">
          {!isMobile && (
            <>
              <h1 className="hero__title">
                Hi <span className="hiEmoji">&#128075;</span>, I&apos;m{" "}
                <span>
                  Mohamed <br />
                  Oulahguine
                </span>{" "}
                <small>(o-laha-kiiin)</small>
              </h1>
              <p className="hero__subtitle">Frontend Developer</p>
            </>
          )}
          <p className="hero__description">
            Front-end developer with expertise in clean code, strong attention
            to detail, and intuitive UI. Focused on delivering efficient,
            polished, and interactive applications.
          </p>

          <div>
            <Location />
          </div>

          <div className="availability-badge">
            <FaCircle />
            Available for work
          </div>

          <div className="hero__resume">
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
              <div className="hero__social">
                {socialLinks.map(({ href, icon, label, className }) => (
                  <a
                    key={label}
                    className={`social-link ${className}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hero__media-content">
          <div className="hero__media">
            <img
              className="hero__image"
              src={heroImage}
              alt="Mohamed Oulahguine - Frontend Developer"
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {isMobile && (
            <h1 className="hero__title">
              Hi <span className="hiEmoji">&#128075;</span>, I&apos;m{" "}
              <span>
                Mohamed <br /> Oulahguine
              </span>{" "}
              <small>(o-laha-kiiin)</small>
              <h2 className="hero__subtitle">Frontend Developer</h2>
            </h1>
          )}
        </div>

        {!isTablet && (
          <div className="hero__social">
            {socialLinks.map(({ href, icon, label, className }) => (
              <a
                key={label}
                className={`social-link ${className}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        )}
      </div>

      <ImageModal
        isOpen={isImageOpen}
        onClose={handleCloseModal}
        imageSrc={heroImage}
        imageAlt="Mohamed Oulahguine - Frontend Developer"
      />
    </motion.section>
  );
}
