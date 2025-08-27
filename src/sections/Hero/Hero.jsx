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

export default function Hero() {
  const heroHeight = useHeroHeight();

  return (
    <section
      style={{ height: `${heroHeight}px` }}
      id="hero"
      className="hero"
      aria-label="Hero"
    >
      <Aurora
        colorStops={["#ffffff", "#fff", "#fff"]}
        blend={0.7}
        amplitude={0.5}
        speed={1.0}
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
            Hi👋, I&apos;m <span>Mohamed Oulahguine</span>
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
            <a className="btn" href="/resume.pdf" download>
              <HiDownload className="download__resume" />
              resume
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero__media"
          aria-hidden="true"
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
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://codepen.io/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodePen Profile"
          >
            <SiCodepen />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
