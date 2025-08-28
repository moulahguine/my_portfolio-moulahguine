import React from "react";
import "./Hero.scss";
import heroImage from "../../assets/images/hero-section/hero-img.webp";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { useHeroHeight } from "../../hooks";
import Location from "../../components/Location/Location";
import { motion } from "framer-motion";
import Aurora from "../../components/DotGrid/DotGrid";
import Button from "../../components/Button/Button";

export default function Hero() {
  const heroHeight = useHeroHeight();

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

  return (
    <section
      style={{ height: `${heroHeight}px` }}
      id="hero"
      className="hero"
      aria-label="Hero"
    >
      <Aurora
        colorStops={["#ffffff", "#fff", "#fff"]}
        blend={0.8}
        amplitude={0.2}
        speed={3}
      />

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
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              &#128075;
            </motion.span>
            , I&apos;m <span>Mohamed Oulahguine</span>
          </motion.h1>
          <motion.h1
            className="hero__subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Frontend Developer
          </motion.h1>
          <motion.p
            className="hero__description"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Turning ideas into interactive, responsive web apps using React &
            modern frontend tools
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Location />
          </motion.div>
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
          </motion.div>
        </motion.div>
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
          />
        </motion.div>
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
      </motion.div>
    </section>
  );
}
